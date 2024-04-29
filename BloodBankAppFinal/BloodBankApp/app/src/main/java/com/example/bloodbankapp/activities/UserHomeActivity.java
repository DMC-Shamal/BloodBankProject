package com.example.bloodbankapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.bloodbankapp.R;

public class UserHomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_home);
        Button donateBloodButton = findViewById(R.id.buttonDonateBlood);
        Button donateNeedButton = findViewById(R.id.buttonNeedBlood);
        donateBloodButton.setOnClickListener(v -> {
            // Start HospitalListActivity
            Intent intent = new Intent(UserHomeActivity.this, HospitalListActivity.class);
            startActivity(intent);
        });

        donateNeedButton.setOnClickListener(view -> {
            Intent intent = new Intent(UserHomeActivity.this, NeedBloodActivity.class);
            startActivity(intent);

        });
    }

}