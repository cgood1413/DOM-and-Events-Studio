// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){

    const takeOff = document.getElementById("takeoff");
    const shuttleBackground = document.getElementById("shuttleBackground")
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const flightStatus = document.getElementById("flightStatus");
    const landButton = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const rocketImage = document.getElementById("rocket");
    const upButton = document.getElementById("upButton");
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");
    const downButton = document.getElementById("downButton");
    
    let currentHeight = 0;
    let rocketXAxis = 0

    const returnToBase = () => {
        rocketImage.style.bottom = "0px";
        rocketImage.style.left = "0px";
    };

    takeOff.addEventListener("click", function(event){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response){
            shuttleBackground.style.backgroundColor = "blue";
            flightStatus.innerText = "Shuttle in flight.";
            currentHeight += 10000;
            rocketImage.style.bottom = `${currentHeight / 1000}px`;
            shuttleHeight.innerText = currentHeight;
        }
        
    });

    landButton.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerText = 0;
        currentHeight = 0;
        returnToBase();
    });

    missionAbort.addEventListener("click", function (event) {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response){
            flightStatus.innerText = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "red";
            shuttleHeight.innerText = 0;
            currentHeight = 0;
            returnToBase();
        }
    });

    upButton.addEventListener("click", function(){
        currentHeight += 10000;
        rocketImage.style.bottom = `${currentHeight / 1000}px`;
        shuttleHeight.innerText = currentHeight;
    });

    downButton.addEventListener("click", function(){
        currentHeight -= 10000;
        rocketImage.style.bottom = `${currentHeight / 1000}px`;
        shuttleHeight.innerText = currentHeight;
    });

    leftButton.addEventListener("click", function(){
        rocketXAxis -= 10;
        rocketImage.style.left = `${rocketXAxis}px`;
    });

    rightButton.addEventListener("click", function(){
        rocketXAxis += 10;
        rocketImage.style.left = `${rocketXAxis}px`;
    });

}

window.addEventListener("load", init);

