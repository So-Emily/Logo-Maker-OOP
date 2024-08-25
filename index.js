const inquirer = require('inquirer');
const fs = require('fs');

function generateSVG(color, shape, text) {
    let svgCode;

    if (shape === 'triangle') {
        svgCode = `<svg width="200" height="200">
            <polygon points="100,10 190,190 10,190" fill="${color}" />
            <text x="100" y="105" font-size="20" text-anchor="middle" fill="white">${text}</text>
        </svg>`;
    } else if (shape === 'rectangle') {
        svgCode = `<svg width="200" height="200">
            <rect width="200" height="100" fill="${color}" />
            <text x="100" y="55" font-size="20" text-anchor="middle" fill="white">${text}</text>
        </svg>`;
    } else if (shape === 'circle') {
        svgCode = `<svg width="200" height="200">
            <circle cx="100" cy="100" r="80" fill="${color}" />
            <text x="100" y="105" font-size="20" text-anchor="middle" fill="white">${text}</text>
        </svg>`;
    }

    return svgCode;
}

inquirer.prompt([
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color for the logo:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Enter a shape for the logo:',
        choices: ['rectangle', 'circle', 'triangle']
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo:'
    }
]).then(answers => {
    const { color, shape, text } = answers;
    const svgCode = generateSVG(color, shape, text);

    if (svgCode) {
        fs.writeFileSync('logo.svg', svgCode);
        console.log('Logo saved as logo.svg');
    } else {
        console.error('Failed to generate SVG code.');
    }
});

module.exports = { generateSVG };