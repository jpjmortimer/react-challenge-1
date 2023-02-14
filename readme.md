# React code challenge

The app consists in a single page Todo app. A todo item includes:

- an `id`, you can use the `createId()` function from utils.
- a title
- an (optional) list of tags.

The user is able to perform the following actions:

- Add a todo
- Mark a todo as completed (and vice-versa)
- View a list of the todos
- View a list of the completed todos

**Note:** A guideline implementation is running on https://inw-react-challenge-1.vercel.app, you can use it as a baseline.

## Tech stack

- React
- TypeScript
- CSS
- Pico.css (https://picocss.com/), used to apply some base styling, no need to deep dive into it.

## Installation

- `nvm use`, if you're using NVM. This project was created with Node 18.
- `npm i`
- `npm run dev`
- `npm run test-watch` and `npm run test`
- `npm run ts-check`

## Assumptions

- The CSS file doesn't need be changed, instead the HTML can be inferred from the selectors in that file.
- A React shell is already setup, alongside any needed components. This is only a guideline to bring you up to speed, you can change as much as you like (TypeScript props included).
- Ideally your implementation should have all tests passing and showing no TypeScript errors.
- The solution should have feature parity (as much as possible) with the model application.

## Doing the challenge

1. Clone this template to your personal github account, making it public.
2. Raise a PR with the implemented solution (refer to the Tasks in the next section).
   - State which tasks were implemented.
   - Show the output of `npm run test` and `npm run ts-check`.
3. Send the PR link to the recruiter.

## Tasks

You can search for `implement me` in the codebase to find where code is missing.

- [ ] Implement the add Todo form.

Tags are optional and should be processed by `convertStringToTags` from `utils.ts`. There is an equivalent test for this function that will help you figure out the implementation.

Some UI/UX notes:

- A Todo can't be added without a title.
- Tags are optional.

- [ ] Implement the missing test in `utils.spec.ts`
- [ ] Render a list of Todos
- [ ] Render a list of completed Todos
- [ ] Clicking on each Todo's checkbox will toggle its completed state.

Good luck and do your best! :)
