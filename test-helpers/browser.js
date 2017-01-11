require('babel-register')()

try {
  var jsdom = require('jsdom').jsdom

  var exposedProperties = ['window', 'navigator', 'document']

  global.document = jsdom('')
  global.window = document.defaultView
  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property)
      global[property] = document.defaultView[property]
    }
  })

  global.navigator = {
    userAgent: 'node.js'
  }
} catch (error) {
  console.log('jsdom not supported')
}
