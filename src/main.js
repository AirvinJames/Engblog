let clouds = document.getElementsByClassName('cloud');


for (var i = 0; i < clouds.length; i++) {
  let item = clouds[i];

  let randomNumber = (Math.random() * (3 - 1) + 1).toFixed(2);
  item.style['animation-duration'] = randomNumber.toString() + 's';
}
