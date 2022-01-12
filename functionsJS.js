var charsMajusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsMin = "abcdefghijklmnopqrstuvwxyz";
var charsNum = "0123456789";
var specialChars = '!"#$%+,-/&*()';


function GeneratePassword() {
    document.getElementById("inputPassword").value = "";
    let sumaCadenes = "";

    if (document.getElementById("majus").checked) { sumaCadenes += charsMajusc; }
    if (document.getElementById("min").checked) { sumaCadenes += charsMin; }
    if (document.getElementById("specialChars").checked) { sumaCadenes += specialChars; }
    if (document.getElementById("num").checked) { sumaCadenes += charsNum; }
    introduccioInputLength(sumaCadenes);
}

function introduccioInputLength(sumaCadenes) {
    let currentInputLength = document.getElementById("inputNumPass").value;
    let password = "";
    let defaultPasswordLength = 16;

    if (currentInputLength == 0) {
        for (let i = 0; i < defaultPasswordLength; i++) {
            let randPassword = Math.floor(Math.random() * sumaCadenes.length);
            password += sumaCadenes.substring(randPassword, randPassword + 1);
        }
        checkCharactersPassword(password, sumaCadenes);
    } else {
        for (let i = 0; i < currentInputLength; i++) {
            let randPassword = Math.floor(Math.random() * sumaCadenes.length);
            password += sumaCadenes.substring(randPassword, randPassword + 1);
        }
        checkCharactersPassword(password, sumaCadenes);
    }
}

function checkCharactersPassword(password, sumaCadenes) {
    let numMajus = false;
    let numMin = false;
    let numSChar = false;
    let numNum = false;
    let checkMajus = document.getElementById("majus").checked;
    let checkMin = document.getElementById("min").checked;
    let checkSChar = document.getElementById("specialChars").checked;
    let checkNum = document.getElementById("num").checked;

    for (let i = 0; i < password.length; i++) {
        if (checkMajus)
            if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)
                numMajus = true;
        if (checkMin)
            if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
                numMin = true;
        if (checkSChar)
            if (password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 47)
                numSChar = true;
        if (checkNum)
            if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
                numNum = true;
    }
    if (checkMajus && numMajus == false || checkMin && numMin == false || checkSChar && numSChar == false || checkNum && numNum == false) {
        console.log("False");
        setInterval(introduccioInputLength(sumaCadenes), 120);
    } else {
        document.getElementById("inputPassword").value = password;
    }

}

function maxInputNum() {
    let currentInputLength = document.getElementById("inputNumPass").value;
    let maxValueInputLength = 99;
    let minValuenIputLength = 4;

    if (currentInputLength > maxValueInputLength) {
        document.getElementById("inputNumPass").value = maxValueInputLength;
    }
    if (currentInputLength < minValuenIputLength) {
        document.getElementById("inputNumPass").value = minValuenIputLength;
    }
}

function CopyPassword() {
    var copyText = document.getElementById("inputPassword");
    copyText.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(copyText.value);
}
