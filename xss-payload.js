const style = document.createElement('style');
style.innerHTML = `
  @keyframes heat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
    overflow: hidden;
    margin: 0;
  }
  .text {
    color: red;
    font-size: 5rem;
    font-weight: bold;
    animation: heat 1s infinite;
    text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px yellow;
  }
`;
document.head.appendChild(style);

const div = document.createElement('div');
div.className = 'text';
div.innerText = 'Mero Gurungniii Love You';
document.body.innerHTML = '';
document.body.appendChild(div);
