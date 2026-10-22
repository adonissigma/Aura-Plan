// --- 1. Đổi giao diện Sáng/Tối ---
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        html.classList.add('dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}

// --- 2. Đổi ảnh nền ---
let bgIndex = 1;
function changeBackground() {
    const bgLayer = document.getElementById('bg-layer');
    bgLayer.classList.remove(`bg-gradient-${bgIndex}`);
    bgIndex = (bgIndex % 4) + 1;
    bgLayer.classList.add(`bg-gradient-${bgIndex}`);
}
