package servlets;

import bean.Point;
import bean.TablePoint;



import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;


public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        Point point = new Point();

        try {
            double x = Double.parseDouble(req.getParameter("x"));
            double y = Double.parseDouble(req.getParameter("y"));
            double r = Double.parseDouble(req.getParameter("r"));

            if (x <= -3 || x >= 3 || y <= -3 || y >= 5 || r < 1 || r > 3) {
                resp.setStatus(422);
                return;
            }

            String currentTime = LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
            long start = System.nanoTime();
            boolean result = isHit(x, y, r);
            long executionTime = (System.nanoTime() - start) / 1000;

            point.setX(Math.round(x * 100.0)/100.0);
            point.setY(Math.round(y * 100.0)/100.0);
            point.setR(Math.round(r * 100.0)/100.0);
            point.setCurrentTime(currentTime);
            point.setExTime(executionTime);
            point.setRes(result);

            TablePoint.getInstance().addPoint(point);

        } catch (Exception e) {
            e.printStackTrace();
        }

        resp.setHeader("Cache-control","no cache");
        resp.setContentType("application/json; charset=UTF-8");
        resp.getWriter().println(point.jsonPoint());
    }

    private boolean isHit(double x, double y, double r) {
        return (isHitCircle(x, y, r) || isHitTriangle(x, y, r) || isHitRectangle(x, y, r));
    }

    private boolean isHitCircle(double x, double y, double r) {
        return ((x * x + y * y <= r * r / 4.0) && (x <= 0 && y >= 0));
    }

    private boolean isHitTriangle(double x, double y, double r) {
        return ((y <= (-1.0 / 2.0) * x + (r / 2.0)) && (x >= 0 && y >= 0));
    }

    private boolean isHitRectangle(double x, double y, double r) {
        return ((y >= -r && y <= 0) && (x >= -r && x <= 0));
    }

}
