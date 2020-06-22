  //Funcion inicial
  init: function () {
    var data = this.data;
    var el = this.el;

    // Crea la figura
    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);

    // Se le da un material
    this.material = new THREE.MeshStandardMaterial({color: data.color});

    // Creamos la mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    // Creamos el objeto 3D
    el.setObject3D('mesh', this.mesh);
  },
...
});