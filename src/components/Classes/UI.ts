export class UI {
    private static instance: UI;
  
    private constructor() {
      console.log("UI initialized");
    }
  
    // Singleton : une seule instance
    public static getInstance(): UI {
      if (!UI.instance) {
        UI.instance = new UI();
      }
      return UI.instance;
    }
  
    showToast(message: string, duration: number = 3000) {
        const toast = document.createElement("div");
        toast.innerText = message;
        toast.className = "ui-toast"; // tout le style vient de UI.css
      
        document.body.appendChild(toast);
      
        setTimeout(() => {
          toast.remove();
        }, duration);
      }
  
    // Tu peux ajouter ici : showModal(), hideOverlay(), etc.
  }
  