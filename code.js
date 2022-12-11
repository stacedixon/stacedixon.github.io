function countDownTimer() {
    //countdownTimer will go from 50 to 0 by 5s
    console.log("countDownTimer() started");
    var currTime = 50;
    document.getElementById("countDis").innerHTML = currTime + " sec";

    //45 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 5000);

    //40 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 10000);

    //35 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 15000);

    //30 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 20000);

    //25 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 25000);

    //20 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 30000);

    //15 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 35000);

    //10 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 40000);

    //5 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 45000);

    //0 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + "Blastoff!!!!";
    }, 50000);
}


function playCraps() {
    //troubleshooting playCraps() has started
    console.log("playCraps() started");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6 * Math.random()); //randomizing the output of die1 between 1 - 6
    die2 = Math.ceil(6 * Math.random()); //randomizing the output of die2 between 1 - 6

    console.log(die1); //the console will log the random output result of die1 
    console.log(die2); //the console will log the random output result of die2 

    document.getElementById("die1Res").innerHTML = "the result for die1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "the result for die2 is: " + die2;

    //check if craps (7 or 11)
    var sum = die1 + die2;
    if (sum == 7 || sum == 11) {
        console.log("you lose!!!!!!");
        document.getElementById("gameRes").innerHTML = "You did not find victory. Please play again and WIN!";
        //check for win (even doubles)
    } else if (die1 % 2 == 0 && die1 == die2) {
        console.log("you win!!!!!!")
        document.getElementById("gameRes").innerHTML = "You won!!!!";
        //check for tie
    } else {
        console.log("You did not win or lose.")
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please play again and WIN!";
    }
}

//btrCountdownTimer used to fulfill Assignment: Efficiency at Mission Control
function btrCountdownTimer() {
    console.log("btrCountdownTimer() started");
    var currTime = 50;

    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            //what we do each iteration
            console.log(currTime);
            document.getElementById("countDis").innerHTML = currTime;
            if (currTime == 0) {
                document.getElementById("countDis").innerHTML = "Blastoff!!!";
            }
            currTime = currTime - 5;
        }, i * 5000)
    }
}

//chgBtrCountdownTimer used to fulfill Assignment: Change Order Request from the Fleet Admiral
function chgBtrCountdownTimer() {
    console.log("chgBtrCountdownTimer() started");
    var currTime = 50;
    var ogCurrTime = currTime;

    for (var i = 0; i < 11; i++) {
        setTimeout(function () {
            //what we do each iteration
            console.log(currTime);
            if (currTime == 0) {
                //less than 1/2 left
                document.getElementById("countDis").innerHTML = "Blastoff!!!";
            } else if (currTime < 0.5 * ogCurrTime) {
                //when we finishing counting down
                document.getElementById("countDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime + " seconds";
            } else {
                //at the beginning
                document.getElementById("countDis").innerHTML = currTime + " seconds";
            }
            currTime = currTime - 5;
        }, i * 5000)
    }
}

function startFun() {
    console.log("startFun() started");
    //disable start button
    document.getElementById("startButton").disabled = true;

    //enable dis(disable!) stop button
    document.getElementById("stopButton").disabled = false;

    document.getElementById("dataTable").rows["seconds"].innerHTML = "reading data";

    //run updateDisplay()
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
}

function stopFun() {
    console.log("stopFun() started");
    //disable stop button
    document.getElementById("stopButton").disabled = true;

    //enable dis(disable!) start button
    document.getElementById("startButton").disabled = false;

    clearInterval(timer);
}

function playStation() { //add comment
    console.log("playStation() started"); //add comment
    mySound = new sound("us-lab-background.mp3") //add comment
    mySound.play(); //calls the mySound object and the play function 
}

function playStation() { //program function to play the playstation sound
    console.log("playStation()started"); //on the backend, the playstation sound program starts running
    mySound = new sound("us-lab-background.mp3"); //identifying the sound and source file the program will pull to play when button clicked
    mySound.play(); //calling the mySound object and the play function to play 
}
function sound(srcFile) { //function to pull the file to play and apply settings below
    this.sound = document.createElement("audio"); //identifies the sound as an audio element
    this.sound.src = srcFile; //this is using this file as the source for the sound
    this.sound.setAttribute("preload", "audio"); //setting to have programs pre-loaded in memory to be ready to play immediately when triggered
    this.sound.setAttribute("controls", "none"); //setting no controls
    this.sound.style.display = "none"; //set up has no display
    document.body.appendChild(this.sound); //locking all the settings above in
    this.play = function () { //function to run the sound
        this.sound.play(); //running the play function
    }
    this.stop = function () { //function to stop the sound
        this.sound.pause(); //running the pause function       
    }
}