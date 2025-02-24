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

//Task 3 - Created Inventory Class

class Inventory { 
    constructor() { //Initializes inventory properties
        this.products = []; //Array to store products
        this.orders = []; //Task 4 - Array to store orders
    };

    addProduct(product) { //Adds a new product to the inventory
        this.products.push(product); //Using push method to store product
    };

    listProducts() { //Displays all product details
        return this.products.forEach(product => console.log(product.getDetails()));
    };

    placeOrder(orderId, product, quantity) { //Task 4 - Method to place an order
        if (product.stock >= quantity) {
            let order  = new Order(orderId, product, quantity); //Creates new order instance
            this.orders.push(order); //Adds order to order list if stock is sufficient
        } else {
            return `Insufficient stock! Stock of ${product.name} is currently ${product.stock}`; //Displays stock shortage message
        };
    };

    listOrders() { //Task 4 - Method to list all orders
        this.orders.forEach(order => console.log(order.getOrderDetails())); //Logs all orders placed
    };

    restockProduct(productId, quantity) { //Task 5 - Method to restock a product
        let product = this.products.find(product => product.id === productId); //Finds product using productId
        if (product) {
            product.stock += quantity; //Increases product stock level
        }; 
    };
};

const inventory = new Inventory(); //Test case for Task 3
inventory.addProduct(prod1);
inventory.listProducts();

//Task 4 - Implemented Order Management
inventory.placeOrder(601, prod1, 2); 
inventory.listOrders();

console.log(prod1.getDetails());

