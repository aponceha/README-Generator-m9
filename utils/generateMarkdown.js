const fs = require('fs');
const inquirer = require('inquirer');
const index = require(`../index.js`)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return '[![License: GPL v3](https://img.shields.io/badge-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD-blue.svg)](https://opensource.org/licenses/BSD-3-Clausehttps://opensource.org/licenses/BSD-2-Clause)';
    default:
      return '';
    }
}
      
  
    

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return 'MIT License';
    case 'Apache':
      return 'Apache License 2.0';
    case 'GPL':
      return 'GNU General Public License v3.0';
    case 'BSD':
      return 'BSD License';
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.description}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}


  ## Table of Contents
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributing](#contributing)
  ### * [Tests](#tests)
  ### * [Questions](#questions)
  

  ## Installation
  ### You Must install the following dependencies:
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors:
  ${data.contributors}


  ## Tests
  ${data.tests}

  ## Questions:
  ### If you have any questions about the repo, open an issue or contact 
  ### me directly at
  ### Github: ${data.github}
  ### Email: ${data.email}



`;
}

module.exports = generateMarkdown;
