let x, y, r;

function validateForm(permission) {
    let Y_value = $('#Y_value').val();
    let X_value = $('#X_value').val();
    let R_value = $('#R_value').val();

    let info = "";
    info += "<span>" + validateY(Y_value) + "</span>";
    info += "<span>" + validateX(X_value) + "</span>";
    info += "<span>" + validateR(R_value) + "</span>";

    if (permission) {
        document.getElementById("Error_text").innerHTML = info;
        // $('.Error_text').html(info);

        console.log(document.getElementById('R_error'))
        console.log(document.getElementById('X_error'))

    }
    console.log("<span id=\"Y_error\"></span>" + "\n" + "<span id=\"X_error\"></span>" + "\n" + "<span id=\"R_error\"></span>")
    console.log((info === "<span id=\"Y_error\"></span>" + "\n" + "<span id=\"X_error\"></span>" + "\n" + "<span id=\"R_error\"></span>"));

    return (info === "<span></span>".repeat(3));

}


function validateY(field) {
    if (!(field.trim() === "")) {
        if (/^(0$|-?[0-9]\d*(\.\d*[0-9]$)?|-?0\.\d*[0-9])$/.test(field)) {
            if ((parseInt(field) > -3) && (parseInt(field) < 5)) {
                return "";
            } else return "Координата Y задается в промежутке от -2 до 4!\n";
        } else return "Координата Y задается числом!\n"
    } else return "Не введена координата Y!\n"

}

function validateX(field) {
    if (!(field.trim() === "")) {
        if (/^(0$|-?[0-9]\d*(\.\d*[0-9]$)?|-?0\.\d*[0-9])$/.test(field)) {
            if ((parseInt(field) > -3) && (parseInt(field) < 3)) {
                return "";
            } else return "Координата X задается в промежутке от -2 до 2!\n"
        } else return "Координата Х задается числом!\n"
    } else return "Не введена координата X!\n"
}


function validateR(field) {
    if (field === null) {
        return "Введите координату R";
    } else return "";
}

