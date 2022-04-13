document.addEventListener("DOMContentLoaded", function() {

    const calculatorScreen = document.querySelector("#screen");
    const spans = document.querySelectorAll(".buttons span");
    const spanArray = Array.from(spans);
    document.querySelectorAll(".operator")[1].innerText = "/";
    document.querySelectorAll(".operator")[2].innerText = "*";

    spanArray.map(button => button.addEventListener("click",
        function() {

            if (button.innerText !== "=") {
                calculatorScreen.innerText += button.innerText
            };
            if (button.innerText === "=") {
                calculatorScreen.innerText = eval(calculatorScreen.innerText)
            };
            if (button.innerText === "C") {
                calculatorScreen.innerText = ""
            };
        }));
});