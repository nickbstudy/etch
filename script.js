const panel = document.querySelector('#sketch');
const btnReset = document.querySelector('#reset')
btnReset.addEventListener('click', rebuild)

let wide = window.innerWidth;
let high = window.innerHeight;

let squares = 16

function updateSize() {
    
  wide = window.innerWidth;
  high = window.innerHeight;
    
    let newLength = 0;

    (wide > high) ? newLength = high - 50 : newLength = wide - 50;

    panel.style.width = `${newLength}px`;
    panel.style.height = `${newLength}px`;
}

function hoverChange(e) {
  const target = document.querySelector(`#${e.target.id}`)
  // target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  target.style.backgroundColor = 'black';
}


window.onresize = updateSize;
window.onload = updateSize;

function rebuild() {
  let num = prompt('How many squares on each row? Max is 100');

  while (num > 100 || num < 0) {
      
    num = prompt("Try again, how many squares under 100?")
  }
  squares = num;
  panel.textContent = '';
  build();
}
// Create all of the div elements to etch.  ID structure: etch[x]-[y]
function build () {
  for (let x = 0; x < squares; x++) {
    for (let y = 0; y < squares; y++) {
      const addMe = document.createElement('div')
      addMe.setAttribute('id', `etch${x}-${y}`)
      addMe.style.cssText = `width: ${100/squares}%; height: ${100/squares}%; border-bottom: 1px solid black; border-right: 1px solid black;`
      if (y == squares - 1 && x != squares - 1) {
        addMe.style.borderRight = null;
      } else if (x == squares - 1 && y != squares - 1) {
        addMe.style.borderBottom = null;
      } else if (x == squares - 1 && y == squares - 1) {
        addMe.style.borderRight = null;
        addMe.style.borderBottom = null;
      }
      addMe.addEventListener('mouseover', hoverChange)
      panel.appendChild(addMe);
    }
  }
}

build();