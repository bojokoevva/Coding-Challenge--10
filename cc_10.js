// Task 1 - Creating Product Class
// The Product class represents an item in the inventory.
class Product {
    constructor(name, id, price, stock) {
        this.name = name; 
        this.id = id; 
        this.price = price; 
        this.stock = stock; 
    };
    
    // Returns a formatted string with product details
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    
 // Add a method updateStock(quantity)
    // Modifies the stock level when an order is placed
    updateStock(quantity) {
        this.stock -= quantity;
    }
}

// Test case
const prod1 = new Product("Laptop", 101, 1200, 10); // Create a product instance
console.log(prod1.getDetails()); 

prod1.updateStock(3); // Reduce stock by 3
console.log(prod1.getDetails()); 

//Task 2 - Implemented Order Class

class Order { 
    constructor(orderId, product, quantity) { //Initializes order attributes
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity); //Reduces stock when an order is placed
    };

    getOrderDetails() { //Method to retrieve order details
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`; //Returns order summary
    };
};

const order1 = new Order(501, prod1, 2); //Creating an order instance
console.log(order1.getOrderDetails()); 
console.log(prod1.getDetails()); 

