function Task() {
    return /*html*/ `
    <center>
    
    <form action="" id = "form-task">
        <input type="text" id="task-input" placeholder="Nhập công việc..." name = "title"/>
        <button id = "task-btn">Thêm Task</button>
    </form>

    <ul id="task-list"></ul>
    </center>
    `;
}

export default Task;
