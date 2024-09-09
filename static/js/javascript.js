// ฟังก์ชันที่ทำให้ Navbar เปลี่ยนสีเมื่อเลื่อน
window.addEventListener("scroll", function() {
    const nav = document.getElementById("mainNav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


    function redirectTo(url){
        window.location.href = url;
    
    }