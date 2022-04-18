let shift = false;
let capsLock = false;

let text = [];

const keys = document.getElementsByClassName("key");

const keyPressed = (a) => {
  console.log(a);
};

const setKeyCss = (id, css) => {
  keys.namedItem(id).sty;
};

window.onclick = (a) => {
  if (a.target.id == "key_shift") {
    shift = !shift;
  } else if (a.target.id == "key_capsLock") {
    capsLock = !capsLock;
  } else if (a.target.id == "key_backSpace" && text.length > 0) {
    text.pop();
  } else if (a.target.id == "key_space") {
    text.push(" ");
  } else if (a.target.id == "key_underScore") {
    text.push("_");
  } else if (a.target.id == "key_subtraction") {
    text.push("-");
  } else if (a.target.id == "key_OK") {
    alert(text.join(""));
  } else if (a.target.id.includes("key") && a.target.id.length === 5) {
    text.push(a.target.innerHTML);
    shift ? (shift = false) : {};
  }

  redrawKeyboard();
};

const redrawKeyboard = () => {
  document.getElementById("text_area").innerHTML = text.join("");
  capsLock
    ? (keys.namedItem("key_capsLock").style.opacity = 0.3)
    : (keys.namedItem("key_capsLock").style.opacity = 2);
  shift
    ? (keys.namedItem("key_shift").style.opacity = 0.3)
    : (keys.namedItem("key_shift").style.opacity = 2);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].id.length === 5 && !Number.isInteger(keys[i].id[4]))
      keys[i].innerHTML =
        shift || capsLock ? keys[i].id[4].toUpperCase() : keys[i].id[4];
  }
};