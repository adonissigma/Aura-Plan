let currentWeekOffset = 0;

const colors = [
    { bg: 'bg-pink-50/80 dark:bg-pink-900/10', border: 'border-pink-100 dark:border-pink-900/30', text: 'text-pink-500', hover: 'group-hover:border-pink-500' },
    { bg: 'bg-teal-50/80 dark:bg-teal-900/10', border: 'border-teal-100 dark:border-teal-900/30', text: 'text-teal-500', hover: 'group-hover:border-teal-500' },
    { bg: 'bg-amber-50/80 dark:bg-amber-900/10', border: 'border-amber-100 dark:border-amber-900/30', text: 'text-amber-500', hover: 'group-hover:border-amber-500' },
    { bg: 'bg-blue-50/80 dark:bg-blue-900/10', border: 'border-blue-100 dark:border-blue-900/30', text: 'text-blue-500', hover: 'group-hover:border-blue-500' },
    { bg: 'bg-purple-50/80 dark:bg-purple-900/10', border: 'border-purple-100 dark:border-purple-900/30', text: 'text-purple-500', hover: 'group-hover:border-purple-500' },
    { bg: 'bg-rose-50/80 dark:bg-rose-900/10', border: 'border-rose-100 dark:border-rose-900/30', text: 'text-rose-500', hover: 'group-hover:border-rose-500' },
    { bg: 'bg-gray-50/80 dark:bg-gray-800/10', border: 'border-gray-200 dark:border-gray-700', text: 'text-gray-500', hover: 'group-hover:border-gray-500' }
];

const dayNames = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];

function generateWeek() {
    const board = document.getElementById('weekly-board');
    board.innerHTML = ''; // Xóa nội dung cũ
    
    const today = new Date();
    const currentDay = today.getDay() || 7; // Lấy thứ hiện tại (CN là 7)
    const monday = new Date(today);
    // Tính toán ngày thứ 2 của tuần hiện tại
    monday.setDate(today.getDate() - currentDay + 1 + (currentWeekOffset * 7));
    
    // Cập nhật chữ "Tuần này"
    document.getElementById('week-label').innerText = currentWeekOffset === 0 ? "Tuần này" : `Tuần ${currentWeekOffset > 0 ? '+' : ''}${currentWeekOffset}`;

    for (let i = 0; i < 7; i++) {
        const date = new Date(monday);
        date.setDate(monday.getDate() + i);
        
        const dateStr = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
        const c = colors[i];

        const card = document.createElement('div');
        card.className = `min-w-[260px] flex-1 snap-start ${c.bg} border ${c.border} rounded-2xl p-4 flex flex-col task-day-card`;
        card.innerHTML = `
            <div class="flex justify-between items-center mb-3">
                <div>
                    <p class="text-xs font-bold ${c.text} uppercase tracking-wider">${dayNames[i]}</p>
                    <p class="text-lg font-bold text-gray-800 dark:text-gray-100">${dateStr}</p>
                </div>
                <div class="relative w-12 h-12 flex items-center justify-center">
                    <svg class="w-12 h-12 transform -rotate-90">
                        <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" class="${c.text} opacity-20"></circle>
                        <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" stroke-dasharray="125.6" stroke-dashoffset="125.6" class="progress-ring__circle ${c.text}"></circle>
                    </svg>
                    <span class="absolute text-[10px] font-bold percentage-text">0%</span>
                </div>
            </div>
            <div class="space-y-2 flex-1 task-list">
                <label class="custom-checkbox flex items-start gap-2 cursor-pointer group">
                    <input type="checkbox" class="hidden" onchange="updateProgress(this)">
                    <div class="w-5 h-5 rounded-md border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center mt-0.5 ${c.hover} transition-colors"><i class="fa-solid fa-check text-white text-[10px]"></i></div>
                    <span class="text-sm task-text">Nhiệm vụ ngày ${dayNames[i]}</span>
                </label>
            </div>
        `;
        board.appendChild(card);
    }
}

function changeWeek(direction) {
    currentWeekOffset += direction;
    generateWeek();
}

// Hàm tính phần trăm và cập nhật vòng tròn khi tích chọn
function updateProgress(checkbox) {
    const container = checkbox.closest('.task-day-card');
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percent = checkboxes.length === 0 ? 0 : Math.round((checkedCount / checkboxes.length) * 100);
    
    // Gạch ngang chữ
    const textSpan = checkbox.nextElementSibling.nextElementSibling;
    if(checkbox.checked) textSpan.classList.add('line-through', 'text-gray-400');
    else textSpan.classList.remove('line-through', 'text-gray-400');

    // Xoay vòng tròn
    const circle = container.querySelector('.progress-ring__circle');
    const text = container.querySelector('.percentage-text');
    const radius = 20; const circumference = 2 * Math.PI * radius;
    circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    text.innerText = `${percent}%`;
}
