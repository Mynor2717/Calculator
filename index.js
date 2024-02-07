const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1)  // con esta linea se puede eliminar el indice de cada caracter siendo este iniciando en 0
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Null";
      setTimeout(() => (display.innerText = ""), 2000)
    }else  {
      display.innerText+=item.id;
    }
  };
});


const themeToggleBtn = document.querySelector(".theme-toggler ");
const calculator = document.querySelector(".calculador");
const toggleIcon = doc.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => { 
  calculator.classList.toggle("dark")
}