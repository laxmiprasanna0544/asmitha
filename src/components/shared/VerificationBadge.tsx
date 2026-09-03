import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface VerificationBadgeProps {
  label?: string;
  size?: 'sm' | 'md';
  variant?: 'amber' | 'emerald' | 'navy';
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({ 
  label = 'Verified', 
  size = 'sm',
  variant = 'emerald'
}) => {
  const variantStyles = {
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    amber: 'bg-amber-50 text-amber-800 border-amber-200/80',
    navy: 'bg-slate-900 text-slate-100 border-slate-700'
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm'
  };

  return (
    <span className={`inline-flex items-center gap-1 font-semibold rounded-full border px-2 py-0.5 ${variantStyles[variant]} ${textSizes[size]}`}>
      <ShieldCheck className={`${iconSizes[size]} text-emerald-600 fill-emerald-100`} />
      <span>{label}</span>
    </span>
  );
};
