  // En caso de que los datos cambien, actualizamos la figura
  update: function (oldData) {
    var data = this.data;
    var el = this.el;

    // If `oldData` is empty, then this means we're in the 
    initialization process.
    // No need to update.
    if (Object.keys(oldData).length === 0) { return; }

    // Geometry-related properties changed. Update the geometry
    if (data.width !== oldData.width ||
        data.height !== oldData.height ||
        data.depth !== oldData.depth) {
      el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    }

    // Material-related properties changed. Update the material
    if (data.color !== oldData.color) {
      el.getObject3D('mesh').material.color = new THREE.Color(data.color);
    }
  },