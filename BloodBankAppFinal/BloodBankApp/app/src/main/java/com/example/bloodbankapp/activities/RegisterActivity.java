package com.example.bloodbankapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.example.bloodbankapp.R;
import com.example.bloodbankapp.api.RetrofitClient;
import com.example.bloodbankapp.entity.User;
import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RegisterActivity extends AppCompatActivity {

    EditText editFirstName, editLastName, editMobile, editAddress, editEmail, editPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        editFirstName = findViewById(R.id.editFirstName);
        editLastName = findViewById(R.id.editLastName);
        editMobile = findViewById(R.id.editMobile);
        editAddress = findViewById(R.id.editAddress);
        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);

    }

    public void register(View view) {
        User user = new User();
        user.setFirstname(editFirstName.getText().toString());
        user.setLastname(editLastName.getText().toString());
        user.setMobile(editMobile.getText().toString());
        user.setAddress(editAddress.getText().toString());
        user.setEmail(editEmail.getText().toString());
        user.setPassword(editPassword.getText().toString());

        if (user.getEmail().equals("") || user.getPassword().equals(""))
            Toast.makeText(this, "email or password cannot be empty", Toast.LENGTH_SHORT).show();
        else {

            RetrofitClient.getInstance().getApi().registerUser(user).enqueue(new Callback<JsonObject>() {
                @Override
                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                    if (response.body().get("status").getAsString().equals("success")) {
                        finish();
                    } else {
                        if (response.body().get("error").getAsJsonObject().get("errno").getAsInt() == 1062)
                            Toast.makeText(RegisterActivity.this, "email already exists", Toast.LENGTH_SHORT).show();
                        if (response.body().get("error").getAsJsonObject().get("errno").getAsInt() == 1406)
                            Toast.makeText(RegisterActivity.this, "mobile number is incorrect", Toast.LENGTH_SHORT).show();
                    }
                }


                @Override
                public void onFailure(Call<JsonObject> call, Throwable t) {
                    Toast.makeText(RegisterActivity.this, "Something went wrong while registration", Toast.LENGTH_SHORT).show();
                }


            });

        }
    }
}

