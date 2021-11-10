document.getElementById("form").addEventListener("submit", receiveSubmit);

function receiveSubmit() {
    if (validateForm(true)) {
        let Y_value = $('#Y_value').val();
        let X_value = $('#X_value').val();
        let R_value = $('#R_value').val();
        $.ajax({
            url: "./processing",
            type: "GET",
            data: {'y': Y_value, 'x': X_value, 'r': R_value},
            success: function (response) {
                drawDots(response.x, response.y, response.r, response.result);
                addBean(response.x, response.y, response.r, response.currentTime, response.executionTime, response.result);
            }
        })

    }
}

function receiveDots(x, y, r) {
    $.ajax({
        url: "./processing",
        type: "GET",
        data: {'y': y, 'x': x, 'r': r},
        success: function (response) {
            drawDots(response.x, response.y, response.r, response.result);
            addBean(response.x, response.y, response.r, response.currentTime, response.executionTime, response.result);
        }
    })


}