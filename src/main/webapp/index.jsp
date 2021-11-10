<%@ page import="bean.Point" %>
<%@ page import="java.util.List" %>
<%@ page import="bean.TablePoint" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web2</title>
<%--    <link rel="stylesheet" href="WEB-INF/css/body.css">--%>
<%--    <link rel="stylesheet" href="WEB-INF/css/header.css">--%>
<%--    <link rel="stylesheet" href="WEB-INF/css/user_input.css">--%>
<%--    <script src="WEB-INF/js/jquery-3.6.0.js"></script>--%>
<%--    <script src="WEB-INF/js/validation.js"></script>--%>

</head>
<body>
<header class="page-header">
    <div class="page-header_me">
        <span class="page-header-name">Matvey Chukhno</span>
        <span class="page-header-name">P3230</span>
    </div>
</header>
<main class="content">
    <header class="task-header">
        <div class="task-header-div">
            <span class="task-name">VARIANT 9635</span>
        </div>
    </header>

    <section class="section-lab">
        <svg class="svg_container" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            <!-- Оси координат -->
            <line x1="0" x2="300" y1="150" y2="150"></line>
            <line x1="150" x2="150" y1="0" y2="300"></line>
            <!-- Стрелки к осям -->
            <polygon points="150,0 145,15 155,15" stroke="black"></polygon>
            <polygon points="300,150 285,145 285,155" stroke="black"></polygon>
            <!-- Метки для значений R на оси X -->
            <line x1="50" x2="50" y1="140" y2="160"></line>
            <line x1="100" x2="100" y1="140" y2="160"></line>
            <line x1="200" x2="200" y1="140" y2="160"></line>
            <line x1="250" x2="250" y1="140" y2="160"></line>
            <!-- Метки для значений R на оси Y -->
            <line x1="140" x2="160" y1="50" y2="50"></line>
            <line x1="140" x2="160" y1="100" y2="100"></line>
            <line x1="140" x2="160" y1="200" y2="200"></line>
            <line x1="140" x2="160" y1="250" y2="250"></line>
            <!-- Прямоугольник во второй четверти -->
            <path stroke="yellow" fill="yellow" fill-opacity="0.3"
                  d="M100,150 A50,50 90 0,1 150,100 L 150,150 Z"></path>

            <!-- Треугольник во третьей четверти -->
            <polygon stroke="green" fill="green" fill-opacity="0.3" points="150,150 250,150 150,100"></polygon>
            <!-- Четверть эллипса в первой четверти -->
            <polygon stroke="blue" fill="blue" fill-opacity="0.3" points="50,250 50,150 150,150 150,250"></polygon>

            <!-- Подписи к осям -->
            <text x="285" y="135">X</text>
            <text x="160" y="15">Y</text>
            <!-- Значения R на оси X -->
            <text x="40" y="130">-R</text>
            <text x="85" y="130">-R/2</text>
            <text x="190" y="130">R/2</text>
            <text x="245" y="130">R</text>
            <!-- Значения R на оси Y -->
            <text x="170" y="52.5">R</text>
            <text x="170" y="102.5">R/2</text>
            <text x="170" y="202.5">-R/2</text>
            <text x="170" y="252.5">-R</text>

            <%
                List<Point> pointList = TablePoint.getInstance().getPoints();
                for (Point nextPoint : pointList){
                    double coordinateX = (nextPoint.getX() * 100 / nextPoint.getR()) + 150;
                    double coordinateY = (nextPoint.getX() * 100 / nextPoint.getR()) + 150;
                    String color = (nextPoint.isRes()) ? "red" : "#302929";

                    out.println("<circle fill=\"" + color + "\" cx=\"" + coordinateX + "\" cy=\"" + coordinateY + "\"  r=\"5\"></circle>");
                }
            %>
        </svg>

        <form class="mainform" id="form" onsubmit="test(); return false;"></form>
        <div class="form" >
            <p class="text-select-coordinate">Select your coordinates!</p>
            <div class="values">
                <div class="y_value">
                    <label for="Y_value">Y value:</label>
                    <input type="text" maxlength="16" id="Y_value" name="Y_value" placeholder="Enter coordinate Y">
                </div>
                <div class="x_value">
                    <label for="X_value"> X value:</label>
                    <input type="text" maxlength="16" id="X_value" name="X_value" placeholder="Enter coordinate X">
                </div>
                <div class="r_value">
                    <label for="R_value">R value:</label>
                    <select name="R_value" id="R_value" size="1">
                        <option disabled selected="Select R">Select coordinate R</option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>

            <div class="Error_text">
                <span id="Y_error"></span>
                <span id="X_error"></span>
                <span id="R_error"></span>
            </div>

            <div class="client-button">
                <input class="client-button-submit" type="submit" value="Submit">
                <input class="client-button-clear" type="reset" value="Clear">
            </div>
        </div>
    </section>
</main>

<section class="table_section">
    <div id="cleaner">
        <input type="button" id="button_clean" value="clean table" onclick="">
    </div>

<div>
    <table id="table">
        <thead>
        <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>CURRENT TIME</th>
            <th>EXECUTION TIME</th>
            <th>HIT RESULT</th>
        </tr>
        </thead>
        <tbody>
        <%
            for (Point nextPoint :pointList){
                out.println("<tr>");
                out.println(nextPoint.getX());
                out.println(nextPoint.getY());
                out.println(nextPoint.getR());
                out.println(nextPoint.getCurrentTime());
                out.println(nextPoint.getExTime());
                String color = (nextPoint.isRes()) ? "#0fc40f" : "red";
                out.println("<td style=\"color: " + color + "\">" + nextPoint.isRes() + "</td>");
                out.println("</tr>");
            }

        %>
        </tbody>
    </table>
</div>
</section>
<script src="js/validation.js"></script>
<script src="js/jquery-3.6.0.js"></script>
<script src="js/points.js"></script>
<script src="js/submit.js"></script>


<link rel="stylesheet" type="text/css"  href="${pageContext.request.contextPath}/css/body.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/header.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/user_input.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/table_section.css">


</body>

</html>