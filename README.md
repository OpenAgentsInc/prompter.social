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
