// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/generated-README.md", filecontent, err => {
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
    return writeToFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})
