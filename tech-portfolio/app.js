// Tech-focused Portfolio JavaScript

// Application data
const portfolioData = {
  personalInfo: {
    name: "Jordan Chen",
    title: "Full-Stack Developer & Tech Innovator",
    tagline: "Building digital experiences that scale",
    bio: "Passionate full-stack developer with 6+ years of experience crafting scalable web applications and leading technical teams. I thrive on solving complex problems with clean, efficient code and have a proven track record of delivering high-impact solutions in fast-paced startup environments.",
    location: "San Francisco, CA",
    email: "jordan.chen@email.com",
    yearsExperience: "6+",
    projectsCompleted: "75+",
    githubRepos: "40+",
    openSourceContributions: "120+"
  },
  skills: {
    languages: [
      {name: "JavaScript", level: 95, icon: "🟨"},
      {name: "TypeScript", level: 90, icon: "🔷"},
      {name: "Python", level: 85, icon: "🐍"},
      {name: "Go", level: 75, icon: "🚀"},
      {name: "Rust", level: 70, icon: "⚡"}
    ],
    frontend: [
      {name: "React", level: 95, icon: "⚛️"},
      {name: "Next.js", level: 90, icon: "▲"},
      {name: "Vue.js", level: 85, icon: "💚"},
      {name: "Svelte", level: 80, icon: "🧡"},
      {name: "Tailwind CSS", level: 90, icon: "🎨"}
    ],
    backend: [
      {name: "Node.js", level: 95, icon: "💚"},
      {name: "Express", level: 90, icon: "🚂"},
      {name: "FastAPI", level: 85, icon: "⚡"},
      {name: "GraphQL", level: 80, icon: "💜"},
      {name: "Docker", level: 85, icon: "🐳"}
    ],
    databases: [
      {name: "PostgreSQL", level: 90, icon: "🐘"},
      {name: "MongoDB", level: 85, icon: "🍃"},
      {name: "Redis", level: 80, icon: "🔴"},
      {name: "SQLite", level: 85, icon: "💎"}
    ],
    devops: [
      {name: "AWS", level: 85, icon: "☁️"},
      {name: "Kubernetes", level: 75, icon: "⚙️"},
      {name: "CI/CD", level: 80, icon: "🔄"},
      {name: "Nginx", level: 75, icon: "🌐"}
    ]
  },
  projects: [
    {
      id: 1,
      title: "DevTools Dashboard",
      description: "A comprehensive developer productivity suite with real-time code metrics, deployment tracking, and team collaboration features",
      image: "https://via.placeholder.com/600x300/0d1117/58a6ff?text=DevTools+Dashboard",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSocket", "Docker"],
      category: "fullstack",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://devtools-demo.com",
      highlights: ["Real-time collaboration", "50+ integrations", "10k+ daily users"]
    },
    {
      id: 2,
      title: "AI Code Reviewer",
      description: "Machine learning powered code review assistant that provides intelligent suggestions and detects potential issues",
      image: "https://via.placeholder.com/600x300/161b22/3fb950?text=AI+Code+Reviewer",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI"],
      category: "ai",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://ai-reviewer-demo.com",
      highlights: ["95% accuracy", "30+ languages", "GitHub integration"]
    },
    {
      id: 3,
      title: "Real-time Collaboration Platform",
      description: "WebSocket-based platform enabling seamless team collaboration with live document editing and video calls",
      image: "https://via.placeholder.com/600x300/0d1117/ff8c42?text=Collaboration+Platform",
      technologies: ["Vue.js", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
      category: "fullstack",
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://collab-demo.com",
      highlights: ["Sub-second latency", "500+ concurrent users", "E2E encryption"]
    },
    {
      id: 4,
      title: "Cloud Infrastructure Manager",
      description: "DevOps automation tool for managing cloud resources across multiple providers with cost optimization",
      image: "https://via.placeholder.com/600x300/161b22/58a6ff?text=Cloud+Manager",
      technologies: ["Go", "Kubernetes", "AWS", "Terraform", "Grafana"],
      category: "devops",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://cloud-manager-demo.com",
      highlights: ["40% cost reduction", "Multi-cloud support", "Auto-scaling"]
    },
    {
      id: 5,
      title: "Open Source Contribution Tracker",
      description: "GitHub API powered dashboard to track and visualize open source contributions across repositories",
      image: "https://via.placeholder.com/600x300/0d1117/3fb950?text=OSS+Tracker",
      technologies: ["Svelte", "GitHub API", "D3.js", "Supabase"],
      category: "frontend",
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://oss-tracker-demo.com",
      highlights: ["GitHub integration", "Beautiful visualizations", "Community features"]
    },
    {
      id: 6,
      title: "Performance Monitoring Suite",
      description: "Full-stack application performance monitoring with real-time alerts and detailed analytics",
      image: "https://via.placeholder.com/600x300/161b22/ff8c42?text=Performance+Monitor",
      technologies: ["React", "Node.js", "InfluxDB", "Grafana", "Docker"],
      category: "fullstack",
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://perf-monitor-demo.com",
      highlights: ["Real-time alerts", "Custom dashboards", "99.9% uptime"]
    }
  ]
};

// DOM Elements
let themeToggle, mobileMenuToggle, mobileMenu, header, navLinks, contactForm;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  themeToggle = document.getElementById('themeToggle');
  mobileMenuToggle = document.getElementById('mobileMenuToggle');
  mobileMenu = document.getElementById('mobileMenu');
  header = document.getElementById('header');
  navLinks = document.querySelectorAll('.nav__link, .mobile-nav__link');
  contactForm = document.getElementById('contactForm');
  
  // Initialize components
  initTheme();
  initNavigation();
  initMobileMenu();
  initTypewriter();
  initMatrixBackground();
  renderSkills();
  renderProjects();
  initProjectFilters();
  initContactForm();
  initScrollAnimations();
  initScrollSpy();
});

