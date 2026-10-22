// --- 4. Bộ đếm nước ---
let waterCount = 3;
function addWater() {
    if (waterCount < 8) {
        waterCount++;
        document.getElementById('water-count').innerText = waterCount;
        
        const waterBtn = event.currentTarget;
        waterBtn.classList.add('scale-90');
        setTimeout(() => waterBtn.classList.remove('scale-90'), 150);
    } else {
        alert("Bạn đã uống đủ nước hôm nay! Tuyệt vời! 💧");
    }
}
