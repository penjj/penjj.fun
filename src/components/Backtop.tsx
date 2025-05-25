import type { Component } from 'solid-js'
import { createSignal, onCleanup, onMount } from 'solid-js'

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export const BackTop: Component = () => {
  const [visible, setVisible] = createSignal(false)

  const checkScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setVisible(scrollTop > 300)
  }

  onMount(() => {
    window.addEventListener('scroll', checkScroll)
  })

  onCleanup(() => {
    window.removeEventListener('scroll', checkScroll)
  })

  return (
    <button
      onClick={scrollToTop}
      class="fixed bottom-8 right-8 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md transition-opacity"
      style={{ 'opacity': visible() ? '1' : '0', 'pointer-events': visible() ? 'auto' : 'none' }}
      aria-label="Back to top"
    >
      <div class="i-lucide-arrow-up text-5"></div>
    </button>
  )
}
