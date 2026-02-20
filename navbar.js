document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300" style="border-bottom: 3px solid #0b8482;">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">

      <!-- Logo with Craft Theme -->
      <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse">
        <span class="text-xl font-bold" style="color: #7B2CBF;">
          Groww<span style="color: #0b8482;">Craft</span>
        </span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden xl:flex flex-1 justify-center space-x-4 rtl:space-x-reverse items-center">

        <!-- Home Dropdown -->
        <div class="relative">
          <button id="homeBtn" class="flex items-center space-x-1 text-gray-800 px-3 py-2 rounded-lg transition-colors" style="color: #4A4A4A; hover:color: #7B2CBF;">
            Home <i class="fas fa-chevron-down text-xs" style="color: #7B2CBF;"></i>
          </button>
          <div id="homeMenu" class="hidden absolute mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50" style="border: 1px solid #0b8482;">
            <a href="index.html" class="home-link block px-4 py-2 transition-colors" style="color: #4A4A4A; hover:background: #7B2CBF20; hover:color: #7B2CBF;">Home 1</a>
            <a href="home2.html" class="home-link block px-4 py-2 transition-colors" style="color: #4A4A4A; hover:background: #7B2CBF20; hover:color: #7B2CBF;">Home 2</a>
          </div>
        </div>

        <a href="about.html" class="nav-link px-3 py-2 transition-colors" style="color: #4A4A4A; hover:color: #7B2CBF;">About</a>
        <a href="blog.html" class="nav-link px-3 py-2 transition-colors" style="color: #4A4A4A; hover:color: #7B2CBF;">Blog</a>
        <a href="services.html" class="nav-link px-3 py-2 transition-colors" style="color: #4A4A4A; hover:color: #7B2CBF;">Services</a>
        <a href="gallery.html" class="nav-link px-3 py-2 transition-colors" style="color: #4A4A4A; hover:color: #7B2CBF;">Gallery</a>
        <a href="contact.html" class="nav-link px-3 py-2 transition-colors" style="color: #4A4A4A; hover:color: #7B2CBF;">Contact</a>

        <!-- Dashboard Dropdown -->
        <div class="relative">
          <button id="dashBtn" class="flex items-center space-x-1 px-3 py-2 transition-colors" style="color: #4A4A4A;">
            Dashboard <i class="fas fa-chevron-down text-xs" style="color: #7B2CBF;"></i>
          </button>
          <div id="dashMenu" class="hidden absolute mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50" style="border: 1px solid #00BFA6;">
            <a href="user.html" class="block px-4 py-2 transition-colors" style="color: #4A4A4A; hover:background: #00BFA620; hover:color: #00BFA6;">User</a>
            <a href="admin.html" class="block px-4 py-2 transition-colors" style="color: #4A4A4A; hover:background: #00BFA620; hover:color: #00BFA6;">Admin</a>
          </div>
        </div>

        <a href="login.html" class="px-4 py-2 text-white font-medium rounded-lg transition-colors" style="background:  #0b8482; hover:background: #7bdad8;">
          Login
        </a>
        <a href="signup.html" class="px-4 py-2 text-white font-medium rounded-lg transition-colors" style="background: #7B2CBF; hover:background: #a578cc; ">
          Sign Up
        </a>
      </div>

      <!-- Right Controls - Desktop -->
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
       

        <!-- RTL Toggle -->
        <button id="rtlToggle" class="hidden xl:block text-sm font-semibold px-3 py-1 rounded transition-colors" style="background: #0b8482; color: #f1ebeb; hover:background: #0b8482;">
          RTL
        </button>

        <!-- Dark Mode Toggle -->
        <button id="darkToggle" class="hidden xl:block text-xl" style="color: #7B2CBF;">
          <i id="darkIcon" class="fas fa-moon"></i>
        </button>

        <!-- Mobile Button with Hamburger/Close Icons -->
        <button id="mobileBtn" class="xl:hidden text-2xl transition-all duration-300 hover:scale-110" style="color: #7B2CBF;">
          <i id="mobileIcon" class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="xl:hidden hidden flex flex-col space-y-2 py-4 border-t transition-all duration-300" style="border-color: #0b8482;">
      
      <!-- Mobile Home Dropdown -->
      <div class="relative">
        <button id="mobileHomeBtn" class="w-full flex items-center justify-between px-3 py-2 transition-colors rounded-lg hover:bg-[#7B2CBF10]" style="color: #4A4A4A;">
          <span class="flex items-center gap-2">
            Home
          </span>
          <i id="mobileHomeIcon" class="fas fa-chevron-down text-xs transition-transform duration-300" style="color: #7B2CBF;"></i>
        </button>
        <div id="mobileHomeMenu" class="hidden mt-2 ml-6 w-full rounded-lg py-2">
          <a href="index.html" class="home-link block px-4 py-2 transition-colors rounded-lg mb-1" style="color: #4A4A4A;" 
             onmouseover="this.style.backgroundColor='#7B2CBF20'; this.style.color='#7B2CBF';" 
             onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4A4A4A';">
             Home 1
          </a>
          <a href="home2.html" class="home-link block px-4 py-2 transition-colors rounded-lg" style="color: #4A4A4A;"
             onmouseover="this.style.backgroundColor='#7B2CBF20'; this.style.color='#7B2CBF';" 
             onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4A4A4A';">
         Home 2
          </a>
        </div>
      </div>

      <!-- Regular Links with Icons -->
      <a href="about.html" class="flex items-center gap-2 px-3 py-2 transition-all duration-300 rounded-lg hover:pl-5" style="color: #4A4A4A;" 
         onmouseover="this.style.backgroundColor='#7B2CBF10'; this.style.color='#7B2CBF';" 
         onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4A4A4A';">
        About
      </a>
      
      <a href="blog.html" class="flex items-center gap-2 px-3 py-2 transition-all duration-300 rounded-lg hover:pl-5" style="color: #4A4A4A;"
         onmouseover="this.style.backgroundColor='#7B2CBF10'; this.style.color='#7B2CBF';" 
         onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4A4A4A';">
         Blog
      </a>
      
      <a href="services.html" class="flex items-center gap-2 px-3 py-2 transition-all duration-300 rounded-lg hover:pl-5" style="color: #4A4A4A;"
         onmouseover="this.style.backgroundColor='#7B2CBF10'; this.style.color='#7B2CBF';" 
         onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4A4A4A';">
         Services
      </a>
      
      <a href="gallery.html" class="flex items-center gap-2 px-3 py-2 transition-all duration-300 rounded-lg hover:pl-5" style="color: #4A4A4A;"
         onmouseover="this.style.backgroundColor='#7B2CBF10'; this.style.color='#7B2CBF';" 
         onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4A4A4A';">
        Gallery
      </a>
      
      <a href="contact.html" class="flex items-center gap-2 px-3 py-2 transition-all duration-300 rounded-lg hover:pl-5" style="color: #4A4A4A;"
         onmouseover="this.style.backgroundColor='#7B2CBF10'; this.style.color='#7B2CBF';" 
         onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4A4A4A';">
         Contact
      </a>
      
      <!-- Mobile Dashboard Dropdown -->
      <div class="relative">
        <button id="mobileDashBtn" class="w-full flex items-center justify-between px-3 py-2 transition-colors rounded-lg hover:bg-[#0b848210]" style="color: #4A4A4A;">
          <span class="flex items-center gap-2">
            
            Dashboard
          </span>
          <i id="mobileDashIcon" class="fas fa-chevron-down text-xs transition-transform duration-300" style="color: #0b8482;"></i>
        </button>
        <div id="mobileDashMenu" class="hidden mt-2 ml-6 w-full rounded-lg py-2">
          <a href="user.html" class="block px-4 py-2 transition-colors rounded-lg mb-1" style="color: #4A4A4A;"
             onmouseover="this.style.backgroundColor='#0b848220'; this.style.color='#0b8482';" 
             onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4A4A4A';">
             User
          </a>
          <a href="admin.html" class="block px-4 py-2 transition-colors rounded-lg" style="color: #4A4A4A;"
             onmouseover="this.style.backgroundColor='#0b848220'; this.style.color='#0b8482';" 
             onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4A4A4A';">
             Admin
          </a>
        </div>
      </div>

      <!-- Auth Buttons Section -->
      <div class="flex flex-col space-y-2 pt-4 border-t" style="border-color: #0b8482;">
        <a href="login.html" class="px-4 py-3 text-white font-medium rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2" 
           style="background: #0b8482;">
          Login
        </a>
        <a href="signup.html" class="px-4 py-3 text-white font-medium rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2" 
           style="background: #7B2CBF;">
         Sign Up
        </a>
        
        <!-- Mobile Toggle Buttons -->
        <div class="grid grid-cols-2 gap-3 mt-4">
          <button id="mobileRtlToggle" class="flex items-center justify-center gap-2 text-sm font-semibold px-3 py-3 rounded-xl transition-all duration-300 hover:scale-105" 
                  style="background: #0b8482; color: white;">
            <i class="fas fa-exchange-alt"></i> RTL
          </button>
          <button id="mobileDarkToggle" class="flex items-center justify-center gap-2 text-sm font-semibold px-3 py-3 rounded-xl transition-all duration-300 hover:scale-105" 
                  style="background: #7B2CBF; color: white;">
            <i id="mobileDarkIcon" class="fas fa-moon"></i> Dark
          </button>
        </div>
      </div>
    </div>

  </div>
