function randomBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function createScoreLabel({ score = 100, object }) {
  const scoreLabel = document.createElement("label");
  scoreLabel.innerHTML = score;
  scoreLabel.style.position = "absolute";
  scoreLabel.style.color = "white";
  scoreLabel.style.left = object.position.x + "px";
  scoreLabel.style.top = object.position.y + "px";
  scoreLabel.style.userSelect = "none";

  document.querySelector("#parentDiv").appendChild(scoreLabel);

  gsap.to(scoreLabel, {
    opacity: 0,
    y: -30,
    duration: 0.75,
    onComplete: () => {
      document.querySelector("#parentDiv").removeChild(scoreLabel);
    }
  });

  function rectangularCollision({ rectangle1, rectangle2}) {
    return (
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width
  
    );


  }


}
