function render(contentFn, beforeFn, afterFn) {
    if (beforeFn) beforeFn();
    app.innerHTML = contentFn();
    if (afterFn) afterFn();
}

export default render;
