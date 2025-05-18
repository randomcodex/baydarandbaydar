const PWAManager = {
  isServiceWorkerSupported: 'serviceWorker' in navigator,
  registration: null,
  init: function() {
    if (this.isServiceWorkerSupported) {
      this.registerServiceWorker();
      this.handleInstallPrompt();
      this.setupUpdateButton();
    }
  },
  registerServiceWorker: function() {
    window.addEventListener('load', async () => {
      try {
        this.registration = await navigator.serviceWorker.register('/service-worker.js');
        console.log('ServiceWorker registered successfully:', this.registration.scope);
        this.checkForUpdates();
      } catch (error) {
        console.error('ServiceWorker registration failed:', error);
      }
    });
  },
  checkForUpdates: function() {
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
  notifyUserOfUpdate: function() {
    const updateElement = document.getElementById('pwa-update-available');
    if (updateElement) {
      updateElement.style.display = 'block';
    } else {
      console.log('New version available! Refresh to update.');
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
  updateServiceWorker: function() {
    if (this.registration && this.registration.waiting) {
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  },
  setupUpdateButton: function() {
    const updateBtn = document.getElementById('update-pwa-btn');
    if (updateBtn) {
      updateBtn.addEventListener('click', () => {
        this.updateServiceWorker();
      });
    }
  },
  handleInstallPrompt: function() {
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      this.showInstallPromotion();
      const installBtn = document.getElementById('install-pwa-btn');
      if (installBtn) {
        installBtn.style.display = 'block';
        installBtn.addEventListener('click', async () => {
          installBtn.style.display = 'none';
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          console.log(`User response to the install prompt: ${outcome}`);
          deferredPrompt = null;
        });
      }
    });
    window.addEventListener('appinstalled', (event) => {
      console.log('PWA was installed');
      this.hideInstallPromotion();
    });
  },
  showInstallPromotion: function() {
    const installPromo = document.getElementById('pwa-install-promotion');
    if (installPromo) {
      installPromo.style.display = 'block';
    } else {
      console.log('PWA can be installed');
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
  hideInstallPromotion: function() {
    const installPromo = document.getElementById('pwa-install-promotion');
    if (installPromo) {
      installPromo.style.display = 'none';
    }
  }
};
if (typeof window !== 'undefined') {
  PWAManager.init();
}
