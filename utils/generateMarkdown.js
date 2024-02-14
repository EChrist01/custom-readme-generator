// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "";
  } else if (license === "Apache") {
    return "";
  } 
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "";
}

// function to create markdown formatted string to write to md file
function generateMarkdown(data) {
  console.log("we got to generateMarkdown");
  const license = renderLicenseLink(data.license);
  const badge = renderLicenseBadge(data.license);

  // this return contains all text and formatting for the README
  return `# ${data.title}
  ${badge}
  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#installation)  
  [Usage](#usage)  
  [How to Contribute](#how-to-contribute)  
  [Tests](#tests)  
  [Credits](#credits)  
  [License](#license)  
  [Questions](#questions)  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## How to Contribute
  ${data.contributors}
  ## Tests
  ${data.tests}
  ## Credits
  ${data.credits}
  ## License
  ${license}
  ## Questions
  GitHub: [${data.gitHubURL}](https://github.com/${data.gitHubURL})  
  Email: ${data.email}
`;
}


module.exports = generateMarkdown;
