const myDiv = document.createElement("div");
myDiv.classList.add("my-div");
myDiv.textContent = "Hello, World!";

window.domObserver.observe(document.body, window.domObserverConfig);
document.body.appendChild(myDiv);

const doFloat = new window.MakeElementFloating(myDiv, 9999, true);
doFloat.goMoveIt(doFloat);

let my_awesome_script = document.createElement("script");

my_awesome_script.setAttribute("src", "./main.js");
my_awesome_script.setAttribute("type", "module");

document.head.appendChild(my_awesome_script);

import { testImport } from "../../content/main.js";

testImport();
