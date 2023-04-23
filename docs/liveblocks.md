# Liveblocks

Collaborative experiences in days, not months

## Intro

Liveblocks provides developers with a complete toolkit to embed performant collaboration features to your product remarkably fast.

### Building blocks for collaboration

Add collaborative experiences you know and love like text editors, forms, creative tools, and whiteboards with Liveblocks APIs and tools.

### Integrates deeply with your tech stack

Liveblocks integrates deeply with popular frontend frameworks and libraries, making it easy to embed real‑time collaborative experience into any product.

### Fully hosted, performant, and reliable

No more monitoring WebSocket servers, worrying about scale and maintenance of legacy systems. Liveblocks is fully hosted so you can focus on your core product.

### Add collaborative experiences quickly and flexibly

Liveblocks provides you with powerful open‑source examples that can be used modularly. No upfront costs, unnecessary technical debt, or distracting your developers from focusing on the core product.

### Developer-centric tooling

Liveblocks accelerates developer productivity with developer tools, and analytics to understand how your users are using your product’s collaborative features.

### Example

```
import create from "zustand";
import { createClient } from "@liveblocks/client";
import { middleware } from "@liveblocks/zustand";

const client = createClient({ /* ... */ });

const useStore = create(
  // A middleware to make your store real-time
  middleware(
    (set) => ({
      selectedShape: null,
      shapes: [{
        x: -60,
        y: 0,
        bg: "var(--gradient-color-left)",
      }, {
        x: 60,
        y: 0,
        bg: "var(--gradient-color-right)",
      }],
    }),
    {
      client,
      // Shapes are synced across clients
      storageMapping: { shapes: true },
      // Selected shape is shared to other clients
      presenceMapping: { selectedShape: true }
    }
  )
);
```

## Concepts

### Room

A room is the space people can join to collaborate together.

### Presence

Presence represents people’s movements and actions inside the room. People in the room are able to see what others are doing in real-time.

### Storage

Storage represents the items people can interact with in the room. In the physical world, storage could be represented as documents and notes on a whiteboard.

### Storage persistence

Storage data automatically persists when people leave the room. The data can also be cleared and stored on your database using the API endpoints.
