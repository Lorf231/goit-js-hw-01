function getElementWidth(content, padding, border) {
    return content + padding * 2 + border * 2;
}

console.log(getElementWidth(Number.parseInt("50px"), Number.parseInt("8px"), Number.parseInt("4px"))); // 74
console.log(getElementWidth(Number.parseInt("60px"), Number.parseInt("12px"), Number.parseFloat("8.5px"))); // 101
console.log(getElementWidth(Number.parseInt("200px"), Number.parseInt("0px"), Number.parseInt("0px"))); // 200
