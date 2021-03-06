
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}`;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table-of-contents
  [Description](#desciption)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributors]()
  [Tests](#tests)

  ## [Description](#table-of-contents)
  ${data.description}

  ## [Installation](#table-of-contents)
  ${data.installation}
  
  ##[Usage](#table-of-contents)
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ##[Contributors](#table-of-contents)
  ${data.contributors}

  ##[Tests](#table-of-contents)
  ${data.tests}

  ##[Questions](#table-of-contents)
  If you have any questions, please contact me via the following:

  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
