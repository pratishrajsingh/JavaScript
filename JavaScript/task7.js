// Task 1 — Fetch, Map, Filter, Find, Reduce, Sort on Products API
let api = "https://fakestoreapi.com/products";
fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {

        console.log("===== ALL PRODUCTS =====");

        // Display title, price and category
        products.forEach(function(product) {
            console.log("Title:", product.title);
            console.log("Price: $" + product.price);
            console.log("Category:", product.category);
            console.log("--------------------");
        });

        // Using map()
        let productDetails = products.map(function(product) {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log("Title and Price:");
        console.log(productDetails);


        // Products above $100
        let expensiveProducts = products.filter(function(product) {
            return product.price > 100;
        });

        console.log("Products above $100:");
        console.log(expensiveProducts);


        // First electronics product
        let electronicsProduct = products.find(function(product) {
            return product.category === "electronics";
        });

        console.log("First Electronics Product:");
        console.log(electronicsProduct);


        // Total price
        let totalPrice = products.reduce(function(total, product) {
            return total + product.price;
        }, 0);

        console.log("Total Price: $" + totalPrice.toFixed(2));


        // Sort highest to lowest
        let sortedProducts = [...products].sort(function(a, b) {
            return b.price - a.price;
        });

        console.log("Highest to Lowest:");
        console.log(sortedProducts);

    })
    .catch(function(error) {
        console.log("Something went wrong:", error);
    })
    .finally(function() {
        console.log("API request completed.");
    });


// Task 2 — Product Category Dashboard
function countByCategory(products, category) {
  return products.filter(p => p.category === category).length;
}
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    let totalProducts = products.length;

    let electronics = countByCategory(products, "electronics");
    let jewelery = countByCategory(products, "jewelery");
    let mensClothing = countByCategory(products, "men's clothing");
    let womensClothing = countByCategory(products, "women's clothing");

    let prices = products.map(p => p.price);
    let highestPrice = Math.max(...prices);
    let lowestPrice = Math.min(...prices);
    let averagePrice = products.reduce((sum, p) => sum + p.price, 0) / totalProducts;

    console.log("===== PRODUCT DASHBOARD =====");
    console.log("");
    console.log(`Total Products: ${totalProducts}`);
    console.log("");
    console.log(`Electronics: ${electronics}`);
    console.log(`Jewelery: ${jewelery}`);
    console.log(`Men's Clothing: ${mensClothing}`);
    console.log(`Women's Clothing: ${womensClothing}`);
    console.log("");
    console.log(`Highest Price: $${highestPrice}`);
    console.log(`Lowest Price: $${lowestPrice}`);
    console.log(`Average Price: $${averagePrice.toFixed(2)}`);
  })
  .catch(error => console.log("Error loading dashboard: " + error));


// Task 3 — User & Post API
let userApi = "https://jsonplaceholder.typicode.com/users";
let postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(userApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(users) {

        console.log("===== USERS =====");

        // 1. Display all names
        users.forEach(function(user) {
            console.log(user.name);
        });

        // 2. Name + email
        console.log("===== NAME AND EMAIL =====");

        users.forEach(function(user) {
            console.log(user.name + " - " + user.email);
        });

        // 3. Find user with ID 5
        let user5 = users.find(function(user) {
            return user.id === 5;
        });

        console.log("===== USER ID 5 =====");
        console.log(user5);

        // 4. Users from a city
        let cityUsers = users.filter(function(user) {
            return user.address.city === "South Christy";
        });

        console.log("===== USERS FROM CITY =====");
        console.log(cityUsers);

        return fetch(postApi);
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {

        // 5. Posts by user ID 1
        let userPosts = posts.filter(function(post) {
            return post.userId === 1;
        });

        console.log("===== POSTS BY USER 1 =====");
        console.log(userPosts);

        // 6. Count posts
        console.log("Number of posts by User 1:", userPosts.length);

        // 7. First title longer than 50 characters
        let longTitle = posts.find(function(post) {
            return post.title.length > 50;
        });

        console.log("===== FIRST LONG TITLE =====");
        console.log(longTitle);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });


// Task 4 — API + Search
let category = prompt("Enter product category:");
let maxPrice = Number(prompt("Enter maximum price:"));

api = "https://fakestoreapi.com/products";

fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {

        let result = products.filter(function(product) {
            return product.category === category &&
                   product.price <= maxPrice;
        });

        console.log("===== SEARCH RESULT =====");

        result.forEach(function(product) {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Category:", product.category);
            console.log("--------------------");
        });

        if (result.length === 0) {
            console.log("No products found.");
        }
    })
    .catch(function(error) {
        console.log("Error:", error);
    });


