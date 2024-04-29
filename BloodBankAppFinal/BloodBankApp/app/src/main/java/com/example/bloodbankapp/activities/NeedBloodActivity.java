package com.example.bloodbankapp.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.Toast;

import com.example.bloodbankapp.R;
import com.example.bloodbankapp.adapter.HospitalListAdapter;
import com.example.bloodbankapp.api.RetrofitClient;
import com.example.bloodbankapp.entity.Hospital;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class NeedBloodActivity extends AppCompatActivity {

    private Spinner spinnerHospital, spinnerBloodType;
    private Button buttonSubmit;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_need_blood);

        spinnerHospital = findViewById(R.id.spinnerHospital);
        spinnerBloodType = findViewById(R.id.spinnerBloodType);
        buttonSubmit = findViewById(R.id.buttonSubmit);
        List<String> hospitals = new ArrayList<>();
        hospitals.add("select hospital");
        Call<List<Hospital>> call = RetrofitClient.getInstance().getApi().getHospitals();
        call.enqueue(new Callback<List<Hospital>>() {
            @Override
            public void onResponse(Call<List<Hospital>> call, Response<List<Hospital>> response) {
                if (response.isSuccessful()) {
                    // Hospital data fetched successfully

                    List<Hospital> hospitalList = response.body();
                    for (Hospital hospital : hospitalList) {

                        hospitals.add(hospital.getName()); // Assuming getName() method returns the hospital name
                    }

                } else {
                    // Request failed or server returned error response
                    Log.e("TAG", "Failed to fetch hospitals: " + response.message());
                    Toast.makeText(NeedBloodActivity.this, "Failed to fetch hospitals", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<Hospital>> call, Throwable t) {
                Log.e("TAG", "Error fetching hospitals", t);
                Toast.makeText(NeedBloodActivity.this, "Error fetching hospitals", Toast.LENGTH_SHORT).show();
            }
        });
        // Hardcoded hospital names and blood types for demonstration


        ArrayAdapter<String> hospitalAdapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, hospitals);
        hospitalAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerHospital.setAdapter(hospitalAdapter);

        List<String> bloodTypes = new ArrayList<>();
        bloodTypes.add("A+");
        bloodTypes.add("B+");
        bloodTypes.add("O+");
        bloodTypes.add("AB+");
        bloodTypes.add("A-");
        bloodTypes.add("B-");
        bloodTypes.add("O-");
        bloodTypes.add("AB-");

        ArrayAdapter<String> bloodTypeAdapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, bloodTypes);
        bloodTypeAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerBloodType.setAdapter(bloodTypeAdapter);

        buttonSubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String selectedHospital = spinnerHospital.getSelectedItem().toString();
                String selectedBloodType = spinnerBloodType.getSelectedItem().toString();

                // Pass selected hospital and blood type to the next activity
                Intent intent = new Intent(NeedBloodActivity.this, SeeDonorActivity.class);
                intent.putExtra("SELECTED_HOSPITAL", selectedHospital);
                intent.putExtra("SELECTED_BLOOD_TYPE", selectedBloodType);
                startActivity(intent);

            }
        });

    }
}