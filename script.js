let mint = document.querySelector('.mint');


function getCurrentTime() {
    const now = new Date();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}`;
}
mint.innerText = `${minutes}`;

console.log(getCurrentTime());


setInterval(() => {
    console.log(getCurrentTime());
}, 1000);
