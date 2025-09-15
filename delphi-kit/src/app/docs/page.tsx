'use client';

import { SetStateAction, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from '../docs/page.module.css'

import IntroContent from './intro/page';

const ApiContent = () => <div><h2>Referência da API</h2><p>Detalhes sobre os endpoints...</p></div>;
const GuidesContent = () => <div><h2>Guias</h2><p>Como usar nosso produto...</p></div>;


export default function DocsPage() {
    const docsOptions = [
        { id: 'intro', label: 'DelphiKit', content: <IntroContent /> },
        { id: 'contribute', label: 'Contribute', content: <ApiContent /> },
        { id: 'guides', label: 'Guias', content: <GuidesContent /> },
    ];

    const [selectedId, setSelectedId] = useState(docsOptions[0].id);

    const activeOption = docsOptions.find(option => option.id === selectedId);

    return (
        <div className={styles.container}>
            <aside>
                <Sidebar
                    options={docsOptions}
                    onSelectionChange={(id: SetStateAction<string>) => setSelectedId(id)}
                    defaultSelectedId={selectedId}
                />
            </aside>

            <main className={styles.main}>
                {activeOption?.content}
            </main>
        </div>
    );
}