// Task 5 — API Shopping Cart
api = "https://fakestoreapi.com/products";

fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {

        console.log("===== AVAILABLE PRODUCTS =====");

        products.forEach(function(product) {
            console.log(
                "ID:", product.id,
                "|", product.title,
                "| $" + product.price
            );
        });

        let id1 = Number(prompt("Enter first product ID:"));
        let id2 = Number(prompt("Enter second product ID:"));

        let cart = [];

        let product1 = products.find(function(product) {
            return product.id === id1;
        });

        let product2 = products.find(function(product) {
            return product.id === id2;
        });

        if (product1) {
            cart.push(product1);
        }

        if (product2) {
            cart.push(product2);
        }

        console.log("===== CART =====");

        cart.forEach(function(product, index) {
            console.log("Product " + (index + 1) + ":", product.title);
            console.log("Price: $" + product.price);
        });

        let total = cart.reduce(function(sum, product) {
            return sum + product.price;
        }, 0);

        let discount = 0;

        if (total > 200) {
            discount = 20;
        } else if (total > 100) {
            discount = 10;
        }

        let discountAmount = total * discount / 100;
        let finalAmount = total - discountAmount;

        console.log("Total: $" + total.toFixed(2));
        console.log("Discount: " + discount + "%");
        console.log("Final Amount: $" + finalAmount.toFixed(2));
    })
    .catch(function(error) {
        console.log("Error:", error);
    });


// Task 6 — FakeStore Product Report
let apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
  .then(response => response.json())
  .then(products => {
    console.log("========== PRODUCT REPORT ==========");
    console.log("");
    console.log(`Total Products: ${products.length}`);
    console.log("");

    // 3. Display all products
    console.log("All Products:");
    products.forEach(p => console.log(`- ${p.title}`));
    console.log("");

    // 4. Product names array
    let productNames = products.map(p => p.title);
    console.log("Product Names:");
    productNames.forEach(name => console.log(`- ${name}`));
    console.log("");

    // 5. Filter expensive products
    let expensiveProducts = products.filter(p => p.price > 100);
    console.log("Products Above $100:");
    expensiveProducts.forEach(p => console.log(`- ${p.title} ($${p.price})`));
    console.log("");

    // 6. Find electronics product
    let electronicsProduct = products.find(p => p.category === "electronics");
    console.log("Electronics Product:");
    console.log(electronicsProduct ? electronicsProduct.title : "None found");
    console.log("");

    // 7. Total price
    let totalValue = products.reduce((sum, p) => sum + p.price, 0);
    console.log("Total Product Value:");
    console.log(`$${totalValue.toFixed(2)}`);
    console.log("");

    // 8. some() and every()
    let anyAbove500 = products.some(p => p.price > 500);
    let allAboveOne = products.every(p => p.price > 1);
    console.log("Any Product Above $500:");
    console.log(anyAbove500);
    console.log("");
    console.log("All Products Above $1:");
    console.log(allAboveOne);
    console.log("");

    // 9. Sort highest to lowest
    let sortedProducts = [...products].sort((a, b) => b.price - a.price);
    console.log("Highest → Lowest:");
    sortedProducts.forEach(p => console.log(`- ${p.title}: $${p.price}`));
  })
  .catch(error => {
    console.log("Failed to load the product report: " + error);
  })
  .finally(() => {
    console.log("");
    console.log("Report generation complete.");
  });