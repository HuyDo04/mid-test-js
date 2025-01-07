
function highlightKeyword(content, keyword) {
    if(!content || !keyword || typeof content !== "string" || typeof keyword !== "string" || keyword.length > content.length) {
        return "Invalid";
    }

    let result = "";

    let lowerContent = content.toLowerCase();
    let lowerKeyword = keyword.toLowerCase();

    for(let i = 0; i< content.length; i++) {

        if(lowerContent.indexOf(lowerKeyword,i) === i) {
            result +=  `<strong>${content.slice(i, i + keyword.length)}</strong>`;
            i += keyword.length - 1;
        } else {
            result += content[i];
        }
    }

    return result;
}

console.log(highlightKeyword("Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?", "thú vỊ"))

