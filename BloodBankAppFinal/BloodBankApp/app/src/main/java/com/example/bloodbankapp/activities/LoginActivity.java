package com.example.bloodbankapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.bloodbankapp.BloodBankConstants;
import com.example.bloodbankapp.R;
import com.example.bloodbankapp.api.RetrofitClient;
import com.example.bloodbankapp.entity.User;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginActivity extends AppCompatActivity {

    EditText editEmail, editPassword;
    CheckBox checkboxRememberMe;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);
        checkboxRememberMe = findViewById(R.id.checkboxRememberMe);
    }

    public void login(View view) {
        User user = new User();
//        User user = new User();
        user.setEmail(editEmail.getText().toString());
        user.setPassword(editPassword.getText().toString());
        if (checkboxRememberMe.isChecked()) {
            getSharedPreferences(BloodBankConstants.SHARED_PREFERENCE_FILE_NAME, MODE_PRIVATE)
                    .edit()
                    .putBoolean(BloodBankConstants.LOGIN_STATUS, true)
                    .apply();
        }



        RetrofitClient.getInstance().getApi().loginUser(user).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                Log.e("TAG",response +" ");
                if (response.isSuccessful()) {
                    JsonObject responseBody = response.body();
                    if (responseBody != null) {
                        String status = responseBody.get("status").getAsString();
                        if (status.equals("success")) {
                            JsonArray dataArray = responseBody.getAsJsonArray("data");
                            if (dataArray != null && dataArray.size() > 0) {
                                int U_Id = dataArray.get(0).getAsJsonObject().get("U_Id").getAsInt();
                                getSharedPreferences(BloodBankConstants.SHARED_PREFERENCE_FILE_NAME, MODE_PRIVATE)
                                        .edit()
                                        .putInt(BloodBankConstants.USER_ID, U_Id)
                                        .apply();
                                startActivity(new Intent(LoginActivity.this, UserHomeActivity.class));
                                finish();
                            } else {
                                Toast.makeText(LoginActivity.this, "email or password is wrong", Toast.LENGTH_SHORT).show();
                            }
                        } else {
                            Toast.makeText(LoginActivity.this, "Login failed: " + status, Toast.LENGTH_SHORT).show();
                        }
                    } else {
                        Toast.makeText(LoginActivity.this, "Response body is empty", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    Toast.makeText(LoginActivity.this, "Unsuccessful response: " + response.code(), Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Log.e("LoginActivity", "Login failed", t);
                Toast.makeText(LoginActivity.this, "Something went wrong at the Login", Toast.LENGTH_SHORT).show();
            }



        });
    }

//        RetrofitClient.getInstance().getApi().loginUser(user).enqueue(new Callback<JsonObject>() {


    public void register(View view) {
        startActivity(new Intent(this, RegisterActivity.class));
    }
}