// Theme Management
function initTheme() {
  if (!themeToggle) return;
  
  // Start in dark mode (tech preference)
  setTheme('dark');
  
  themeToggle.addEventListener('click', toggleTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-color-scheme', theme);
  document.body.setAttribute('data-color-scheme', theme);
  
  if (themeToggle) {
    const icon = themeToggle.querySelector('.theme-toggle__icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Mobile Menu
function initMobileMenu() {
  if (!mobileMenuToggle || !mobileMenu) return;
  
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  
  // Close mobile menu when clicking navigation links
  document.querySelectorAll('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  if (!mobileMenu || !mobileMenuToggle) return;
  
  mobileMenu.classList.toggle('active');
  mobileMenuToggle.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
  if (!mobileMenu || !mobileMenuToggle) return;
  
  mobileMenu.classList.remove('active');
  mobileMenuToggle.classList.remove('active');
  document.body.style.overflow = '';
}

// Navigation and Smooth Scrolling
function initNavigation() {
  if (!navLinks) return;
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = targetSection.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
      
      closeMobileMenu();
    });
  });
}

// Scroll Spy for Navigation
function initScrollSpy() {
  if (!navLinks) return;
  
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + (header ? header.offsetHeight : 0) + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
    
    // Header background on scroll
    if (header) {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(13, 17, 23, 0.98)';
      } else {
        header.style.background = 'rgba(13, 17, 23, 0.95)';
      }
    }
  });
}

// Typewriter Effect
function initTypewriter() {
  const typewriterElement = document.querySelector('.typewriter');
  if (!typewriterElement) return;
  
  const words = ['Full-Stack Developer', 'Tech Innovator', 'Problem Solver', 'Code Architect'];
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(0, currentCharIndex - 1);
      currentCharIndex--;
    } else {
      typewriterElement.textContent = currentWord.substring(0, currentCharIndex + 1);
      currentCharIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && currentCharIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(type, typeSpeed);
  }
  
  type();
}

// Matrix Background Effect
function initMatrixBackground() {
  const matrixBg = document.getElementById('matrixBg');
  if (!matrixBg) return;
  
  // Simple matrix effect - could be expanded for more complexity
  setInterval(() => {
    const opacity = Math.random() * 0.05 + 0.01;
    matrixBg.style.opacity = opacity;
  }, 2000);
}

// Skills Section
function renderSkills() {
  const skillsContainer = document.getElementById('skillsContainer');
  if (!skillsContainer) return;
  
  const skillCategories = [
    { title: '💻 Programming Languages', icon: '{}', key: 'languages' },
    { title: '🎨 Frontend Technologies', icon: '⚛️', key: 'frontend' },
    { title: '⚙️ Backend & APIs', icon: '🔧', key: 'backend' },
    { title: '🗄️ Databases', icon: '📊', key: 'databases' },
    { title: '☁️ DevOps & Cloud', icon: '🚀', key: 'devops' }
  ];
  
  const skillsHTML = skillCategories.map(category => {
    const skills = portfolioData.skills[category.key] || [];
    return `
      <div class="skill-category animate-on-scroll">
        <h3 class="skill-category__title">
          <span class="skill-category__icon">${category.icon}</span>
          ${category.title}
        </h3>
        <div class="skill-category__grid">
          ${skills.map(skill => `
            <div class="skill-item">
              <div class="skill-item__info">
                <span class="skill-item__icon">${skill.icon}</span>
                <span class="skill-item__name">${skill.name}</span>
              </div>
              <span class="skill-item__level">${skill.level}%</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
  
  skillsContainer.innerHTML = skillsHTML;
}

// Projects Section
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;
  
  const projectsHTML = portfolioData.projects.map(project => `
    <div class="project-card animate-on-scroll" data-category="${project.category}">
      <img src="${project.image}" alt="${project.title}" class="project-card__image" loading="lazy">
      <div class="project-card__content">
        <div class="project-card__header">
          <h3 class="project-card__title">${project.title}</h3>
          ${project.featured ? '<span class="project-card__featured">Featured</span>' : ''}
        </div>
        <p class="project-card__description">${project.description}</p>
        <div class="project-card__technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-card__highlights">
          <ul>
            ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
          </ul>
        </div>
        <div class="project-card__actions">
          <a href="${project.githubUrl}" target="_blank" class="btn btn--outline">
            <span class="btn__icon">📦</span>
            View Code
          </a>
          <a href="${project.liveUrl}" target="_blank" class="btn btn--primary">
            <span class="btn__icon">🚀</span>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  `).join('');
  
  projectsGrid.innerHTML = projectsHTML;
}

// Project Filtering
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // Update active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter projects
      filterProjects(filter);
    });
  });
}

