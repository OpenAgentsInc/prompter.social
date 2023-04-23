import { create } from 'zustand'
import { createClient } from '@liveblocks/client'
import { liveblocks } from '@liveblocks/zustand'

import type { WithLiveblocks } from "@liveblocks/zustand";

type State = {
  // Your Zustand state type will be defined here
};

const client = createClient({
  publicApiKey:
    "pk_dev_xUe96dIH8CRXkqFjYjnaRHIJoOwRWBpKSQx7_OlrhPEo7r1LWzn8B0wESMMwOCpF",
});

const useStore = create<WithLiveblocks<State>>()(
  liveblocks(
    (set) => ({
      // Your state and actions will go here
    }),
    { client }
  )
);

export default useStore;
