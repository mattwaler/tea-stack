import Alpine from 'alpinejs'
import 'htmx.org'
import 'lazysizes'

window.Alpine = Alpine

// Start Alpine when the page is ready.
window.addEventListener('DOMContentLoaded', () => {
  Alpine.start()
});

// Restart Alpine when the DOM is altered by HTMX.
document.body.addEventListener('htmx:afterSwap', () => {
  Alpine.start()
})

// Basic Store Example in Alpine.
window.addEventListener('alpine:initializing', () => {
  Alpine.store('nav', {
    isOpen: false,
    close() { return this.isOpen = false },
    open() { return this.isOpen = true },
    toggle() { return this.isOpen = !this.isOpen }
  })
});
