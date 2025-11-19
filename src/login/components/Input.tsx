import React from "react";

interface Props {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}

export default function Input({ label, value, type = "text", onChange }: Props) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input placeholder="input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
