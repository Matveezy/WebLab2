let x, y, r;

function validateForm(permission) {
    let Y_value = $('#Y_value').val();
    let X_value = $('X_value').val();
    let R_value = $('R_value').val();

    let info = "";
    info+= "<span>" + validateY() + "</span>";
    info+= "<span>" + validateX() + "</span>"

    if (permission){
        $('.Error_text').html(info);
    }

    return (info === "<span></span>".repeat(3));
}


function validateY(field) {
    if (!(field.trim() === "")) {
        if (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/.test(field)) {
            if ((parseInt(field) > -3) && (parseInt(field) < 3)) {
                return "";
            } else return "Координата Y задается в промежутке от -3 до 3!\n";
        } else return "Координата Y задается числом!\n"
    } else return "Не введена координата Y!\n"

}

function validateX(field) {
    if (!(field.trim() === "")){
        if (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/.test(field)){
            if ((parseInt(field)>-3) && (parseInt(field)<5)){
                return "";
            } else return "Координата X задается в промежутке от -3 до 5!\n"
        } else return "Координата Х задается число!\n"
    } else  return "Не введена координата X!\n"
}