function filterProjects(category) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const projectCategory = card.getAttribute('data-category');
    
    if (category === 'all' || projectCategory === category) {
      card.classList.remove('hidden');
      setTimeout(() => {
        card.style.display = 'block';
      }, 50);
    } else {
      card.classList.add('hidden');
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Contact Form
function initContactForm() {
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', handleFormSubmission);
  
  // Real-time validation
  const formInputs = contactForm.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearFieldError(input));
  });
}

function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  let isValid = true;
  let errorMessage = '';
  
  clearFieldError(field);
  
  if (!value) {
    errorMessage = `${capitalizeFirst(fieldName)} is required`;
    isValid = false;
  } else {
    switch (fieldName) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMessage = 'Please enter a valid email address';
          isValid = false;
        }
        break;
      case 'name':
        if (value.length < 2) {
          errorMessage = 'Name must be at least 2 characters long';
          isValid = false;
        }
        break;
      case 'message':
        if (value.length < 10) {
          errorMessage = 'Message must be at least 10 characters long';
          isValid = false;
        }
        break;
    }
  }
  
  if (!isValid) {
    showFieldError(field, errorMessage);
  }
  
  return isValid;
}

function showFieldError(field, message) {
  const errorElement = document.getElementById(`${field.name}Error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
  field.style.borderColor = 'var(--color-tech-error)';
}

function clearFieldError(field) {
  const errorElement = document.getElementById(`${field.name}Error`);
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.classList.remove('show');
  }
  field.style.borderColor = 'var(--color-tech-border)';
}

function handleFormSubmission(e) {
  e.preventDefault();
  
  const formInputs = contactForm.querySelectorAll('input, textarea');
  let isFormValid = true;
  
  // Validate all fields
  formInputs.forEach(input => {
    if (!validateField(input)) {
      isFormValid = false;
    }
  });
  
  if (isFormValid) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="btn__icon">⏳</span>Sending...';
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      // Reset form
      contactForm.reset();
      
      // Show success message
      const successMessage = document.getElementById('formSuccess');
      if (successMessage) {
        successMessage.classList.remove('hidden');
        
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 5000);
      }
      
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      
      // Clear any remaining errors
      formInputs.forEach(input => clearFieldError(input));
    }, 2000);
  }
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// Utility Functions
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Handle page load animations
window.addEventListener('load', () => {
  // Animate hero elements
  const heroElements = document.querySelectorAll('.hero__terminal, .hero__stats, .hero__actions');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('fade-in-up');
    }, index * 200);
  });
  
  // Start matrix background animation
  setTimeout(() => {
    const matrixBg = document.getElementById('matrixBg');
    if (matrixBg) {
      matrixBg.style.animation = 'matrix-scroll 20s linear infinite';
    }
  }, 1000);
});

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// Keyboard shortcuts for developers
document.addEventListener('keydown', (e) => {
  // ESC key closes mobile menu
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
  
  // Developer easter egg - Konami code or special key combination
  if (e.ctrlKey && e.shiftKey && e.key === 'D') {
    console.log(`
    ╔══════════════════════════════════════╗
    ║        🚀 Developer Mode Active      ║
    ║                                      ║
    ║  Thanks for checking out the code!   ║
    ║  Built with ❤️ by Jordan Chen        ║
    ║                                      ║
    ║  Stack: HTML5, CSS3, Vanilla JS      ║
    ║  Theme: GitHub Dark inspired         ║
    ╚══════════════════════════════════════╝
    `);
  }
});

// Add some developer-friendly console styling
console.log('%c🚀 Jordan Chen Portfolio', 'color: #58a6ff; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with modern web technologies and attention to detail', 'color: #7d8590; font-size: 14px;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #3fb950; font-size: 14px;');

// Performance monitoring for tech enthusiasts
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perf = performance.getEntriesByType('navigation')[0];
      console.log(`%c⚡ Performance Metrics:
        DOM Content Loaded: ${Math.round(perf.domContentLoadedEventEnd - perf.domContentLoadedEventStart)}ms
        Page Load: ${Math.round(perf.loadEventEnd - perf.loadEventStart)}ms
        Total Time: ${Math.round(perf.loadEventEnd - perf.navigationStart)}ms`, 
        'color: #ff8c42; font-family: monospace;');
    }, 0);
  });
}

// Service Worker registration for PWA-like experience (commented out for sandbox)
/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => console.log('SW registered'))
      .catch(error => console.log('SW registration failed'));
  });
}
*/