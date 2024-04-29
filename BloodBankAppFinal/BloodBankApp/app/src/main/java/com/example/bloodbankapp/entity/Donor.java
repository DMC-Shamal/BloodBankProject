package com.example.bloodbankapp.entity;

import java.io.Serializable;

public class Donor implements Serializable {

    private int D_Id;
    private String Blood_Type;
    private int Age;
    private String Gender;

    public Donor(int d_Id, String blood_Type, int age, String gender) {
        D_Id = d_Id;
        Blood_Type = blood_Type;
        Age = age;
        Gender = gender;
    }

    public int getD_Id() {
        return D_Id;
    }

    public void setD_Id(int d_Id) {
        D_Id = d_Id;
    }

    public String getBlood_Type() {
        return Blood_Type;
    }

    public void setBlood_Type(String blood_Type) {
        Blood_Type = blood_Type;
    }

    public int getAge() {
        return Age;
    }

    public void setAge(int age) {
        Age = age;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    @Override
    public String toString() {
        return "Donor{" +
                "D_Id=" + D_Id +
                ", Blood_Type='" + Blood_Type + '\'' +
                ", Age=" + Age +
                ", Gender='" + Gender + '\'' +
                '}';
    }
}
