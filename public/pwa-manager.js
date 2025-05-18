// This JavaScript file helps manage PWA updates and installation
const PWAManager = {
  // Check if service worker is supported
  isServiceWorkerSupported: 'serviceWorker' in navigator,
  
  // Reference to any registration
  registration: null,
  
  // Initialize the PWA manager
  init: function() {
    if (this.isServiceWorkerSupported) {
      this.registerServiceWorker();
      this.handleInstallPrompt();
      this.setupUpdateButton();
    }
  },
  
  // Register the service worker
  registerServiceWorker: function() {
    window.addEventListener('load', async () => {
      try {
        this.registration = await navigator.serviceWorker.register('/service-worker.js');
        console.log('ServiceWorker registered successfully:', this.registration.scope);
        
        // Set up update detection
        this.checkForUpdates();
      } catch (error) {
        console.error('ServiceWorker registration failed:', error);
      }
    });
  },
  
  // Check for service worker updates
  checkForUpdates: function() {
    // Check every hour
    setInterval(async () => {
      if (this.registration) {
        try {
          await this.registration.update();
          if (this.registration.waiting) {
            this.notifyUserOfUpdate();
          }
        } catch (err) {
          console.error('Error checking for service worker updates:', err);
        }
      }
    }, 60 * 60 * 1000);
  },
  
  // Notify users when update is available
  notifyUserOfUpdate: function() {
    // You can implement a UI notification here
    const updateElement = document.getElementById('pwa-update-available');
    if (updateElement) {
      updateElement.style.display = 'block';
    } else {
      console.log('New version available! Refresh to update.');
      
      // Or create a notification element
      const updateBanner = document.createElement('div');
      updateBanner.id = 'pwa-update-available';
      updateBanner.innerHTML = `
        <div style="position:fixed; bottom:0; left:0; right:0; background:#000; color:#fff; padding:10px; text-align:center; z-index:9999;">
          A new version is available! 
          <button id="update-pwa-btn" style="background:#fff; color:#000; border:none; padding:5px 10px; margin-left:10px; cursor:pointer;">
            Update Now
          </button>
        </div>
      `;
      document.body.appendChild(updateBanner);
      
      document.getElementById('update-pwa-btn').addEventListener('click', () => {
        this.updateServiceWorker();
      });
    }
  },
  
  // Handle the update process
  updateServiceWorker: function() {
    if (this.registration && this.registration.waiting) {
      // Send message to service worker to skip waiting
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      
      // Reload the page to activate the new service worker
      window.location.reload();
    }
  },
  
  // Set up update button if it exists
  setupUpdateButton: function() {
    const updateBtn = document.getElementById('update-pwa-btn');
    if (updateBtn) {
      updateBtn.addEventListener('click', () => {
        this.updateServiceWorker();
      });
    }
  },
  
  // Handle install prompt for "Add to Home Screen"
  handleInstallPrompt: function() {
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      
      // Stash the event so it can be triggered later
      deferredPrompt = e;
      
      // Update UI to notify the user they can install the PWA
      this.showInstallPromotion();
      
      // Set up install button
      const installBtn = document.getElementById('install-pwa-btn');
      if (installBtn) {
        installBtn.style.display = 'block';
        installBtn.addEventListener('click', async () => {
          // Hide our user interface that shows our install button
          installBtn.style.display = 'none';
          
          // Show the install prompt
          deferredPrompt.prompt();
          
          // Wait for the user to respond to the prompt
          const { outcome } = await deferredPrompt.userChoice;
          console.log(`User response to the install prompt: ${outcome}`);
          
          // We've used the prompt, and can't use it again, so clear it
          deferredPrompt = null;
        });
      }
    });
    
    // Log when the PWA is successfully installed
    window.addEventListener('appinstalled', (event) => {
      console.log('PWA was installed');
      this.hideInstallPromotion();
    });
  },
  
  // Show install promotion UI
  showInstallPromotion: function() {
    const installPromo = document.getElementById('pwa-install-promotion');
    if (installPromo) {
      installPromo.style.display = 'block';
    } else {
      console.log('PWA can be installed');
      
      // Optionally create a promotion banner
      const promoBanner = document.createElement('div');
      promoBanner.id = 'pwa-install-promotion';
      promoBanner.innerHTML = `
        <div style="position:fixed; bottom:0; left:0; right:0; background:#000; color:#fff; padding:10px; text-align:center; z-index:9999;">
          Install our app for a better experience! 
          <button id="install-pwa-btn" style="background:#fff; color:#000; border:none; padding:5px 10px; margin-left:10px; cursor:pointer;">
            Install
          </button>
          <button id="dismiss-install" style="background:transparent; color:#fff; border:none; padding:5px; margin-left:5px; cursor:pointer;">
            ✕
          </button>
        </div>
      `;
      document.body.appendChild(promoBanner);
      
      document.getElementById('dismiss-install').addEventListener('click', () => {
        this.hideInstallPromotion();
      });
    }
  },
  
  // Hide install promotion UI
  hideInstallPromotion: function() {
    const installPromo = document.getElementById('pwa-install-promotion');
    if (installPromo) {
      installPromo.style.display = 'none';
    }
  }
};

// Initialize the PWA Manager
if (typeof window !== 'undefined') {
  PWAManager.init();
}
