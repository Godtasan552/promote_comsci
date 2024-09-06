
    // ฟังก์ชันสำหรับตรวจสอบการเลื่อนของหน้าเว็บ
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('mainNav');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    function redirectTo(url){
        window.location.href = url;
    
    }