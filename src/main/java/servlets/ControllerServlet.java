package servlets;

import bean.TablePoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String x = req.getParameter("x");
        String y = req.getParameter("y");
        String r = req.getParameter("r");

        if ((x != null && y != null && r != null) && (!x.trim().equals("") && !y.trim().equals("") && !r.trim().equals(""))) {
            req.getRequestDispatcher("./check").forward(req, resp);
        } else {
            resp.setStatus(422);
            return;
        }

    }
}




