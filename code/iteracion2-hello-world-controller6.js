     // entity primitive
      var entidad = document.createElement('a-entity');
      entidad.setAttribute('geometry', {
        primitive: 'sphere',
        radius: 1.25
      });
      entidad.setAttribute('position', {
        x: -2.5,
        y: 1,
        z: -5
      });
      entidad.setAttribute('material',{
        color: '#EF2D5E'
      });
      entidad.setAttribute('shadow', true);

      escena.appendChild(entidad);