// Thêm task mới
export function addTask() {
    const taskForm = document.querySelector("#form-task");
    if (!taskForm) return;

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(taskForm);
        const taskInfo = Object.fromEntries(formData);

        const newTask = {
            ...taskInfo,
            completed: false,
        };

        fetch("http://localhost:3000/tasks", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(newTask),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Thêm task thành công", data);
                taskForm.reset();
                loadTask(); // Load lại danh sách task sau khi thêm
            })
            .catch((error) => console.log(error));
    });
}

// Sửa task
export function editTask(taskId, updateTask) {
    fetch(`http://localhost:3000/tasks/${taskId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(updateTask),
    })
        .then(() => {
            console.log(`Task ${taskId} đã được cập nhật.`);
            loadTask();
        })
        .catch((error) => console.log(error));
}

// Xóa task
export function deleteTask(taskId) {
    console.log("Task ID cần xóa:", taskId);

    fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
    })
        .then(() => {
            console.log(`Task ${taskId} đã bị xóa.`);
            loadTask();
        })
        .catch((error) => console.log("Lỗi xóa task:", error));
}

export function toggleTaskCompletion(taskId, currentStatus) {
    fetch(`http://localhost:3000/tasks/${taskId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({ completed: !currentStatus }),
    })
        .then(() => {
            console.log(`Task ${taskId} đã đổi trạng thái.`);
            loadTask();
        })
        .catch((error) => console.log("Lỗi cập nhật trạng thái:", error));
}

export function loadTask() {
    fetch("http://localhost:3000/tasks")
        .then((response) => response.json())
        .then((tasks) => {
            const taskList = document.querySelector("#task-list");
            if (!taskList) return;

            taskList.innerHTML = "";

            tasks.forEach((task) => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <span style="text-decoration: ${
                        task.completed ? "line-through" : "none"
                    };">${task.title}</span> 
                    <button class="toggle-btn" data-id="${
                        task.id
                    }" data-completed="${task.completed}">
                        ${task.completed ? "Chưa hoàn thành" : "Hoàn thành"}
                    </button>
                    <button class="edit-btn" data-id="${task.id}">Sửa</button>
                    <button class="delete-btn" data-id="${task.id}">Xóa</button>
                `;

                taskList.appendChild(li);
            });

            document.querySelectorAll(".edit-btn").forEach((btn) => {
                btn.addEventListener("click", function () {
                    const taskId = this.dataset.id;
                    const newTitle = prompt(
                        "Nhập tiêu đề mới:",
                        tasks.find((t) => t.id == taskId)?.title
                    );
                    if (newTitle) {
                        editTask(taskId, { title: newTitle });
                    }
                });
            });

            document.querySelectorAll(".delete-btn").forEach((btn) => {
                btn.addEventListener("click", function () {
                    const taskId = this.dataset.id;
                    if (confirm("Bạn có chắc muốn xóa task này?")) {
                        deleteTask(taskId);
                    }
                });
            });

            document.querySelectorAll(".toggle-btn").forEach((btn) => {
                btn.addEventListener("click", function () {
                    const taskId = this.dataset.id;
                    const currentStatus = this.dataset.completed === "true";
                    toggleTaskCompletion(taskId, currentStatus);
                });
            });
        })
        .catch((error) => console.log(error));
}

// Hàm khởi chạy sau khi load trang
export default function afterTask() {
    loadTask();
    addTask();
}
