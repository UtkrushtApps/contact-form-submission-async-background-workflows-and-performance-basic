# Task Overview
Utkrusht’s website features a contact form for visitors to send inquiries. The current form has type errors and poor async handling—if the email sending fails or is slow, users see errors or the UI hangs. Submissions use direct async operations on the client, and there is no explicit TypeScript typing for form state, handlers, or data passed between client and server. Engineering has asked you to resolve these issues by introducing proper prop and state interfaces, refactoring data submission to go through a typed Next.js API route, managing async states and errors, and decoupling email sending so users get instant feedback without waiting for background work to finish.

## Guidance
- Review the form component (`components/ContactForm.tsx`) and the unfinished API route (`pages/api/contact.ts`).
- Form state and submission logic must use TypeScript interfaces for props and payloads.
- Use async/await for asynchronous work and ensure non-blocking user feedback via states like loading or success.
- API routes run server-side code in Next.js for email and analytics tasks—avoid running them in client code.

## Objectives
- Define TypeScript interfaces/types for form state, submitted data, and API response.
- Refactor the form to submit data asynchronously to a Next.js API route using fetch and manage async states.
- Update the API route to receive the submitted data, simulate sending email/analytics as a background task, and return a clear JSON response.
- Ensure the UI never blocks for slow email; show users instant success or error messages.
- Handle and type errors gracefully client- and server-side.

## How to Verify
- The form submits successfully without blocking or runtime errors; UI shows immediate feedback (success or error states/notifications).
- Submission details are typed in both the component and API route; TypeScript should show no type errors.
- During slow email processing (simulated delay), users still get instant response after submission.
- All async logic uses async/await with clear error handling in both component and API handler.
- The app builds and runs in both dev and production modes (`npm run dev` and `npm run build` + `npm start`).
