const data = [
  {
    id: 1,
    name: "Spicy Grill",
    cuisines: ["Indian", "Barbecue"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Tandoori_chicken_India.jpg",
    time: "30 mins",
    offer: "20% off on orders above $30",
    items: [
      { id: 101, name: "Tandoori Chicken", price: 12.99 },
      { id: 111, name: "Paneer Tikka", price: 10.5 },
      { id: 112, name: "Lamb Seekh Kebab", price: 13.75 },
      { id: 113, name: "Butter Naan", price: 2.5 },
      { id: 114, name: "Chicken Biryani", price: 11.99 },
    ],
  },
  {
    id: 2,
    name: "Sushi World",
    cuisines: ["Japanese", "Seafood"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg",
    time: "25 mins",
    offer: "Free miso soup with every order",
    items: [
      { id: 102, name: "Salmon Sushi Platter", price: 18.5 },
      { id: 115, name: "Tuna Roll", price: 14.0 },
      { id: 116, name: "Eel Nigiri", price: 13.25 },
      { id: 117, name: "Tempura Shrimp", price: 10.75 },
      { id: 118, name: "Avocado Maki", price: 8.5 },
    ],
  },
  {
    id: 3,
    name: "Pasta Palace",
    cuisines: ["Italian", "Continental"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Pasta_Puttanesca.jpg",
    time: "35 mins",
    offer: "Buy 1 get 1 free on selected pastas",
    items: [
      { id: 103, name: "Pasta Puttanesca", price: 14.25 },
      { id: 119, name: "Spaghetti Carbonara", price: 13.5 },
      { id: 120, name: "Lasagna", price: 15.0 },
      { id: 121, name: "Fettuccine Alfredo", price: 13.75 },
      { id: 122, name: "Garlic Bread", price: 4.5 },
    ],
  },
  {
    id: 4,
    name: "Taco Town",
    cuisines: ["Mexican"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Taco_Bell_Doritos_Locos_Tacos.jpg",
    time: "20 mins",
    offer: "15% off for first-time customers",
    items: [
      { id: 104, name: "Beef Tacos", price: 9.75 },
      { id: 123, name: "Chicken Quesadilla", price: 8.99 },
      { id: 124, name: "Nachos Supreme", price: 7.5 },
      { id: 125, name: "Guacamole Dip", price: 5.25 },
      { id: 126, name: "Churros", price: 4.0 },
    ],
  },
  {
    id: 5,
    name: "Burger Barn",
    cuisines: ["American", "Fast Food"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Cheeseburger.jpg",
    time: "18 mins",
    offer: "Free fries with every burger",
    items: [
      { id: 105, name: "Cheeseburger", price: 7.5 },
      { id: 127, name: "Double Bacon Burger", price: 9.25 },
      { id: 128, name: "Crispy Chicken Sandwich", price: 8.75 },
      { id: 129, name: "Onion Rings", price: 3.5 },
      { id: 130, name: "Milkshake", price: 4.5 },
    ],
  },
  {
    id: 6,
    name: "Noodle Nest",
    cuisines: ["Chinese", "Asian"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Chow_mein_Chinese_noodles.jpg",
    time: "22 mins",
    offer: "10% off on all noodles",
    items: [
      { id: 106, name: "Chow Mein", price: 11.0 },
      { id: 131, name: "Schezwan Noodles", price: 12.25 },
      { id: 132, name: "Spring Rolls", price: 6.75 },
      { id: 133, name: "Fried Rice", price: 10.0 },
      { id: 134, name: "Hot and Sour Soup", price: 5.25 },
    ],
  },
  {
    id: 7,
    name: "Green Garden",
    cuisines: ["Vegan", "Healthy"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Vegan_buddha_bowl.jpg",
    time: "28 mins",
    offer: "Free smoothie with orders over $25",
    items: [
      { id: 107, name: "Vegan Buddha Bowl", price: 13.45 },
      { id: 135, name: "Quinoa Salad", price: 10.5 },
      { id: 136, name: "Tofu Stir Fry", price: 12.0 },
      { id: 137, name: "Avocado Toast", price: 8.25 },
      { id: 138, name: "Green Smoothie", price: 6.0 },
    ],
  },
  {
    id: 8,
    name: "Curry Kingdom",
    cuisines: ["Indian", "Thai"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Chicken_curry_with_rice.jpg",
    time: "32 mins",
    offer: "Combo meals starting at $9.99",
    items: [
      { id: 108, name: "Chicken Curry with Rice", price: 12.75 },
      { id: 139, name: "Thai Green Curry", price: 11.95 },
      { id: 140, name: "Palak Paneer", price: 10.99 },
      { id: 141, name: "Steamed Rice", price: 2.5 },
      { id: 142, name: "Roti", price: 1.75 },
    ],
  },
  {
    id: 9,
    name: "Pizza Plaza",
    cuisines: ["Italian", "Pizza"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",
    time: "27 mins",
    offer: "2 large pizzas for $20",
    items: [
      { id: 109, name: "Supreme Pizza", price: 16.0 },
      { id: 143, name: "Margherita Pizza", price: 12.0 },
      { id: 144, name: "Pepperoni Pizza", price: 14.5 },
      { id: 145, name: "Garlic Breadsticks", price: 5.0 },
      { id: 146, name: "Chocolate Lava Cake", price: 6.0 },
    ],
  },
  {
    id: 10,
    name: "Middle Feast",
    cuisines: ["Middle Eastern", "Grill"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Shish_kebab.jpg",
    time: "30 mins",
    offer: "Free dessert with orders above $40",
    items: [
      { id: 110, name: "Shish Kebab", price: 15.25 },
      { id: 147, name: "Falafel Wrap", price: 9.5 },
      { id: 148, name: "Hummus & Pita", price: 7.25 },
      { id: 149, name: "Chicken Shawarma", price: 13.0 },
      { id: 150, name: "Baklava", price: 4.75 },
    ],
  },
];

module.exports = data;