

const hr = document.querySelector('.hour-hand');
const min = document.querySelector('.minute-hand');
const sec = document.querySelector('.second-hand');

function moveHands() {
    const date = new Date();
    const hrGet = date.getHours();
    const minGet = date.getMinutes();
    const secGet = date.getSeconds();

    const hrRotate = ((hrGet / 12) * 360) + ((minGet / 60) * 30);
    const minRotate = ((minGet / 60) * 360) + ((secGet / 60) * 6);
    const secRotate = ((secGet / 60) * 360);
    // let hrRotate = 30 * hrGet + minGet / 2;
    // let minRotate = 6 * minGet;
    // let secRotate = 6 * secGet;

    // console.log(hrGet, minGet, secGet)
    // console.log(hr)
    hr.style.transform = `rotate( ${hrRotate}deg)`
    min.style.transform = `rotate( ${minRotate}deg)`
    sec.style.transform = `rotate( ${secRotate}deg)`

}

setInterval(moveHands, 1000);
moveHands(); //Initial call