'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';
import Image from 'next/image';
import logoPath from '../../assets/logo.png';

import { BookOpenText } from 'lucide-react'


const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'UI library', href: '/ui' },
    { name: 'Frameworks', href: '/frameworks' },
];

export function Header() {
    const navRef = useRef<HTMLElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const activeIndex = navLinks.findIndex(link => link.href === pathname);

    useEffect(() => {
        if (navRef.current && indicatorRef.current && activeIndex !== -1) {
            const activeLink = navRef.current.children[activeIndex] as HTMLElement;
            if (activeLink) {
                indicatorRef.current.style.width = `${activeLink.offsetWidth}px`;
                indicatorRef.current.style.left = `${activeLink.offsetLeft}px`;
            }
        }
    }, [activeIndex, pathname, isMobile]);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {!isMobile && (
                    <Link href="/" className={styles.logo}>
                        <Image
                            src={logoPath}
                            alt="DelphiKit"
                            width={64}
                            height={64}
                            className={styles.logoImage}
                        />
                    </Link>
                )}

                <nav className={styles.nav} ref={navRef}>
                    {navLinks.map((link, index) => (
                        <button
                            key={link.href}
                            className={`${styles.navLink} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => router.push(link.href)}
                            type="button"
                        >
                            {(isMobile && link.href === '/') ? (
                                <Image
                                    src={logoPath}
                                    alt="DelphiKit Home"
                                    width={32}
                                    height={32}
                                    className={styles.logoImage}
                                />
                            ) : (
                                link.name
                            )}
                        </button>
                    ))}
                    {/* <div ref={indicatorRef} className={styles.navIndicator}></div> */}
                </nav>

                {!isMobile && (
                    <div className={styles.actions}>
                        <a
                            href="/docs"
                            className={styles.actionButton}
                        >
                            <BookOpenText />
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}