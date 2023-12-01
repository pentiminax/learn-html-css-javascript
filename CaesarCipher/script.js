function encrypt() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);

    document.getElementById('result').innerText = caesarCipher(text, shift);
}

function decrypt() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);

    document.getElementById('result').innerText = caesarCipher(text, -shift);
}


/**
 * @param {String} str 
 * @param {Number} shift 
 * @returns 
 */
function caesarCipher(str, shift) {
    return str
        .split('')
        .map(char => shiftChar(char, shift))
        .join('');
}

/**
 * @param {String} char 
 * @param {Number} shift 
 * @returns 
 */
function shiftChar(char, shift) {
    if (!char.match(/[a-z]/i)) {
        return char;
    }

    const code = char.charCodeAt(0);

    let shifted = code + shift;

    if (char.match(/[a-z]/)) {
        shifted = (shifted - 97) % 26 + 97;
    } else {
        shifted = (shifted - 65) % 26 + 65;
    }

    return String.fromCharCode(shifted);
}