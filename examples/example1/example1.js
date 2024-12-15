const myDiv = document.createElement("div");
myDiv.classList.add("my-div");
myDiv.textContent = "Hello, World!";

window.domErrorObserver.observe(document.body, window.domErrorObserverConfig);
document.body.appendChild(myDiv);

const doFloat = new window.MakeElementFloating(myDiv, 9999, true);
doFloat.goMoveIt(doFloat);
