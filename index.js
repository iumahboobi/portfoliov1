console.log("kuttey");

function handleClick(event) {
    event.preventDefault();
    // 1. Finding particular section you want to move.
    // 2. After finding section get the Y axis (position).
    // 3. Get window scrollY position.
    // 4  Add ScrollY position to section Y position.
    // 5. Use window.scroll to new Y position.
    const sectionRef = document.querySelector(this.getAttribute('href'))
    const secYaxis = sectionRef.getBoundingClientRect().y;
    const scrollY = window.scrollY + secYaxis;
    const finalPosition = scrollY - 55;
    window.scroll(0, finalPosition);

}

document.querySelectorAll(".main-nav a").forEach((element) => {
    element.addEventListener("click", handleClick);
});