'use client'; 
import React from 'react';
import styles from './FloatingButton.module.css';

interface FloatingButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
}

export function FloatingButton({ onClick, icon }: FloatingButtonProps) {
  return (
    <button className={styles.floatingButton} onClick={onClick}>
      <div className={styles.shimmerEffect}></div>      
      <div className={styles.iconWrapper}>
        {icon}
      </div>
    </button>
  );
}