
AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createfish(id, position);
      }
    } ,
  
    createfish: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id",id);
      fishEl.setAttribute("position",position);
      
      fishEl.setAttribute("scale",{x:45,y:45,z:45});
      fishEl.setAttribute("gltf-model","./assets/models/fish/scene.gltf")
      fishEl.setAttribute("animation-mixer",{})
      fishEl.setAttribute("static-body",{shape:"sphere",sphereRadius:2})  
      fishEl.setAttribute("game-play1",{elementId:`#${id}`})
      
  
      terrainEl.appendChild(fishEl);
    }
  });