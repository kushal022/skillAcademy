let showInput = document.getElementById("showInput");
let showOutput = document.getElementById("showOutput");
let str = '';
function pushvalue(value) {
    if (value === 'DEL') {
        str = str.substring(0, str.length - 1);
        if (str.length === 0) {
            showInput.innerText = 0;
        } else {
            showInput.innerText = str;
        }
    } else if (value === "AC") {
        str = '';
        showInput.innerText = 0;
        showOutput.innerText = str;
    } else if (value === '=') {
        str = eval(str)
        // showInput.innerText = str;
        showOutput.innerText = str;

    }
    else {
        str += value;
        showInput.innerText = str;
        console.log(str)
    }
}
