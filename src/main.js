const clouds = document.getElementsByClassName('cloud');
// const mouse = document.querySelector('#blob');

for (var i = 0; i < clouds.length; i++) {
  let item = clouds[i];

  let randomNumber = (Math.random() * (3 - 1) + 1).toFixed(2);
  item.style['animation-duration'] = randomNumber.toString() + 's';
}

/*function bomb() {
  document.body.style.opacity = 0;
  document.body.style.background = 'none';
}
*/