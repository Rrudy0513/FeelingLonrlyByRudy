

const input = document.querySelector("input");
//form//
const form = document.querySelector("form");
form.addEventListener("submit", formSubmit);
function formSubmit(stopPage) {
    stopPage.preventDefault();
    const oneSelf = ["Me", "Myself", "I"][Math.floor(Math.random() * 3)];
    MesssageResponse(oneSelf, input.value);
    form.reset();
}
//date//
const time = new Date().toLocaleTimeString();
//message text//
const chatbox = document.querySelector("#chatbox");
let newMessage = false;
function MesssageResponse(sender, theText) {
    const text =
        `<div class='message' id='${newMessage}'>
        <span> ${time} </span>
        <span class="sender">${sender}:</span>
        <span>${theText}</span>
        <h3 class="delete" onclick='deleteThis(${newMessage})'>❌</h3>
        </div>`;
    chatbox.innerHTML += text;
    chatbox.scrollTop = chatbox.scrollHeight;
}
//delete message//
function deleteThis(newMessage) {
    const text = document.getElementById(newMessage);
    text.remove();
}
//button stuff//
const button = document.querySelector("button");
button.addEventListener("click", gettingJokes);
function gettingJokes() {
    fetch("https://api.icndb.com/jokes/random?limitTo=[nerdy]")
        .then((resp) => resp.json())
        .then((json) => MesssageResponse("Did you know?", json.value.joke));
}