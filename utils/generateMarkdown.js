// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "";
  } else if (license === "Apache") {
    return "";
  } 
}

// If there is no license, return an empty string
function renderLicenseLink(license) {}

// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Table of Contents

* [Installation](#installation)


## Installation
To install the program run

${data.installation}

`;
}

module.exports = generateMarkdown;
