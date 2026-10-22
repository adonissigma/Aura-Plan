// --- TÍNH NĂNG SPOTLIGHT SEARCH (Ctrl+K) ---
document.addEventListener('keydown', (e) => {
    // Bắt tổ hợp phím Ctrl+K hoặc Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const spotlight = document.getElementById('spotlight');
        spotlight.classList.remove('hidden');
        spotlight.classList.add('flex');
        document.getElementById('spotlight-input').focus();
    }
    
    // Bấm phím ESC để đóng
    if (e.key === 'Escape') {
        closeSpotlight();
    }
});

function closeSpotlight() {
    const spotlight = document.getElementById('spotlight');
    spotlight.classList.add('hidden');
    spotlight.classList.remove('flex');
}

// Bấm ra ngoài khoảng trắng để đóng
document.getElementById('spotlight').addEventListener('click', function(e) {
    if (e.target === this) {
        closeSpotlight();
    }
});
