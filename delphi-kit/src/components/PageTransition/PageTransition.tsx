
'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(false);
        const timeout = setTimeout(() => setVisible(true), 250);
        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <div
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0px)' : 'translateY(30px)',
                transition: 'opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
        >
            {children}
        </div>
    );
}
