const { writable } = require('svelte/store')
const isPageChanged = writable(true)
module.exports = isPageChanged