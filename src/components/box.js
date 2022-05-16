AFRAME.registerComponent("box", {
  schema: {
    width: { type: "number", default: 1 },
    height: { type: "number", default: 1 },
    depth: { type: "number", default: 1 },
    color: { type: "color", default: "#AAA" },
  },

  init() {
    let data = this.data;
    let el = this.el;

    // Create THREE Geometry
    this.geometry = new THREE.BoxGeometry(data.width, data.height, data.depth);
    // Create THREE Material
    this.material = new THREE.MeshStandardMaterial({ color: data.color });
    // Create THREE Mesh with Geometry and Material
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    // Set Mesh on to entity ie Add the mesh to the scene
    el.setObject3D("mesh", this.mesh);
  },

  update(oldData) {
    let data = this.data;
    let el = this.el;

    // If `oldData` is empty, then this means we're in the initialization process.
    // No need to update.
    if (Object.keys(oldData).length === 0) {
      return;
    }

    // Geometry-related properties changed. Update the geometry.
    if (
      data.width !== oldData.width ||
      data.height !== oldData.height ||
      data.depth !== oldData.depth
    ) {
      el.getObject3D("mesh").geometry = new THREE.BoxBufferGeometry(
        data.width,
        data.height,
        data.depth
      );
    }

    // Material-related properties changed. Update the material.
    if (data.color !== oldData.color) {
      el.getObject3D("mesh").material.color = new THREE.Color(data.color);
    }
  },

  remove() {
      this.el.removeObject3D('mesh')
  }
});
