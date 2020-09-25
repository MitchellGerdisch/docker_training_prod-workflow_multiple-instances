# Notes from course

## Useful references

https://node.js.org

## Type Definition Files

Don't forget that you need to bring over type definition files for different javascript modules.
So after adding, say, "import 'fs' from 'fs', you need to run "npm install @types/node" in the console to create/update the types definition file.

## Installation

- npm install -g typescript ts-node
  - Used to install typescript compiler and node environment.
- npm install nodemon concurrently

## Visual Studio Code Setup

- Add "code" to the path to be able to launch visual studio from command line.
  - View -> Command Palette -> Enter: Install code
    - installs code into path to allow launching visual studio from comand line.
- Add Prettier extension to clean up code
  - View -> Extensions -> Search for prettier and select Prettier Code Formatter
- Configure Prettier to run on save
  - Code -> Preferences -> Settings ->
    - Search for "Format on Save" and check the box
    - Search for "single quote" and check the Prettier:SingleQuote box to use single quotes.

## Running Code

Basic steps:

- tsc index.ts
  - This generates an index.js
- node index.js
  - This runs the code

However, since we installed ts-node ... we can just run

- ts-node index.ts
