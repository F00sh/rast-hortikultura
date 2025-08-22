import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useScrollDirection(offset = 8) {
  const hidden = ref(false)
  let lastY = 0
  let ticking = false

  const onScroll = () => {
    const y = window.scrollY || 0
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const goingDown = y > lastY + offset
        const goingUp = y < lastY - offset
        if (goingDown && y > 80) hidden.value = true
        if (goingUp || y <= 80) hidden.value = false
        lastY = y
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => {
    lastY = window.scrollY || 0
    window.addEventListener('scroll', onScroll, { passive: true })
  })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

  return { hidden }
}
