package com.example.bloodbankapp.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.List;

public class bloodTypeAdapter extends ArrayAdapter<String> {

    private List<String> bloodTypes;

    public bloodTypeAdapter(@NonNull Context context, int resource, @NonNull List<String> objects, List<String> bloodTypes) {
        super(context, resource, objects);
        this.bloodTypes = bloodTypes;
    }

    public bloodTypeAdapter(@NonNull Context context, int resource) {
        super(context, resource);
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        return initView(position, convertView, parent);
    }

    @Override
    public View getDropDownView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        return initView(position, convertView, parent);
    }

    private View initView(int position, View convertView, ViewGroup parent) {
        if (convertView == null) {
            convertView = LayoutInflater.from(getContext()).inflate(android.R.layout.simple_spinner_item, parent, false);
        }

        TextView textViewName = convertView.findViewById(android.R.id.text1);
        String currentBloodType = bloodTypes.get(position);
        textViewName.setText(currentBloodType);

        return convertView;
    }


}
