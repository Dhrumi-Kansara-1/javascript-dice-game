function createRandomNumber() {
  var tempRandomNumber = Math.floor(Math.random() * 6) + 1;
  return tempRandomNumber;
}
function setImage() {
  var randomNumber1 = createRandomNumber();
  var randomNumber2 = createRandomNumber();

  var img1 = document.querySelector(".img-1");
  var img2 = document.querySelector(".img-2");
  var h1Result = document.querySelector(".gameResult");

  var urlImg1 = "images/dice" + randomNumber1 + ".png";
  var urlImg2 = "images/dice" + randomNumber2 + ".png";

  img1.setAttribute("src", urlImg1);
  img2.setAttribute("src", urlImg2);

  if (randomNumber1 > randomNumber2) {
    h1Result.innerHTML = " 🚩 Player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    h1Result.innerHTML = "Player 2 Win 🚩";
  } else {
    h1Result.textContent = "It's a tie";
  }
}
