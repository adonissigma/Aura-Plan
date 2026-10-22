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

// --- 3. Quản lý Đa tài khoản (Minh & Anh Trai) ---
let currentUser = 'minh';
const userData = {
    minh: { name: 'Minh', streak: 12, water: 3, avatar: 'https://i.pravatar.cc/100?img=47' },
    brother: { name: 'Anh Trai', streak: 5, water: 1, avatar: 'https://i.pravatar.cc/100?img=12' }
};

function switchUser() {
    currentUser = document.getElementById('user-selector').value;
    loadUserData();
    // Lưu lại để lần sau F5 không bị mất
    localStorage.setItem('auraplan_user', currentUser);
}

function loadUserData() {
    // Nếu đã từng chọn user trước đó thì lấy ra
    const savedUser = localStorage.getItem('auraplan_user');
    if (savedUser && userData[savedUser]) {
        currentUser = savedUser;
        document.getElementById('user-selector').value = currentUser;
    }

    const data = userData[currentUser];
    document.getElementById('greeting-name').innerText = data.name;
    document.getElementById('streak-count').innerText = data.streak;
    document.getElementById('water-count').innerText = data.water;
    document.getElementById('user-avatar').src = data.avatar;
}
