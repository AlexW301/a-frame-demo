let el = document.querySelector('a-sphere')
el.setAttribute('log', {message: 'yo yo!! hello!'})
el.emit('anEvent')

// el.removeAttribute('log')
// el.emit('anEvent')

// el.setAttribute('log__helloworld', {message: 'Hello, World!'})
// el.setAttribute('log__metaverse', {message: 'Hello, Metaverse!'})