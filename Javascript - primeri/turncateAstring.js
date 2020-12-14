
function truncateString(str, num) {
    if(num >= str.length) return str;
    if(num <= 3) return str.slice(0, num) + "...";
    return str.slice(0, mum - 3) + "...";
}

console.log(truncateString("A-tisket a-tisket A green and yellow basket", 11));
