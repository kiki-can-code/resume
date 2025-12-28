/**
 * Resume Website - Interactive Features
 * Theme toggle (light/dark) and language toggle (de/en)
 */

(function() {
    'use strict';

    // ============================================
    // Theme Toggle
    // ============================================

    const THEME_KEY = 'resume-theme';
    const themeToggle = document.getElementById('theme-toggle');

    function getPreferredTheme() {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored) return stored;
        
        return window.matchMedia('(prefers-color-scheme: dark)').matches 
            ? 'dark' 
            : 'light';
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
        
        // Update aria-label for accessibility
        const label = theme === 'dark' 
            ? 'Switch to light mode' 
            : 'Switch to dark mode';
        themeToggle.setAttribute('aria-label', label);
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    }

    // Initialize theme
    setTheme(getPreferredTheme());

    // Listen for toggle clicks
    themeToggle.addEventListener('click', toggleTheme);

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // ============================================
    // Language Toggle
    // ============================================

    const LANG_KEY = 'resume-lang';
    const langToggle = document.getElementById('lang-toggle');
    const langIndicator = langToggle.querySelector('.lang-indicator');

    function getPreferredLang() {
        const stored = localStorage.getItem(LANG_KEY);
        if (stored) return stored;
        
        // Check browser language
        const browserLang = navigator.language.toLowerCase();
        return browserLang.startsWith('de') ? 'de' : 'en';
    }

    function setLang(lang) {
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem(LANG_KEY, lang);
        
        // Update button indicator to show the OTHER language (what you can switch to)
        langIndicator.textContent = lang === 'de' ? 'EN' : 'DE';
        
        // Update aria-label
        const label = lang === 'de' 
            ? 'Switch to English' 
            : 'Auf Deutsch wechseln';
        langToggle.setAttribute('aria-label', label);
    }

    function toggleLang() {
        const current = document.documentElement.getAttribute('lang');
        const next = current === 'de' ? 'en' : 'de';
        setLang(next);
    }

    // Initialize language
    setLang(getPreferredLang());

    // Listen for toggle clicks
    langToggle.addEventListener('click', toggleLang);

    // ============================================
    // Intersection Observer for Fade-In Animation
    // (Re-trigger animation when scrolling back into view)
    // ============================================

    // Optional: Uncomment this to re-trigger animations on scroll
    /*
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    */

    // ============================================
    // Keyboard Navigation
    // ============================================

    document.addEventListener('keydown', (e) => {
        // Toggle theme with 'T' key
        if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            const activeElement = document.activeElement;
            if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                toggleTheme();
            }
        }

        // Toggle language with 'L' key
        if (e.key === 'l' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            const activeElement = document.activeElement;
            if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                toggleLang();
            }
        }
    });

})();
