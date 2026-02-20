document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full mt-10 bg-gray-100 dark:bg-[#1A1A2E] text-gray-900 dark:text-white transition-colors duration-300" style="border-top: 4px solid #0b8482;">
  <div class="max-w-7xl mx-auto px-4 py-14 grid gap-10
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

    <!-- Brand Section -->
    <div>
      <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse">
      
        <span class="text-xl font-bold" style="color: #7B2CBF;">
          Groww<span style="color: #0b8482;">Craft</span>
        </span>
      </a>
      <p class="mt-3 text-sm text-gray-700 dark:text-gray-300">
        Your one-stop destination for unique hobbyist supplies — yarns, beads, paints, and endless creative possibilities.
      </p>

      <!-- Social Icons with Craft Theme -->
      <div class="mt-5 flex gap-3">
        <a href="#" class="w-9 h-9 grid place-items-center rounded-lg transition-all duration-300 hover:scale-110" style="background: #7B2CBF20; color: #7B2CBF; hover:background: #7B2CBF; hover:color: white;">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="w-9 h-9 grid place-items-center rounded-lg transition-all duration-300 hover:scale-110" style="background: #0b848220; color: #0b8482; hover:background: #0b8482; hover:color: white;">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" class="w-9 h-9 grid place-items-center rounded-lg transition-all duration-300 hover:scale-110" style="background: #7B2CBF20; color: #7B2CBF; hover:background: #7B2CBF; hover:color: white;">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="w-9 h-9 grid place-items-center rounded-lg transition-all duration-300 hover:scale-110" style="background: #0b848220; color: #0b8482; hover:background: #0b8482; hover:color: white;">
          <i class="fab fa-pinterest-p"></i>
        </a>
      </div>
    </div>

    <!-- Shop Categories -->
    <div>
      <h3 class="text-lg font-semibold mb-3 relative inline-block" style="color: #7B2CBF; padding-bottom: 5px;">Shop Categories</h3>
      <ul class="space-y-2 text-sm mt-4">
        <li>
          <a href="#" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
            Painting Supplies
          </a>
        </li>
        <li>
          <a href="#" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
            Scrapbooking & Paper
          </a>
        </li>
        <li>
          <a href="#" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
        Yarn & Knitting
          </a>
        </li>
        <li>
          <a href="#" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
             Beading & Jewelry
          </a>
        </li>
      </ul>
    </div>

    <!-- Maker Community -->
    <div>
      <h3 class="text-lg font-semibold mb-3 relative inline-block" style="color: #7B2CBF;  padding-bottom: 5px;">Maker Community</h3>
      <ul class="space-y-2 text-sm mt-4">
        <li>
          <a href="#" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
            Become a Creator
          </a>
        </li>
        <li>
          <a href="#" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
            Featured Artisans
          </a>
        </li>
        <li>
          <a href="#" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
           Share Your Project
          </a>
        </li>
        <li>
          <a href="#" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
           Saved Ideas
          </a>
        </li>
      </ul>
    </div>

    <!-- Quick Links -->
    <div>
      <h3 class="text-lg font-semibold mb-3 relative inline-block" style="color: #7B2CBF;  padding-bottom: 5px;">Quick Links</h3>
      <ul class="space-y-2 text-sm mt-4">
        <li>
          <a href="index.html" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
            Home
          </a>
        </li>
        <li>
          <a href="about.html" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
            About Us
          </a>
        </li>
        <li>
          <a href="blog.html" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
             Craft Blog
          </a>
        </li>
        <li>
          <a href="contact.html" class="hover:pl-2 transition-all duration-300 flex items-center" style="color: black; dark:color: #FFFFFF; hover:color: #7B2CBF;">
            Contact
          </a>
        </li>
      </ul>
    </div>

    <!-- Newsletter & Craft Tips -->
    <div>
      <h3 class="text-lg font-semibold mb-3 relative inline-block" style="color: #7B2CBF;  padding-bottom: 5px;">Crafty Newsletter</h3>
      <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
        Get weekly DIY inspiration, free patterns, and exclusive deals delivered to your inbox! 
      </p>

      <form class="flex flex-col gap-2" id="newsletterForm">
        <div class="flex gap-2">
          <input type="email"
            placeholder="Your email address"
            class="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border transition-all focus:outline-none focus:ring-2"
            style="border-color: #0b8482; focus:ring-color: #7B2CBF; color: black; dark:color: white;">
          <button type="submit"
            class="px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
            style="background: #0b8482; hover:background: #7B2CBF;">
            Join
          </button>
        </div>
       
      </form>

   
    </div>
  </div>

  <!-- Bottom Bar with Craft Elements -->
  <div class="border-t" style="border-color: #0b8482;">
    <div class="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row gap-3 
                justify-between items-center text-sm text-gray-700 dark:text-gray-300">

      <div class="flex items-center gap-2">
        <p>© 2026 GrowwCraft — Made with  for crafters everywhere</p>
      </div>

      <div class="flex gap-6">
        <a href="#" class="hover:underline hover:scale-105 transition-all duration-300" style="hover:color: #7B2CBF;">
          Privacy
        </a>
        <a href="#" class="hover:underline hover:scale-105 transition-all duration-300" style="hover:color: #7B2CBF;">
   Terms
        </a>
        <a href="#" class="hover:underline hover:scale-105 transition-all duration-300" style="hover:color: #7B2CBF;">
           Support
        </a>
        <a href="#" class="hover:underline hover:scale-105 transition-all duration-300" style="hover:color: #7B2CBF;">
          Craft Tips
        </a>
      </div>
    </div>
  </div>


</footer>
`;

  /* ===============================
     FOOTER INTERACTIVITY
  =============================== */
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        // Show success message (you can customize this)
        alert('🎨 Thanks for subscribing! Check your inbox for crafty inspiration.');
        emailInput.value = '';
      } else {
        alert('Please enter your email address to get crafty updates!');
      }
    });
  }

  /* ===============================
     SYNC WITH NAVBAR THEME
  =============================== */
  
  // Listen for theme changes from navbar
  function updateFooterTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const footer = document.querySelector('footer');
    
    if (isDark) {
      footer?.classList.add('dark');
      footer?.classList.remove('bg-gray-100');
      footer?.classList.add('bg-[#1A1A2E]');
    } else {
      footer?.classList.remove('dark');
      footer?.classList.remove('bg-[#1A1A2E]');
      footer?.classList.add('bg-gray-100');
    }
  }

  // Watch for dark mode changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        updateFooterTheme();
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true });

  // Initial theme sync
  updateFooterTheme();

  // RTL support for footer
  function updateFooterRTL() {
    const isRTL = document.documentElement.dir === 'rtl';
    const footerLinks = document.querySelectorAll('footer a');
    
    footerLinks.forEach(link => {
      if (isRTL) {
        link.style.marginRight = '0';
        link.style.marginLeft = '0.5rem';
      } else {
        link.style.marginRight = '0.5rem';
        link.style.marginLeft = '0';
      }
    });
  }

  // Watch for RTL changes
  const rtlObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'dir') {
        updateFooterRTL();
      }
    });
  });

  rtlObserver.observe(document.documentElement, { attributes: true });

  // Initial RTL sync
  updateFooterRTL();

  /* ===============================
     ADD FOOTER DARK MODE STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    .dark footer {
      background-color: #1A1A2E !important;
    }
    .dark footer .text-gray-700 {
      color: #e0e0e0 !important;
    }
    .dark footer .bg-white {
      background-color: #2A2A3E !important;
    }
    .dark footer input {
      background-color: #2A2A3E !important;
      color: white !important;
      border-color: #0b8482 !important;
    }
    .dark footer input::placeholder {
      color: #aaa !important;
    }
    footer a, footer button {
      transition: all 0.3s ease;
    }
    footer a:hover i {
      transform: scale(1.1);
    }
    /* Custom craft hover effects */
    footer a:hover {
      transform: translateX(5px);
    }
    .dark footer [style*="color: #4A4A4A"] {
      color: #e0e0e0 !important;
    }
  `;
  document.head.appendChild(footerStyles);
});