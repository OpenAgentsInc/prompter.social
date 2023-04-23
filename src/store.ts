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
};

const client = createClient({
  publicApiKey:
    "pk_dev_xUe96dIH8CRXkqFjYjnaRHIJoOwRWBpKSQx7_OlrhPEo7r1LWzn8B0wESMMwOCpF",
});

const useStore = create<WithLiveblocks<State>>()(
  liveblocks(
    (set) => ({
      shapes: {},
    }),
    {
      client,
      storageMapping: { shapes: true },
    }
  )
);

export default useStore;
