AFRAME.registerComponent("log", {
  schema: {
    event: { type: "string" },
    message: { type: "string", default: "Hello World!" },
  },

  multiple: true,

  init() {
    // Closure to access fresh `this.data` from event handler context.
    let self = this;

    // .init() is a good place to set up initial state and variables.
    // Store a reference to the handler so we can later remove it.
    this.eventHandlerFn = function () {
      console.log(self.data.message);
    };
  },

  update(oldData) {
    let data = this.data;
    let el = this.el;

    if (oldData.event && data.event !== oldData.event) {
      el.removeEventListener(oldData.event, this.eventHandlerFn);
    }

    if (data.event) {
      el.addEventListener(data.event, this.eventHandlerFn);
    } else {
      console.log(data.message);
    }
  },

  remove() {
    let data = this.data
    let el = this.el
    
    if(data.event) {
      el.removeEventListener(data.event, this.eventHandlerFn)
    }
  }
});
