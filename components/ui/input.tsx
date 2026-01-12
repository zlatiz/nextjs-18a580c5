"use client";
import React, { useState } from 'react';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export default function Input({ placeholder = '', value = '', onChange, className = '' }: InputProps) {
  const [val, setVal] = useState<string>(value);
  return (
    <input
      className={`w-full p-2 rounded-md bg-[--muted] border border-[--border] text-[--foreground] ${className}`}
      placeholder={placeholder}
      value={val}
      onChange={(e) => { setVal(e.target.value); onChange && onChange(e.target.value); }}
    />
  );
}
