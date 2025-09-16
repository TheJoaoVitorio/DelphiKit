import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './JsonCardCode.module.css';

const JsonCardCode = ({ jsonData }: { jsonData: any }) => {
    const [textButton, setTextButton] = useState('Copiar');

    const jsonString = JSON.stringify(jsonData, null, 2);

    const handleCopy = () => {
        navigator.clipboard.writeText(jsonString).then(() => {
            setTextButton('Copied!');
            setTimeout(() => {
                setTextButton('Copy');
            }, 2000);
        }).catch(err => {
            console.error('Failed in copy: ', err);
        });
    };

    return (
        <div className="card-code-container">
            <div className="card-code-header">
                <button onClick={handleCopy} className="copy-button">
                    {textButton}
                </button>
            </div>
            <div className="card-code-body">
                <SyntaxHighlighter
                    language="json"
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '1rem',
                        backgroundColor: '#1E1E1E'
                    }}
                    codeTagProps={{
                        style: {
                            fontFamily: '"Fira Code", "Consolas", monospace',
                            fontSize: '14px'
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