let ElectricLamp = function(status){
    this.status = status;
    this.turnOn = function(){
        this.status = true;
    }
    this.turnOff = function(){
        this.status = false;
    }
    this.showStatus = function(){
        if(this.status){
            console.log("The lamp is on");
        }
        else{
            console.log("The Lamp is off");
        }
    }
}
let SwitchButton = function(lamp){
    this.status = true;
    this.connectToLamp = function(){
        lamp.status = this.status;
    }
    this.switchOn = function(){
        this.status = true;
        this.connectToLamp();
    }
    this.switchOff = function(){
        this.status = false;
        this.connectToLamp();
    }
}
let lamp = new ElectricLamp(false);
let sw = new SwitchButton(lamp);