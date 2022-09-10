# Basic Credit Card Processing

## Overview
I chose to use ExpressJS's popular API design because it will be easy to understand by fellow developers.

## Choice of Language
I chose JavaScript because it is a language that is closest to me and I have been using it for a few months now. With respect this program I did not see any reason to use another language.

## How to Run
I used [node](https://nodejs.org/) version 18.x to run the program. Download and install it

Clone the repository to your local directory and cd into it.

To install the dependencies, run the following command in the terminal:

```bash
npm install
```

To run the program, run the following command in the terminal:

```bash
# This reads input from STDIN
# In this case you have to type-in the inputs by hitting the enter key after each input
npm run stdin
```
OR run the following command in the terminal:

```bash
# This reads input from the input_file
# check ./text.txt for an example of input
npm run index.js <input_file or relative path to a file>
# example: npm run stdin ./text.txt
# example: npm run stdin ../sample-file.txt
```

The above commands can also be run like this in the terminal:

```bash
node index.js <input_file>
# OR
node index.js <relative path to a file>

# OR if you want to read from STDIN
node index.js

```

## How to run the Automated Test 
I used [mocha](https://mochajs.org/) to test the program.
I used [chai](https://www.chaijs.com/) to test the program.

To test the program, run the following command in the terminal:

```bash
npm run test
# You might need to use Ctrl+C to stop the program if it is still running after the test has been executed
```
