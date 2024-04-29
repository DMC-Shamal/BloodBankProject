package com.example.bloodbankapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.bloodbankapp.R;
import com.google.android.material.snackbar.Snackbar;

public class HospitalRegistrationActivity extends AppCompatActivity {

    private EditText editTextBloodType;
    private EditText editTextAge;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hospital_registration);

        editTextBloodType = findViewById(R.id.editTextBloodType);
        editTextAge = findViewById(R.id.editTextAge);

        Button submitButton = findViewById(R.id.submitButton);
        submitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String bloodType = editTextBloodType.getText().toString();
                String age = editTextAge.getText().toString();

                Toast.makeText(HospitalRegistrationActivity.this, "succesful", Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(HospitalRegistrationActivity.this, RegistrationSuccessActivity.class);
                startActivity(intent);

            }
        });


    }
}