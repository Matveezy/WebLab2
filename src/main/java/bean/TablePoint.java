package bean;

import java.util.LinkedList;
import java.util.List;


public class TablePoint {

    private final List<Point> pointsList;
    private static TablePoint instance;


    private TablePoint(){
        pointsList = new LinkedList<>();
    }



    public static TablePoint getInstance(){
        if (instance==null){
            instance = new TablePoint();
        }
        return instance;
    }

    public List<Point> getPoints(){
        return pointsList;
    }

    public synchronized void addPoint(Point point){
        pointsList.add(point);
    }

}
