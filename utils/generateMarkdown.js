// GitHub formatting syntax for markdowns:
// https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax

// function to generate markdown for README
function generateMarkdown(answers) {
  return `
<h1 style="align: center;">${answers.title} 👋</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
🔍 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
👪 ${answers.contributing}

## Tests
✏️ ${answers.tests}

## Questions
✋ ${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />

_This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
  `;
}

// Export markdown module
module.exports = generateMarkdown;