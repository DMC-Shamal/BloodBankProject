package com.example.bloodbankapp.activities;

//import static androidx.core.app.NotificationCompatJellybean.TAG;


import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
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

public class HospitalListActivity extends AppCompatActivity implements HospitalListAdapter.OnItemClickListener {
    private HospitalListAdapter adapter;
    private List<Hospital> hospitals;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hospital_list);

        RecyclerView recyclerView = findViewById(R.id.recycler_view_hospitals);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        hospitals = new ArrayList<>();
        adapter = new HospitalListAdapter(this, hospitals);

        //recyclerView.setAdapter(adapter);

        Call<List<Hospital>> call = RetrofitClient.getInstance().getApi().getHospitals();
        call.enqueue(new Callback<List<Hospital>>() {
            @Override
            public void onResponse(Call<List<Hospital>> call, Response<List<Hospital>> response) {
                if (response.isSuccessful()) {
                    // Hospital data fetched successfully
                    List<Hospital> hospitalList = response.body();
                    // Set up HospitalListAdapter
                    HospitalListAdapter adapter = new HospitalListAdapter(HospitalListActivity.this, hospitalList);
                    adapter.setOnItemClickListener(HospitalListActivity.this); // Set item click listener
                    recyclerView.setAdapter(adapter);

                } else {
                    // Request failed or server returned error response
                    Log.e("TAG", "Failed to fetch hospitals: " + response.message());
                    Toast.makeText(HospitalListActivity.this, "Failed to fetch hospitals", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<Hospital>> call, Throwable t) {
                Log.e("TAG", "Error fetching hospitals", t);
                Toast.makeText(HospitalListActivity.this, "Error fetching hospitals", Toast.LENGTH_SHORT).show();
            }
        });


    }

    @Override
    public void onItemClick(Hospital hospital) {
        Intent intent = new Intent(this, HospitalRegistrationActivity.class);
        intent.putExtra("hospital_id", hospital.getH_Id());
        startActivity(intent);
    }


//    private void fetchHospitals() {
////        RetrofitClient.getInstance().getApi().getHospitals().enqueue(new Callback<List<Hospital>>() {
////            @SuppressLint("NotifyDataSetChanged")
////            @Override
////            public void onResponse(@NonNull Call<List<Hospital>> call, @NonNull Response<List<Hospital>> response) {
////                if (response.isSuccessful()) {
////
////                    hospitals.clear();
////                    assert response.body() != null;
////                    hospitals.addAll(response.body());
////                    adapter.notifyDataSetChanged();
////                } else {
////                    Log.e("HospitalListActivity", "Failed to fetch hospitals: " + response.message());
////                    Toast.makeText(HospitalListActivity.this, "Failed to fetch hospitals", Toast.LENGTH_SHORT).show();
////                }
////            }
////
////            @Override
////            public void onFailure(@NonNull Call<List<Hospital>> call, @NonNull Throwable t) {
////                Log.e("HospitalListActivity", "Error fetching hospitals", t);
////                Toast.makeText(HospitalListActivity.this, "Error fetching hospitals", Toast.LENGTH_SHORT).show();
////            }
////
////        });
//    }



        // Fetch hospitals from the database


}
