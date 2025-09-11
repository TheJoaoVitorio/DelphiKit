'use client';

import libraryService from '@/src/services/libraryService';
import { Card } from '../../components/Card/Card';
import Badge from '@/src/components/Badge/Badge';

import { useEffect, useState } from "react";
import { useSearchContext } from "@/src/context/SearchContext";
import { LibraryType } from '@/src/types/library/library.types';

export default function UiPage() {
    const [cardItems, setCardItems] = useState<LibraryType[]>([]);
    
    const { setOnSearch } = useSearchContext();
    
    useEffect(() => {
        const api = libraryService();
        const data = api.getLibraryData();
        setCardItems(data);
        
        setOnSearch(() => handleButtonClick);        
        return () => setOnSearch(() => () => {});
    }, []);

    const handleButtonClick = () => {
        window.open('https://www.youtube.com', '_blank');
    };

    return (
        <>
            <div className="pageContainer">
                <div className="titleRed" >
                    <h1 className="text-3xl font-bold mb-4">
                        UI Library
                        <Badge text={cardItems.length.toString()} />
                    </h1>
                </div>

                <p className="headerText">
                    Discover a variety of UI packages and libraries for Delphi, designed to speed up the development of your applications.
                </p>

                <div className="cardGrid">
                    {cardItems.map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.img}
                            tags={item.tags}
                            category={item.type}
                        />
                    ))}
                </div>                
            </div>
        </>

    );
}