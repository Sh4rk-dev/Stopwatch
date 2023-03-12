let seconds = 00;
let items = 00;
let appendSeconds = document.getElementById('second');
let appendItems = document.getElementById('itens');
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let Interval;

buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function () {
    clearInterval(Interval);
}

buttonReset.onclick = function() {
    clearInterval(Interval);
    items = "00";
    seconds = "00";
    appendItems.innerHTML = items;
    appendSeconds.innerHTML = seconds;
}

function startTimer() {
    items ++;

    if(items <=  9){
        appendItems.innerHTML = "0" + items;
    }

    if (items > 9){
        appendItems.innerHTML = items;
    }
    
    if ( items > 99){
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        items = 0;
        appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
}
}