</nav>
`;

  /* ===============================
     ACTIVE NAV LINK HIGHLIGHT
  =============================== */
  const currentPage = window.location.pathname.split("/").pop();
  console.log('Current page:', currentPage);

  const homeBtn = document.getElementById("homeBtn");
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const homeLinks = document.querySelectorAll(".home-link");
  const allNavLinks = document.querySelectorAll("a[href]");
  const navButtons = [homeBtn, mobileHomeBtn].filter(btn => btn);

  const homePages = ['', 'index.html', 'home.html', 'home1.html', 'home2.html', './', '/'];
  const isHomePageActive = homePages.includes(currentPage);

  allNavLinks.forEach(link => {
    link.classList.remove("active-link");
    link.style.removeProperty('color');
  });
  
  navButtons.forEach(btn => {
    if (btn) {
      btn.classList.remove("active-link");
      btn.style.removeProperty('color');
    }
  });

  if (isHomePageActive) {
    navButtons.forEach(btn => {
      if (btn) {
        btn.classList.add("active-link");
        btn.style.color = "#7B2CBF";
      }
    });
  }

  homeLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html') ||
        (currentPage === 'home1.html' && href === 'index.html') ||
        (currentPage === 'home2.html' && href === 'home2.html')) {
      link.classList.add("active-link");
      link.style.color = "#7B2CBF";
    }
  });

  allNavLinks.forEach(link => {
    if (link.querySelector('img') || link.querySelector('span')?.classList.contains('text-xl')) {
      return;
    }
    
    if (link.classList.contains('home-link')) return;
    
    const href = link.getAttribute('href');
    
    if (!href || homePages.includes(href)) return;
    
    if (href === currentPage) {
      link.classList.add("active-link");
      link.style.color = "#7B2CBF";
    }
  });

  /* ===============================
     DESKTOP DROPDOWNS
  =============================== */
  const homeMenu = document.getElementById("homeMenu");
  const dashBtn = document.getElementById("dashBtn");
  const dashMenu = document.getElementById("dashMenu");

  homeBtn?.addEventListener("click", e => {
    e.stopPropagation();
    homeMenu.classList.toggle("hidden");
    dashMenu.classList.add("hidden");
  });

  dashBtn?.addEventListener("click", e => {
    e.stopPropagation();
    dashMenu.classList.toggle("hidden");
    homeMenu.classList.add("hidden");
  });

  /* ===============================
     MOBILE DROPDOWNS
  =============================== */
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");
  const mobileDashMenu = document.getElementById("mobileDashMenu");
  const mobileDashIcon = document.getElementById("mobileDashIcon");

  mobileHomeBtn?.addEventListener("click", e => {
    e.stopPropagation();
    const isHidden = mobileHomeMenu.classList.toggle("hidden");
    mobileHomeIcon.className = isHidden ? "fas fa-chevron-down text-xs" : "fas fa-chevron-up text-xs";
    mobileDashMenu.classList.add("hidden");
    mobileDashIcon.className = "fas fa-chevron-down text-xs";
  });

  mobileDashBtn?.addEventListener("click", e => {
    e.stopPropagation();
    const isHidden = mobileDashMenu.classList.toggle("hidden");
    mobileDashIcon.className = isHidden ? "fas fa-chevron-down text-xs" : "fas fa-chevron-up text-xs";
    mobileHomeMenu.classList.add("hidden");
    mobileHomeIcon.className = "fas fa-chevron-down text-xs";
  });

  /* ===============================
     MOBILE MENU TOGGLE WITH CLOSE ICON
  =============================== */
  const mobileBtn = document.getElementById("mobileBtn");
  const mobileIcon = document.getElementById("mobileIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileBtn && mobileIcon && mobileMenu) {
    mobileBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
      
      // Toggle between hamburger and close icon
      if (mobileMenu.classList.contains("hidden")) {
        mobileIcon.className = "fas fa-bars";
      } else {
        mobileIcon.className = "fas fa-times";
        
        // Close all dropdowns when opening menu
        if (mobileHomeMenu) mobileHomeMenu.classList.add("hidden");
        if (mobileDashMenu) mobileDashMenu.classList.add("hidden");
        if (mobileHomeIcon) mobileHomeIcon.className = "fas fa-chevron-down text-xs";
        if (mobileDashIcon) mobileDashIcon.className = "fas fa-chevron-down text-xs";
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function(e) {
      if (!mobileMenu.classList.contains("hidden") && 
          !mobileBtn.contains(e.target) && 
          !mobileMenu.contains(e.target)) {
        
        mobileMenu.classList.add("hidden");
        if (mobileIcon) mobileIcon.className = "fas fa-bars";
        
        // Close all dropdowns
        if (mobileHomeMenu) mobileHomeMenu.classList.add("hidden");
        if (mobileDashMenu) mobileDashMenu.classList.add("hidden");
        if (mobileHomeIcon) mobileHomeIcon.className = "fas fa-chevron-down text-xs";
        if (mobileDashIcon) mobileDashIcon.className = "fas fa-chevron-down text-xs";
      }
    });

    // Handle window resize
    window.addEventListener("resize", function() {
      if (window.innerWidth >= 1280) { // xl breakpoint
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          if (mobileIcon) mobileIcon.className = "fas fa-bars";
        }
      }
    });

    // Prevent menu from closing when clicking inside
    if (mobileMenu) {
      mobileMenu.addEventListener("click", function(e) {
        e.stopPropagation();
      });
    }
  }

  /* ===============================
     CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
  =============================== */
  document.addEventListener("click", () => {
    homeMenu?.classList.add("hidden");
    dashMenu?.classList.add("hidden");
    // Note: Mobile dropdowns are handled separately above
  });

  /* ===============================
     THEME COLOR MANAGEMENT
  =============================== */
  const root = document.documentElement;
  const colorButtons = {
    purple: document.getElementById("purpleTheme"),
    coral: document.getElementById("coralTheme"),
    mustard: document.getElementById("mustardTheme"),
    teal: document.getElementById("tealTheme")
  };
  
  const mobileColorSwatches = document.querySelectorAll(".mobile-color-swatch");

  function setAccentColor(color) {
    const colors = {
      purple: "#7B2CBF",
      coral: "#FF6B6B",
      mustard: "#0b8482",
      teal: "#00BFA6"
    };
    
    const selectedColor = colors[color] || colors.purple;
    
    // Update CSS variables
    root.style.setProperty('--accent-color', selectedColor);
    
    // Update logo gradient
    const logoGradient = document.querySelector('.w-10.h-10.rounded-full');
    if (logoGradient) {
      if (color === 'purple') logoGradient.style.background = 'linear-gradient(135deg, #7B2CBF, #FF6B6B)';
      if (color === 'coral') logoGradient.style.background = 'linear-gradient(135deg, #FF6B6B, #0b8482)';
      if (color === 'mustard') logoGradient.style.background = 'linear-gradient(135deg, #0b8482, #00BFA6)';
      if (color === 'teal') logoGradient.style.background = 'linear-gradient(135deg, #00BFA6, #7B2CBF)';
    }
    
    // Update login button (purple button)
    const loginBtn = document.querySelector('a[href="login.html"].px-4.py-2');
    if (loginBtn) {
      if (color === 'purple') loginBtn.style.background = '#7B2CBF';
      if (color === 'coral') loginBtn.style.background = '#FF6B6B';
      if (color === 'mustard') loginBtn.style.background = '#0b8482';
      if (color === 'teal') loginBtn.style.background = '#00BFA6';
    }
    
    // Update signup button (coral button)
    const signupBtn = document.querySelector('a[href="signup.html"].px-4.py-2');
    if (signupBtn) {
      if (color === 'purple') signupBtn.style.background = '#FF6B6B';
      if (color === 'coral') signupBtn.style.background = '#0b8482';
      if (color === 'mustard') signupBtn.style.background = '#00BFA6';
      if (color === 'teal') signupBtn.style.background = '#7B2CBF';
    }
    
    // Update active link colors
    document.querySelectorAll('.active-link').forEach(el => {
      el.style.color = selectedColor;
    });
    
    localStorage.setItem('craft-accent-color', color);
  }

  // Add click handlers for color buttons
  Object.entries(colorButtons).forEach(([color, button]) => {
    button?.addEventListener('click', () => setAccentColor(color));
  });
  
  mobileColorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      const color = swatch.dataset.color;
      setAccentColor(color);
    });
  });

  // Load saved color preference
  const savedColor = localStorage.getItem('craft-accent-color');
  if (savedColor) {
    setAccentColor(savedColor);
  }

  /* ===============================
     DARK MODE
  =============================== */
  const darkToggle = document.getElementById("darkToggle");
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");
  const darkIcon = document.getElementById("darkIcon");
  const mobileDarkIcon = document.getElementById("mobileDarkIcon");
  
  // Check for saved dark mode preference
  const savedDarkMode = localStorage.getItem('craft-dark-mode') === 'true';
  if (savedDarkMode) {
    document.documentElement.classList.add('dark');
    updateThemeIcons(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcons(false);
  }
  
  function updateThemeIcons(isDark) {
    if (darkIcon) {
      darkIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
    if (mobileDarkIcon) {
      mobileDarkIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
      mobileDarkToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light' : '<i class="fas fa-moon"></i> Dark';
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('craft-dark-mode', isDark);
    updateThemeIcons(isDark);
    
    // Adjust colors for dark mode
    if (isDark) {
      document.body.style.backgroundColor = '#1A1A2E';
      document.body.style.color = '#FFFFFF';
    } else {
      document.body.style.backgroundColor = '#FFFFFF';
      document.body.style.color = '#4A4A4A';
    }
  }

  darkToggle?.addEventListener('click', toggleTheme);
  mobileDarkToggle?.addEventListener('click', toggleTheme);
  
  /* ===============================
     RTL MODE
  =============================== */
  const rtlToggle = document.getElementById("rtlToggle");
  const mobileRtlToggle = document.getElementById("mobileRtlToggle");

  function toggleRTL() {
    const isRTL = document.documentElement.dir === "rtl";
    document.documentElement.dir = isRTL ? "ltr" : "rtl";
    rtlToggle.textContent = isRTL ? "RTL" : "LTR";
    mobileRtlToggle.textContent = isRTL ? "RTL" : "LTR";
  }

  rtlToggle?.addEventListener("click", toggleRTL);
  mobileRtlToggle?.addEventListener("click", toggleRTL);

  /* ===============================
     ADD DARK MODE STYLES
  =============================== */
  const darkStyles = document.createElement('style');
  darkStyles.textContent = `
    .dark {
      background-color: #1A1A2E;
      color: #FFFFFF;
    }
    .dark nav {
      background-color: #1A1A2E !important;
      border-bottom-color: #0b8482 !important;
    }
    .dark .text-gray-800, .dark a:not(.text-white) {
      color: #FFFFFF !important;
    }
    .dark .bg-white {
      background-color: #2A2A3E !important;
    }
    .dark .border-gray-200 {
      border-color: #7B2CBF !important;
    }
    .dark [style*="color: #4A4A4A"] {
      color: #FFFFFF !important;
    }
    .dark [style*="background: #0b8482"] {
      background: #7B2CBF !important;
      color: white !important;
    }
    /* Mobile menu animations */
    #mobileMenu {
      transition: all 0.3s ease-in-out;
    }
    #mobileMenu:not(.hidden) {
      animation: slideDown 0.3s ease-out;
    }
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    #mobileBtn {
      transition: transform 0.2s ease;
    }
    #mobileBtn:hover {
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(darkStyles);
});