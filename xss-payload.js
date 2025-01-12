const style = document.createElement('style');
style.innerHTML = `
  @keyframes heat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
  .xss-banner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: black;
    color: red;
    font-size: 2rem;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    z-index: 9999;
    animation: heat 1s infinite;
    text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px yellow;
  }
`;
document.head.appendChild(style);

const banner = document.createElement('div');
banner.className = 'xss-banner';
banner.innerText = 'Mero Gurungniii Love You 💖';
document.body.appendChild(banner);
