// implement the Lamp class
class Lamp{
    constructor(color){
      this.color = color;
      this.on = false;
    }
  
    toggleSwitch(){
      if (this.on === false){
        this.on = true;
      } else if (this.on === true){
        this.on = false;
      }
    }
    
    state(){
    return this.on ? "The lamp is on." : "The lamp is off."
    }
    
    
  };
