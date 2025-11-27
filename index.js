document.getElementById("toggle2048").addEventListener("change", function() {
    const frame = document.getElementById("twentyFortyEight");
    frame.style.display = this.checked ? "block" : "none";
});

document.getElementById("toggleSudoku").addEventListener("change", function() {
    const frame = document.getElementById("sudoku");
    frame.style.display = this.checked ? "block" : "none";
});


function shakeEightBall() {
    let result = Math.floor(Math.random() * 20) + 1;
    let answer = "";

    if(result == 1) {
        answer = "It is certain.";
    } else if(result == 2) {
        answer = "It is decidedly so.";
    } else if(result == 3) {
        answer = "Without a doubt.";
    } else if(result == 4) {
        answer = "Yes, definitely.";
    } else if(result == 5) {
        answer = "As I see it, yes.";
    } else if(result == 6) {
        answer = "Most Likely.";
    } else if(result == 7) {
        answer = "Outlook good.";
    } else if(result == 8) {
        answer = "Yes.";
    } else if(result == 9) {
        answer = "Signs point to yes.";
    } else if(result == 10) {
        answer = "You may rely on it.";
    } else if(result == 11) {
        answer = "Don't count on it.";
    } else if(result == 12) {
        answer = "My reply is no.";
    } else if(result == 13) {
        answer = "My sources say no.";
    } else if(result == 14) {
        answer = "Outlook not so good.";
    } else if(result == 15) {
        answer = "Very doubtful.";
    } else if(result == 16) {
        answer = "Reply hazy, try again.";
    } else if(result == 17) {
        answer = "Better not to tell you now.";
    } else if(result == 18) {
        answer = "Cannot predict now.";
    } else if(result == 19) {
        answer = "Ask again later.";
    } else {
        answer = "Concentrate and ask again."
    }

    document.getElementById("textarea_field").innerText = answer;
}