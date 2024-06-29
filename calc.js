let string = "";
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerHTML === "=") {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
            }
        } else if (event.target.innerHTML === "C") {
            string = "";
            document.querySelector('input').value = string;
        } else {
            string += event.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});