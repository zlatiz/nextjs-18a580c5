"use client";
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn-gradient ${className}`}>{children}</button>
  );
}
