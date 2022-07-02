var pos = 0
var prevpos = 0
var direction = false
var simplePeer;
var joystick;
var coordinates = {};
alert("hello");
if (typeof window !== 'undefined') {
    
    window.addEventListener('load', function() {
        simplePeer = new smartcontroller.TouchPadSmartController('123456789', firstConnected = true)
        simplePeer.createQrCode('https://smartcontrollerjs.github.io/Controllers/touchpad.html', 'qrcode', 150, 150, '1')
        
        simplePeer.on("connection", function(data){
        console.log(simplePeer.controllerList)
        })
        
        simplePeer.on("data", function(data){
        joystick = simplePeer.controllerList[1]
        
        if (joystick.isActive){
        ypos = joystick.state[0][1]
        
        if (ypos > prevpos){
          direction = false
        }
        else{
          direction = true
        }
        
        console.log(direction)
        
        prevpos = ypos
        }
        
        if (direction){
        pos = -10
        
        }
        
        else{
        pos = 10
        }
        
        window.scrollBy(0, pos);
        })
        
        
        })
}

