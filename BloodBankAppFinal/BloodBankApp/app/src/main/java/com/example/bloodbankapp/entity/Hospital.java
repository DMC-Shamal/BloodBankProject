package com.example.bloodbankapp.entity;

import java.io.Serializable;

public class Hospital implements Serializable {
    private static final long serialVersionUID = 1L;

    private int H_Id;
    private String name;

    public Hospital(String name) {
        //this.H_Id = h_Id;
        this.name = name;

    }

    public int getH_Id() {
        return H_Id;
    }
//
//    public void setH_Id(int h_Id) {
//        H_Id = h_Id;
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Hospital{" +
            //    "H_Id=" + H_Id +
                ", name='" + name + '\'' +
                '}';
    }
}
