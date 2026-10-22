// --- ĐỒNG HỒ POMODORO ---
let pomoTime = 25 * 60; // 25 phút
let pomoInterval;
let isRunning = false;

function togglePomodoro() {
    const btn = document.getElementById('pomo-btn');
    
    if (isRunning) {
        // Đang chạy -> Bấm để Dừng
        clearInterval(pomoInterval);
        btn.innerHTML = '<i class="fa-solid fa-play text-lg ml-1"></i>';
    } else {
        // Đang dừng -> Bấm để Bắt đầu
        btn.innerHTML = '<i class="fa-solid fa-pause text-lg"></i>';
        pomoInterval = setInterval(() => {
            if (pomoTime > 0) {
                pomoTime--;
                updatePomoDisplay();
            } else {
                // Khi hết thời gian
                clearInterval(pomoInterval);
                isRunning = false;
                pomoTime = 25 * 60; // Reset lại 25 phút
                btn.innerHTML = '<i class="fa-solid fa-play text-lg ml-1"></i>';
                alert("Hoàn thành 1 phiên tập trung! 🌳");
                updatePomoDisplay();
            }
        }, 1000); // 1 giây cập nhật 1 lần
    }
    isRunning = !isRunning;
}

function updatePomoDisplay() {
    const mins = Math.floor(pomoTime / 60);
    const secs = pomoTime % 60;
    
    // Đổi số hiển thị
    document.getElementById('timer-display').innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    // Chạy vòng tròn bao quanh
    const progress = 1 - (pomoTime / (25 * 60));
    const offset = 452 - (progress * 452);
    document.getElementById('pomodoro-ring').style.strokeDashoffset = offset;
}
