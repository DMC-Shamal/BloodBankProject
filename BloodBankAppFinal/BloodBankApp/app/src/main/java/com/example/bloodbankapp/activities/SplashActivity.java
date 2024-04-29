package com.example.bloodbankapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.widget.ImageView;

import com.example.bloodbankapp.R;

public class SplashActivity extends AppCompatActivity {
    private static final long SPLASH_DELAY = 1000;
    ImageView splashimage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        splashimage = findViewById(R.id.splashimage);

        new Handler().postDelayed(new Runnable() {

            @Override
            public void run() {
                startActivity(new Intent(SplashActivity.this, LoginActivity.class));
                finish(); // Close the splash activity to prevent going back to it
            }
        }, SPLASH_DELAY);
    }

            }


