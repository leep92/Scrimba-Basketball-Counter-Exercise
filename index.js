let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");

function homeAdd1() {
    homePoints.textContent++
}

function homeAdd2() {
    homePoints.textContent++;
    homePoints.textContent++
}

function homeAdd3() {
    homePoints.textContent++;
    homePoints.textContent++;
    homePoints.textContent++
}

function guestAdd1() {
    guestPoints.textContent++
}

function guestAdd2() {
    guestPoints.textContent++;
    guestPoints.textContent++
}

function guestAdd3() {
    guestPoints.textContent++;
    guestPoints.textContent++;
    guestPoints.textContent++
}

function clearHome() {
    homePoints.textContent = 0;
}

function clearGuest() {
    guestPoints.textContent = 0;
}

