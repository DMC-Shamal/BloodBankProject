//package com.example.bloodbankapp.adapter;
//
//import android.content.Context;
//import android.view.LayoutInflater;
//import android.view.View;
//import android.view.ViewGroup;
//import android.widget.ArrayAdapter;
//import android.widget.TextView;
//
//import androidx.annotation.NonNull;
//import androidx.annotation.Nullable;
//
//import java.util.List;
//
//public class HospitalAdapter extends ArrayAdapter<String> {
//
//    private List<String> hospitals;
//
//    public HospitalAdapter(@NonNull Context context, @NonNull List<String> hospitals) {
//        super(context, 0, hospitals);
//        this.hospitals = hospitals;
//    }
//
//    @NonNull
//    @Override
//    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
//        return initView(position, convertView, parent);
//    }
//
//    @Override
//    public View getDropDownView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
//        return initView(position, convertView, parent);
//    }
//
//    private View initView(int position, View convertView, ViewGroup parent) {
//        if (convertView == null) {
//            convertView = LayoutInflater.from(getContext()).inflate(android.R.layout.simple_spinner_item, parent, false);
//        }
//
//        TextView textViewName = convertView.findViewById(android.R.id.text1);
//        String currentHospital = hospitals.get(position);
//        textViewName.setText(currentHospital);
//
//        return convertView;
//    }
//}
