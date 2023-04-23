import { create } from 'zustand'
import { createClient } from '@liveblocks/client'
import { liveblocks } from '@liveblocks/zustand'

import type { WithLiveblocks } from "@liveblocks/zustand";

export type Shape = {
  x: number;
  y: number;
  fill: string;
};

type State = {
  shapes: Record<string, Shape>;
  selectedShape: string | null;
  insertRectangle: () => void;
  onShapePointerDown: (shapeId: string | null) => void;
};

const client = createClient({
  publicApiKey:
    "pk_dev_xUe96dIH8CRXkqFjYjnaRHIJoOwRWBpKSQx7_OlrhPEo7r1LWzn8B0wESMMwOCpF",
});

const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  return COLORS[getRandomInt(COLORS.length)];
}

const useStore = create<WithLiveblocks<State>>()(
  liveblocks(
    (set, get) => ({
      shapes: {},
      selectedShape: null,
      insertRectangle: () => {
        const { shapes } = get();

        const shapeId = Date.now().toString();
        const shape = {
          x: getRandomInt(300),
          y: getRandomInt(300),
          fill: getRandomColor(),
        };

        set({
          shapes: { ...shapes, [shapeId]: shape },
          selectedShape: shapeId,
        });
      },
      onShapePointerDown: (shapeId) => {
        set({ selectedShape: shapeId });
      },
    }),
    {
      client,
      storageMapping: { shapes: true },
      presenceMapping: { selectedShape: true },
    }
  )
);

export default useStore;
