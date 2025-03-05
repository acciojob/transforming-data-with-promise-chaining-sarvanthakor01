//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('ip');
    const button = document.getElementById('btn');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        const inputValue = parseFloat(input.value);

        // Clear previous content in output div
        output.innerHTML = '';

        // Function to create a delayed promise
        const delayedPromise = (value, delay) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(value), delay);
            });
        };

        // Promise Chain for transformations
        delayedPromise(inputValue, 2000) // First Promise (Initial value)
            .then((result) => {
                output.innerHTML += `Result: ${result}<br>`;
                return delayedPromise(result * 2, 2000); // Multiply by 2
            })
            .then((result) => {
                output.innerHTML += `Result: ${result}<br>`;
                return delayedPromise(result - 3, 1000); // Subtract 3
            })
            .then((result) => {
                output.innerHTML += `Result: ${result}<br>`;
                return delayedPromise(result / 2, 1000); // Divide by 2
            })
            .then((result) => {
                output.innerHTML += `Result: ${result}<br>`;
                return delayedPromise(result + 10, 1000); // Add 10
            })
            .then((result) => {
                output.innerHTML += `Final Result: ${result}`;
            });
    });
});
