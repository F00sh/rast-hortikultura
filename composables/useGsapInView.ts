import { onMounted } from 'vue'
import gsap from 'gsap'

export const useGsapInView = (selector = '.reveal') => {
  onMounted(() => {
    const els = document.querySelectorAll<HTMLElement>(selector)
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' })
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })
    els.forEach(el => obs.observe(el))
  })
}
