const myDiv = document.createElement("div");
myDiv.classList.add("my-div");
myDiv.textContent = "Hello, World!";

window.domObserver.observe(document.body, window.domObserverConfig);
document.body.appendChild(myDiv);

const doFloat = new window.MakeElementFloating(myDiv, 9999, true);
doFloat.goMoveIt(doFloat);
