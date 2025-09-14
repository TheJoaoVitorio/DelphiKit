'use client';

import React, { useState } from 'react';
import styles from './Sidebar.module.css';

type Option = {
    id: string;
    label: string;
};

type SidebarProps = {
    options: Option[];
    onSelectionChange: (id: string) => void;
    defaultSelectedId?: string;
};

export default function Sidebar({ options, onSelectionChange, defaultSelectedId }: SidebarProps) {
    const [selectedOption, setSelectedOption] = useState<string>(
        defaultSelectedId || (options.length > 0 ? options[0].id : '')
    );

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSelectedId = event.target.id;
        setSelectedOption(newSelectedId);
        onSelectionChange(newSelectedId);
    };

    return (
        <div
            className={styles.radioContainer}
            style={{ '--total-radio': options.length } as React.CSSProperties}
        >
            {options.map((option, index) => (
                <React.Fragment key={option.id}>
                    <input
                        id={option.id}
                        name="sidebar-radio-group"
                        type="radio"
                        checked={selectedOption === option.id}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                </React.Fragment>
            ))}

            <div className={styles.gliderContainer}>
                <div className={styles.glider}></div>
            </div>
        </div>
    );
}