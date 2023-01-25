// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
                } else {
                console.log('Please enter your project title!');
                return false;
                }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.',
        validate: descriptionInput => { 
            if (descriptionInput) {
                return true;
                } else { 
                    console.log('Please enter a description of your project!');
                    return false;
                }
        }
    },
    {
        type: 'input',
        name: 'installation',     
        message: 'What are the steps required to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
                } else {
            console.log('Please enter usage information!');
                return false;
                }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', `BSD`],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                    console.log('Please choose a license!');
                    return false;
                    }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can you contribute to your project?',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your project?',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
            console.log('Please enter test instructions!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
                }
            }
    }        
];

// TODO: Create a function to write README file
const writeToFile = filecontent => {
    fs.writeFile(`./generatedREADME.md`, filecontent, (err) => 

        err ? console.log(err) : console.log('Successfully created README file!')

        );
};
      

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        console.log(answers);
        writeToFile(generateMarkdown(answers));
    });
}

// Function call to initialize app
init();

// module.exports = writeToFile;
// module.exports = init;
// module.exports = generateMarkdown;
module.exports = questions;