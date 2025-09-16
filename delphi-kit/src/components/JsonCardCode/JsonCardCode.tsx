import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './JsonCardCode.module.css';

const JsonCardCode = ({ jsonData }: { jsonData: any }) => {
    const [buttonText, setButtonText] = useState('Copied');
    const [isCopied, setIsCopied] = useState(false);

    const jsonString = JSON.stringify(jsonData, null, 2);

    const handleCopy = () => {
        navigator.clipboard.writeText(jsonString).then(() => {
            setButtonText('Copied!');
            setIsCopied(true);
            setTimeout(() => {
                setButtonText('Copy');
                setIsCopied(false);
            }, 2000);
        }).catch(err => {
            console.error('Falied in copy: ', err);
        });
    };

    const buttonClasses = `${styles.copyButton} ${isCopied ? styles.copied : ''}`;

    return (
        <div className={styles.cardCodeContainer}>
            <div className={styles.cardCodeHeader}>
                <div className={styles.windowControls}>
                    <div className={`${styles.controlDot} ${styles.redDot}`}></div>
                    <div className={`${styles.controlDot} ${styles.redDot}`}></div>
                    <div className={`${styles.controlDot} ${styles.redDot}`}></div>
                </div>

                <button onClick={handleCopy} className={buttonClasses}>
                    {buttonText}
                </button>
            </div>

            <div className={styles.cardCodeBody}>
                <SyntaxHighlighter
                    language="json"
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '1rem',
                        backgroundColor: 'transparent',
                        fontSize: '14px',
                    }}
                    codeTagProps={{
                        style: {
                            fontFamily: '"Fira Code", "Consolas", monospace',
                        }
                    }}
                >
                    {jsonString}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default JsonCardCode;