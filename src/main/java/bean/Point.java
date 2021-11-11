package bean;
import org.kopitubruk.util.json.JSONUtil;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class Point implements Serializable {


    private Double x;
    private Double y;
    private Double r;
    private String currentTime;
    private Long exTime;
    private boolean res;

    public String jsonPoint() {
        System.out.println(JSONUtil.toJSON(this.getPoint()));
        return JSONUtil.toJSON(this.getPoint());
    }


    private Map<String,String> getPoint(){
        Map<String, String> point = new HashMap<>();
        point.put("x",String.valueOf(x));
        point.put("y",String.valueOf(y));
        point.put("r",String.valueOf(r));
        point.put("currentTime",String.valueOf(getCurrentTime()));
        point.put("executionTime" , String.valueOf(getExTime()));
        point.put("result",String.valueOf(res));
        return point;

    }
    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Double getR() {
        return r;
    }

    public void setR(Double r) {
        this.r = r;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(String currentTime) {
        this.currentTime = currentTime;
    }

    public Long getExTime() {
        return exTime;
    }

    public void setExTime(Long exTime) {
        this.exTime = exTime;
    }

    public boolean isRes() {
        return res;
    }

    public void setRes(boolean res) {
        this.res = res;
    }

    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", currentTime='" + currentTime + '\'' +
                ", exTime=" + exTime +
                ", res=" + res +
                '}';
    }
}
