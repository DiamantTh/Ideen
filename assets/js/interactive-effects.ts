/**
 * Interaktive Effekte für die Ideen-Website
 * - Smooth Scroll
 * - Hover-Animationen
 * - Click-Feedback
 * - Parallax-Effekte
 */

// Smooth Scroll für interne Links
document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scroll Enhancement
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (target) {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Click-Ripple-Effekt für Buttons
  const buttons = document.querySelectorAll('.btn, button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e: MouseEvent) {
      const ripple = document.createElement('span');
      const rect = (this as HTMLElement).getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      (this as HTMLElement).appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Parallax-Effekt für Header mit Performance-Optimierung
  let lastScrollTop = 0;
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const header = document.querySelector('.page-header') as HTMLElement;
        if (header) {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollDelta = scrollTop - lastScrollTop;
          const currentTransform = header.style.transform || 'translateY(0px)';
          const match = currentTransform.match(/translateY\(([0-9.-]+)px\)/);
          const currentY = match ? parseFloat(match[1]) : 0;
          const newY = currentY - (scrollDelta * 0.5);
          
          header.style.transform = `translateY(${newY}px)`;
          lastScrollTop = scrollTop;
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // Intersection Observer für Fade-In-Animationen
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Beobachte alle Überschriften und Absätze
  const elements = document.querySelectorAll('.main-content h2, .main-content h3, .main-content p, .pros-box, .cons-box');
  elements.forEach(el => {
    el.classList.add('fade-in-element');
    observer.observe(el);
  });

  // Hover-Effekt für Code-Blöcke (Kopier-Button)
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    const pre = block.parentElement;
    if (pre) {
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-code-btn';
      copyButton.textContent = '📋 Kopieren';
      copyButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 10px;
        background: rgba(102, 126, 234, 0.9);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;

      pre.style.position = 'relative';
      pre.appendChild(copyButton);

      pre.addEventListener('mouseenter', () => {
        copyButton.style.opacity = '1';
      });

      pre.addEventListener('mouseleave', () => {
        copyButton.style.opacity = '0';
      });

      copyButton.addEventListener('click', () => {
        const text = block.textContent || '';
        navigator.clipboard.writeText(text).then(() => {
          copyButton.textContent = '✓ Kopiert!';
          setTimeout(() => {
            copyButton.textContent = '📋 Kopieren';
          }, 2000);
        });
      });
    }
  });

  // Scroll-to-Top Button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    z-index: 1000;
  `;

  document.body.appendChild(scrollToTopBtn);

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.style.opacity = '1';
          scrollToTopBtn.style.transform = 'scale(1)';
        } else {
          scrollToTopBtn.style.opacity = '0';
          scrollToTopBtn.style.transform = 'scale(0.8)';
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
  });

  scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
  });

  // LED/LCD Optimierung - Dynamische Kontrast-Anpassung
  const adjustContrastForDisplay = () => {
    const pixelRatio = window.devicePixelRatio || 1;
    const body = document.body;
    
    if (pixelRatio > 1.5) {
      // High-DPI Display (Retina, etc.)
      body.style.textRendering = 'optimizeLegibility';
    } else {
      // Standard Display
      body.style.textRendering = 'optimizeSpeed';
    }
  };

  adjustContrastForDisplay();
  window.addEventListener('resize', adjustContrastForDisplay);
});

// CSS für Fade-In-Animation
const style = document.createElement('style');
style.textContent = `
  .fade-in-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .fade-in-element.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    pointer-events: none;
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
