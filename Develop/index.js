const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

//  array of questions for user input
const questions = [{
    message: "What is the name of your project?",
    type: "input",
    name: "title",
},
{
    message: "How do you install you project?",
    type: "input",
    name: "installation",
},
{
    message:"Table of contents",
    type: "input",
    name: "contents",
},
{
    message: "What liscence are you using?",
    type: "list",
    choices: ["MIT", "Apache", "GNU", "None",],
    name: "liscence"
},
{
    message: "Where there contributors to this project?",
    type: "input",
    name: "contributors",
},
{
    message: "What is the puropse and funcionality of this project?",
    type: "input",
    name: "description",
},
{
    message: "Please input the languages and/or technologies used with this project.",
    type: "input",
    name: "usage",
},
{
    message:"Tests?",
    type: "input",
    name: "tests",
},
{
    message:"Questions?",
    type: "input",
    name: "questions",
}];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(userResponse => {console.log(generateMarkdown(userResponse));}) 
}

// Function call to initialize app
init();
