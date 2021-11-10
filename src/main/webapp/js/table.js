function addBean(x, y, r, currentTime, executionTime, result) {
    console.log("Addbean fun")
    console.log(x + "x");
    console.log(y + "y");
    console.log(r + "r")
    console.log(currentTime + "curtime");
    console.log(executionTime + "exTime");
    console.log(result + "resolt")
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