# Notes from course

## Installation

- sudo npm install -g typescript ts-node
  - Used to install typescript compiler and node environment.

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
