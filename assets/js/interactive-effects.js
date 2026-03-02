/**
 * Interaktive Effekte für die Ideen-Website
 * - Smooth Scroll
 * - Hover-Animationen
 * - Click-Feedback
 * - Parallax-Effekte
 */

// Smooth Scroll für interne Links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth Scroll Enhancement
  var smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = e.currentTarget.getAttribute('href');
      if (target) {
        var element = document.querySelector(target);
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
  var buttons = document.querySelectorAll('.btn, button');
  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      var ripple = document.createElement('span');
      var rect = this.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height);
      var x = e.clientX - rect.left - size / 2;
      var y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(function() {
        ripple.remove();
      }, 600);
    });
  });

  // Parallax-Effekt für Header
  var lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    var header = document.querySelector('.page-header');
    if (header) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollDelta = scrollTop - lastScrollTop;
      var currentTransform = header.style.transform || 'translateY(0px)';
      var currentY = parseFloat(currentTransform.replace(/[^0-9.-]/g, '') || '0');
      var newY = currentY - (scrollDelta * 0.5);
      
      header.style.transform = 'translateY(' + newY + 'px)';
      lastScrollTop = scrollTop;
    }
  });

  // Intersection Observer für Fade-In-Animationen
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Beobachte alle Überschriften und Absätze
  var elements = document.querySelectorAll('.main-content h2, .main-content h3, .main-content p, .pros-box, .cons-box');
  elements.forEach(function(el) {
    el.classList.add('fade-in-element');
    observer.observe(el);
  });

  // Hover-Effekt für Code-Blöcke (Kopier-Button)
  var codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(function(block) {
    var pre = block.parentElement;
    if (pre) {
      var copyButton = document.createElement('button');
      copyButton.className = 'copy-code-btn';
      copyButton.textContent = '📋 Kopieren';
      copyButton.style.cssText = 
        'position: absolute;' +
        'top: 10px;' +
        'right: 10px;' +
        'padding: 5px 10px;' +
        'background: rgba(102, 126, 234, 0.9);' +
        'color: white;' +
        'border: none;' +
        'border-radius: 4px;' +
        'cursor: pointer;' +
        'font-size: 12px;' +
        'opacity: 0;' +
        'transition: opacity 0.3s ease;';

      pre.style.position = 'relative';
      pre.appendChild(copyButton);

      pre.addEventListener('mouseenter', function() {
        copyButton.style.opacity = '1';
      });

      pre.addEventListener('mouseleave', function() {
        copyButton.style.opacity = '0';
      });

      copyButton.addEventListener('click', function() {
        var text = block.textContent || '';
        navigator.clipboard.writeText(text).then(function() {
          copyButton.textContent = '✓ Kopiert!';
          setTimeout(function() {
            copyButton.textContent = '📋 Kopieren';
          }, 2000);
        });
      });
    }
  });

  // Scroll-to-Top Button
  var scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.style.cssText = 
    'position: fixed;' +
    'bottom: 30px;' +
    'right: 30px;' +
    'width: 50px;' +
    'height: 50px;' +
    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);' +
    'color: white;' +
    'border: none;' +
    'border-radius: 50%;' +
    'font-size: 24px;' +
    'cursor: pointer;' +
    'opacity: 0;' +
    'transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);' +
    'box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);' +
    'z-index: 1000;';

  document.body.appendChild(scrollToTopBtn);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.transform = 'scale(1)';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.transform = 'scale(0.8)';
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  scrollToTopBtn.addEventListener('mouseenter', function() {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
  });

  scrollToTopBtn.addEventListener('mouseleave', function() {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
  });

  // LED/LCD Optimierung - Dynamische Kontrast-Anpassung
  function adjustContrastForDisplay() {
    var pixelRatio = window.devicePixelRatio || 1;
    var body = document.body;
    
    if (pixelRatio > 1.5) {
      // High-DPI Display (Retina, etc.)
      body.style.setProperty('--text-rendering', 'optimizeLegibility');
    } else {
      // Standard Display
      body.style.setProperty('--text-rendering', 'optimizeSpeed');
    }
  }

  adjustContrastForDisplay();
  window.addEventListener('resize', adjustContrastForDisplay);
});

// CSS für Fade-In-Animation
var style = document.createElement('style');
style.textContent = 
  '.fade-in-element {' +
  '  opacity: 0;' +
  '  transform: translateY(20px);' +
  '  transition: opacity 0.6s ease, transform 0.6s ease;' +
  '}' +
  '.fade-in-element.fade-in {' +
  '  opacity: 1;' +
  '  transform: translateY(0);' +
  '}' +
  '.ripple {' +
  '  position: absolute;' +
  '  border-radius: 50%;' +
  '  background: rgba(255, 255, 255, 0.6);' +
  '  pointer-events: none;' +
  '  transform: scale(0);' +
  '  animation: ripple-animation 0.6s ease-out;' +
  '}' +
  '@keyframes ripple-animation {' +
  '  to {' +
  '    transform: scale(4);' +
  '    opacity: 0;' +
  '  }' +
  '}';
document.head.appendChild(style);
