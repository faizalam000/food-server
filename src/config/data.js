const data = [
  {
    id: 1,
    name: "Spicy Grill",
    cuisines: ["Indian", "Barbecue"],
    image: "https://th.bing.com/th/id/OIP.J2LwWphLZVnb7xpMRWZjjAHaEK?rs=1&pid=ImgDetMain",
    rating: 4.5,
    time: "30 mins",
    offer: "20% off on orders above $30",
    items: {
      "Appetizer": [
        { id: 101, name: "Paneer Tikka", price: 10.5 },
        { id: 112, name: "Lamb Seekh Kebab", price: 13.75 },
        { id: 1000, name: "Vegetable Samosa", price: 5.99 },
        { id: 1001, name: "Chicken 65", price: 8.99 },
        { id: 1002, name: "Papdi Chaat", price: 6.25 }
      ],
      "Main Course": [
        { id: 114, name: "Chicken Biryani", price: 11.99 },
        { id: 1005, name: "Butter Chicken", price: 13.99 },
        { id: 1006, name: "Dal Makhani", price: 9.5 },
        { id: 1007, name: "Tandoori Platter", price: 16.2 },
        { id: 1008, name: "Rogan Josh", price: 14.3 }
      ],
      "Side": [
        { id: 113, name: "Butter Naan", price: 2.5 },
        { id: 1010, name: "Garlic Naan", price: 3.0 },
        { id: 1011, name: "Jeera Rice", price: 3.5 },
        { id: 1012, name: "Raita", price: 2.75 },
        { id: 1013, name: "Papadum", price: 1.25 }
      ],
      "Dessert": [
        { id: 1015, name: "Gulab Jamun", price: 4.5 },
        { id: 1016, name: "Kheer", price: 4.25 },
        { id: 1017, name: "Rasmalai", price: 5.25 },
        { id: 1018, name: "Mango Lassi", price: 3.99 },
        { id: 1019, name: "Kulfi", price: 3.5 }
      ],
      "Drink": [
        { id: 1020, name: "Masala Chai", price: 2.25 },
        { id: 1021, name: "Mango Lassi", price: 3.75 },
        { id: 1022, name: "Thums Up", price: 2.0 },
        { id: 1023, name: "Nimbu Pani", price: 2.5 },
        { id: 1024, name: "Badam Milk", price: 3.25 }
      ]
    }
  },
  {
    id: 2,
    name: "Sushi World",
    cuisines: ["Japanese", "Seafood"],
    image: "https://th.bing.com/th/id/OIP.DZagOzmfIANIVh3OzqiYhgAAAA?rs=1&pid=ImgDetMain",
    rating: 4.7,
    time: "25 mins",
    offer: "Free miso soup with every order",
    items: {
      "Appetizer": [
        { id: 116, name: "Eel Nigiri", price: 13.25 },
        { id: 117, name: "Tempura Shrimp", price: 10.75 },
        { id: 2000, name: "Edamame", price: 5.5 },
        { id: 2001, name: "Gyoza", price: 6.99 },
        { id: 2002, name: "Seaweed Salad", price: 7.25 }
      ],
      "Main Course": [
        { id: 102, name: "Salmon Sushi Platter", price: 18.5 },
        { id: 115, name: "Tuna Roll", price: 14.0 },
        { id: 118, name: "Avocado Maki", price: 8.5 },
        { id: 2005, name: "Dragon Roll", price: 16.99 },
        { id: 2006, name: "Teriyaki Chicken", price: 14.5 }
      ],
      "Side": [
        { id: 2010, name: "Miso Soup", price: 3.25 },
        { id: 2011, name: "Steamed Rice", price: 2.5 },
        { id: 2012, name: "Pickled Ginger", price: 1.5 },
        { id: 2013, name: "Wasabi", price: 1.0 },
        { id: 2014, name: "Soy Sauce", price: 0.75 }
      ],
      "Dessert": [
        { id: 2015, name: "Mochi Ice Cream", price: 5.99 },
        { id: 2016, name: "Green Tea Cake", price: 6.25 },
        { id: 2017, name: "Dorayaki", price: 4.75 },
        { id: 2018, name: "Matcha Tiramisu", price: 7.5 },
        { id: 2019, name: "Red Bean Bun", price: 4.25 }
      ],
      "Drink": [
        { id: 2020, name: "Green Tea", price: 2.25 },
        { id: 2021, name: "Sake", price: 7.5 },
        { id: 2022, name: "Ramune", price: 3.5 },
        { id: 2023, name: "Umeshu", price: 6.25 },
        { id: 2024, name: "Calpico", price: 3.0 }
      ]
    }
  },
  {
    id: 3,
    name: "Pasta Palace",
    cuisines: ["Italian", "Continental"],
    image: "https://th.bing.com/th/id/OIP.gAHAtntCt5vxO0BipJI-LAHaGu?rs=1&pid=ImgDetMain",
    rating: 4.3,
    time: "35 mins",
    offer: "Buy 1 get 1 free on selected pastas",
    items: {
      "Appetizer": [
        { id: 122, name: "Garlic Bread", price: 4.5 },
        { id: 3000, name: "Bruschetta", price: 6.25 },
        { id: 3001, name: "Caprese Salad", price: 8.5 },
        { id: 3002, name: "Stuffed Mushrooms", price: 7.5 },
        { id: 3003, name: "Antipasto Platter", price: 10.99 }
      ],
      "Main Course": [
        { id: 103, name: "Pasta Puttanesca", price: 14.25 },
        { id: 119, name: "Spaghetti Carbonara", price: 13.5 },
        { id: 120, name: "Lasagna", price: 15.0 },
        { id: 121, name: "Fettuccine Alfredo", price: 13.75 },
        { id: 3005, name: "Risotto Milanese", price: 16.5 }
      ],
      "Side": [
        { id: 3010, name: "House Salad", price: 5.25 },
        { id: 3011, name: "Roasted Vegetables", price: 6.0 },
        { id: 3012, name: "Truffle Fries", price: 5.75 },
        { id: 3013, name: "Parmesan Potatoes", price: 4.99 },
        { id: 3014, name: "Grilled Zucchini", price: 5.5 }
      ],
      "Dessert": [
        { id: 3015, name: "Tiramisu", price: 7.5 },
        { id: 3016, name: "Cannoli", price: 6.25 },
        { id: 3017, name: "Panna Cotta", price: 6.75 },
        { id: 3018, name: "Chocolate Lava Cake", price: 7.99 },
        { id: 3019, name: "Gelato", price: 5.5 }
      ],
      "Drink": [
        { id: 3020, name: "Italian Soda", price: 3.5 },
        { id: 3021, name: "Limoncello", price: 7.25 },
        { id: 3022, name: "Chianti Wine", price: 9.5 },
        { id: 3023, name: "Espresso", price: 3.0 },
        { id: 3024, name: "San Pellegrino", price: 3.75 }
      ]
    }
  },
  {
    id: 4,
    name: "Taco Town",
    cuisines: ["Mexican"],
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    rating: 3.1,
    time: "20 mins",
    offer: "15% off for first-time customers",
    items: {
      "Appetizer": [
        { id: 124, name: "Nachos Supreme", price: 7.5 },
        { id: 125, name: "Guacamole Dip", price: 5.25 },
        { id: 4000, name: "Queso Fundido", price: 8.25 },
        { id: 4001, name: "Elote", price: 5.99 },
        { id: 4002, name: "Chicken Flautas", price: 7.25 }
      ],
      "Main Course": [
        { id: 104, name: "Beef Tacos", price: 9.75 },
        { id: 123, name: "Chicken Quesadilla", price: 8.99 },
        { id: 4005, name: "Carne Asada", price: 14.5 },
        { id: 4006, name: "Enchiladas", price: 11.99 },
        { id: 4007, name: "Burrito Bowl", price: 10.75 }
      ],
      "Side": [
        { id: 4010, name: "Mexican Rice", price: 3.5 },
        { id: 4011, name: "Refried Beans", price: 3.0 },
        { id: 4012, name: "Street Corn", price: 4.25 },
        { id: 4013, name: "Chips & Salsa", price: 4.0 },
        { id: 4014, name: "Chili con Queso", price: 5.5 }
      ],
      "Dessert": [
        { id: 126, name: "Churros", price: 4.0 },
        { id: 4015, name: "Flan", price: 4.5 },
        { id: 4016, name: "Tres Leches Cake", price: 5.25 },
        { id: 4017, name: "Sopapillas", price: 4.75 },
        { id: 4018, name: "Fried Ice Cream", price: 5.99 }
      ],
      "Drink": [
        { id: 4020, name: "Horchata", price: 3.5 },
        { id: 4021, name: "Jamaica", price: 3.25 },
        { id: 4022, name: "Margarita", price: 7.5 },
        { id: 4023, name: "Mexican Coke", price: 2.75 },
        { id: 4024, name: "Tamarind Drink", price: 3.0 }
      ]
    }
  },
  {
    id: 5,
    name: "Burger Barn",
    cuisines: ["American", "Fast Food"],
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b",
    rating: 4.2,
    time: "18 mins",
    offer: "Free fries with every burger",
    items: {
      "Appetizer": [
        { id: 129, name: "Onion Rings", price: 3.5 },
        { id: 5000, name: "Mozzarella Sticks", price: 6.25 },
        { id: 5001, name: "Chicken Wings", price: 8.5 },
        { id: 5002, name: "Potato Skins", price: 7.25 },
        { id: 5003, name: "Fried Pickles", price: 5.5 }
      ],
      "Main Course": [
        { id: 105, name: "Cheeseburger", price: 7.5 },
        { id: 127, name: "Double Bacon Burger", price: 9.25 },
        { id: 128, name: "Crispy Chicken Sandwich", price: 8.75 },
        { id: 5005, name: "Mushroom Swiss Burger", price: 9.5 },
        { id: 5006, name: "BBQ Burger", price: 10.25 }
      ],
      "Side": [
        { id: 5010, name: "French Fries", price: 3.5 },
        { id: 5011, name: "Sweet Potato Fries", price: 4.25 },
        { id: 5012, name: "Coleslaw", price: 2.75 },
        { id: 5013, name: "Mac & Cheese", price: 4.5 },
        { id: 5014, name: "Side Salad", price: 4.0 }
      ],
      "Dessert": [
        { id: 130, name: "Milkshake", price: 4.5 },
        { id: 5015, name: "Apple Pie", price: 4.25 },
        { id: 5016, name: "Brownie Sundae", price: 5.5 },
        { id: 5017, name: "Chocolate Chip Cookie", price: 2.5 },
        { id: 5018, name: "Ice Cream Cone", price: 3.0 }
      ],
      "Drink": [
        { id: 5020, name: "Soda", price: 2.0 },
        { id: 5021, name: "Iced Tea", price: 2.5 },
        { id: 5022, name: "Lemonade", price: 2.75 },
        { id: 5023, name: "Root Beer Float", price: 4.5 },
        { id: 5024, name: "Coffee", price: 2.25 }
      ]
    }
  },
  {
    id: 6,
    name: "Noodle Nest",
    cuisines: ["Chinese", "Asian"],
    image: "https://static.vecteezy.com/system/resources/previews/016/785/625/large_2x/delicious-noodles-fast-food-meal-with-appetizing-pasta-and-chopsticks-free-photo.jpg",
    rating: 4.1,
    time: "22 mins",
    offer: "10% off on all noodles",
    items: {
      "Appetizer": [
        { id: 132, name: "Spring Rolls", price: 6.75 },
        { id: 6000, name: "Dumplings", price: 7.5 },
        { id: 6001, name: "Hot & Sour Soup", price: 5.25 },
        { id: 6002, name: "Crispy Wontons", price: 6.0 },
        { id: 6003, name: "Szechwan Wings", price: 8.25 }
      ],
      "Main Course": [
        { id: 106, name: "Chow Mein", price: 11.0 },
        { id: 131, name: "Schezwan Noodles", price: 12.25 },
        { id: 133, name: "Fried Rice", price: 10.0 },
        { id: 6005, name: "Kung Pao Chicken", price: 13.5 },
        { id: 6006, name: "Sweet & Sour Pork", price: 14.0 }
      ],
      "Side": [
        { id: 6010, name: "Steamed Vegetables", price: 4.5 },
        { id: 6011, name: "Egg Fried Rice", price: 5.0 },
        { id: 6012, name: "Garlic Green Beans", price: 4.75 },
        { id: 6013, name: "Sesame Noodles", price: 5.5 },
        { id: 6014, name: "Pickled Vegetables", price: 3.5 }
      ],
      "Dessert": [
        { id: 6015, name: "Mango Pudding", price: 4.5 },
        { id: 6016, name: "Fortune Cookies", price: 2.0 },
        { id: 6017, name: "Sesame Balls", price: 5.0 },
        { id: 6018, name: "Almond Cookies", price: 3.75 },
        { id: 6019, name: "Lychee Ice Cream", price: 4.25 }
      ],
      "Drink": [
        { id: 6020, name: "Jasmine Tea", price: 2.5 },
        { id: 6021, name: "Bubble Tea", price: 4.5 },
        { id: 6022, name: "Plum Wine", price: 6.5 },
        { id: 6023, name: "Soy Milk", price: 3.0 },
        { id: 6024, name: "Lychee Cooler", price: 3.75 }
      ]
    }
  },
  {
    id: 7,
    name: "Green Garden",
    cuisines: ["Vegan", "Healthy"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    rating: 4.6,
    time: "28 mins",
    offer: "Free smoothie with orders over $25",
    items: {
      "Appetizer": [
        { id: 7000, name: "Avocado Toast", price: 8.25 },
        { id: 7001, name: "Hummus Platter", price: 9.5 },
        { id: 7002, name: "Kale Chips", price: 5.75 },
        { id: 7003, name: "Stuffed Peppers", price: 7.25 },
        { id: 7004, name: "Zucchini Fritters", price: 6.5 }
      ],
      "Main Course": [
        { id: 107, name: "Vegan Buddha Bowl", price: 13.45 },
        { id: 135, name: "Quinoa Salad", price: 10.5 },
        { id: 136, name: "Tofu Stir Fry", price: 12.0 },
        { id: 7005, name: "Lentil Curry", price: 11.5 },
        { id: 7006, name: "Portobello Burger", price: 12.75 }
      ],
      "Side": [
        { id: 7010, name: "Sweet Potato Mash", price: 4.5 },
        { id: 7011, name: "Grilled Asparagus", price: 5.25 },
        { id: 7012, name: "Quinoa Pilaf", price: 5.0 },
        { id: 7013, name: "Roasted Brussels Sprouts", price: 4.75 },
        { id: 7014, name: "Mixed Green Salad", price: 5.5 }
      ],
      "Dessert": [
        { id: 138, name: "Green Smoothie", price: 6.0 },
        { id: 7015, name: "Chia Pudding", price: 5.5 },
        { id: 7016, name: "Vegan Chocolate Cake", price: 6.25 },
        { id: 7017, name: "Fruit Parfait", price: 5.75 },
        { id: 7018, name: "Coconut Yogurt", price: 4.5 }
      ],
      "Drink": [
        { id: 7020, name: "Cold Pressed Juice", price: 5.0 },
        { id: 7021, name: "Kombucha", price: 4.5 },
        { id: 7022, name: "Almond Milk Latte", price: 4.25 },
        { id: 7023, name: "Herbal Tea", price: 3.5 },
        { id: 7024, name: "Turmeric Latte", price: 4.75 }
      ]
    }
  },
  {
    id: 8,
    name: "Curry Kingdom",
    cuisines: ["Indian", "Thai"],
    image: "https://as2.ftcdn.net/v2/jpg/01/46/57/47/1000_F_146574709_rUYmeFUbuKlCN0Ex0vhwdYHxzfHKbpaI.jpg",
    rating: 4.4,
    time: "32 mins",
    offer: "Combo meals starting at $9.99",
    items: {
      "Appetizer": [
        { id: 8000, name: "Samosa Chaat", price: 6.5 },
        { id: 8001, name: "Thai Fish Cakes", price: 8.25 },
        { id: 8002, name: "Chicken Satay", price: 9.0 },
        { id: 8003, name: "Vegetable Pakora", price: 5.75 },
        { id: 8004, name: "Tom Yum Soup", price: 6.25 }
      ],
      "Main Course": [
        { id: 108, name: "Chicken Curry with Rice", price: 12.75 },
        { id: 139, name: "Thai Green Curry", price: 11.95 },
        { id: 140, name: "Palak Paneer", price: 10.99 },
        { id: 8005, name: "Butter Chicken", price: 13.5 },
        { id: 8006, name: "Massaman Curry", price: 14.25 }
      ],
      "Side": [
        { id: 141, name: "Steamed Rice", price: 2.5 },
        { id: 142, name: "Roti", price: 1.75 },
        { id: 8011, name: "Garlic Naan", price: 3.0 },
        { id: 8012, name: "Coconut Rice", price: 4.0 },
        { id: 8013, name: "Papadum", price: 1.5 }
      ],
      "Dessert": [
        { id: 8015, name: "Mango Sticky Rice", price: 5.5 },
        { id: 8016, name: "Gulab Jamun", price: 4.25 },
        { id: 8017, name: "Kheer", price: 4.0 },
        { id: 8018, name: "Thai Tea Ice Cream", price: 4.75 },
        { id: 8019, name: "Coconut Pancakes", price: 5.25 }
      ],
      "Drink": [
        { id: 8020, name: "Mango Lassi", price: 3.75 },
        { id: 8021, name: "Thai Iced Tea", price: 4.0 },
        { id: 8022, name: "Masala Chai", price: 2.5 },
        { id: 8023, name: "Coconut Water", price: 3.25 },
        { id: 8024, name: "Lemongrass Tea", price: 3.0 }
      ]
    }
  },
  {
    id: 9,
    name: "Pizza Plaza",
    cuisines: ["Italian", "Pizza"],
    image: "https://th.bing.com/th/id/OIP.TEen-qtYbRQu7gIQuN0VvwHaFw?rs=1&pid=ImgDetMain",
    rating: 3.9,
    time: "27 mins",
    offer: "2 large pizzas for $20",
    items: {
      "Appetizer": [
        { id: 145, name: "Garlic Breadsticks", price: 5.0 },
        { id: 9000, name: "Bruschetta", price: 6.5 },
        { id: 9001, name: "Mozzarella Sticks", price: 7.25 },
        { id: 9002, name: "Stuffed Mushrooms", price: 8.0 },
        { id: 9003, name: "Antipasto Salad", price: 9.5 }
      ],
      "Main Course": [
        { id: 109, name: "Supreme Pizza", price: 16.0 },
        { id: 143, name: "Margherita Pizza", price: 12.0 },
        { id: 144, name: "Pepperoni Pizza", price: 14.5 },
        { id: 9005, name: "BBQ Chicken Pizza", price: 15.75 },
        { id: 9006, name: "Veggie Delight Pizza", price: 13.5 }
      ],
      "Side": [
        { id: 9010, name: "Caesar Salad", price: 6.0 },
        { id: 9011, name: "Pasta Salad", price: 5.5 },
        { id: 9012, name: "French Fries", price: 4.0 },
        { id: 9013, name: "Onion Rings", price: 4.5 },
        { id: 9014, name: "Coleslaw", price: 3.5 }
      ],
      "Dessert": [
        { id: 146, name: "Chocolate Lava Cake", price: 6.0 },
        { id: 9015, name: "Tiramisu", price: 6.5 },
        { id: 9016, name: "Cannoli", price: 5.75 },
        { id: 9017, name: "Cheesecake", price: 6.25 },
        { id: 9018, name: "Gelato", price: 5.0 }
      ],
      "Drink": [
        { id: 9020, name: "Soda", price: 2.5 },
        { id: 9021, name: "Iced Tea", price: 3.0 },
        { id: 9022, name: "Lemonade", price: 3.25 },
        { id: 9023, name: "Italian Soda", price: 4.0 },
        { id: 9024, name: "Sparkling Water", price: 2.75 }
      ]
    }
  },
  {
    id: 10,
    name: "Middle Feast",
    cuisines: ["Middle Eastern", "Grill"],
    image: "https://th.bing.com/th/id/OIP.bhO8Tnn20ljBQ9fxf3b7VQHaFj?rs=1&pid=ImgDetMain",
    rating: 4.3,
    time: "30 mins",
    offer: "Free dessert with orders above $40",
    items: {
      "Appetizer": [
        { id: 10000, name: "Hummus & Pita", price: 7.25 },
        { id: 10001, name: "Baba Ganoush", price: 7.5 },
        { id: 10002, name: "Falafel Plate", price: 8.0 },
        { id: 10003, name: "Stuffed Grape Leaves", price: 7.75 },
        { id: 10004, name: "Labneh", price: 6.5 }
      ],
      "Main Course": [
        { id: 110, name: "Shish Kebab", price: 15.25 },
        { id: 147, name: "Falafel Wrap", price: 9.5 },
        { id: 149, name: "Chicken Shawarma", price: 13.0 },
        { id: 10005, name: "Lamb Kofta", price: 16.5 },
        { id: 10006, name: "Vegetable Tagine", price: 12.75 }
      ],
      "Side": [
        { id: 10010, name: "Tabbouleh", price: 5.5 },
        { id: 10011, name: "Fattoush Salad", price: 6.0 },
        { id: 10012, name: "Rice Pilaf", price: 4.5 },
        { id: 10013, name: "Grilled Vegetables", price: 5.25 },
        { id: 10014, name: "Lentil Soup", price: 5.0 }
      ],
      "Dessert": [
        { id: 150, name: "Baklava", price: 4.75 },
        { id: 10015, name: "Kunafa", price: 5.5 },
        { id: 10016, name: "Mahalabia", price: 4.25 },
        { id: 10017, name: "Date Cake", price: 5.0 },
        { id: 10018, name: "Turkish Delight", price: 4.5 }
      ],
      "Drink": [
        { id: 10020, name: "Mint Lemonade", price: 3.5 },
        { id: 10021, name: "Turkish Coffee", price: 4.0 },
        { id: 10022, name: "Ayran", price: 3.0 },
        { id: 10023, name: "Pomegranate Juice", price: 4.5 },
        { id: 10024, name: "Rose Water", price: 3.25 }
      ]
    }
  },
  {
    id: 11,
    name: "Wrap & Roll",
    cuisines: ["Street Food", "Fast Food"],
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    rating: 4.0,
    time: "15 mins",
    offer: "10% off on combos",
    items: {
      "Appetizer": [
        { id: 11000, name: "French Fries", price: 3.5 },
        { id: 11001, name: "Onion Rings", price: 4.0 },
        { id: 11002, name: "Mozzarella Sticks", price: 5.5 },
        { id: 11003, name: "Chilli Cheese Toast", price: 5.0 },
        { id: 11004, name: "Garlic Bread", price: 4.5 }
      ],
      "Main Course": [
        { id: 151, name: "Veg Frankie", price: 5.5 },
        { id: 152, name: "Chicken Roll", price: 6.75 },
        { id: 153, name: "Egg Wrap", price: 5.25 },
        { id: 154, name: "Cheese Corn Roll", price: 6.0 },
        { id: 155, name: "Mayo Paneer Wrap", price: 6.5 }
      ],
      "Side": [
        { id: 11010, name: "Coleslaw", price: 2.5 },
        { id: 11011, name: "Potato Wedges", price: 3.5 },
        { id: 11012, name: "Corn Salad", price: 3.0 },
        { id: 11013, name: "Garlic Dip", price: 1.5 },
        { id: 11014, name: "Sweet Chilli Sauce", price: 1.0 }
      ],
      "Dessert": [
        { id: 11015, name: "Chocolate Brownie", price: 4.0 },
        { id: 11016, name: "Ice Cream Scoop", price: 3.5 },
        { id: 11017, name: "Gulab Jamun", price: 3.0 },
        { id: 11018, name: "Fruit Custard", price: 3.75 },
        { id: 11019, name: "Chocolate Mousse", price: 4.25 }
      ],
      "Drink": [
        { id: 11020, name: "Cold Coffee", price: 3.5 },
        { id: 11021, name: "Lemonade", price: 2.5 },
        { id: 11022, name: "Mango Shake", price: 4.0 },
        { id: 11023, name: "Iced Tea", price: 3.0 },
        { id: 11024, name: "Soft Drink", price: 2.0 }
      ]
    }
  },
  {
    id: 12,
    name: "Sweet Tooth",
    cuisines: ["Desserts", "Bakery"],
    image: "https://tb-static.uber.com/prod/image-proc/processed_images/ac4ab3a02e5517c7b9042a6154a5be4a/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
    rating: 4.8,
    time: "20 mins",
    offer: "Buy 2 pastries, get 1 free",
    items: {
      "Cakes": [
        { id: 156, name: "Chocolate Truffle", price: 3.5 },
        { id: 157, name: "Red Velvet Cake", price: 4.25 },
        { id: 12000, name: "Black Forest", price: 4.0 },
        { id: 12001, name: "Cheesecake", price: 4.5 },
        { id: 12002, name: "Carrot Cake", price: 3.75 }
      ],
      "Pastries": [
        { id: 12005, name: "Croissant", price: 2.5 },
        { id: 12006, name: "Danish Pastry", price: 3.0 },
        { id: 12007, name: "Eclair", price: 3.5 },
        { id: 12008, name: "Fruit Tart", price: 3.75 },
        { id: 12009, name: "Puff Pastry", price: 2.75 }
      ],
      "Cookies": [
        { id: 12010, name: "Chocolate Chip", price: 1.5 },
        { id: 12011, name: "Oatmeal Raisin", price: 1.5 },
        { id: 12012, name: "Macarons", price: 2.0 },
        { id: 12013, name: "Butter Cookies", price: 1.75 },
        { id: 12014, name: "Almond Biscotti", price: 2.25 }
      ],
      "Desserts": [
        { id: 158, name: "Blueberry Muffin", price: 2.75 },
        { id: 159, name: "Vanilla Cupcake", price: 2.5 },
        { id: 160, name: "Macarons Box", price: 6.0 },
        { id: 12015, name: "Tiramisu", price: 4.5 },
        { id: 12016, name: "Crème Brûlée", price: 4.75 }
      ],
      "Drinks": [
        { id: 12020, name: "Hot Chocolate", price: 3.5 },
        { id: 12021, name: "Cappuccino", price: 3.75 },
        { id: 12022, name: "Chai Latte", price: 3.0 },
        { id: 12023, name: "Iced Coffee", price: 4.0 },
        { id: 12024, name: "Herbal Tea", price: 2.5 }
      ]
    }
  },
  {
    id: 13,
    name: "Coffee Corner",
    cuisines: ["Cafe", "Beverages"],
    image: "https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg",
    rating: 4.5,
    time: "12 mins",
    offer: "Free cookie with large coffee",
    items: {
      "Coffee": [
        { id: 161, name: "Cappuccino", price: 3.75 },
        { id: 162, name: "Iced Latte", price: 4.0 },
        { id: 163, name: "Espresso Shot", price: 2.5 },
        { id: 164, name: "Cold Brew", price: 4.25 },
        { id: 13000, name: "Americano", price: 3.0 }
      ],
      "Tea": [
        { id: 13001, name: "Earl Grey", price: 2.75 },
        { id: 13002, name: "Chamomile", price: 2.5 },
        { id: 13003, name: "Green Tea", price: 2.5 },
        { id: 13004, name: "Masala Chai", price: 2.25 },
        { id: 13005, name: "Peppermint Tea", price: 2.5 }
      ],
      "Specialty Drinks": [
        { id: 13006, name: "Matcha Latte", price: 4.5 },
        { id: 13007, name: "Turmeric Latte", price: 4.25 },
        { id: 13008, name: "Caramel Macchiato", price: 4.75 },
        { id: 13009, name: "Mocha", price: 4.5 },
        { id: 13010, name: "Affogato", price: 5.0 }
      ],
      "Bakery": [
        { id: 165, name: "Chocolate Chip Cookie", price: 1.5 },
        { id: 13015, name: "Croissant", price: 2.5 },
        { id: 13016, name: "Blueberry Muffin", price: 2.75 },
        { id: 13017, name: "Cinnamon Roll", price: 3.25 },
        { id: 13018, name: "Banana Bread", price: 3.0 }
      ],
      "Sandwiches": [
        { id: 13020, name: "Grilled Cheese", price: 5.5 },
        { id: 13021, name: "Ham & Cheese", price: 6.0 },
        { id: 13022, name: "Veggie Panini", price: 5.75 },
        { id: 13023, name: "Turkey Club", price: 6.5 },
        { id: 13024, name: "Avocado Toast", price: 5.25 }
      ]
    }
  },
  {
    id: 14,
    name: "Waffle Works",
    cuisines: ["Desserts", "Snacks"],
    image: "https://www.allrecipes.com/thmb/imrP1HYi5pu7j1en1_TI-Kcnzt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20513-classic-waffles-mfs-025-4x3-81c0f0ace44d480ca69dd5f2c949731a.jpg",
    rating: 4.4,
    time: "18 mins",
    offer: "Flat 20% off on waffle combos",
    items: {
      "Waffles": [
        { id: 166, name: "Nutella Waffle", price: 5.75 },
        { id: 167, name: "Strawberry Delight", price: 6.0 },
        { id: 168, name: "Banana Caramel", price: 5.5 },
        { id: 169, name: "Choco Chip Waffle", price: 5.25 },
        { id: 170, name: "Vanilla Ice Cream Waffle", price: 6.25 }
      ],
      "Pancakes": [
        { id: 14000, name: "Blueberry Pancakes", price: 6.5 },
        { id: 14001, name: "Chocolate Chip Pancakes", price: 6.75 },
        { id: 14002, name: "Banana Nut Pancakes", price: 6.25 },
        { id: 14003, name: "Buttermilk Pancakes", price: 5.5 },
        { id: 14004, name: "Apple Cinnamon Pancakes", price: 6.0 }
      ],
      "French Toast": [
        { id: 14005, name: "Classic French Toast", price: 6.25 },
        { id: 14006, name: "Stuffed French Toast", price: 7.0 },
        { id: 14007, name: "Cinnamon Roll French Toast", price: 7.5 },
        { id: 14008, name: "Berry French Toast", price: 7.25 },
        { id: 14009, name: "Banana Foster French Toast", price: 7.75 }
      ],
      "Sides": [
        { id: 14010, name: "Bacon", price: 4.0 },
        { id: 14011, name: "Sausage Links", price: 4.5 },
        { id: 14012, name: "Scrambled Eggs", price: 3.5 },
        { id: 14013, name: "Hash Browns", price: 3.0 },
        { id: 14014, name: "Fresh Fruit", price: 4.25 }
      ],
      "Drinks": [
        { id: 14020, name: "Fresh Orange Juice", price: 3.5 },
        { id: 14021, name: "Iced Coffee", price: 4.0 },
        { id: 14022, name: "Hot Chocolate", price: 3.75 },
        { id: 14023, name: "Milkshake", price: 5.0 },
        { id: 14024, name: "Smoothie", price: 5.5 }
      ]
    }
  },
  {
    id: 15,
    name: "Biryani Bazaar",
    cuisines: ["Indian", "Biryani"],
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    rating: 4.6,
    time: "35 mins",
    offer: "Family packs starting at $19.99",
    items: {
      "Biryani": [
        { id: 171, name: "Hyderabadi Chicken Biryani", price: 13.99 },
        { id: 172, name: "Veg Biryani", price: 10.75 },
        { id: 173, name: "Mutton Biryani", price: 15.5 },
        { id: 174, name: "Egg Biryani", price: 11.25 },
        { id: 15000, name: "Prawn Biryani", price: 14.5 }
      ],
      "Kebabs": [
        { id: 15001, name: "Chicken Tikka", price: 9.5 },
        { id: 15002, name: "Seekh Kebab", price: 10.25 },
        { id: 15003, name: "Paneer Tikka", price: 8.75 },
        { id: 15004, name: "Fish Tikka", price: 11.0 },
        { id: 15005, name: "Malai Kebab", price: 9.0 }
      ],
      "Curries": [
        { id: 15006, name: "Butter Chicken", price: 12.5 },
        { id: 15007, name: "Dal Makhani", price: 8.5 },
        { id: 15008, name: "Kadai Paneer", price: 10.0 },
        { id: 15009, name: "Chicken Korma", price: 11.5 },
        { id: 15010, name: "Palak Paneer", price: 9.25 }
      ],
      "Breads": [
        { id: 15011, name: "Butter Naan", price: 2.5 },
        { id: 15012, name: "Garlic Naan", price: 3.0 },
        { id: 15013, name: "Tandoori Roti", price: 2.0 },
        { id: 15014, name: "Laccha Paratha", price: 3.5 },
        { id: 15015, name: "Rumali Roti", price: 3.25 }
      ],
      "Desserts": [
        { id: 175, name: "Raita & Salad", price: 3.0 },
        { id: 15016, name: "Gulab Jamun", price: 4.0 },
        { id: 15017, name: "Rasmalai", price: 4.5 },
        { id: 15018, name: "Kheer", price: 3.75 },
        { id: 15019, name: "Mango Lassi", price: 3.5 }
      ]
    }
  },
  {
    id: 16,
    name: "Sizzling Sizzlers",
    cuisines: ["Grill", "Steakhouse"],
    image: "https://www.shutterstock.com/image-photo/paneer-sizzler-indian-version-cottage-600nw-2216735423.jpg",
    rating: 4.2,
    time: "40 mins",
    offer: "Free drink with sizzler",
    items: {
      "Sizzlers": [
        { id: 176, name: "Chicken Sizzler", price: 15.5 },
        { id: 177, name: "Veg Sizzler", price: 13.0 },
        { id: 178, name: "Beef Steak", price: 18.0 },
        { id: 16000, name: "Fish Sizzler", price: 16.5 },
        { id: 16001, name: "Prawn Sizzler", price: 17.5 }
      ],
      "Grills": [
        { id: 16002, name: "Grilled Chicken", price: 12.5 },
        { id: 16003, name: "Lamb Chops", price: 15.0 },
        { id: 16004, name: "Grilled Salmon", price: 16.0 },
        { id: 16005, name: "Vegetable Skewers", price: 11.0 },
        { id: 16006, name: "Pork Ribs", price: 14.5 }
      ],
      "Sides": [
        { id: 179, name: "Grilled Vegetables", price: 7.5 },
        { id: 16011, name: "Mashed Potatoes", price: 5.0 },
        { id: 16012, name: "Coleslaw", price: 4.0 },
        { id: 16013, name: "French Fries", price: 4.5 },
        { id: 16014, name: "Garlic Bread", price: 3.5 }
      ],
      "Sauces": [
        { id: 16015, name: "Peppercorn Sauce", price: 2.0 },
        { id: 16016, name: "Mushroom Sauce", price: 2.0 },
        { id: 16017, name: "BBQ Sauce", price: 1.5 },
        { id: 16018, name: "Garlic Butter", price: 1.5 },
        { id: 16019, name: "Chilli Sauce", price: 1.0 }
      ],
      "Drinks": [
        { id: 180, name: "Lemonade", price: 2.5 },
        { id: 16020, name: "Iced Tea", price: 3.0 },
        { id: 16021, name: "Fresh Lime Soda", price: 2.75 },
        { id: 16022, name: "Beer", price: 5.0 },
        { id: 16023, name: "Red Wine", price: 7.5 }
      ]
    }
  },
  {
    id: 17,
    name: "The Pancake Hub",
    cuisines: ["Breakfast", "Desserts"],
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    rating: 4.7,
    time: "22 mins",
    offer: "Buy 1 get 1 free pancakes",
    items: {
      "Pancakes": [
        { id: 181, name: "Blueberry Pancakes", price: 6.25 },
        { id: 182, name: "Banana Pancakes", price: 5.75 },
        { id: 183, name: "Nutella Stack", price: 7.5 },
        { id: 184, name: "Classic Maple Syrup", price: 5.5 },
        { id: 17000, name: "Chocolate Chip Pancakes", price: 6.5 }
      ],
      "Waffles": [
        { id: 17001, name: "Belgian Waffle", price: 6.0 },
        { id: 17002, name: "Strawberry Waffle", price: 6.75 },
        { id: 17003, name: "Chocolate Waffle", price: 6.5 },
        { id: 17004, name: "Cinnamon Waffle", price: 6.25 },
        { id: 17005, name: "Red Velvet Waffle", price: 7.0 }
      ],
      "French Toast": [
        { id: 17006, name: "Classic French Toast", price: 6.5 },
        { id: 17007, name: "Stuffed French Toast", price: 7.25 },
        { id: 17008, name: "Cinnamon French Toast", price: 6.75 },
        { id: 17009, name: "Banana French Toast", price: 7.0 },
        { id: 17010, name: "Berry French Toast", price: 7.5 }
      ],
      "Sides": [
        { id: 17011, name: "Bacon", price: 4.0 },
        { id: 17012, name: "Sausage", price: 4.5 },
        { id: 17013, name: "Scrambled Eggs", price: 3.5 },
        { id: 17014, name: "Hash Browns", price: 3.0 },
        { id: 17015, name: "Fresh Fruit", price: 4.25 }
      ],
      "Drinks": [
        { id: 17020, name: "Fresh Juice", price: 4.0 },
        { id: 17021, name: "Iced Coffee", price: 4.5 },
        { id: 17022, name: "Hot Chocolate", price: 3.75 },
        { id: 17023, name: "Milkshake", price: 5.0 },
        { id: 17024, name: "Smoothie", price: 5.5 }
      ]
    }
  },
  {
    id: 18,
    name: "The Dosa Den",
    cuisines: ["South Indian"],
    image: "https://indiaforbeginners.com/wp-content/uploads/2020/04/India-for-Beginners-custom-tours-8.jpg",
    rating: 4.4,
    time: "30 mins",
    offer: "10% off on orders above $20",
    items: {
      "Dosas": [
        { id: 186, name: "Masala Dosa", price: 6.75 },
        { id: 187, name: "Plain Dosa", price: 5.5 },
        { id: 188, name: "Mysore Dosa", price: 7.25 },
        { id: 189, name: "Rava Dosa", price: 6.0 },
        { id: 18000, name: "Onion Dosa", price: 6.5 }
      ],
      "Idlis": [
        { id: 18001, name: "Plain Idli", price: 4.0 },
        { id: 18002, name: "Rava Idli", price: 4.5 },
        { id: 18003, name: "Stuffed Idli", price: 5.0 },
        { id: 18004, name: "Fried Idli", price: 5.5 },
        { id: 18005, name: "Mini Idlis", price: 4.75 }
      ],
      "Vadas": [
        { id: 18006, name: "Medu Vada", price: 4.5 },
        { id: 18007, name: "Sambar Vada", price: 5.0 },
        { id: 18008, name: "Rasam Vada", price: 5.0 },
        { id: 18009, name: "Masala Vada", price: 4.75 },
        { id: 18010, name: "Dahi Vada", price: 5.5 }
      ],
      "Meals": [
        { id: 18011, name: "South Indian Thali", price: 12.0 },
        { id: 18012, name: "Mini Meals", price: 8.5 },
        { id: 18013, name: "Curd Rice", price: 6.5 },
        { id: 18014, name: "Bisi Bele Bath", price: 7.5 },
        { id: 18015, name: "Pongal", price: 6.0 }
      ],
      "Drinks": [
        { id: 190, name: "Coconut Chutney", price: 1.5 },
        { id: 18020, name: "Filter Coffee", price: 2.5 },
        { id: 18021, name: "Masala Tea", price: 2.25 },
        { id: 18022, name: "Badam Milk", price: 3.5 },
        { id: 18023, name: "Lassi", price: 3.0 }
      ]
    }
  },
  {
    id: 19,
    name: "Tandoori Tadka",
    cuisines: ["Indian", "Tandoori"],
    image: "https://static.vecteezy.com/system/resources/thumbnails/041/953/260/small/ai-generated-delicious-chicken-skewers-on-a-slate-platter-with-a-green-dip-and-parsley-in-the-background-photo.jpg",
    rating: 4.1,
    time: "35 mins",
    offer: "15% off on tandoori platters",
    items: {
      "Tandoori Starters": [
        { id: 191, name: "Tandoori Chicken", price: 12.5 },
        { id: 192, name: "Paneer Tikka", price: 9.75 },
        { id: 193, name: "Chicken Tikka", price: 11.25 },
        { id: 19000, name: "Fish Tikka", price: 13.0 },
        { id: 19001, name: "Malai Tikka", price: 10.5 }
      ],
      "Kebabs": [
        { id: 19002, name: "Seekh Kebab", price: 10.75 },
        { id: 19003, name: "Reshmi Kebab", price: 11.5 },
        { id: 19004, name: "Galouti Kebab", price: 12.0 },
        { id: 19005, name: "Shami Kebab", price: 9.5 },
        { id: 19006, name: "Hariyali Kebab", price: 10.25 }
      ],
      "Breads": [
        { id: 194, name: "Tandoori Roti", price: 2.0 },
        { id: 19011, name: "Butter Naan", price: 2.5 },
        { id: 19012, name: "Garlic Naan", price: 3.0 },
        { id: 19013, name: "Laccha Paratha", price: 3.5 },
        { id: 19014, name: "Missi Roti", price: 2.75 }
      ],
      "Dips": [
        { id: 195, name: "Mint Chutney", price: 1.0 },
        { id: 19015, name: "Tamarind Chutney", price: 1.0 },
        { id: 19016, name: "Garlic Mayo", price: 1.5 },
        { id: 19017, name: "Green Chutney", price: 1.0 },
        { id: 19018, name: "Yogurt Dip", price: 1.25 }
      ],
      "Drinks": [
        { id: 19020, name: "Mango Lassi", price: 3.5 },
        { id: 19021, name: "Masala Chaas", price: 2.5 },
        { id: 19022, name: "Jaljeera", price: 2.0 },
        { id: 19023, name: "Rose Sharbat", price: 2.75 },
        { id: 19024, name: "Sugarcane Juice", price: 3.0 }
      ]
    }
  },
  {
    id: 20,
    name: "Salad Stop",
    cuisines: ["Healthy", "Vegan"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D",
    rating: 4.8,
    time: "18 mins",
    offer: "Free juice with 2 salads",
    items: {
      "Salads": [
        { id: 196, name: "Caesar Salad", price: 7.25 },
        { id: 197, name: "Kale & Quinoa", price: 8.0 },
        { id: 198, name: "Greek Salad", price: 7.5 },
        { id: 199, name: "Fruit Bowl", price: 6.5 },
        { id: 20000, name: "Cobb Salad", price: 8.5 }
      ],
      "Wraps": [
        { id: 20001, name: "Grilled Chicken Wrap", price: 8.75 },
        { id: 20002, name: "Veggie Wrap", price: 7.5 },
        { id: 20003, name: "Turkey Wrap", price: 9.0 },
        { id: 20004, name: "Falafel Wrap", price: 8.0 },
        { id: 20005, name: "Tuna Wrap", price: 9.5 }
      ],
      "Soups": [
        { id: 20006, name: "Tomato Basil", price: 5.0 },
        { id: 20007, name: "Lentil Soup", price: 5.5 },
        { id: 20008, name: "Minestrone", price: 5.25 },
        { id: 20009, name: "Chicken Noodle", price: 6.0 },
        { id: 20010, name: "Mushroom Soup", price: 5.75 }
      ],
      "Bowls": [
        { id: 20011, name: "Buddha Bowl", price: 9.5 },
        { id: 20012, name: "Acai Bowl", price: 8.0 },
        { id: 20013, name: "Grain Bowl", price: 8.5 },
        { id: 20014, name: "Protein Bowl", price: 9.0 },
        { id: 20015, name: "Poke Bowl", price: 10.0 }
      ],
      "Drinks": [
        { id: 200, name: "Orange Juice", price: 3.25 },
        { id: 20020, name: "Green Juice", price: 4.0 },
        { id: 20021, name: "Detox Water", price: 3.5 },
        { id: 20022, name: "Smoothie", price: 5.0 },
        { id: 20023, name: "Iced Tea", price: 3.0 }
      ]
    }
  },
  {
    id: 21,
    name: "Ramen Republic",
    cuisines: ["Japanese", "Noodles"],
    image: "https://hips.hearstapps.com/hmg-prod/images/birriaramen2-1664194907.jpg",
    rating: 4.3,
    time: "28 mins",
    offer: "Free egg topping on any ramen",
    items: {
      "Ramen": [
        { id: 201, name: "Tonkotsu Ramen", price: 13.25 },
        { id: 202, name: "Shoyu Ramen", price: 12.5 },
        { id: 203, name: "Spicy Miso Ramen", price: 14.0 },
        { id: 204, name: "Veg Ramen", price: 11.75 },
        { id: 21000, name: "Shio Ramen", price: 12.75 }
      ],
      "Donburi": [
        { id: 21001, name: "Chicken Don", price: 11.5 },
        { id: 21002, name: "Beef Don", price: 12.5 },
        { id: 21003, name: "Pork Don", price: 12.0 },
        { id: 21004, name: "Veggie Don", price: 10.0 },
        { id: 21005, name: "Salmon Don", price: 13.5 }
      ],
      "Appetizers": [
        { id: 21006, name: "Gyoza", price: 6.5 },
        { id: 21007, name: "Edamame", price: 5.0 },
        { id: 21008, name: "Agedashi Tofu", price: 6.0 },
        { id: 21009, name: "Takoyaki", price: 7.0 },
        { id: 21010, name: "Karaage", price: 7.5 }
      ],
      "Sides": [
        { id: 205, name: "Egg Add-on", price: 1.25 },
        { id: 21011, name: "Extra Noodles", price: 2.0 },
        { id: 21012, name: "Seaweed Salad", price: 4.5 },
        { id: 21013, name: "Kimchi", price: 3.5 },
        { id: 21014, name: "Rice Bowl", price: 2.5 }
      ],
      "Drinks": [
        { id: 21020, name: "Matcha Latte", price: 4.5 },
        { id: 21021, name: "Ramune", price: 3.5 },
        { id: 21022, name: "Sake", price: 7.0 },
        { id: 21023, name: "Calpico", price: 3.0 },
        { id: 21024, name: "Green Tea", price: 2.5 }
      ]
    }
  },
  {
    id: 22,
    name: "Kathi Junction",
    cuisines: ["North Indian", "Rolls"],
    image: "https://images.news18.com/ibnlive/uploads/2023/07/mutton-seekh-kebab-169030200216x9.jpg?impolicy=website&width=640&height=360",
    rating: 4.0,
    time: "20 mins",
    offer: "Flat ₹30 off on ₹300+",
    items: {
      "Rolls": [
        { id: 206, name: "Paneer Kathi Roll", price: 6.75 },
        { id: 207, name: "Chicken Kathi Roll", price: 7.5 },
        { id: 208, name: "Double Egg Roll", price: 5.5 },
        { id: 209, name: "Mutton Seekh Roll", price: 8.25 },
        { id: 22000, name: "Veg Kathi Roll", price: 6.0 }
      ],
      "Wraps": [
        { id: 22001, name: "Falafel Wrap", price: 7.0 },
        { id: 22002, name: "Chicken Shawarma", price: 8.0 },
        { id: 22003, name: "Paneer Wrap", price: 6.5 },
        { id: 22004, name: "Egg Wrap", price: 5.75 },
        { id: 22005, name: "Keema Wrap", price: 7.5 }
      ],
      "Sides": [
        { id: 210, name: "Chilli Sauce Dip", price: 1.0 },
        { id: 22011, name: "French Fries", price: 3.5 },
        { id: 22012, name: "Onion Rings", price: 4.0 },
        { id: 22013, name: "Coleslaw", price: 2.5 },
        { id: 22014, name: "Garlic Bread", price: 3.0 }
      ],
      "Desserts": [
        { id: 22015, name: "Gulab Jamun", price: 3.0 },
        { id: 22016, name: "Rasmalai", price: 3.5 },
        { id: 22017, name: "Kheer", price: 3.25 },
        { id: 22018, name: "Ice Cream Scoop", price: 3.5 },
        { id: 22019, name: "Brownie", price: 4.0 }
      ],
      "Drinks": [
        { id: 22020, name: "Mango Lassi", price: 3.5 },
        { id: 22021, name: "Masala Chai", price: 2.0 },
        { id: 22022, name: "Cold Coffee", price: 3.0 },
        { id: 22023, name: "Fresh Lime Soda", price: 2.5 },
        { id: 22024, name: "Soft Drink", price: 2.0 }
      ]
    }
  },
  {
    id: 23,
    name: "The Juice Bar",
    cuisines: ["Beverages", "Healthy"],
    image: "https://images.pexels.com/photos/16557598/pexels-photo-16557598/free-photo-of-fresh-juice-in-a-glass-and-fruits.jpeg",
    rating: 4.9,
    time: "15 mins",
    offer: "20% off on fresh juices",
    items: {
      "Juices": [
        { id: 211, name: "Mango Smoothie", price: 4.5 },
        { id: 212, name: "Green Detox", price: 5.25 },
        { id: 213, name: "Berry Blast", price: 5.75 },
        { id: 214, name: "Carrot-Orange Juice", price: 4.0 },
        { id: 215, name: "Beetroot Blend", price: 4.5 }
      ],
      "Smoothies": [
        { id: 23000, name: "Tropical Smoothie", price: 6.0 },
        { id: 23001, name: "Peanut Butter Banana", price: 6.5 },
        { id: 23002, name: "Acai Berry", price: 7.0 },
        { id: 23003, name: "Chocolate Banana", price: 6.25 },
        { id: 23004, name: "Strawberry Banana", price: 5.75 }
      ],
      "Shakes": [
        { id: 23005, name: "Vanilla Shake", price: 5.0 },
        { id: 23006, name: "Chocolate Shake", price: 5.5 },
        { id: 23007, name: "Strawberry Shake", price: 5.25 },
        { id: 23008, name: "Oreo Shake", price: 6.0 },
        { id: 23009, name: "Coffee Shake", price: 5.75 }
      ],
      "Bowls": [
        { id: 23010, name: "Acai Bowl", price: 7.5 },
        { id: 23011, name: "Pitaya Bowl", price: 7.75 },
        { id: 23012, name: "Oatmeal Bowl", price: 6.0 },
        { id: 23013, name: "Yogurt Bowl", price: 6.5 },
        { id: 23014, name: "Chia Pudding", price: 6.25 }
      ],
      "Snacks": [
        { id: 23015, name: "Energy Balls", price: 4.0 },
        { id: 23016, name: "Granola Bar", price: 3.5 },
        { id: 23017, name: "Fruit Salad", price: 5.0 },
        { id: 23018, name: "Avocado Toast", price: 5.5 },
        { id: 23019, name: "Protein Bar", price: 4.5 }
      ]
    }
  },
  {
    id: 24,
    name: "Shakes & More",
    cuisines: ["Beverages", "Desserts"],
    image: "https://images.deliveryhero.io/image/fd-pk/LH/kbt6-listing.jpg",
    rating: 4.2,
    time: "14 mins",
    offer: "Buy 1 Get 1 on all shakes",
    items: {
      "Shakes": [
        { id: 216, name: "Chocolate Shake", price: 5.25 },
        { id: 217, name: "Strawberry Shake", price: 5.0 },
        { id: 218, name: "Mango Shake", price: 5.0 },
        { id: 219, name: "Oreo Shake", price: 5.5 },
        { id: 24000, name: "Vanilla Shake", price: 4.75 }
      ],
      "Sundaes": [
        { id: 24001, name: "Hot Fudge Sundae", price: 6.0 },
        { id: 24002, name: "Caramel Sundae", price: 6.0 },
        { id: 24003, name: "Strawberry Sundae", price: 5.75 },
        { id: 24004, name: "Nutella Sundae", price: 6.5 },
        { id: 24005, name: "Banana Split", price: 7.0 }
      ],
      "Ice Cream": [
        { id: 220, name: "Vanilla Ice Cream", price: 2.75 },
        { id: 24006, name: "Chocolate Ice Cream", price: 2.75 },
        { id: 24007, name: "Strawberry Ice Cream", price: 2.75 },
        { id: 24008, name: "Mint Chip Ice Cream", price: 3.0 },
        { id: 24009, name: "Cookies & Cream", price: 3.0 }
      ],
      "Desserts": [
        { id: 24010, name: "Brownie", price: 4.0 },
        { id: 24011, name: "Cheesecake", price: 4.5 },
        { id: 24012, name: "Apple Pie", price: 4.25 },
        { id: 24013, name: "Chocolate Lava Cake", price: 5.0 },
        { id: 24014, name: "Tiramisu", price: 5.5 }
      ],
      "Drinks": [
        { id: 24020, name: "Cold Coffee", price: 3.5 },
        { id: 24021, name: "Iced Tea", price: 3.0 },
        { id: 24022, name: "Lemonade", price: 2.75 },
        { id: 24023, name: "Soda", price: 2.5 },
        { id: 24024, name: "Milkshake", price: 5.0 }
      ]
    }
  },
  {
    id: 25,
    name: "Momo Magic",
    cuisines: ["Tibetan", "Snacks"],
    image: "https://www.cookclickndevour.com/wp-content/uploads/2016/11/whole-wheat-momos-recipe-2.jpg",
    rating: 3.8,
    time: "16 mins",
    offer: "Extra chutney free",
    items: {
      "Momos": [
        { id: 221, name: "Chicken Momos", price: 6.25 },
        { id: 222, name: "Veg Momos", price: 5.5 },
        { id: 223, name: "Fried Momos", price: 6.75 },
        { id: 224, name: "Cheese Corn Momos", price: 7.0 },
        { id: 25000, name: "Paneer Momos", price: 6.5 }
      ],
      "Thukpa": [
        { id: 25001, name: "Chicken Thukpa", price: 8.0 },
        { id: 25002, name: "Veg Thukpa", price: 7.0 },
        { id: 25003, name: "Mushroom Thukpa", price: 7.5 },
        { id: 25004, name: "Pork Thukpa", price: 8.5 },
        { id: 25005, name: "Egg Thukpa", price: 7.25 }
      ],
      "Noodles": [
        { id: 25006, name: "Chowmein", price: 7.5 },
        { id: 25007, name: "Hakka Noodles", price: 7.75 },
        { id: 25008, name: "Thenthuk", price: 8.0 },
        { id: 25009, name: "Schezwan Noodles", price: 8.25 },
        { id: 25010, name: "Garlic Noodles", price: 7.5 }
      ],
      "Sides": [
        { id: 225, name: "Spicy Chutney", price: 1.0 },
        { id: 25011, name: "Garlic Sauce", price: 1.0 },
        { id: 25012, name: "Chilli Oil", price: 1.0 },
        { id: 25013, name: "Soy Sauce", price: 0.75 },
        { id: 25014, name: "Pickled Vegetables", price: 1.5 }
      ],
      "Drinks": [
        { id: 25020, name: "Butter Tea", price: 3.0 },
        { id: 25021, name: "Sea Buckthorn Juice", price: 3.5 },
        { id: 25022, name: "Ginger Honey Tea", price: 2.75 },
        { id: 25023, name: "Tibetan Beer", price: 4.5 },
        { id: 25024, name: "Hot Lemon", price: 2.5 }
      ]
    }
  },
  {
    id: 26,
    name: "Cheesy Slice",
    cuisines: ["Pizza", "Italian"],
    image: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    rating: 4.3,
    time: "24 mins",
    offer: "2 medium pizzas @ ₹299",
    items: {
      "Pizzas": [
        { id: 226, name: "Farmhouse Pizza", price: 11.0 },
        { id: 227, name: "Cheese Burst", price: 12.5 },
        { id: 228, name: "BBQ Chicken Pizza", price: 13.75 },
        { id: 229, name: "Peri Peri Paneer", price: 12.0 },
        { id: 26000, name: "Margherita Pizza", price: 10.0 }
      ],
      "Calzones": [
        { id: 26001, name: "Cheese Calzone", price: 9.0 },
        { id: 26002, name: "Meat Lovers Calzone", price: 10.5 },
        { id: 26003, name: "Veggie Calzone", price: 9.5 },
        { id: 26004, name: "Spinach Ricotta Calzone", price: 9.75 },
        { id: 26005, name: "BBQ Chicken Calzone", price: 10.25 }
      ],
      "Pastas": [
        { id: 26006, name: "Spaghetti Bolognese", price: 10.0 },
        { id: 26007, name: "Fettuccine Alfredo", price: 11.0 },
        { id: 26008, name: "Penne Arrabiata", price: 9.5 },
        { id: 26009, name: "Lasagna", price: 12.0 },
        { id: 26010, name: "Mac & Cheese", price: 8.5 }
      ],
      "Sides": [
        { id: 230, name: "Stuffed Crust Add-on", price: 2.0 },
        { id: 26011, name: "Garlic Bread", price: 4.0 },
        { id: 26012, name: "Cheesy Bread", price: 5.0 },
        { id: 26013, name: "Mozzarella Sticks", price: 6.0 },
        { id: 26014, name: "Caesar Salad", price: 6.5 }
      ],
      "Desserts": [
        { id: 26015, name: "Tiramisu", price: 6.0 },
        { id: 26016, name: "Cannoli", price: 5.5 },
        { id: 26017, name: "Chocolate Lava Cake", price: 6.5 },
        { id: 26018, name: "Cheesecake", price: 6.0 },
        { id: 26019, name: "Gelato", price: 5.0 }
      ]
    }
  },
  {
    id: 27,
    name: "Fish & Chips Co.",
    cuisines: ["Seafood", "British"],
    image: "https://media.istockphoto.com/id/855749956/photo/roasted-sea-bream-fish-with-lemon-slices.jpg?s=612x612&w=0&k=20&c=nQhzbjXPnpBDexnk3oK-lU_twHhdTC5R2MixllKbHXE=",
    rating: 4.1,
    time: "32 mins",
    offer: "Combo at $10.99",
    items: {
      "Fish": [
        { id: 231, name: "Classic Fish & Chips", price: 10.5 },
        { id: 232, name: "Grilled Salmon", price: 13.0 },
        { id: 27000, name: "Beer Battered Fish", price: 11.0 },
        { id: 27001, name: "Fish Tacos", price: 9.5 },
        { id: 27002, name: "Fish Burger", price: 8.5 }
      ],
      "Seafood": [
        { id: 27003, name: "Prawn Platter", price: 14.0 },
        { id: 27004, name: "Calamari Rings", price: 10.5 },
        { id: 27005, name: "Scallops", price: 15.0 },
        { id: 27006, name: "Mussels", price: 12.0 },
        { id: 27007, name: "Lobster Roll", price: 16.5 }
      ],
      "Sides": [
        { id: 233, name: "Fish Fingers", price: 7.25 },
        { id: 234, name: "Tartar Sauce", price: 1.25 },
        { id: 235, name: "Mashed Peas", price: 2.0 },
        { id: 27011, name: "Onion Rings", price: 4.0 },
        { id: 27012, name: "Coleslaw", price: 3.0 }
      ],
      "Desserts": [
        { id: 27015, name: "Sticky Toffee Pudding", price: 5.5 },
        { id: 27016, name: "Apple Crumble", price: 5.0 },
        { id: 27017, name: "Bread & Butter Pudding", price: 4.5 },
        { id: 27018, name: "Trifle", price: 6.0 },
        { id: 27019, name: "Eton Mess", price: 5.5 }
      ],
      "Drinks": [
        { id: 27020, name: "Ale", price: 5.0 },
        { id: 27021, name: "Cider", price: 5.5 },
        { id: 27022, name: "Ginger Beer", price: 3.5 },
        { id: 27023, name: "Lemonade", price: 3.0 },
        { id: 27024, name: "Iced Tea", price: 3.5 }
      ]
    }
  },
  {
    id: 28,
    name: "Chaat Central",
    cuisines: ["Indian", "Street Food"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/osmvyopiruxry7gksjbz",
    rating: 4.0,
    time: "18 mins",
    offer: "₹50 off on orders ₹300+",
    items: {
      "Chaat": [
        { id: 236, name: "Pani Puri", price: 4.0 },
        { id: 237, name: "Aloo Tikki Chaat", price: 5.25 },
        { id: 238, name: "Dahi Bhalla", price: 4.75 },
        { id: 239, name: "Sev Puri", price: 4.5 },
        { id: 240, name: "Chole Kulche", price: 6.0 }
      ],
      "Street Food": [
        { id: 28000, name: "Pav Bhaji", price: 7.0 },
        { id: 28001, name: "Vada Pav", price: 5.0 },
        { id: 28002, name: "Dabeli", price: 4.5 },
        { id: 28003, name: "Samosa", price: 3.5 },
        { id: 28004, name: "Kachori", price: 4.0 }
      ],
      "Sweets": [
        { id: 28005, name: "Jalebi", price: 4.0 },
        { id: 28006, name: "Rabri", price: 5.0 },
        { id: 28007, name: "Gulab Jamun", price: 3.5 },
        { id: 28008, name: "Rasgulla", price: 3.5 },
        { id: 28009, name: "Malpua", price: 4.5 }
      ],
      "Drinks": [
        { id: 28010, name: "Masala Chai", price: 2.0 },
        { id: 28011, name: "Lassi", price: 3.5 },
        { id: 28012, name: "Nimbu Pani", price: 2.5 },
        { id: 28013, name: "Jaljeera", price: 2.0 },
        { id: 28014, name: "Badam Milk", price: 3.5 }
      ],
      "Combos": [
        { id: 28015, name: "Chaat Platter", price: 12.0 },
        { id: 28016, name: "Street Food Combo", price: 15.0 },
        { id: 28017, name: "Sweet Lover's Combo", price: 10.0 },
        { id: 28018, name: "Family Pack", price: 25.0 },
        { id: 28019, name: "Mini Chaat Sampler", price: 8.0 }
      ]
    }
  },
  {
    id: 29,
    name: "Toast & Tea",
    cuisines: ["Breakfast", "Cafe"],
    image: "https://recipesblob.blob.core.windows.net/assets/b40fb1b592234baebb18e8ed44c5e23e/1272x764/panettone-french-toast.jpg",
    rating: 4.5,
    time: "20 mins",
    offer: "Combo under ₹199",
    items: {
      "Breakfast": [
        { id: 241, name: "Buttered Toast", price: 3.0 },
        { id: 29000, name: "French Toast", price: 6.0 },
        { id: 29001, name: "Avocado Toast", price: 7.0 },
        { id: 29002, name: "Eggs Benedict", price: 8.5 },
        { id: 29003, name: "Pancake Stack", price: 7.5 }
      ],
      "Sandwiches": [
        { id: 243, name: "Egg Sandwich", price: 4.75 },
        { id: 29005, name: "Grilled Cheese", price: 5.0 },
        { id: 29006, name: "BLT", price: 6.5 },
        { id: 29007, name: "Chicken Sandwich", price: 7.0 },
        { id: 29008, name: "Veggie Sandwich", price: 5.5 }
      ],
      "Beverages": [
        { id: 242, name: "Masala Chai", price: 2.5 },
        { id: 245, name: "Coffee", price: 2.25 },
        { id: 29011, name: "Hot Chocolate", price: 3.5 },
        { id: 29012, name: "Fresh Juice", price: 4.0 },
        { id: 29013, name: "Iced Tea", price: 3.0 }
      ],
      "Snacks": [
        { id: 244, name: "Veg Cutlet", price: 3.5 },
        { id: 29015, name: "Samosa", price: 3.0 },
        { id: 29016, name: "Muffin", price: 3.5 },
        { id: 29017, name: "Croissant", price: 3.0 },
        { id: 29018, name: "Bagel", price: 3.5 }
      ],
      "Combos": [
        { id: 29020, name: "Breakfast Combo", price: 10.0 },
        { id: 29021, name: "Tea Time Combo", price: 8.0 },
        { id: 29022, name: "Lunch Special", price: 12.0 },
        { id: 29023, name: "Quick Bite Combo", price: 7.0 },
        { id: 29024, name: "Family Breakfast", price: 20.0 }
      ]
    }
  },
  {
    id: 30,
    name: "Grill King",
    cuisines: ["Barbecue", "American"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    rating: 4.6,
    time: "34 mins",
    offer: "Free garlic bread with BBQ combo",
    items: {
      "BBQ": [
        { id: 246, name: "BBQ Chicken Wings", price: 10.75 },
        { id: 247, name: "Grilled Corn", price: 4.5 },
        { id: 248, name: "Pulled Sandwich", price: 11.25 },
        { id: 249, name: "Smoked Brisket", price: 13.5 },
        { id: 30000, name: "Ribs", price: 15.0 }
      ],
      "Grilled Meats": [
        { id: 30001, name: "Grilled Chicken", price: 12.0 },
        { id: 30002, name: "Steak", price: 18.0 },
        { id: 30003, name: "Lamb Chops", price: 16.0 },
        { id: 30004, name: "Pork Chops", price: 14.0 },
        { id: 30005, name: "Grilled Fish", price: 15.0 }
      ],
      "Sides": [
        { id: 250, name: "Garlic Bread", price: 3.0 },
        { id: 30011, name: "Coleslaw", price: 3.5 },
        { id: 30012, name: "Baked Beans", price: 4.0 },
        { id: 30013, name: "Mac & Cheese", price: 5.0 },
        { id: 30014, name: "Potato Salad", price: 4.5 }
      ],
      "Sauces": [
        { id: 30015, name: "BBQ Sauce", price: 1.5 },
        { id: 30016, name: "Hot Sauce", price: 1.5 },
        { id: 30017, name: "Garlic Aioli", price: 1.5 },
        { id: 30018, name: "Honey Mustard", price: 1.5 },
        { id: 30019, name: "Ranch", price: 1.5 }
      ],
      "Drinks": [
        { id: 30020, name: "Lemonade", price: 3.0 },
        { id: 30021, name: "Iced Tea", price: 3.0 },
        { id: 30022, name: "Beer", price: 5.0 },
        { id: 30023, name: "Soda", price: 2.5 },
        { id: 30024, name: "Milkshake", price: 5.0 }
      ]
    }
  }
];

module.exports = data;
