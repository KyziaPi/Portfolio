// Tailwind CSS Configuration
tailwind = {
  config: {
    theme: {
      extend: {
        colors: {
          brand: {
            dark: '#0a0d14',
            card: '#111625',
            border: '#1e293b',
            accent: '#00f2fe',
            accentGlow: '#4facfe',
            text: '#94a3b8',
            light: '#f8fafc'
          }
        },
        fontFamily: {
          mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
          sans: ['Inter', 'sans-serif']
        }
      }
    }
  }
};

// Certifications Dataset (Includes image URLs)
const certificationsData = [
  {
    id: 'az900',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'Verified Credential',
    image: 'images/certifications/AZ-900.png',
    desc: 'Validates foundational knowledge of cloud concepts, Azure architecture, services, management, and governance.',
    link: 'https://learn.microsoft.com/en-us/users/yerikaelainegueco-1348/credentials/12de351e94b65261'
  },
  {
    id: 'cs50x',
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'Harvard University / edX',
    date: 'Verified Credential',
    image: 'images/certifications/CS50x_Certificate.png',
    desc: 'An entry-level course teaching algorithmic thinking, computational problem solving, memory management, and web development using C, Python, SQL, HTML, CSS, and JavaScript.',
    link: 'https://certificates.cs50.io/37cd8a1a-f7d9-45cd-b5df-1167ddbe7602.pdf?size=letter'
  },
  {
    id: 'ccna',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'Verified Credential',
    image: 'images/certifications/CCNA-INTRO_TO_NETWORKS.png',
    desc: 'Covers network architecture, IP addressing, Ethernet concepts, subnetting, and foundational security configuration.',
    link: 'https://www.credly.com/badges/f1dece8d-1459-4fc5-8cca-0e9cbbc6b197'
  },
  {
    id: 'datascience',
    title: 'Introduction to Data Science',
    issuer: 'Professional Development',
    date: 'Verified Credential',
    image: 'images/certifications/INTRO_TO_DATASCIENCE.png',
    desc: 'Foundational training in data analysis workflows, exploratory data analysis (EDA), data cleaning, and statistical concepts.',
    link: 'https://www.credly.com/badges/eee1aced-14aa-4a9c-86de-a3a6626cc62a'
  },
  {
    id: 'cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Professional Development',
    date: 'Verified Credential',
    image: 'images/certifications/INTRO_TO_CYBERSEC.png',
    desc: 'Overview of modern cyber threat landscapes, network security controls, vulnerabilities, and data protection strategies.',
    link: 'https://www.credly.com/badges/efb92ea8-6283-4328-8d23-0f34aa95c9c3'
  },
  {
    id: 'regionalai2025',
    title: '1st Regional AI Conference 2025: Reinventing Learning Through AI',
    issuer: 'Holy Angel University - School of Computing',
    date: 'December 5, 2025',
    image: 'images/certifications/REGIONAL_AI_CONFERENCE.png',
    desc: 'Regional conference on artificial intelligence applications, emerging AI educational frameworks, and machine learning innovation.',
    link: null
  },
  {
    id: 'nextgen2025',
    title: 'The Next-Gen Developer: Coding with Conscience in the Age of Generative AI',
    issuer: 'Angeles University Foundation',
    date: 'April 29, 2025',
    image: 'images/certifications/Next-Gen_Developer.jpg',
    desc: 'Seminar addressing ethical software development, responsible AI integration, and coding practices in the era of Generative AI tools.',
    link: null
  },
  {
    id: 'readyfordeployment2026',
    title: 'Ready for Deployment: From Classroom Lab to the IT Ecosystem',
    issuer: 'Lightstream8 & Thrive',
    date: 'March 24, 2026',
    image: 'images/certifications/ReadyForDeployment.jpg',
    desc: 'Collaborative career immersion seminar exploring modern enterprise IT ecosystems, software deployment pipelines, and industry readiness.',
    link: null
  },
  {
    id: 'gitgud2026',
    title: 'GIT. GUD: A Hands-on Workshop for Git and GitHub',
    issuer: 'Angeles University Foundation',
    date: 'April 17, 2026',
    image: 'images/certifications/GITGUD.png', // Path to your certificate image
    desc: 'Hands-on workshop focused on mastering version control, Git command-line operations, GitHub collaboration, and professional software engineering workflows.',
    link: null
  }
];

