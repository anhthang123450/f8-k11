function afterTask() {
    const taskInput = document.querySelector("#task-input");
    const taskStatus = document.querySelector("#task-status");
    const taskPriority = document.querySelector("#task-priority");
    const addTaskBtn = document.querySelector("#quick-add-task-btn");
    const taskList = document.querySelector("#task-list");

    const url = "http://localhost:3000/tasks";

    async function fetchTask() {
        const res = await fetch(url);
        const tasks = await res.json();
        renderTask(tasks);
    }

    // Hiển thị danh sách task
    function renderTask(tasks) {
        taskList.innerHTML = "";
        tasks.forEach((task) => {
            taskList.innerHTML += /*html*/ `
                <tr>
                    <td>${task.title}</td>
                    <td>${task.status}</td>
                    <td>${task.priority}</td>
                    <td>
                        <button onclick="editTask(${task.id})">Edit</button>
                        <button onclick="deleteTask(${task.id})">Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    // Sự kiện nút bấm (Thêm task mới)
    addTaskBtn.addEventListener("click", async () => {
        const title = taskInput.value.trim();
        const status = taskStatus.value;
        const priority = taskPriority.value;

        if (!title) {
            alert("Bạn cần nhập task");
            return;
        }

        const newTask = { title, status, priority };

        await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(newTask),
        });

        taskInput.value = "";
        fetchTask();
    });

    async function deleteTask(id) {
        if (!confirm("Bạn có chắc muốn xóa task này?")) return;
        await fetch(`${url}/${id}`, { method: "DELETE" });
        fetchTask();
    }

    async function editTask(id) {
        const newTitle = prompt("Nhập tiêu đề mới:");
        if (!newTitle) return;

        await fetch(`${url}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTitle }),
        });

        fetchTask();
    }
    window.deleteTask = deleteTask;
    window.editTask = editTask;
    fetchTask();
}

export default afterTask;
