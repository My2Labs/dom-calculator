const calculatorScreen = document.querySelector("#screen")
const buttons = document.querySelectorAll("span")
const clear = document.querySelector("#clear")
let acceptingInput = true

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent == "÷" && acceptingInput) {
            calculatorScreen.textContent += "/"
        }
        if (button.textContent == "x" && acceptingInput) {
            calculatorScreen.textContent += "*"
        }
        if (button.textContent === "C" && acceptingInput) {
            calculatorScreen.textContent = ""
        }
        if (button.textContent !== "÷" && button.textContent !== "=" && button.textContent !== "x" && button.textContent !== "C" && acceptingInput) {
            calculatorScreen.textContent += button.textContent
        }
        try {
            if (button.textContent === "=" && acceptingInput) {
                if (calculatorScreen.textContent.includes("/0")) {
                    calculatorScreen.textContent = "Error, Resetting"
                }
                calculatorScreen.textContent = eval(calculatorScreen.textContent)
            }
        } catch (error) {
            calculatorScreen.textContent = "Error, Resetting"
            acceptingInput = false
            setTimeout(function() {
                acceptingInput = true
                calculatorScreen.textContent = ""
            }, 1400)
        }
    })
})