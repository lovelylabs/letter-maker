const fs = require("fs");

const templateString =
    "This is a string...\nI want it it to make some kind of markdown thing...\n## Title\n\nThis is the title of the page.\n1. SMile\n2. Be helpful";

var MarkdownIt = require("markdown-it"),
    md = new MarkdownIt();
var result = md.render(templateString);

fs.writeFile("helloworld.txt", result, function (err) {
    if (err) return console.log(err);
    console.log("Hello World > helloworld.txt");
});

console.log(result);
