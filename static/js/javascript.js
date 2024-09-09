// ฟังก์ชันที่ทำให้ Navbar เปลี่ยนสีเมื่อเลื่อน
window.addEventListener("scroll", function() {
    const nav = document.getElementById("mainNav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// link sskru
    function redirectTo(url){
        window.location.href = url;
    
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Check if there's a hash in the URL
        if (window.location.hash) {
            const targetId = window.location.hash;
            const carousel = document.querySelector('#carouselExampleIndicators'); // Update to match your carousel ID
            const carouselInstance = new bootstrap.Carousel(carousel);
            const targetSlide = document.querySelector(targetId);
    
            if (targetSlide) {
                const slideIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(targetSlide);
                if (slideIndex !== -1) {
                    carouselInstance.to(slideIndex);
                }
            }
        }
    });
    
