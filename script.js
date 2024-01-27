const productPrices = {
    "Product 1": 10,
    "Product 2": 12,
    "Product 3": 15,
};
let order = {};
console.log("orders",order);

function addToOrder(productName) {
    const quantityString = prompt(`Enter quantity for ${productName}:`);
    const quantity = parseInt(quantityString);
    console.log("Quantity=====>",quantity);

    if (isNaN(quantity) || quantity <= 0) {
        alert('Invalid quantity. Please enter a valid number.');
        return;
    }
    if (!order[productName]) {
        order[productName] = { quantity, price: productPrices[productName] };
    } else {
        order[productName].quantity += quantity;
    }
    alert(`${quantity} ${productName}(s) added to your order.`);
}

function checkout() {
    const name = prompt('Enter your name for checkout:');
    console.log("NAME",name);
    if (!name) {
        alert('Please enter your name to checkout.');
        return;
    }
    generateReceipt(name);
}

function generateReceipt(name) {
    let totalCost = 0;
    let receiptContent = `<h2>Receipt for ${name}</h2><br>`;
    for (const [productName, details] of Object.entries(order)) {
        const { quantity, price } = details;
        const productCost = quantity * price;
        receiptContent += `${quantity} ${productName}(s) - $${productCost}<br>`;
        totalCost += productCost;
    }
    const gstPercentage = 13;
    const gst = (totalCost * gstPercentage) / 100;
    totalCost += gst;
    console.log("TotalCost",totalCost);
    receiptContent += `<br><strong>GST (13%):</strong> $${gst}`;
    receiptContent += `<br><strong>Total Cost:</strong> $${totalCost}`;

    const receiptContainer = document.getElementById('receiptContainer');
    receiptContainer.innerHTML = receiptContent;
}
