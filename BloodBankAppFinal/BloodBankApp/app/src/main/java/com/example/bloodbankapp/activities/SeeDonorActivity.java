package com.example.bloodbankapp.activities;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.text.TextUtils;
import android.widget.TextView;

import com.example.bloodbankapp.R;
import com.example.bloodbankapp.entity.Donor;

import java.util.List;

public class SeeDonorActivity extends AppCompatActivity {

    private RecyclerView recyclerView;
    //private DonorAdapter donorAdapter;
    private List<Donor> donorList;

    TextView textViewDonorBloodType,textViewDonorAge,textViewDonorGender;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_see_donor);
        textViewDonorBloodType=findViewById(R.id.textViewDonorBloodType);
        String selectedBloodType = getIntent().getStringExtra("SELECTED_BLOOD_TYPE");
        textViewDonorBloodType.setText("blood type: " +selectedBloodType);


    }
}