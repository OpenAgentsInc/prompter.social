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
