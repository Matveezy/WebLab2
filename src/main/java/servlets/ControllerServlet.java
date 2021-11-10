package servlets;

import bean.TablePoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
//    private final TablePoint tablePoint = new TablePoint();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        resp.setContentType("text/html");
//        req.setAttribute("table",tablePoint);
        String x=req.getParameter("X_value");
        String y=req.getParameter("Y_value");
        String r=req.getParameter("R_value");
        req.setAttribute("X",x);
        req.setAttribute("Y",y);
        req.setAttribute("R",r);

//        Double x= Double.parseDouble(req.getParameter("X_value"));
//        Double y=Double.parseDouble("Y_value");
//        Double r=Double.parseDouble("R_value");

        if ((x!=null && y!=null && r!=null) && (!x.trim().equals("") && !y.trim().equals("") && !r.trim().equals(""))){
            req.getRequestDispatcher("./check").forward(req,resp);
        } else {
            resp.setStatus(422);
            return;
        }

    }


//
//    final boolean validate(Double x, Double y, Double r) {
//
//    }
//
//    final boolean checkX(Double x){
//
//    }
}




