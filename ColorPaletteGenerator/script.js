document.addEventListener('DOMContentLoaded', generateColorPalette);

document.addEventListener('keydown', handleKeydown);

function handleKeydown(e) {
    if (e.code === "Space") {
        generateColorPalette();
    }
}

function generateColorPalette() {
    const colors = document.querySelectorAll('.color');

    colors.forEach(color => {
        const { backgroundColor, textContent } = randomColor();
        color.style.backgroundColor = backgroundColor;
        color.querySelector('.color-code').textContent = textContent.toUpperCase();
    });
}

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return {
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        textContent: rgbToHex(red, green, blue)
    };
}

function componentToHex(colorComponent) {
    const hex = colorComponent.toString(16);

    return hex.length === 1 ? `0${hex}` : hex;
}

function rgbToHex(red, green, blue) {
    return `${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;
}
