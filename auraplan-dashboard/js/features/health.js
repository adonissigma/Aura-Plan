// --- QUẢN LÝ SỨC KHỎE (UỐNG NƯỚC) ---
function addWater() {
    // Kiểm tra xem tài khoản hiện tại đã uống đủ 8 ly chưa
    if (userData[currentUser].water < 8) {
        userData[currentUser].water++;
        document.getElementById('water-count').innerText = userData[currentUser].water;
        
        // Hiệu ứng nút nhún xuống khi bấm
        const waterBtn = event.currentTarget;
        waterBtn.classList.add('scale-90');
        setTimeout(() => waterBtn.classList.remove('scale-90'), 150);
    } else {
        alert("Bạn đã uống đủ nước hôm nay! Tuyệt vời! 💧");
    }
}
