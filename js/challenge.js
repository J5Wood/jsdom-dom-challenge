let timeoutID = window.setInterval(addNumber, 1000)
const timer = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const list = document.getElementsByClassName("likes")[0];
const pause = document.getElementById("pause");
const button = document.getElementById("submit");

function addNumber() {
    timer.innerText = parseInt(timer.innerText, 10) + 1;
};

plus.addEventListener("click", function() {
    addNumber();
});

minus.addEventListener("click", function() {
    timer.innerText = parseInt(timer.innerText, 10) - 1;
});

heart.addEventListener("click", function() {  
    if ( !list.children) {
        const child = document.createElement("LI");
        child.innerText = `${timer.innerText} has been liked 1 times!`;
        list.appendChild(child);
    } else {
        for (let i = 0; i < list.children.length; i++) {
            if  (list.children[i].innerText.split(" ")[0] === timer.innerText) {
                list.children[i].innerText = `${timer.innerText} has been liked ${parseInt(list.children[i].innerText.split(" ")[list.children[i].innerText.split(" ").length - 2], 10) + 1} times!`
                return
            }
        }
        const child = document.createElement("LI");
        child.innerText = `${timer.innerText} has been liked 1 times!`;
        list.appendChild(child);
    }
});

pause.addEventListener("click", function() {
    if (pause.innerText === "pause") {
        window.clearTimeout(timeoutID);
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        button.disabled = true;
        pause.innerText = "resume";
    } else {
        pause.innerText = "pause"
        
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        button.disabled = false;
        timeoutID = window.setInterval(addNumber, 1000);
    }
})

document.getElementById("comment-form").addEventListener("submit", function(event) {
    const p = document.createElement("p")
    p.innerText = event.currentTarget[0].value
    document.getElementById("list").appendChild(p);

    event.currentTarget[0].value = ""
    event.preventDefault();
})