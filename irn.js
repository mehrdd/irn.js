/**
 * تبدیل ریال به تومان
 * @param input ریال
 * @returns تومان
 */
function irr2irt(input) {
    input = parseInt(input);
    return parseInt(input / 10);
}

/**
 * تبدیل تومان به ریال
 * @param input تومان
 * @returns ریال
 */
function irt2irr(input) {
    input = parseInt(input);
    return input * 10;
}

/**
 * تبدیل تومان به تومان جدید
 * @param input تومان
 * @returns تومان جدید
 */
function irt2irn(input) {
    input = parseInt(input) / 1000;
    return (Math.round(input * 100) / 100).toFixed(2);
}

/**
 * تبدیل ریال به تومان جدید
 * @param input ریال
 * @returns تومان جدید
 */
function irr2irn(input) {
    return irt2irn(irr2irt(input));
}

/**
 * تبدیل تومان جدید به تومان
 * @param input تومان جدید
 * @returns تومان
 */
function irn2irt(input) {
    input = parseFloat(input) * 1000;
    return input;
}

/**
 * تبدیل تومان جدید به ریال
 * @param input تومان جدید
 * @returns ریال
 */
function irn2irr(input) {
    return irt2irr(irn2irt(input));
}
