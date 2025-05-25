// assignment_LA4.js

let customerQueue = [];

// Function to add a customer to the queue
function addCustomer(name) {
    customerQueue.push(name);
    console.log(`Customer ${name} added to the queue. Your number is ${customerQueue.length}.`);
}

// Function to service a customer
function serviceCustomer(number) {
    if (number > 0 && number <= customerQueue.length) {
        const customerName = customerQueue[number - 1];
        console.log(`Servicing customer: ${customerName}`);
        customerQueue.splice(number - 1, 1); // Remove the serviced customer
        console.log(`Updated Queue: ${customerQueue}`);
    } else {
        console.log("Invalid number. Please enter a valid customer number.");
    }
}

// Main program
for (let i = 0; i < 5; i++) {
    const customerName = prompt("Enter your name:");
    addCustomer(customerName);
}

while (customerQueue.length > 0) {
    const serviceNumber = parseInt(prompt("Enter the customer number to be serviced:"));
    serviceCustomer(serviceNumber);
}
