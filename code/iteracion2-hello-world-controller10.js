     // entity con box.js
      var caja = document.createElement('a-entity');
      caja.setAttribute('box', {
        height: axis[0]/10, //0.5
        width: axis[1]/10, //0.25
        depth: axis[2]/10, //1
      });
      caja.setAttribute('position', {
        x: 0,
        y: 1,
        z: -5
      });
      caja.setAttribute('rotation', {
        x: 0,
        y: -45,
        z: 0
      });
      caja.setAttribute('material', 'color', '#4CC3D9');

      escena.appendChild(caja);