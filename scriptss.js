/* ============================================================
   CyberShield Pro – script.js
   Auteur : Joseph Dehazounde
   Fonctionnalités : multilangue, animations scroll, header sticky,
   hamburger, particules, validation formulaire, back-to-top
   ============================================================ */

   import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

   const supabase = createClient(
     'https://kjkodsxuenfsqhyqnowj.supabase.co',
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqa29kc3h1ZW5mc3FoeXFub3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4Njk2NTEsImV4cCI6MjA4NzQ0NTY1MX0.NY_8omRGd8sP4002LmP0m8p__5XyP7kIwKEvaCrRWDI'
   );
  
   'use strict';

   /* ── 1. TRADUCTIONS ── */
   const translations = {
     fr: {
       /* Nav */
       nav_home: 'Accueil',
       nav_services: 'Services',
       nav_about: 'À propos',
       nav_why: 'Pourquoi nous',
       nav_contact: 'Contact',
   
       /* Hero */
       hero_badge: '🔒 Experts en Sécurité Numérique',
       hero_title: 'Solutions Professionnelles en<br/><span class="gradient-text">Cybersécurité, Réseaux</span><br/>& Développement',
       hero_sub: 'Nous protégeons votre infrastructure, construisons vos applications et sécurisons votre avenir numérique avec une expertise de pointe.',
       hero_cta: 'Demander un devis',
       hero_cta2: 'Nos services',
       stat1: 'Projets réalisés',
       stat2: 'Clients satisfaits',
       stat3: 'Support actif',
   
       /* Services */
       services_label: 'Nos Services',
       services_title: 'Des solutions complètes pour votre <span class="gradient-text">sécurité numérique</span>',
       services_sub: 'Nous couvrons l\'ensemble de vos besoins technologiques avec expertise et rigueur.',
       s1_title: 'Cybersécurité',
       s1_desc: 'Audit de sécurité, tests d\'intrusion (pentesting) et sécurisation de vos réseaux contre les cybermenaces modernes.',
       s1_f1: '<i class="fas fa-angle-right"></i> Audit & Pentesting',
       s1_f2: '<i class="fas fa-angle-right"></i> Sécurité réseau',
       s1_f3: '<i class="fas fa-angle-right"></i> Réponse aux incidents',
       s2_title: 'Réseaux Informatiques',
       s2_desc: 'Installation, configuration et maintenance d\'infrastructures réseau performantes, fiables et évolutives.',
       s2_f1: '<i class="fas fa-angle-right"></i> Installation LAN/WAN',
       s2_f2: '<i class="fas fa-angle-right"></i> Configuration routeurs',
       s2_f3: '<i class="fas fa-angle-right"></i> Maintenance préventive',
       s3_title: 'Développement Web',
       s3_desc: 'Création de sites vitrine, e-commerce et applications web sur-mesure, modernes et optimisés SEO.',
       s3_f1: '<i class="fas fa-angle-right"></i> Sites & Landing pages',
       s3_f2: '<i class="fas fa-angle-right"></i> Applications web',
       s3_f3: '<i class="fas fa-angle-right"></i> E-commerce',
       s4_title: 'Développement Mobile',
       s4_desc: 'Applications iOS et Android natives et cross-platform, performantes, intuitives et sécurisées.',
       s4_f1: '<i class="fas fa-angle-right"></i> Android & iOS',
       s4_f2: '<i class="fas fa-angle-right"></i> Apps cross-platform',
       s4_f3: '<i class="fas fa-angle-right"></i> UI/UX mobile',
       card_cta: 'En savoir plus <i class="fas fa-arrow-right"></i>',
   
       /* About */
       about_label: 'À Propos',
       about_title: 'Une expertise technique <span class="gradient-text">solide & éprouvée</span>',
       about_p1: 'CyberShield Pro est une entreprise technologique fondée à Porto-Novo, Bénin, avec une mission claire : fournir des solutions numériques de haute qualité adaptées aux réalités africaines et mondiales.',
       about_p2: 'Notre équipe maîtrise les dernières technologies en cybersécurité, infrastructure réseau, développement web et mobile. Nous intervenons auprès d\'entreprises de toutes tailles, des startups aux grandes organisations, avec la même rigueur et le même niveau d\'excellence.',
       m1: 'Projets livrés',
       m2: 'Clients actifs',
       m3: 'Années d\'expérience',
   
       /* Why */
       why_label: 'Pourquoi Nous',
       why_title: 'Ce qui nous <span class="gradient-text">distingue</span>',
       w1_title: 'Expertise Technique',
       w1_desc: 'Certifications internationales et maîtrise des technologies les plus récentes pour des solutions performantes.',
       w2_title: 'Sécurité Avancée',
       w2_desc: 'Protection proactive contre les cybermenaces avec des méthodologies éprouvées et des outils de pointe.',
       w3_title: 'Solutions Modernes',
       w3_desc: 'Technologies actuelles, code propre et architectures évolutives pour pérenniser vos investissements.',
       w4_title: 'Support 24/7',
       w4_desc: 'Accompagnement continu, réactivité maximale et suivi personnalisé pour chaque client.',
       w5_title: 'Relation de Confiance',
       w5_desc: 'Transparence totale, engagements tenus et partenariat à long terme avec chaque client.',
       w6_title: 'Résultats Mesurables',
       w6_desc: 'Indicateurs clairs, reporting régulier et ROI démontrable sur chaque mission confiée.',
   
       /* Contact */
       contact_label: 'Contact',
       contact_title: 'Travaillons <span class="gradient-text">ensemble</span>',
       contact_sub: 'Décrivez votre projet et nous vous répondons sous 24h.',
       c_email: 'Email',
       c_phone: 'Téléphone',
       c_address: 'Adresse',
       f_nom: 'Nom *',
       f_prenom: 'Prénom *',
       f_email: 'Email *',
       f_tel: 'Téléphone *',
       f_sujet: 'Sujet *',
       f_sujet_default: '-- Sélectionner --',
       f_opt1: 'Cybersécurité',
       f_opt2: 'Réseaux',
       f_opt3: 'Développement Web',
       f_opt4: 'Développement Mobile',
       f_opt5: 'Autre',
       f_message: 'Message *',
       f_send: '<i class="fas fa-paper-plane"></i> Envoyer le message',
       form_ok: 'Message envoyé ! Nous vous répondrons sous 24h.',
   
       /* Footer */
       footer_desc: 'Solutions professionnelles en cybersécurité, réseaux et développement numérique.',
       footer_nav: 'Navigation',
       footer_services: 'Services',
       footer_contact: 'Contact',
       footer_rights: 'Tous droits réservés.',
       footer_legal: 'Mentions légales',
   
       /* Validation */
       err_required: 'Ce champ est requis.',
       err_email: 'Adresse email invalide.',
       err_tel: 'Numéro de téléphone invalide.',
     },
   
     en: {
       nav_home: 'Home',
       nav_services: 'Services',
       nav_about: 'About',
       nav_why: 'Why Us',
       nav_contact: 'Contact',
   
       hero_badge: '🔒 Digital Security Experts',
       hero_title: 'Professional Solutions in<br/><span class="gradient-text">Cybersecurity, Networks</span><br/>& Development',
       hero_sub: 'We protect your infrastructure, build your applications and secure your digital future with cutting-edge expertise.',
       hero_cta: 'Request a Quote',
       hero_cta2: 'Our Services',
       stat1: 'Projects Delivered',
       stat2: 'Satisfied Clients',
       stat3: 'Active Support',
   
       services_label: 'Our Services',
       services_title: 'Complete solutions for your <span class="gradient-text">digital security</span>',
       services_sub: 'We cover all your technological needs with expertise and rigor.',
       s1_title: 'Cybersecurity',
       s1_desc: 'Security audits, penetration testing and network hardening against modern cyber threats.',
       s1_f1: '<i class="fas fa-angle-right"></i> Audit & Pentesting',
       s1_f2: '<i class="fas fa-angle-right"></i> Network Security',
       s1_f3: '<i class="fas fa-angle-right"></i> Incident Response',
       s2_title: 'Network Infrastructure',
       s2_desc: 'Installation, configuration and maintenance of high-performance, reliable and scalable network infrastructures.',
       s2_f1: '<i class="fas fa-angle-right"></i> LAN/WAN Installation',
       s2_f2: '<i class="fas fa-angle-right"></i> Router Configuration',
       s2_f3: '<i class="fas fa-angle-right"></i> Preventive Maintenance',
       s3_title: 'Web Development',
       s3_desc: 'Custom websites, e-commerce and web applications — modern, performant and SEO-optimized.',
       s3_f1: '<i class="fas fa-angle-right"></i> Sites & Landing pages',
       s3_f2: '<i class="fas fa-angle-right"></i> Web Applications',
       s3_f3: '<i class="fas fa-angle-right"></i> E-commerce',
       s4_title: 'Mobile Development',
       s4_desc: 'Native and cross-platform iOS & Android apps — performant, intuitive and secure.',
       s4_f1: '<i class="fas fa-angle-right"></i> Android & iOS',
       s4_f2: '<i class="fas fa-angle-right"></i> Cross-platform Apps',
       s4_f3: '<i class="fas fa-angle-right"></i> Mobile UI/UX',
       card_cta: 'Learn more <i class="fas fa-arrow-right"></i>',
   
       about_label: 'About Us',
       about_title: 'Solid & proven <span class="gradient-text">technical expertise</span>',
       about_p1: 'CyberShield Pro is a technology company founded in Porto-Novo, Benin, with a clear mission: to deliver high-quality digital solutions tailored to African and global realities.',
       about_p2: 'Our team masters the latest technologies in cybersecurity, network infrastructure, web and mobile development. We serve businesses of all sizes — from startups to large organizations — with the same rigor and excellence.',
       m1: 'Projects Delivered',
       m2: 'Active Clients',
       m3: 'Years of Experience',
   
       why_label: 'Why Us',
       why_title: 'What <span class="gradient-text">sets us apart</span>',
       w1_title: 'Technical Expertise',
       w1_desc: 'International certifications and mastery of the latest technologies for high-performing solutions.',
       w2_title: 'Advanced Security',
       w2_desc: 'Proactive protection against cyber threats with proven methodologies and cutting-edge tools.',
       w3_title: 'Modern Solutions',
       w3_desc: 'Current technologies, clean code and scalable architectures to protect your investments.',
       w4_title: '24/7 Support',
       w4_desc: 'Continuous support, maximum responsiveness and personalized follow-up for each client.',
       w5_title: 'Trusted Partnership',
       w5_desc: 'Full transparency, commitments kept and long-term partnership with every client.',
       w6_title: 'Measurable Results',
       w6_desc: 'Clear KPIs, regular reporting and demonstrable ROI on every assignment.',
   
       contact_label: 'Contact',
       contact_title: "Let's work <span class=\"gradient-text\">together</span>",
       contact_sub: 'Describe your project and we\'ll get back to you within 24h.',
       c_email: 'Email',
       c_phone: 'Phone',
       c_address: 'Address',
       f_nom: 'Last Name *',
       f_prenom: 'First Name *',
       f_email: 'Email *',
       f_tel: 'Phone *',
       f_sujet: 'Subject *',
       f_sujet_default: '-- Select --',
       f_opt1: 'Cybersecurity',
       f_opt2: 'Networks',
       f_opt3: 'Web Development',
       f_opt4: 'Mobile Development',
       f_opt5: 'Other',
       f_message: 'Message *',
       f_send: '<i class="fas fa-paper-plane"></i> Send Message',
       form_ok: 'Message sent! We will reply within 24 hours.',
   
       footer_desc: 'Professional solutions in cybersecurity, networks and digital development.',
       footer_nav: 'Navigation',
       footer_services: 'Services',
       footer_contact: 'Contact',
       footer_rights: 'All rights reserved.',
       footer_legal: 'Legal Notice',
   
       err_required: 'This field is required.',
       err_email: 'Invalid email address.',
       err_tel: 'Invalid phone number.',
     },
   
     de: {
       nav_home: 'Startseite',
       nav_services: 'Dienstleistungen',
       nav_about: 'Über uns',
       nav_why: 'Warum wir',
       nav_contact: 'Kontakt',
   
       hero_badge: '🔒 Experten für digitale Sicherheit',
       hero_title: 'Professionelle Lösungen in<br/><span class="gradient-text">Cybersicherheit, Netzwerke</span><br/>& Entwicklung',
       hero_sub: 'Wir schützen Ihre Infrastruktur, entwickeln Ihre Anwendungen und sichern Ihre digitale Zukunft mit modernster Expertise.',
       hero_cta: 'Angebot anfragen',
       hero_cta2: 'Unsere Dienste',
       stat1: 'Projekte geliefert',
       stat2: 'Zufriedene Kunden',
       stat3: 'Aktiver Support',
   
       services_label: 'Unsere Dienste',
       services_title: 'Umfassende Lösungen für Ihre <span class="gradient-text">digitale Sicherheit</span>',
       services_sub: 'Wir decken alle Ihre technologischen Bedürfnisse mit Expertise und Präzision ab.',
       s1_title: 'Cybersicherheit',
       s1_desc: 'Sicherheitsaudits, Penetrationstests und Netzwerksicherung gegen moderne Cyberbedrohungen.',
       s1_f1: '<i class="fas fa-angle-right"></i> Audit & Pentesting',
       s1_f2: '<i class="fas fa-angle-right"></i> Netzwerksicherheit',
       s1_f3: '<i class="fas fa-angle-right"></i> Vorfallsreaktion',
       s2_title: 'Netzwerkinfrastruktur',
       s2_desc: 'Installation, Konfiguration und Wartung leistungsstarker, zuverlässiger Netzwerkinfrastrukturen.',
       s2_f1: '<i class="fas fa-angle-right"></i> LAN/WAN Installation',
       s2_f2: '<i class="fas fa-angle-right"></i> Router-Konfiguration',
       s2_f3: '<i class="fas fa-angle-right"></i> Präventive Wartung',
       s3_title: 'Webentwicklung',
       s3_desc: 'Individuelle Websites, E-Commerce und Webanwendungen – modern, leistungsstark und SEO-optimiert.',
       s3_f1: '<i class="fas fa-angle-right"></i> Websites & Landing Pages',
       s3_f2: '<i class="fas fa-angle-right"></i> Webanwendungen',
       s3_f3: '<i class="fas fa-angle-right"></i> E-Commerce',
       s4_title: 'Mobile Entwicklung',
       s4_desc: 'Native und plattformübergreifende iOS- und Android-Apps – leistungsstark, intuitiv und sicher.',
       s4_f1: '<i class="fas fa-angle-right"></i> Android & iOS',
       s4_f2: '<i class="fas fa-angle-right"></i> Plattformübergreifende Apps',
       s4_f3: '<i class="fas fa-angle-right"></i> Mobile UI/UX',
       card_cta: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
   
       about_label: 'Über Uns',
       about_title: 'Solide & bewährte <span class="gradient-text">technische Expertise</span>',
       about_p1: 'CyberShield Pro ist ein Technologieunternehmen mit Sitz in Porto-Novo, Benin, mit einer klaren Mission: hochwertige digitale Lösungen für afrikanische und globale Realitäten bereitzustellen.',
       about_p2: 'Unser Team beherrscht die neuesten Technologien in Cybersicherheit, Netzwerkinfrastruktur, Web- und Mobilentwicklung. Wir betreuen Unternehmen jeder Größe mit gleicher Sorgfalt und Exzellenz.',
       m1: 'Projekte geliefert',
       m2: 'Aktive Kunden',
       m3: 'Jahre Erfahrung',
   
       why_label: 'Warum Wir',
       why_title: 'Was uns <span class="gradient-text">auszeichnet</span>',
       w1_title: 'Technische Expertise',
       w1_desc: 'Internationale Zertifizierungen und Beherrschung modernster Technologien für leistungsstarke Lösungen.',
       w2_title: 'Erweiterte Sicherheit',
       w2_desc: 'Proaktiver Schutz gegen Cyberbedrohungen mit bewährten Methoden und modernsten Werkzeugen.',
       w3_title: 'Moderne Lösungen',
       w3_desc: 'Aktuelle Technologien, sauberer Code und skalierbare Architekturen für nachhaltige Investitionen.',
       w4_title: '24/7 Support',
       w4_desc: 'Kontinuierliche Betreuung, maximale Reaktionsfähigkeit und persönliche Betreuung für jeden Kunden.',
       w5_title: 'Vertrauensvolle Partnerschaft',
       w5_desc: 'Volle Transparenz, eingehaltene Verpflichtungen und langfristige Partnerschaft mit jedem Kunden.',
       w6_title: 'Messbare Ergebnisse',
       w6_desc: 'Klare KPIs, regelmäßige Berichte und nachweisbarer ROI bei jedem Auftrag.',
   
       contact_label: 'Kontakt',
       contact_title: 'Lassen Sie uns <span class="gradient-text">zusammenarbeiten</span>',
       contact_sub: 'Beschreiben Sie Ihr Projekt und wir antworten innerhalb von 24 Stunden.',
       c_email: 'E-Mail',
       c_phone: 'Telefon',
       c_address: 'Adresse',
       f_nom: 'Nachname *',
       f_prenom: 'Vorname *',
       f_email: 'E-Mail *',
       f_tel: 'Telefon *',
       f_sujet: 'Betreff *',
       f_sujet_default: '-- Auswählen --',
       f_opt1: 'Cybersicherheit',
       f_opt2: 'Netzwerke',
       f_opt3: 'Webentwicklung',
       f_opt4: 'Mobile Entwicklung',
       f_opt5: 'Sonstiges',
       f_message: 'Nachricht *',
       f_send: '<i class="fas fa-paper-plane"></i> Nachricht senden',
       form_ok: 'Nachricht gesendet! Wir antworten innerhalb von 24 Stunden.',
   
       footer_desc: 'Professionelle Lösungen in Cybersicherheit, Netzwerken und digitaler Entwicklung.',
       footer_nav: 'Navigation',
       footer_services: 'Dienstleistungen',
       footer_contact: 'Kontakt',
       footer_rights: 'Alle Rechte vorbehalten.',
       footer_legal: 'Impressum',
   
       err_required: 'Dieses Feld ist erforderlich.',
       err_email: 'Ungültige E-Mail-Adresse.',
       err_tel: 'Ungültige Telefonnummer.',
     }
   };
   
   /* ── 2. ÉTAT GLOBAL ── */
   let currentLang = 'fr';
   
   /* ── 3. TRADUCTION ── */
   function applyTranslations(lang) {
     const t = translations[lang];
     if (!t) return;
     currentLang = lang;
   
     document.querySelectorAll('[data-i18n]').forEach(el => {
       const key = el.dataset.i18n;
       if (t[key] !== undefined) {
         el.innerHTML = t[key];
       }
     });
   
     // Mise à jour lang et title HTML
     document.documentElement.lang = lang;
     const titles = { fr: 'CyberShield Pro – Cybersécurité & Solutions Numériques', en: 'CyberShield Pro – Cybersecurity & Digital Solutions', de: 'CyberShield Pro – Cybersicherheit & Digitale Lösungen' };
     document.title = titles[lang] || document.title;
   }
   
   /* ── 4. BOUTONS DE LANGUE ── */
   document.querySelectorAll('.lang-btn').forEach(btn => {
     btn.addEventListener('click', () => {
       document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
       btn.classList.add('active');
       applyTranslations(btn.dataset.lang);
     });
   });
   
   /* ── 5. HEADER STICKY ── */
   const header = document.getElementById('header');
   function handleScroll() {
     header.classList.toggle('scrolled', window.scrollY > 20);
   
     // Back to top
     const btn = document.getElementById('backTop');
     if (btn) btn.classList.toggle('visible', window.scrollY > 400);
   
     // Active nav link
     const sections = document.querySelectorAll('section[id]');
     let current = '';
     sections.forEach(sec => {
       const top = sec.offsetTop - 100;
       if (window.scrollY >= top) current = sec.id;
     });
     document.querySelectorAll('#nav ul li a').forEach(a => {
       a.classList.toggle('active-link', a.getAttribute('href') === '#' + current);
     });
   }
   window.addEventListener('scroll', handleScroll, { passive: true });
   handleScroll(); // initial call
   
   /* ── 6. HAMBURGER MENU ── */
   const hamburger = document.getElementById('hamburger');
   const nav = document.getElementById('nav');
   hamburger.addEventListener('click', () => {
     const isOpen = hamburger.classList.toggle('open');
     nav.classList.toggle('open', isOpen);
     hamburger.setAttribute('aria-expanded', String(isOpen));
     document.body.style.overflow = isOpen ? 'hidden' : '';
   });
   // Fermer sur clic d'un lien
   document.querySelectorAll('#nav ul li a').forEach(a => {
     a.addEventListener('click', () => {
       hamburger.classList.remove('open');
       nav.classList.remove('open');
       hamburger.setAttribute('aria-expanded', 'false');
       document.body.style.overflow = '';
     });
   });
   
   /* ── 7. SCROLL REVEAL ── */
   function initReveal() {
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add('visible');
           observer.unobserve(entry.target);
         }
       });
     }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
   
     document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
   }
   initReveal();
   
   /* ── 8. PARTICULES HERO ── */
   function createParticles() {
     const container = document.getElementById('particles');
     if (!container) return;
     const count = 30;
   
     for (let i = 0; i < count; i++) {
       const p = document.createElement('div');
       p.className = 'particle';
       const size = Math.random() * 3 + 1;
       const left = Math.random() * 100;
       const duration = Math.random() * 10 + 8;
       const delay = Math.random() * 12;
       p.style.cssText = `
         width: ${size}px; height: ${size}px;
         left: ${left}%;
         animation-duration: ${duration}s;
         animation-delay: -${delay}s;
         opacity: 0;
       `;
       container.appendChild(p);
     }
   }
   createParticles();
   
   /* ── 9. PARALLAXE LÉGER SUR OVERLAY ── */
   function handleParallax() {
     const hero = document.getElementById('hero');
     if (!hero) return;
     const overlay = hero.querySelector('.slider-overlay');
     if (!overlay) return;
     const y = window.scrollY;
     overlay.style.transform = `translateY(${y * 0.03}px)`;
   }
   window.addEventListener('scroll', handleParallax, { passive: true });
   
   /* ── 10. VALIDATION FORMULAIRE ── */
   function getT(key) {
     return (translations[currentLang] || translations.fr)[key] || '';
   }
   
   function validateEmail(v) {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
   }
   function validatePhone(v) {
     return /^[\d\s\+\-\(\)]{6,20}$/.test(v.trim());
   }
   
   function showError(fieldId, errId, msg) {
     const field = document.getElementById(fieldId);
     const errEl = document.getElementById(errId);
     if (field) field.classList.add('invalid');
     if (errEl) errEl.textContent = msg;
   }
   function clearError(fieldId, errId) {
     const field = document.getElementById(fieldId);
     const errEl = document.getElementById(errId);
     if (field) field.classList.remove('invalid');
     if (errEl) errEl.textContent = '';
   }
   
   function validateForm() {
     let valid = true;
     const fields = [
       { id: 'nom',    err: 'err-nom',    type: 'text' },
       { id: 'prenom', err: 'err-prenom', type: 'text' },
       { id: 'email',  err: 'err-email',  type: 'email' },
       { id: 'tel',    err: 'err-tel',    type: 'tel' },
       { id: 'sujet',  err: 'err-sujet',  type: 'text' },
       { id: 'message',err: 'err-message',type: 'text' },
     ];
   
     fields.forEach(f => {
       clearError(f.id, f.err);
       const el = document.getElementById(f.id);
       if (!el) return;
       const val = el.value.trim();
   
       if (!val) {
         showError(f.id, f.err, getT('err_required'));
         valid = false;
       } else if (f.type === 'email' && !validateEmail(val)) {
         showError(f.id, f.err, getT('err_email'));
         valid = false;
       } else if (f.type === 'tel' && !validatePhone(val)) {
         showError(f.id, f.err, getT('err_tel'));
         valid = false;
       }
     });
   
     return valid;
   }
   
   /* Live validation on blur */
   ['nom','prenom','email','tel','sujet','message'].forEach(id => {
     const el = document.getElementById(id);
     if (!el) return;
     el.addEventListener('blur', () => {
       const errId = 'err-' + id;
       const val = el.value.trim();
       clearError(id, errId);
       if (!val) {
         showError(id, errId, getT('err_required'));
       } else if (id === 'email' && !validateEmail(val)) {
         showError(id, errId, getT('err_email'));
       } else if (id === 'tel' && !validatePhone(val)) {
         showError(id, errId, getT('err_tel'));
       }
     });
     el.addEventListener('input', () => {
       if (el.classList.contains('invalid')) {
         clearError(id, 'err-' + id);
       }
     });
   });
   const form = document.getElementById('contactForm');
   if (form) {
     form.addEventListener('submit', async (e) => {
       e.preventDefault();
       if (!validateForm()) return;
   
       const btn = form.querySelector('button[type="submit"]');
       btn.disabled = true;
       btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
   
       try {
         const { error } = await supabase
           .from('messages')
           .insert([{
             nom:     document.getElementById('nom').value.trim(),
             prenom:  document.getElementById('prenom').value.trim(),
             email:   document.getElementById('email').value.trim(),
             tel:     document.getElementById('tel').value.trim(),
             sujet:   document.getElementById('sujet').value,
             message: document.getElementById('message').value.trim(),
             lu:      false
           }]);
   
         if (error) throw error;
   
         form.reset();
         const success = document.getElementById('form-success');
         if (success) {
           success.style.display = 'flex';
           setTimeout(() => { success.style.display = 'none'; }, 6000);
         }
   
       } catch (error) {
         console.error("Erreur Supabase :", error);
         alert("Une erreur est survenue. Réessayez.");
       } finally {
         btn.disabled = false;
         btn.innerHTML = getT('f_send');
       }
     });
   }
   
   /* ── 11. BACK TO TOP ── */
   const backBtn = document.getElementById('backTop');
   if (backBtn) {
     backBtn.addEventListener('click', () => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
     });
   }
   
   /* ── 12. ANNÉE DYNAMIQUE FOOTER ── */
   const yearEl = document.getElementById('year');
   if (yearEl) yearEl.textContent = new Date().getFullYear();
   
   /* ── 13. SMOOTH SCROLL POUR LES ANCRES ── */
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', (e) => {
       const target = document.querySelector(anchor.getAttribute('href'));
       if (target) {
         e.preventDefault();
         const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
         const top = target.getBoundingClientRect().top + window.scrollY - offset;
         window.scrollTo({ top, behavior: 'smooth' });
       }
     });
   });
   
   /* ── 14. CURSOR EFFECT CARDS (desktop) ── */
   if (window.matchMedia('(hover: hover)').matches) {
     document.querySelectorAll('.service-card').forEach(card => {
       card.addEventListener('mousemove', (e) => {
         const rect = card.getBoundingClientRect();
         const x = e.clientX - rect.left;
         const y = e.clientY - rect.top;
         const glow = card.querySelector('.card-glow');
         if (glow) {
           glow.style.left = (x - 90) + 'px';
           glow.style.top  = (y - 90) + 'px';
         }
       });
     });
   }
   
   /* ── 15. HERO IMAGE SLIDER ── */
   (function initSlider() {
     const slides      = document.querySelectorAll('.slide');
     const dots        = document.querySelectorAll('.dot');
     const prevBtn     = document.getElementById('sliderPrev');
     const nextBtn     = document.getElementById('sliderNext');
     const progressBar = document.getElementById('sliderProgressBar');
     const slideLabel  = document.getElementById('slideLabel');
   
     if (!slides.length) return;
   
     const INTERVAL = 5000; // 5 secondes par slide
     const labels = {
       fr: ['Cybersécurité', 'Data Center', 'Développement', 'Réseaux'],
       en: ['Cybersecurity',  'Data Center', 'Development',   'Networks'],
       de: ['Cybersicherheit','Rechenzentrum','Entwicklung',  'Netzwerke'],
     };
   
     let current  = 0;
     let timer    = null;
     let progress = null;
     let startTime = null;
     let elapsed  = 0;
     let paused   = false;
   
     /* Activer un slide */
     function goTo(index) {
       slides[current].classList.remove('active');
       slides[current].classList.add('prev');
       dots[current].classList.remove('active');
       dots[current].setAttribute('aria-selected', 'false');
   
       setTimeout(() => slides[current < slides.length ? current : 0].classList.remove('prev'), 1200);
   
       current = (index + slides.length) % slides.length;
   
       slides[current].classList.add('active');
       dots[current].classList.add('active');
       dots[current].setAttribute('aria-selected', 'true');
   
       // Label
       if (slideLabel) {
         const lang = currentLang || 'fr';
         const arr = labels[lang] || labels.fr;
         slideLabel.style.opacity = '0';
         setTimeout(() => {
           slideLabel.textContent = arr[current];
           slideLabel.style.opacity = '1';
         }, 300);
       }
     }
   
     /* Animation de la barre de progression */
     function startProgress() {
       if (progressBar) {
         progressBar.style.transition = 'none';
         progressBar.style.width = '0%';
         elapsed = 0;
         startTime = performance.now();
   
         requestAnimationFrame(function tick(now) {
           if (paused) return;
           elapsed = now - startTime;
           const pct = Math.min((elapsed / INTERVAL) * 100, 100);
           progressBar.style.width = pct + '%';
           if (pct < 100) {
             progress = requestAnimationFrame(tick);
           }
         });
       }
     }
   
     /* Lancer le timer auto */
     function startTimer() {
       clearInterval(timer);
       startProgress();
       timer = setInterval(() => {
         goTo(current + 1);
         startProgress();
       }, INTERVAL);
     }
   
     /* Pause au survol */
     const hero = document.getElementById('hero');
     if (hero) {
       hero.addEventListener('mouseenter', () => {
         paused = true;
         clearInterval(timer);
         cancelAnimationFrame(progress);
       });
       hero.addEventListener('mouseleave', () => {
         paused = false;
         startTimer();
       });
     }
   
     /* Boutons prev/next */
     if (prevBtn) prevBtn.addEventListener('click', () => { clearInterval(timer); goTo(current - 1); startTimer(); });
     if (nextBtn) nextBtn.addEventListener('click', () => { clearInterval(timer); goTo(current + 1); startTimer(); });
   
     /* Dots */
     dots.forEach((dot, i) => {
       dot.addEventListener('click', () => { clearInterval(timer); goTo(i); startTimer(); });
     });
   
     /* Touch/swipe */
     let touchStartX = 0;
     if (hero) {
       hero.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
       hero.addEventListener('touchend', e => {
         const dx = e.changedTouches[0].clientX - touchStartX;
         if (Math.abs(dx) > 50) {
           clearInterval(timer);
           goTo(dx < 0 ? current + 1 : current - 1);
           startTimer();
         }
       });
     }
   
     /* Init */
     goTo(0);
     startTimer();
   })();
   
   /* ── INIT ── */
   applyTranslations('fr');