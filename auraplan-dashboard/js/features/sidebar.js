// --- QUẢN LÝ MENU THANH BÊN (SIDEBAR) ---
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    // Nếu đang ẩn thì mở ra, đang mở thì ẩn đi
    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.remove('-translate-x-full');
    } else {
        sidebar.classList.add('-translate-x-full');
    }
}
