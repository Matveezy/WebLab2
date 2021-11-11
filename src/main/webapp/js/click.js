document.getElementById('svg_cont').addEventListener("click", function (event) {
    // getCoordinates(event);
    checkClick(event);
})

function getCoordinates(event) {
    let xCoor = event.pageX;
    let yCoor = event.pageY;
    console.log(xCoor);
    console.log(yCoor);
}


console.log(document.getElementById('svg_cont'));

function checkClick(event) {


    let r = $("#R_value").val();
    let rError = document.getElementById('R_error');
    let yError = document.getElementById('Y_error');
    let xError = document.getElementById('X_error');
    console.log(xError);
    console.log(yError);
    // xError.innerHTML = "";
    // yError.innerHTML = "";
    if (validateR(r) !== "Введите координату R") {
        let coordinateX = event.pageX - 501;
        let coordinateY = event.pageY - 152;
        let x = (r * (coordinateX - 150) / 100);
        let y = (r * (150 - coordinateY) / 100);
        if (checkXY(x, y)) {
            receiveDots(x, y, r);
        }
    }
}


function checkXY(x, y) {
    if (x <= -3 || x >= 3 || y <= -3 || y >= 5) {
        return false;
    }
    return true;
}