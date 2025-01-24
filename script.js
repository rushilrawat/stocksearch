document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide icons
    lucide.createIcons()
  
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Add parallax effect to the background
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset
      document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`
    })
  
    // Add animation to feature cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )
  
    document.querySelectorAll(".feature-card").forEach((card) => {
      observer.observe(card)
    })
  })
  