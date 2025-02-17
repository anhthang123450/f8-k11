const dataMenu = [
    { id: 1, name: "Trang chủ", slug: "./" },
    { id: 2, name: "Sản phẩm", slug: "/san-pham" },
    { id: 3, name: "Về chúng tôi", slug: "/ve-chung-toi" },
    { id: 4, name: "Phụ kiện", slug: "/phu-kien", parentId: 2 },
];

// Tạo ra ul
const menuList = document.createElement("ul");
// thêm ul vào body
document.body.appendChild(menuList);
// lặp qua mảng kiểm tra xem có parentId không
for (const value of dataMenu) {
    if (!value.parentId) {
        // tạo ra thẻ li
        const item = document.createElement("li");
        const itemLink = document.createElement("a");
        // itemLink.href (thêm href = "" cho thẻ a)
        itemLink.href = value.slug;
        item.appendChild(itemLink);
        // thêm text cho thẻ a với nội dung của data Menu
        itemLink.innerText = value.name;
        // xong sau đó thêm thẻ li làm con của thẻ ul
        menuList.appendChild(item);
        // tạo ra 1 thẻ ul (Sub Menu)
        const subMenu = document.createElement("ul");
        // dùng tiếp vòng lặp để lặp qua mảng tìm Sub Menu
        for (const subItem of dataMenu) {
            // nếu như ở vòng lặp này subItem.parentID === value.id thì
            if (subItem.parentId === value.id) {
                // tạo ra thẻ li
                const subItemLi = document.createElement("li");
                // tạo ra thẻ a
                const subItemLink = document.createElement("a");
                subItemLink.href = subItem.slug;
                subItemLi.appendChild(subItemLink);
                subItemLink.innerText = subItem.name;
                subMenu.appendChild(subItemLi);
            }
        }

        // kiểm tra xem có con hay không ?
        if (subMenu.childNodes.length > 0) {
            // thẻ li (item) sẽ thêm thẻ ul vào
            item.appendChild(subMenu);
        }
    }
}
