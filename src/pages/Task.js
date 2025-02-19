import "../assets/styles/task.css";
function Task() {
    return /*html*/ `
    <h1 class="task-title">TODO LIST</h1>
    <div class="task">
        <div class="task-form">
            <input type="text" id="task-input" placeholder="Task title" />
            <select id="task-status">
                <option value="">ALL</option>
                <option value="to do">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
            <select id="task-priority">
                <option value="low">Low (1)</option>
                <option value="medium" selected>Medium (2)</option>
                <option value="high">High (3)</option>
            </select>
            <button id="quick-add-task-btn">Add Task</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="task-list"></tbody>
        </table>
    </div>

    <div class="task-controls">
        <!-- Tìm kiếm Task -->
            <input type="text" id="search-task" placeholder="Search task..." />

            <!-- Lọc Task theo Status -->
            <select id="filter-status">
                <option value="all">All</option>
                <option value="to do">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>

            <!-- Sắp xếp Task theo Priority -->
            <select id="sort-priority">
                <option value="none">Sort by Priority</option>
                <option value="asc">Priority ↑</option>
                <option value="desc">Priority ↓</option>
            </select>
            <button id="search-task-btn">Search</button> <!-- NÚT TÌM KIẾM -->
        </div>

        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="task-list"></tbody>
        </table>
    </div>
    `;
}

export default Task;
