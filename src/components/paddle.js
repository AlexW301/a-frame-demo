AFRAME.registerComponent('paddle', {
    schema: {

    },

    init()
    {
        this.paddle = this.el.object3D
        this.paddle.scale.x = 0.4
        this.paddle.scale.y = 0.4
        this.paddle.scale.z = 0.4
        console.log()
    }
})