// variables - var, let, const
// var - function scope
// let - block scope
// const - block scope

// setting up variables
const readline = require('readline');
// fs module allows us to work with the file system
const fs = require('fs');

// Create a readline interface
// This will allow us to prompt the user for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for color, shape, and text
// The user's responses will be passed to the callback function
rl.question('Enter a color for the logo: ', (color) => {
    rl.question('Enter a shape for the logo: ', (shape) => {
        rl.question('Enter text for the logo: ', (text) => {
            // Generate the SVG code
            const svgCode = `<svg width="200" height="200">
                <rect width="200" height="200" fill="${color}" />
                <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="24">${text}</text>
            </svg>`;

            // Save the SVG code to a file
            fs.writeFile('logo.svg', svgCode, (err) => {
                if (err) {
                    console.error('Error saving SVG file:', err);
                } else {
                    console.log('Logo saved as logo.svg');
                }

                rl.close();
            });
        });
    });
});