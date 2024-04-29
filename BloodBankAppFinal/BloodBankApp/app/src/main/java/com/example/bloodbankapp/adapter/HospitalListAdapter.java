package com.example.bloodbankapp.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.bloodbankapp.entity.Hospital;
import com.example.bloodbankapp.R;

import java.util.List;

public class HospitalListAdapter extends RecyclerView.Adapter<HospitalListAdapter.MyViewHolder> {

    private final Context context;
   private final List<Hospital> hospitalList;

    public interface OnItemClickListener {
        void onItemClick(Hospital hospital);
    }

    private OnItemClickListener listener;

    public void setOnItemClickListener(OnItemClickListener listener) {
        this.listener = listener;
    }

    //Hospital hospitalList;
    public HospitalListAdapter(Context context, List<Hospital> hospitalList) {
        this.context = context;
        this.hospitalList = hospitalList;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.activity_hospital_list, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        Hospital hospital = hospitalList.get(position);
        holder.nameTextView.setText(hospital.getName());

        holder.itemView.setOnClickListener(view -> {
            if (listener != null) {
                listener.onItemClick(hospital);
            }
        });

    }

    @Override
    public int getItemCount() {
        return hospitalList.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {
        TextView nameTextView;


        public MyViewHolder(View itemView) {
            super(itemView);
            nameTextView = itemView.findViewById(R.id.textHospitalName);

        }
    }
}
