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