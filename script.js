const button = document.querySelector(".btn");
const reportBody = document.querySelector("body");

button.addEventListener("click", function () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red},${green},${blue})`;

    reportBody.style.backgroundColor = rgb;
    // button.style.color = rgb;
    button.textContent = rgb;
});
// console.log(b);

// button.addEventListener("click", () => {
//     console.log("I am clicked");
// });
