const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//An array of questions using inquirer package
const questions = [
  {
    type: "input",
    name: "project_title",
    message: "Please enter your project title: ",
  },
  {
    type: "input",
    name: "project_description",
    message: "Please enter project description: ",
  },
  {
    type: "input",
    name: "project_install",
    message:
      "Please enter installation command to run to install dependencies: ",
    default: "npm i",
  },
  {
    type: "input",
    name: "project_usage",
    message: "Please enter usage information: ",
  },
  {
    type: "input",
    name: "project_contribution",
    message: "Please enter contribution guidelines: ",
  },
  {
    type: "input",
    name: "project_test",
    message: "Please enter test instructions: ",
  },
  {
    type: "list",
    name: "project_license",
    message: "Please select license: ",
    choices: ["MIT", "Apache", "BSD", "No license"],
  },
  {
    type: "input",
    name: "owner_username",
    message: "Please enter your GitHub username: ",
  },
  {
    type: "input",
    name: "owner_email",
    message: "Please enter your email: ",
  },
];

//function to create and write into README
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README was successfully generated!")
  );
}

//function to initialize the app
function init() {
  console.log("Initializing...");

  inquirer.prompt(questions).then((answers) => {
    writeToFile("./generatedREADME/README.md", generateMarkdown(answers));
  });
}

//function call to initialize app
init();
