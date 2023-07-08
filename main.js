function increaseCounter() {
    const counter = document.getElementById
    ("counter");
    let value = parseInt(counter.textContent);
    value++;
    counter.textContent = value.toString().padStart(2, "0");
}