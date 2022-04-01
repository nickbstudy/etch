const panel = document.querySelector('#sketch');

function updateSize() {
    
    const wide = window.innerWidth;
    const high = window.innerHeight;
    let newLength = 0;

    (wide > high) ? newLength = high - 50 : newLength = wide - 50;

    panel.style.width = `${newLength}px`;
    panel.style.height = `${newLength}px`;
}


window.onresize = updateSize;
window.onload = updateSize;