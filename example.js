const url = "../data/purchase_orders.csv";

d3.csv(url)
    .then(data => {
        const ul = d3.select("#purchase-orders");

        data.forEach(d => {
            const li = ul.append("li");
            li.text(`${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: ${d.purchaseAmount}`);
        });
    })
    .catch(error => {
        console.error("Error loading data:", error);
    });