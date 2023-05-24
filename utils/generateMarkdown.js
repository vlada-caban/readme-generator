// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/License-${license}-green`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
//actual link to the license?
//table of content link
if (license !== "No license") {
return "- [License](#license)";
} else {
  return "";
}

// return (license !== "No license") ? "- [License](#license)" : "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //return renderLicenseBadge(license) + renderLicenseLink(license);
  return "hello";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title} 
  ## Description 
  ${data.project_description}
  
  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${renderLicenseLink(data.project_license)}

## Installation
${data.project_install}

## Usage
${data.project_usage}

## Contributing
${data.project_contribution}

## License
${renderLicenseSection(data.project_license)}

## Tests
${data.project_test}
`;
}

module.exports = generateMarkdown;
