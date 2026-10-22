// --- 3. Cập nhật tiến độ vòng tròn ---
function updateProgress(checkbox) {
    const container = checkbox.closest('.task-day-card'); // Sửa lại class chính xác
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const totalCount = checkboxes.length;
    const percent = totalCount === 0 ? 0 : Math.round((checkedCount / totalCount) * 100);
    
    const textSpan = checkbox.nextElementSibling.nextElementSibling;
    if(checkbox.checked) {
        textSpan.classList.add('line-through', 'text-gray-400');
    } else {
        textSpan.classList.remove('line-through', 'text-gray-400');
    }

    const circle = container.querySelector('.progress-ring__circle');
    const percentageText = container.querySelector('.percentage-text');
    
    if (circle && percentageText) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        percentageText.innerText = `${percent}%`;
    }
}

// --- Chức năng TÌM KIẾM TASK ---
function filterTasks(searchTerm) {
    const term = searchTerm.toLowerCase();
    const taskLabels = document.querySelectorAll('.custom-checkbox');
    
    taskLabels.forEach(label => {
        const text = label.querySelector('.task-text');
        if(text) {
            if (text.innerText.toLowerCase().includes(term)) {
                label.style.display = 'flex';
            } else {
                label.style.display = 'none';
            }
        }
    });
}

// --- Chức năng THÊM TASK MỚI ---
function addNewTask() {
    const taskName = prompt("Nhập tên công việc mới:");
    if (!taskName || taskName.trim() === "") return;

    // Hiện tại mặc định thêm vào Thứ 2. Bạn có thể nâng cấp sau để chọn ngày.
    const mondayColumn = document.querySelector('[data-day="Thứ 2"] .task-list');
    if (mondayColumn) {
        const newLabel = document.createElement('label');
        newLabel.className = "custom-checkbox flex items-start gap-2 cursor-pointer group";
        newLabel.innerHTML = `
            <input type="checkbox" class="hidden" onchange="updateProgress(this)">
            <div class="w-5 h-5 rounded-md border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center mt-0.5 group-hover:border-pink-500 transition-colors"><i class="fa-solid fa-check text-white text-[10px]"></i></div>
            <span class="text-sm task-text">${taskName}</span>
        `;
        mondayColumn.appendChild(newLabel);
        
        // Cập nhật lại vòng tiến trình
        const firstCheckbox = mondayColumn.querySelector('input[type="checkbox"]');
        if (firstCheckbox) updateProgress(firstCheckbox);
    }
}

// Khởi tạo lại vòng tròn tiến trình khi load trang
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.task-day-card').forEach(container => {
        const firstCheckbox = container.querySelector('input[type="checkbox"]');
        if (firstCheckbox) updateProgress(firstCheckbox);
    });
});
