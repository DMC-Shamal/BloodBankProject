package com.example.bloodbankapp.api;

//import com.example.bloodbankapp.entity.Hospital;
import com.example.bloodbankapp.entity.Hospital;
import com.example.bloodbankapp.entity.User;
import com.google.gson.JsonObject;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface API {

    String BASE_URL="http://192.168.118.139:3000";

    @POST("/User/register")
     Call<JsonObject> registerUser(@Body User user);

    @POST("/User/login")
     Call<JsonObject> loginUser(@Body User user);

//    @GET("/Hospital")
//    Call<List<Hospital>> getHospitals();

    @GET("/Hospital")
    Call<List<Hospital>> getHospitals();

//    @GET("Hospital")
//    Call<List<Hospital>> getHospitals();
//    @GET("/movie/")
//    public Call<JsonObject> getAllMovies();
}
