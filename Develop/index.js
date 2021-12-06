// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('You need to enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your Github username? (Required)',
        validate: ghInput => {
            if (ghInput) {
                return true
            } else {
                console.log('You need to enter a github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('You need to enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project (Required)',
        validate: installInput => {
            if (installInput) {
                return true
            } else {
                console.log('You need to explain how to install your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Required)',
        validate: installInput => {
            if (installInput) {
                return true
            } else {
                console.log('You need to explain how to install your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true
            } else {
                console.log('You need to explain how to use your project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContrib',
        message: 'Can other developers contribute to your project? (Required)',
        default: true
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How should others contribute? (Required)',
        when: ({ confirmContrib }) => {
            if (confirmContrib) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributorInput=> {
            if(contributorInput) {
                return true;
            } else {
                console.log('You need to explain how others should contribute!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How should your project be tested? (Required)',
        validate: testInput => {
            if (testInput) {
                return true
            } else {
                console.log('You need to explain how to test your project!');
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/generated-README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "Created!"
            });
        });
    });
}

// TODO: Create a function to initialize app
const init = function() {
    return inquirer.prompt(questions)
    .then(readMeData => {
        return readMeData
    })
}

// Function call to initialize app
init()
.then(readMeData => {
    return generateMarkdown(readMeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})
