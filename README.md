# React Typescript Project Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using typescript template.

## How To Use

Simply use this repo as a template for your own repo. After that clone the repo to your local and run `yarn install` to install all the dependencies here.

## What's Inside

* react 17
* react-dom 17
* typescript
* axios
* react-helmet
* styled-component
* eslint (airbnb rules with some modified configurations)
* storybook
* react-router-dom v6

## Available Scripts

- **`yarn start` - starts the project. Use [http://localhost:3000](http://localhost:3000) to view it in the browser.**
- **`yarn build` - builds the project. It will bundle react in production and all will be stored under `build` folder.**
- **`yarn test` - launches the test runner.**
- **`yarn eject` - only run this if you aren't satisfied with the build tools and config choices.**
- **`yarn storybook` - starts the storybook / component explorer in the browser.**
- **`yarn build-storybook`- publishes the storybook as a static web application.**

## Folder Structure

To keep the project clean, we need to standarize the common project folders, so this template will have as below for starters

```
 .vscode/
├─ settings.json
.storybook/
├─ preview.js
├─ main.js
public/
src/
├─ components/
│  ├─ component/
│  │  ├─ index.ts
│  │  ├─ types.ts
│  │  ├─ styled.tsx
│  │  ├─ component.tsx
│  │  ├─ component.stories.tsx
├─ pages/
│  ├─ index.ts
│  ├─ landing.tsx
│  ├─ notfound.tsx
├─ test/
│  ├─ App.test.tsx
├─ utils/
globalStyles.ts
App.tsx
index.tsx
react-app-env.d.ts
reportWebVitals.ts
setupTests.ts 
```

Please note that ideally we need to develop component, so in each components will be developed on its own sub-directory. For example 

```
components/
├─ componentA/
│  ├─ index.ts
│  ├─ types.ts
│  ├─ styled.tsx
│  ├─ componentA.tsx
│  ├─ componentA.stories.tsx
├─ componentB/
│  ├─ index.ts
│  ├─ types.ts
│  ├─ styled.tsx
│  ├─ componentB.tsx
│  ├─ componentB.stories.tsx
```

You can take a look in the template, I already created one common component as an example.

## Useful Resources

* [React documentation](https://reactjs.org/)
* [Airbnb lint](https://github.com/airbnb/javascript)
* [React typescript cheatsheets](https://github.com/typescript-cheatsheets/react)
* [Storybook documentation](https://storybook.js.org/docs/react/get-started/introduction)
* [React router](https://reactrouter.com/docs/en/v6)

[^1]: This project template will always be updated
