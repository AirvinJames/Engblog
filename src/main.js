const clouds = document.getElementsByClassName('cloud');
// const mouse = document.querySelector('#blob');

for (var i = 0; i < clouds.length; i++) {
  let item = clouds[i];

  let randomNumber = (Math.random() * (3 - 1) + 1).toFixed(2);
  item.style['animation-duration'] = randomNumber.toString() + 's';
}

window.onmousemove = event => {
  const dots = document.getElementsByClassName('dots')
  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];

    const { x, y } = event
    dot.style.translate = `${x / 90}px ${y / 90}px`
  }
}
