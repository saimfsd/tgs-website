
        // Tailwind script already loaded
        function initializeTailwind() {
            // Already configured via CDN
        }

        // Page switching
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active')
            })
            const target = document.getElementById(pageId + '-page')
            if (target) target.classList.add('active')
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        // Mobile menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu')
            menu.classList.toggle('hidden')
        }

        document.getElementById('hamburger').addEventListener('click', toggleMobileMenu)

        // Animated counters
        function animateCounters() {
            const stats = [
                { id: 'count-projects', target: 500, suffix: '+' },
                { id: 'count-clients', target: 200, suffix: '+' },
                { id: 'count-industries', target: 10, suffix: '+' },
                { id: 'count-growth', target: 187, suffix: '%' }
            ]

            stats.forEach(stat => {
                const element = document.getElementById(stat.id)
                if (!element) return
                let count = 0
                const increment = Math.ceil(stat.target / 60)
                const timer = setInterval(() => {
                    count += increment
                    if (count >= stat.target) {
                        count = stat.target
                        clearInterval(timer)
                    }
                    element.textContent = count + stat.suffix
                }, 30)
            })
        }

        // Form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault()
            alert('Thank you! Our growth expert will contact you within 24 hours.')
            this.reset()
        })

        // AOS initialization
        function initAOS() {
            AOS.init({
                duration: 900,
                once: true,
                offset: 100
            })
        }

        // Keyboard support
        document.addEventListener('keydown', function(e) {
            if (e.key === '/' && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
                e.preventDefault()
                document.getElementById('contact-form') && document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })
            }
        })

        // Initialize everything
        window.onload = function() {
            initializeTailwind()
            initAOS()
            showPage('home')
            // Trigger counters on home after 800ms
            setTimeout(() => {
                if (document.getElementById('home-page').classList.contains('active')) {
                    animateCounters()
                }
            }, 800)
            
            // Make all nav links active on click (visual feedback)
            console.log('%c✅ TGS Premium Website Loaded Successfully\nModern • Responsive • Fully Animated', 'color:#F5B400; font-family:monospace; font-size:13px')
        }
    