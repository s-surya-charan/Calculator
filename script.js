const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("theme-toggle");

let memory = 0; // For memory functions

// Button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (button.id === "clear") {
            display.value = "";
        } 
        else if (button.id === "delete") {
            display.value = display.value.slice(0, -1);
        }
        else if (button.id === "equals") {
            try {
                display.value = eval(display.value) || "";
            } catch {
                display.value = "Error";
            }
        }
        else if (button.id === "sqrt") {
            try {
                display.value = Math.sqrt(parseFloat(display.value)) || "";
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    if ((e.key >= 0 && e.key <= 9) || "+-*/.%".includes(e.key)) {
        display.value += e.key;
    } else if (e.key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    } else if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});

// Dark mode toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
