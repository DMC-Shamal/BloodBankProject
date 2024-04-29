package com.example.bloodbankapp.entity;

import java.io.Serializable;

public class User implements Serializable {
    private int U_Id;
    private String firstname;
    private String lastname;

    private String mobile;
    private String address;
    private String email;
    private String password;
   // private Enum role;

    public User(int u_Id, String firstname, String lastname, String mobile, String address, String email, String password, Enum role) {
        U_Id = u_Id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.mobile = mobile;
        this.address = address;
        this.email = email;
        this.password = password;
    //    this.role = role;
    }

    public User() {

    }

    public int getU_Id() {
        return U_Id;
    }

    public void setU_Id(int u_Id) {
        U_Id = u_Id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public Enum getRole() {
//        return role;
//    }
//
//    public void setRole(Enum role) {
//        this.role = role;
//    }

    @Override
    public String toString() {
        return "User{" +
                "U_Id=" + U_Id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", mobile='" + mobile + '\'' +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
               // ", role=" + role +
                '}';
    }
}