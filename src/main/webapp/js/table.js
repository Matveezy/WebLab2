function addBean(x, y, r, currentTime, executionTime, result) {
    let newElement = "<tr>";
    newElement += "<th>" + x + "</th>";
    newElement += "<th>" + y + "</th>";
    newElement += "<th>" + r + "</th>";
    newElement += "<th>" + currentTime + "</th>";
    newElement += "<th>" + executionTime + "</th>";
    newElement += (result === "false" || result === undefined)
        ? "<th><span style='color: red'>false</span></th>"
        : "<th><span style='color: #0fc40f'>true</span></th>";
    newElement += "</tr>";
    $("#table tr:last").after(newElement);
}