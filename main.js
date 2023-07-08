function increaseCounter() {
  const counter = document.getElementById("counter");
  let value = parseInt(counter.textContent);
  value++;
  counter.textContent = value.toString().padStart(2, "0");

  const portions = document.getElementsByClassName("portion");
  for (portion of portions) {
    let porcaoInicial = parseInt(portion.textContent) / (value - 1);
    portion.textContent = porcaoInicial * value;
  }
}

function decreaseCounter() {
  const counter = document.getElementById("counter");
  let value = parseInt(counter.textContent);
  if (value > 1) {
    value--;
    counter.textContent = value.toString().padStart(2, "0");

    const portions = document.getElementsByClassName("portion");
    for (portion of portions) {
      let porcaoInicial = parseInt(portion.textContent) / (value + 1);
      portion.textContent = porcaoInicial * value;
    }
  }
}
