// Node modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal NPMs
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer to generate questions
const questions = 
    [

        // Github Username
        {
            type: 'input',
            message: 'Enter your Github username:',
            name: 'git',
            // Validate property to check that the user provided a value
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return console.log("You must enter your Github username to continue.");
                }
            }
        },

        // Email Address
        {
            type: 'input',
            message: 'Enter your E-mail address:',
            name: 'git',
            // Validate property to check that the user provided a value
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return console.log("You must enter your E-mail address to continue.");
                }
            }
        },

        // Github Repository
        {
            type: 'input',
            message: 'Enter the name of your Github repository:',
            name: 'git',
            // Validate property to check that the user provided a value
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return console.log("You must enter the name of your Github repository to continue.");
                }
            }
        },

        // Project Title
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
            // Validate property to check that the user provided a value
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return console.log("You must enter the title of your project to continue.");
                }
            }
        },

        // Project Description
        {
            type: 'input',
            message: 'Enter the description of your Github project:',
            name: 'git',
            // Validate property to check that the user provided a value
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return console.log("You must enter the description of your Github project to continue.");
                }
            }
        },

        // App Installation
        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'installation',
            // Validate property to check that the user provided a value
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return console.log("You must enter the installation procedure to continue.");
                }
            }
        },

        // Instructions
        {
            type: 'input',
            message: 'What instructions must the user follow?',
            name: 'instructions',
            // Validate property to check that the user provided a value
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return console.log("You must enter your instructions to continue.");
                }
            }
        },

        // Credits
        {
            type: 'input',
            message: 'Any credits?',
            name: 'credits',
            // Validate property to check that the user provided a value
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return console.log("You must enter your desired credits to continue.");
                }
            }
        },

        // Description of App Use
        {
            type: 'input',
            message: 'How do you use your app?',
            name: 'usage',
            // Validate property to check that the user provided a value
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return console.log("You must enter some description of your app usage to continue.");
                }
            }
        },

        // List of Licenses
        {
            type: 'input',
            message: 'Select a license:',
            name: 'license',
            choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD License", "N/A"],
            // Validate property to check that the user provided a value
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return console.log("You must select a license to continue.");
                }
            }
        },

        // Optional Questions:


        // Third Party Contribution to Project
        {
            type: 'input',
            message: 'Explain how users can contribute to your project (if necessary).',
            name: 'contribution',
            // Validation not required if question is optional
        },

        // Test for Project
        {
            type: 'input',
            message: 'Provide tests for project, and explain how to test (if necessary).',
            name: 'tests',
            // Validation not required if question is optional
        }
    ]

// Declare function to write content to README file

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your markdown file has been created.')
    });
}

const writeFileAsync = util.promisify(writeToFile);

// Declare function to initialize program
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Your responses have been logged. Calling to GitHub...");

        // Referencing API.js
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);

        // Pass inquirer data and api data to markdown
        console.log("Generating your markdown")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        // Write markdown
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Call function to initialize program
init();