package com.example.bloodbankapp.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.bloodbankapp.R;
import com.example.bloodbankapp.entity.Donor;
import com.example.bloodbankapp.entity.Hospital;

import java.util.List;

public class DonorAdapter extends RecyclerView.Adapter<DonorAdapter.MyViewHolder>{
    private Context context;

    public DonorAdapter(Context context, List<Donor> donorList) {
        this.context = context;
        this.donorList = donorList;
    }

    private List<Donor> donorList ;



    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.activity_see_donor, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull DonorAdapter.MyViewHolder holder, int position) {
        Donor donor = donorList.get(position);
        holder.bind(donor);

    }

    @Override
    public int getItemCount() {
        return donorList.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView textViewDonorBloodType;
        private TextView textViewDonorAge;
        private TextView textViewDonorGender;


        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            textViewDonorBloodType = itemView.findViewById(R.id.textViewDonorBloodType);
            textViewDonorAge = itemView.findViewById(R.id.textViewDonorAge);
            textViewDonorGender = itemView.findViewById(R.id.textViewDonorGender);
        }
        public void bind(Donor donor) {
            textViewDonorBloodType.setText("Blood Type: " + donor.getBlood_Type());
            textViewDonorAge.setText("Age: " + donor.getAge());
            textViewDonorGender.setText("Gender: " + donor.getGender());
        }

    }


    }