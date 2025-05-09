import React from 'react';

export function RubiCoreLogo({ className }: { className?: string }) {
  return (
    <div className={`font-bold text-2xl text-primary ${className}`}>
      RubiCore<span className="text-foreground">.ai</span>
    </div>
  );
}
