const { generateSVG } = require('./index');

test('generateSVG creates correct SVG for triangle', () => {
    const color = 'red';
    const shape = 'triangle';
    const text = 'Logo';
    const svg = generateSVG(color, shape, text);
    expect(svg).toContain('<polygon points="100,10 190,190 10,190" fill="red" />');
    expect(svg).toContain('<text x="100" y="105" font-size="20" text-anchor="middle" fill="white">Logo</text>');
});