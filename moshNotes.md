# React Tutorial for Beginners
#### Programming with Mosh

https://youtu.be/SqcY0GlETPk

Time 38:39
https://youtu.be/SqcY0GlETPk?t=2319

## Terminal Commands
To instal React using Vite
`npm create vite@latest`

Proceed and select the project name, this will be the Folder Name for the project.

Select Framework: `React`

Select a variant: `JavaScript` or `TypeScript`

### Inside the New Project Folder
Naviagte into your project folder `cd "project-name"`

Then install all the packages `npm install`

Then run your Web Server `npm run dev`


## Function Based Components

- These are more popular
- Older React projects use a `JavaScript Class` per component
- `PascalCasing` is a Good Convention for React
- Website that converst JSX code to JS
    - `babeljs.io.repl`

## How React Works
React uses a Virtual DOM.

Whenever a change happens in a `Parent` or `Child` element.  It then compares the old Nodes with the HTML elements to the new Nodes and updates as necessary

### Ecosystem of React

`Library` is a tool that provides a specific functionality.
- a Tool

`Framework` is a set of tools and guidelines for building apps
- a Tool set

Once you master React feel free to add additional Libraries and Frameworks

We end up using `Bootstrap` for this project
- npm i bootstrap
- then import the library to the `main.tsx` file

### Building out Components
- Only 1 element per return in react.
- You can wrap multiple elements in a `<div>`
- you can also import `{Fragment}`,
Fragments don't use DOM elements like the div does, so there will be no wasted space.

You can represent `{Fragment}` in 2 ways:
- `<Fragment></Fragment>`
- `<></>`


## Shortcuts
- `ctrl + D` = highlights all words for a quick replace.
- You may need to use the arrow keys to capture all of the words.

## Files Created
- ListGroup.tsx
## Files Modified
- main.tsx
- App.tsx