// Mobile Menu Toggle Function
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');
  
  if (!mobileMenu || !menuIcon) return;
  
  const isHidden = mobileMenu.classList.contains('hidden');
  if (isHidden) {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
}

// Modal Control Functions
function openCertModal(certId = null) {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;
  
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  renderCertList();
  selectCert(certId || certificationsData[0].id);
}

function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;
  
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function renderCertList() {
  const listContainer = document.getElementById('cert-list');
  if (!listContainer) return;
  
  listContainer.innerHTML = certificationsData.map(cert => `
    <button type="button" onclick="selectCert('${cert.id}')" id="cert-btn-${cert.id}" 
            class="w-full text-left px-3 py-2.5 rounded font-mono text-xs transition-all flex items-center justify-between border border-transparent hover:border-brand-border hover:bg-brand-card">
      <span class="truncate pr-2">${cert.title}</span>
      <i class="fa-solid fa-chevron-right text-[10px] text-slate-500"></i>
    </button>
  `).join('');
}

function selectCert(id) {
  const cert = certificationsData.find(c => c.id === id) || certificationsData[0];
  
  // Highlight active item in left sidebar
  certificationsData.forEach(c => {
    const btn = document.getElementById(`cert-btn-${c.id}`);
    if (btn) {
      if (c.id === cert.id) {
        btn.className = 'w-full text-left px-3 py-2.5 rounded font-mono text-xs transition-all flex items-center justify-between border border-brand-accent/50 bg-brand-accent/10 text-brand-accent font-bold';
      } else {
        btn.className = 'w-full text-left px-3 py-2.5 rounded font-mono text-xs transition-all flex items-center justify-between border border-transparent hover:border-brand-border hover:bg-brand-card text-slate-400';
      }
    }
  });

  // Populate Image Section
  const imgElem = document.getElementById('cert-image');
  const imgContainer = document.getElementById('cert-image-container');
  if (cert.image) {
    imgElem.src = cert.image;
    imgElem.alt = cert.title;
    imgContainer.classList.remove('hidden');
  } else {
    imgContainer.classList.add('hidden');
  }

  // Populate Text Details
  document.getElementById('cert-title').textContent = cert.title;
  document.getElementById('cert-issuer').textContent = cert.issuer;
  document.getElementById('cert-date').textContent = cert.date;
  document.getElementById('cert-desc').textContent = cert.desc;

  // Conditionally render bottom link button
  const linkContainer = document.getElementById('cert-link-container');
  const linkElem = document.getElementById('cert-link');
  
  if (cert.link) {
    linkElem.href = cert.link;
    linkContainer.classList.remove('hidden');
  } else {
    linkContainer.classList.add('hidden');
  }
}

// Lightbox Functions for Fullscreen Image View
function openCertLightbox() {
  const currentImgSrc = document.getElementById('cert-image').src;
  const lightbox = document.getElementById('cert-lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  
  if (currentImgSrc && lightbox && lightboxImg) {
    lightboxImg.src = currentImgSrc;
    lightbox.classList.remove('hidden');
  }
}

function closeCertLightbox() {
  const lightbox = document.getElementById('cert-lightbox');
  if (lightbox) {
    lightbox.classList.add('hidden');
  }
}

// Close Lightbox & Modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCertLightbox();
    closeCertModal();
  }
});

// Global Carousel Navigation Function
function moveCarousel(button, direction) {
  const carousel = button.closest('.project-carousel');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const caption = carousel.querySelector('.carousel-caption');
  
  let currentIndex = Array.from(slides).findIndex(slide => !slide.classList.contains('hidden'));
  if (currentIndex === -1) currentIndex = 0;
  
  slides[currentIndex].classList.add('hidden');
  
  let newIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[newIndex].classList.remove('hidden');
  
  if (caption) {
    const slideCaption = slides[newIndex].getAttribute('data-caption') || `Screenshot ${newIndex + 1} of ${slides.length}`;
    caption.textContent = slideCaption;
  }
}

// DOM Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertModal();
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});