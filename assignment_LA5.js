// assignment_LA5.js

let customerHashTable = {};

// Simple hash function to generate a key
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 5; // Assuming we have 5 slots
}

// Function to add a customer to the hash table
function addCustomer(name) {
    const key = hashFunction(name);
    customerHashTable[key] = name;
    console.log(`Customer ${name} added to the hash table. Your number is ${key + 1}.`);
}

// Function to service a customer
function serviceCustomer(number) {
    const key = number - 1;
    if (customerHashTable[key]) {
        const customerName = customerHashTable[key];
        console.log(`Servicing customer: ${customerName}`);
        delete customerHashTable[key]; // Remove the serviced customer
        console.log(`Updated Hash Table: ${JSON.stringify(customerHashTable)}`);
    } else {
        console.log("Invalid number. Please enter a valid customer number.");
    }
}

// Main program
for (let i = 0; i < 5; i++) {
    const customerName = prompt("Enter your name:");
    addCustomer(customerName);
}

while (Object.keys(customerHashTable).length > 0) {
    const serviceNumber = parseInt(prompt("Enter the customer number to be serviced:"));
    serviceCustomer(serviceNumber);
}
