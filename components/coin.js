
AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createcoin(id, position);
      }
    } ,
  
    createcoin: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var coinEl = document.createElement("a-entity");
      console.log(id)
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      
      coinEl.setAttribute("scale",{x:45,y:45,z:45});
      if (id.includes("coin3"))
      { coinEl.setAttribute("material","color","red")}
      else
      { coinEl.setAttribute("material","color","yellow")}
     
      coinEl.setAttribute("geometry",{primitive:"circle",radius:3})
      coinEl.setAttribute("animation",{property:"rotation",to:"0 360 0",loop:"true",dur:1000})
      coinEl.setAttribute("static-body",{shape:"sphere",sphereRadius:2})  
      coinEl.setAttribute("game-play1",{elementId:`#${id}`})
      
  
      terrainEl.appendChild(coinEl);
    }
  });