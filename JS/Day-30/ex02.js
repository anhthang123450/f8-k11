const products = [
    { id: 1, title: "Iphone 16 pro max", price: 2000, quantity: 2 },
    { id: 2, title: "Tivi Xiaomi 75inch 4K", price: 4000, quantity: 1 },
    {
        id: 3,
        title: "Tai nghe khong day airpod 2 pro",
        price: 400,
        quantity: 4,
    },
];

/**
 * Bước 1: Tạo content từ products
 * Bước 2: Gắn content vào table và đưa vào document.body
 */

let content = "";

products.forEach((item) => {
    
    const itemElement = /*html */ `<tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>${item.price * item.quantity}</td>
    </tr>`;
    content += itemElement;
});

console.log(content);

const totalCost = products.reduce((total, cur) => {
    return (total += cur.price * cur.quantity);
}, 0);

content += `<str>
<td colspan="4">Tổng tiền</td>
<td>${totalCost}</td>
</str>`;

document.body.innerHTML = /*html */ `
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Cost</th>
            </tr>
        </thead>
        <tbody>
            ${content}
        </tbody>
    </table>
`;
