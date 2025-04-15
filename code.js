let intervalId; // store interval ID for movement

function startMvmt(){
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;

    const img = document.getElementById("memeImage");
    let positionX = 0; // starting horizontal position
    let positionY = 0; // starting vertical position
    let directionX = 1; // (1 for right, -1 for left)
    let directionY = 1; // (1 for down, -1 for up)

    // to move the img horizontally
    intervalId = setInterval(function() {
        positionX += 5 * directionX; // adjust horizontal position
        positionY += 5 * directionY; // adjust vertical position
        
        img.style.left = positionX + "px"; // sets the new horizontal position for img
        img.style.top = positionY + "px"; // sets the new vertical position for img
        
        if (positionX > window.innerWidth - img.offsetWidth || positionX < 0) // reverses horizontal direction if img hits screen edges
            directionX *= -1; // toggles horizontal direction
        
            if (positionY > window.innerHeight - img.offsetHeight || positionY < 0) // reverses vertical direction if img hits screen edges
            directionY *= -1; // toggles vertical direction
    
    }, 10); // move img every 100 milliseconds (every 0.1 seconds) {can be adjusted}
}

function stopMvmt(){
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("resetImgBtn").disabled = false;

    clearInterval(intervalId); // stops the movement of the img
    
}

function resetImgPosition(){
    const img = document.getElementById("memeImage");
    img.style.left = "50px"; // resets the img to original horizontal position
    img.style.top = "210px"; // resets the img to original vertical position

    document.getElementById("resetImgBtn").disabled = true; // disables reset button after being clicked

}