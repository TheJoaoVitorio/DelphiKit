'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useSearchContext } from '@/src/context/SearchContext';
import styles from './SearchModal.module.css';

export function SearchModal() {
  const { 
    isModalOpen, 
    closeModal, 
    searchTerm, 
    setSearchTerm, 
    searchResults, 
    performSearch 
  } = useSearchContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);
  
  // Fechar o modal ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, closeModal]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Efeito para debounce da busca
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, performSearch]);

  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <div className={styles.modalHeader}>
          <h2>Search</h2>
        </div>

        <div className={styles.searchInputContainer}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by name or tag..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.resultsContainer}>
          {searchResults.length === 0 && searchTerm ? (
            <div className={styles.noResults}>No results found</div>
          ) : (
            <ul className={styles.resultsList}>
              {searchResults.map((result) => (
                <li key={`${result.type}-${result.id}`} className={styles.resultItem}>
                  <Link 
                    href={`/details/${result.id}?type=${result.type}`}
                    onClick={closeModal}
                    className={styles.resultLink}
                  >
                    <div className={styles.resultImage} style={{ backgroundImage: `url(${result.img})` }} />
                    <div className={styles.resultInfo}>
                      <h3 className={styles.resultName}>{result.name}</h3>
                      <div className={styles.resultTags}>
                        {result.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className={styles.resultTag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}