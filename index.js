const user = window.prompt("Please enter some flavors separated by commas.");

const icecream = {
  vanilla: 12,
  strawberry: 20,
  coffee: 8,
  chocolate: 14,
};
const flavorsArray = user.split(",");
/**
 * we need to make a function to track the orders
 * make the function name with param (order)
 * add each order and add by 1 with loop
 * we are looping through the arr of items to see how many times they ordered it
 * return object keys and value
 */
function trackOrders(orders) {
  const orderTracker = {};

  // Loop through the array of orders
  for (const order of orders) {
    // Check if the order is already in the tracker
    if (orderTracker.hasOwnProperty(order)) {
      // If yes, increment the count
      orderTracker[order]++;
    } else {
      // If no, add the order to the tracker with count 1
      orderTracker[order] = 1;
    }
  }

  // Return an object with keys and values
  return orderTracker;
}

// Call the trackOrders function with the flavorsArray
const result = trackOrders(flavorsArray);

// Logging the tracked orders
console.log(result);
