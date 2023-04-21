# PrompterSocial: Collaborative AI-Powered Prompt Platform

PrompterSocial is a web app designed to allow users to submit, engage with, and improve AI-generated content based on user prompts. Users can earn Bitcoin Lightning micropayments as rewards for popular prompts and active participation. Here's a summary of the project's functionality and corresponding screens and components in the file structure.

## Functionality Overview

1. **User Authentication**: Users can sign in and sign up for the platform.

   - Sign In: `src/pages/signin/index.tsx`
   - Sign Up: `src/pages/signup/index.tsx`

2. **Prompt Browsing**: Users can browse the collection of prompts submitted by others.

   - Browse Prompts: `src/pages/prompts/index.tsx`
   - Prompt Card: `src/components/PromptCard/PromptCard.tsx`

3. **Prompt Creation**: Users can submit new prompts to the platform.

   - Create Prompt: `src/pages/prompts/new.tsx`
   - Prompt Form: `src/components/PromptForm/PromptForm.tsx`

4. **Prompt Interaction**: Users can view individual prompts, interact with the AI-generated content (responses), upvote or downvote prompts, and leave comments on prompts.

   - View Prompt: `src/pages/prompts/[id]/index.tsx`
   - Response List: `src/components/ResponseList/ResponseList.tsx`
   - Response Item: `src/components/ResponseList/ResponseItem.tsx`
   - Comment List: `src/components/CommentList/CommentList.tsx`
   - Comment Item: `src/components/CommentList/CommentItem.tsx`

5. **User Dashboard**: Users can access their dashboard to view their progress, prompt popularity, and earnings.

   - User Dashboard: `src/pages/dashboard/index.tsx`

6. **Leaderboard**: Users can view a leaderboard ranking users and prompts based on engagement.

   - Leaderboard API: `src/pages/api/user/leaderboard.ts`

7. **Bitcoin Lightning Integration (Stubbed)**: Users can earn Bitcoin Lightning micropayments as rewards for popular prompts and active participation. Note that this functionality may be stubbed out during initial development, and only the frontend screens might be built.

With these screens and components, PrompterSocial should provide users with an engaging experience that allows them to interact with AI-generated content and participate in a collaborative environment with the potential for earning micropayments as rewards. If any screens, components or functionality are missing, they can be added, iterated, or refined throughout the development process.

## Proposed Application Structure

Here's the extended file/folder hierarchy diagram including the necessary components and screens for the PrompterSocial app:

```
- prisma/
  - schema.prisma
- public/
- src/
  - components/
    - CommentList/
      - CommentItem.tsx
      - CommentList.tsx
    - PromptCard/
      - PromptCard.tsx
    - PromptForm/
      - PromptForm.tsx
    - ResponseList/
      - ResponseItem.tsx
      - ResponseList.tsx
  - pages/
    - api/
      - auth/
        - [...nextauth].ts
      - trpc/
        - [trpc].ts
      - prompts/
        - [id]/
          - comments.ts
          - index.ts
          - upvote.ts
      - user/
        - leaderboard.ts
      - index.ts
    - prompts/
      - [id]/
        - index.tsx
      - index.tsx
      - new.tsx
    - dashboard/
      - index.tsx
    - signin/
      - index.tsx
    - signup/
      - index.tsx
    - `_app.tsx`
    - index.tsx
  - server/
    - api/
      - routers/
        - comments.ts
        - prompts.ts
        - users.ts
      - root.ts
      - trpc.ts
    - auth.ts
    - db.ts
  - styles/
    - globals.css
  - utils/
    - api.ts
  - env.mjs
- package.json
- tailwind.config.ts
- tsconfig.json
```

I've added several components and pages in this file structure to support our app's functionality:

- `components`: This folder contains reusable components for various parts of the app, such as comments, prompts, and responses.

- `pages/prompts`: This folder has the pages for browsing, creating, and viewing individual prompts.

- `pages/dashboard`: This folder contains the user dashboard for visualizing progress, prompt popularity, and earnings.

- `pages/signin` and `pages/signup`: These folders have the sign in and sign up pages for user authentication.

- `server/api/routers`: The routers directory contains backend API routes for handling prompts, comments, and user-specific requests like leaderboard data.

The extended file structure should provide a clear organization for each of the components, pages, and server-side functionality needed to build the PrompterSocial app during the hackathon.
