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
  isDragging: boolean;
  insertRectangle: () => void;
  onShapePointerDown: (shapeId: string | null) => void;
  deleteShape: () => void;
  onCanvasPointerUp: () => void;
  onCanvasPointerMove: (e: React.PointerEvent) => void;
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
      isDragging: false,
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
        set({ selectedShape: shapeId, isDragging: true });
      },
      deleteShape: () => {
        const { shapes, selectedShape } = get();
        if (!selectedShape) {
          console.log("No shape selected");
          /* Nothing todo */
          return;
        }

        const { [selectedShape]: shapeToDelete, ...newShapes } = shapes;
        set({
          shapes: newShapes,
          selectedShape: null,
        });
      },
      onCanvasPointerUp: () => {
        set({ isDragging: false });
      },
      onCanvasPointerMove: (e) => {
        e.preventDefault();

        const { isDragging, shapes, selectedShape } = get();
        if (!selectedShape) {
          /* Nothing todo */
          return;
        }

        const shape = shapes[selectedShape];

        if (shape && isDragging) {
          set({
            shapes: {
              ...shapes,
              [selectedShape]: {
                ...shape,
                x: e.clientX - 50,
                y: e.clientY - 200,
              },
            },
          });
        }
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
