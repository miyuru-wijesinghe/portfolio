// aos
AOS.init();



// dark/light icon change
function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  }



// mouse follower
const cursor = new MouseFollower({
    className: 'mf-cursor'
});



// prograss bar
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});



// back to top
if ($('#back-to-top').length) {

    var scrollTrigger = 100, // px

        backToTop = function() {

            var scrollTop = $(window).scrollTop();

            if (scrollTop > scrollTrigger) {

                $('#back-to-top').addClass('show');

            } else {

                $('#back-to-top').removeClass('show');

            }

        };

    backToTop();

    $(window).on("scroll", function() {

        backToTop();

    });

    $('#back-to-top').on("click", function(e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: 0

        }, 700);

    });

    }



// gsap animation
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".flex-cards", "skewY", "deg"),
    clamp = gsap.utils.clamp(-20, 20);

ScrollTrigger.create({
    onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
        }
    }
});



// contact form
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('message')

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_erwb1le', 'template_bxlg8ri', '#contact-form', 'ToiQ1rO1z_qrZiatE')
        .then(() =>{
            contactMessage.textContent = 'Message sent successfully ✅'

            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()

        }, () =>{
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
    }

    contactForm.addEventListener('submit', sendEmail)



// year script
var getYear = new Date().getFullYear();
document.getElementById('getYear').innerHTML = getYear;