// TODO: Include packages needed for this application
const inquirer = require("inquirer"); 
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
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
    message: "Please enter installation instructions: ",
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
    choices: ["MIT License", "Apache License", "BSD License", "No license"],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(
    fileName,
    data,
    (err) => (err ? console.error(err) : console.log("README was successfully generated!"))
  );
}

// TODO: Create a function to initialize app
function init() {
  console.log("Initializing...");

  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));
    console.log(answers);
    console.log(generateMarkdown(answers));

    writeToFile("./generatedREADME/README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
