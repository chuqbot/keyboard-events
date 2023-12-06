let alphabet = "abcdefghijklmnopqrstuvwxyz;"
let secretLetter = alphabet[Math.floor(Math.random() * 27)];

document.addEventListener("keydown", function(event) {
    if (event.key === secretLetter) {
        let tag = document.createElement("h3");
        let text = document.createTextNode("SECRET KEY PRESSED " + secretLetter);
        tag.appendChild(text);
        document.body.appendChild(tag);
        secretLetter = alphabet[Math.floor(Math.random() * 27)]
    }
})