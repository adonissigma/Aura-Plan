// --- 5. Đồng hồ Pomodoro ---
let pomoTime = 25 * 60;
let pomoInterval;
let isRunning = false;
const pomoRing = document.getElementById('pomodoro-ring');
const timerDisplay = document.getElementById('timer-display');
const treeIcon = document.getElementById('tree-icon');
const totalDash = 552.9;

function togglePomodoro() {
    const btn = document.getElementById('pomo-btn');
    if (isRunning) {
        clearInterval(pomoInterval);
        btn.innerHTML = '<i class="fa-solid fa-play text-lg ml-1"></i>';
        treeIcon.classList.remove('animate-bounce');
    } else {
        btn.innerHTML = '<i class="fa-solid fa-pause text-lg"></i>';
        treeIcon.classList.add('animate-bounce');
        pomoInterval = setInterval(() => {
            if (pomoTime > 0) {
                pomoTime--;
                updatePomoDisplay();
            } else {
                clearInterval(pomoInterval);
                isRunning = false;
                pomoTime = 25 * 60;
                btn.innerHTML = '<i class="fa-solid fa-play text-lg ml-1"></i>';
                treeIcon.classList.remove('animate-bounce');
                treeIcon.innerText = '🌳';
                alert("Hoàn thành 1 phiên tập trung! Cây đã lớn! 🌳");
                updatePomoDisplay();
            }
        }, 1000);
    }
    isRunning = !isRunning;
}

function updatePomoDisplay() {
    const mins = Math.floor(pomoTime / 60);
    const secs = pomoTime % 60;
    timerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const progress = 1 - (pomoTime / (25 * 60));
    const offset = totalDash - (progress * totalDash);
    pomoRing.style.strokeDashoffset = offset;
}

// Tính năng nghe nhạc Lofi (Mở tab mới)
function playMusic() {
    window.open("https://www.youtube.com/watch?v=jfKfPfyJRdk", "_blank");
}

// Khởi tạo
window.addEventListener('DOMContentLoaded', () => {
    if(timerDisplay) updatePomoDisplay();
});
