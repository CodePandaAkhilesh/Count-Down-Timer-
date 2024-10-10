// time -> miliiseconds
// timer me ham bacha hua time dikhate hai (distancePending)

let startDate, endDate, myInterval;  // Declare startDate, endDate, and myInterval globally

function getDate() {
    // Get the date input elements
    var dateInput = document.getElementById('dateInput');

    // Retrieve the value of the input as a string in yyyy-mm-dd format
    var selectedDate = dateInput.value;

    // Check if both dates are selected
    if (!selectedDate) {
        alert("Please set the Timer!");
        return;
    }

    // Create Date objects from the selected dates
    startDate = new Date().getTime();
    endDate = new Date(selectedDate).getTime();

    // Clear any previous intervals if already running
    if (myInterval) {
        clearInterval(myInterval);
    }

    // Immediately start updating the timer
    updateTimer();

    // Start the interval to update the timer every second
    myInterval = setInterval(updateTimer, 1000);

}
   
// const endDate = new Date("09 Sep, 2024 18:00:00").getTime();
// const startDate = new Date().getTime();

function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // Calculate days,minutes,hours,seconds
    // 1 days = 24 * 60 * 60 * 1000 milliseconds

    const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));
    const hrs = Math.floor((distancePending % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const mins = Math.floor((distancePending % (60 * 60 * 1000)) / (60 * 1000));
    const secs = Math.floor((distancePending % (60 * 1000)) / (1000));

    // populate in UI

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    // calculate width percentage for progress bar
     
    const totalDistance = endDate - startDate;
    const percentageDistance  = (distanceCovered * 100) / totalDistance;

    // set width for progress bar

    document.getElementById("progress-bar").style.width = percentageDistance + "%";
    
    // for negative timer

    if(distancePending < 0){
        clearInterval(myInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    } 

}

 