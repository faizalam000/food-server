const data = [
  {
    id: 1,
    name: "Spicy Grill",
    cuisines: ["Indian", "Barbecue"],
    image: "https://www.shutterstock.com/image-photo/grilled-spicy-chicken-wings-ketchup-600nw-1678801786.jpg",
    rating: 4.5,
    time: "30 mins",
    offer: "20% off on orders above $30",
    items: {
      "Appetizer": [
        { id: 101, name: "Paneer Tikka", price: 10.5 },
        { id: 102, name: "Lamb Seekh Kebab", price: 13.75 },
        { id: 103, name: "Vegetable Samosa", price: 5.99 },
        { id: 104, name: "Chicken 65", price: 8.99 },
        { id: 105, name: "Papdi Chaat", price: 6.25 }
      ],
      "Main Course": [
        { id: 106, name: "Chicken Biryani", price: 11.99 },
        { id: 107, name: "Butter Chicken", price: 13.99 },
        { id: 108, name: "Dal Makhani", price: 9.5 },
        { id: 109, name: "Tandoori Platter", price: 16.2 },
        { id: 110, name: "Rogan Josh", price: 14.3 }
      ],
      "Side": [
        { id: 111, name: "Butter Naan", price: 2.5 },
        { id: 112, name: "Garlic Naan", price: 3.0 },
        { id: 113, name: "Jeera Rice", price: 3.5 },
        { id: 114, name: "Raita", price: 2.75 },
        { id: 115, name: "Papadum", price: 1.25 }
      ],
      "Dessert": [
        { id: 116, name: "Gulab Jamun", price: 4.5 },
        { id: 117, name: "Kheer", price: 4.25 },
        { id: 118, name: "Rasmalai", price: 5.25 },
        { id: 119, name: "Mango Lassi", price: 3.99 },
        { id: 120, name: "Kulfi", price: 3.5 }
      ],
      "Drink": [
        { id: 121, name: "Masala Chai", price: 2.25 },
        { id: 122, name: "Mango Lassi", price: 3.75 },
        { id: 123, name: "Thums Up", price: 2.0 },
        { id: 124, name: "Nimbu Pani", price: 2.5 },
        { id: 125, name: "Badam Milk", price: 3.25 }
      ]
    }
  },
  {
    id: 2,
    name: "Sushi World",
    cuisines: ["Japanese", "Seafood"],
    image: "https://img.pikbest.com/wp/202344/tempting-delicious-sushi-rolls-philadelphia-a-display-on-textured-black-plate-complemented-by-wasabi-ginger-and-sauce-served-with-fresh-salmon-cream-cheese-avocado_9926722.jpg!sw800",
    rating: 4.7,
    time: "25 mins",
    offer: "Free miso soup with every order",
    items: {
      "Appetizer": [
        { id: 201, name: "Eel Nigiri", price: 13.25 },
        { id: 202, name: "Tempura Shrimp", price: 10.75 },
        { id: 203, name: "Edamame", price: 5.5 },
        { id: 204, name: "Gyoza", price: 6.99 },
        { id: 205, name: "Seaweed Salad", price: 7.25 }
      ],
      "Main Course": [
        { id: 206, name: "Salmon Sushi Platter", price: 18.5 },
        { id: 207, name: "Tuna Roll", price: 14.0 },
        { id: 208, name: "Avocado Maki", price: 8.5 },
        { id: 209, name: "Dragon Roll", price: 16.99 },
        { id: 210, name: "Teriyaki Chicken", price: 14.5 }
      ],
      "Side": [
        { id: 211, name: "Miso Soup", price: 3.25 },
        { id: 212, name: "Steamed Rice", price: 2.5 },
        { id: 213, name: "Pickled Ginger", price: 1.5 },
        { id: 214, name: "Wasabi", price: 1.0 },
        { id: 215, name: "Soy Sauce", price: 0.75 }
      ],
      "Dessert": [
        { id: 216, name: "Mochi Ice Cream", price: 5.99 },
        { id: 217, name: "Green Tea Cake", price: 6.25 },
        { id: 218, name: "Dorayaki", price: 4.75 },
        { id: 219, name: "Matcha Tiramisu", price: 7.5 },
        { id: 220, name: "Red Bean Bun", price: 4.25 }
      ],
      "Drink": [
        { id: 221, name: "Green Tea", price: 2.25 },
        { id: 222, name: "Sake", price: 7.5 },
        { id: 223, name: "Ramune", price: 3.5 },
        { id: 224, name: "Umeshu", price: 6.25 },
        { id: 225, name: "Calpico", price: 3.0 }
      ]
    }
  },
  {
    id: 3,
    name: "Pasta Palace",
    cuisines: ["Italian", "Continental"],
    image: "https://img.freepik.com/premium-photo/tasty-classic-italian-pasta-with-tomato-sauce-cheese-plate-dark-background-top-view_1220-6441.jpg",
    rating: 4.3,
    time: "35 mins",
    offer: "Buy 1 get 1 free on selected pastas",
    items: {
      "Appetizer": [
        { id: 301, name: "Garlic Bread", price: 4.5 },
        { id: 302, name: "Bruschetta", price: 6.25 },
        { id: 303, name: "Caprese Salad", price: 8.5 },
        { id: 304, name: "Stuffed Mushrooms", price: 7.5 },
        { id: 305, name: "Antipasto Platter", price: 10.99 }
      ],
      "Main Course": [
        { id: 306, name: "Pasta Puttanesca", price: 14.25 },
        { id: 307, name: "Spaghetti Carbonara", price: 13.5 },
        { id: 308, name: "Lasagna", price: 15.0 },
        { id: 309, name: "Fettuccine Alfredo", price: 13.75 },
        { id: 310, name: "Risotto Milanese", price: 16.5 }
      ],
      "Side": [
        { id: 311, name: "House Salad", price: 5.25 },
        { id: 312, name: "Roasted Vegetables", price: 6.0 },
        { id: 313, name: "Truffle Fries", price: 5.75 },
        { id: 314, name: "Parmesan Potatoes", price: 4.99 },
        { id: 315, name: "Grilled Zucchini", price: 5.5 }
      ],
      "Dessert": [
        { id: 316, name: "Tiramisu", price: 7.5 },
        { id: 317, name: "Cannoli", price: 6.25 },
        { id: 318, name: "Panna Cotta", price: 6.75 },
        { id: 319, name: "Chocolate Lava Cake", price: 7.99 },
        { id: 320, name: "Gelato", price: 5.5 }
      ],
      "Drink": [
        { id: 321, name: "Italian Soda", price: 3.5 },
        { id: 322, name: "Limoncello", price: 7.25 },
        { id: 323, name: "Chianti Wine", price: 9.5 },
        { id: 324, name: "Espresso", price: 3.0 },
        { id: 325, name: "San Pellegrino", price: 3.75 }
      ]
    }
  },
  {
    id: 4,
    name: "Taco Town",
    cuisines: ["Mexican"],
    image: "https://www.englishclub.com/images/vocabulary/food/mexican/mexican-food.jpg",
    rating: 3.1,
    time: "20 mins",
    offer: "15% off for first-time customers",
    items: {
      "Appetizer": [
        { id: 401, name: "Nachos Supreme", price: 7.5 },
        { id: 402, name: "Guacamole Dip", price: 5.25 },
        { id: 403, name: "Queso Fundido", price: 8.25 },
        { id: 404, name: "Elote", price: 5.99 },
        { id: 405, name: "Chicken Flautas", price: 7.25 }
      ],
      "Main Course": [
        { id: 406, name: "Beef Tacos", price: 9.75 },
        { id: 407, name: "Chicken Quesadilla", price: 8.99 },
        { id: 408, name: "Carne Asada", price: 14.5 },
        { id: 409, name: "Enchiladas", price: 11.99 },
        { id: 410, name: "Burrito Bowl", price: 10.75 }
      ],
      "Side": [
        { id: 411, name: "Mexican Rice", price: 3.5 },
        { id: 412, name: "Refried Beans", price: 3.0 },
        { id: 413, name: "Street Corn", price: 4.25 },
        { id: 414, name: "Chips & Salsa", price: 4.0 },
        { id: 415, name: "Chili con Queso", price: 5.5 }
      ],
      "Dessert": [
        { id: 416, name: "Churros", price: 4.0 },
        { id: 417, name: "Flan", price: 4.5 },
        { id: 418, name: "Tres Leches Cake", price: 5.25 },
        { id: 419, name: "Sopapillas", price: 4.75 },
        { id: 420, name: "Fried Ice Cream", price: 5.99 }
      ],
      "Drink": [
        { id: 421, name: "Horchata", price: 3.5 },
        { id: 422, name: "Jamaica", price: 3.25 },
        { id: 423, name: "Margarita", price: 7.5 },
        { id: 424, name: "Mexican Coke", price: 2.75 },
        { id: 425, name: "Tamarind Drink", price: 3.0 }
      ]
    }
  },
  {
    id: 5,
    name: "Burger Barn",
    cuisines: ["American", "Fast Food"],
    image: "https://images.radio.com/aiu-media/GettyImages1188412964-3b4e1a5a-ccc7-444e-a717-f5e5542d3313.jpg",
    rating: 4.2,
    time: "18 mins",
    offer: "Free fries with every burger",
    items: {
      "Appetizer": [
        { id: 501, name: "Onion Rings", price: 3.5 },
        { id: 502, name: "Mozzarella Sticks", price: 6.25 },
        { id: 503, name: "Chicken Wings", price: 8.5 },
        { id: 504, name: "Potato Skins", price: 7.25 },
        { id: 505, name: "Fried Pickles", price: 5.5 }
      ],
      "Main Course": [
        { id: 506, name: "Cheeseburger", price: 7.5 },
        { id: 507, name: "Double Bacon Burger", price: 9.25 },
        { id: 508, name: "Crispy Chicken Sandwich", price: 8.75 },
        { id: 509, name: "Mushroom Swiss Burger", price: 9.5 },
        { id: 510, name: "BBQ Burger", price: 10.25 }
      ],
      "Side": [
        { id: 511, name: "French Fries", price: 3.5 },
        { id: 512, name: "Sweet Potato Fries", price: 4.25 },
        { id: 513, name: "Coleslaw", price: 2.75 },
        { id: 514, name: "Mac & Cheese", price: 4.5 },
        { id: 515, name: "Side Salad", price: 4.0 }
      ],
      "Dessert": [
        { id: 516, name: "Milkshake", price: 4.5 },
        { id: 517, name: "Apple Pie", price: 4.25 },
        { id: 518, name: "Brownie Sundae", price: 5.5 },
        { id: 519, name: "Chocolate Chip Cookie", price: 2.5 },
        { id: 520, name: "Ice Cream Cone", price: 3.0 }
      ],
      "Drink": [
        { id: 521, name: "Soda", price: 2.0 },
        { id: 522, name: "Iced Tea", price: 2.5 },
        { id: 523, name: "Lemonade", price: 2.75 },
        { id: 524, name: "Root Beer Float", price: 4.5 },
        { id: 525, name: "Coffee", price: 2.25 }
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
        { id: 601, name: "Spring Rolls", price: 6.75 },
        { id: 602, name: "Dumplings", price: 7.5 },
        { id: 603, name: "Hot & Sour Soup", price: 5.25 },
        { id: 604, name: "Crispy Wontons", price: 6.0 },
        { id: 605, name: "Szechwan Wings", price: 8.25 }
      ],
      "Main Course": [
        { id: 606, name: "Chow Mein", price: 11.0 },
        { id: 607, name: "Schezwan Noodles", price: 12.25 },
        { id: 608, name: "Fried Rice", price: 10.0 },
        { id: 609, name: "Kung Pao Chicken", price: 13.5 },
        { id: 610, name: "Sweet & Sour Pork", price: 14.0 }
      ],
      "Side": [
        { id: 611, name: "Steamed Vegetables", price: 4.5 },
        { id: 612, name: "Egg Fried Rice", price: 5.0 },
        { id: 613, name: "Garlic Green Beans", price: 4.75 },
        { id: 614, name: "Sesame Noodles", price: 5.5 },
        { id: 615, name: "Pickled Vegetables", price: 3.5 }
      ],
      "Dessert": [
        { id: 616, name: "Mango Pudding", price: 4.5 },
        { id: 617, name: "Fortune Cookies", price: 2.0 },
        { id: 618, name: "Sesame Balls", price: 5.0 },
        { id: 619, name: "Almond Cookies", price: 3.75 },
        { id: 620, name: "Lychee Ice Cream", price: 4.25 }
      ],
      "Drink": [
        { id: 621, name: "Jasmine Tea", price: 2.5 },
        { id: 622, name: "Bubble Tea", price: 4.5 },
        { id: 623, name: "Plum Wine", price: 6.5 },
        { id: 624, name: "Soy Milk", price: 3.0 },
        { id: 625, name: "Lychee Cooler", price: 3.75 }
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
        { id: 701, name: "Avocado Toast", price: 8.25 },
        { id: 702, name: "Hummus Platter", price: 9.5 },
        { id: 703, name: "Kale Chips", price: 5.75 },
        { id: 704, name: "Stuffed Peppers", price: 7.25 },
        { id: 705, name: "Zucchini Fritters", price: 6.5 }
      ],
      "Main Course": [
        { id: 706, name: "Vegan Buddha Bowl", price: 13.45 },
        { id: 707, name: "Quinoa Salad", price: 10.5 },
        { id: 708, name: "Tofu Stir Fry", price: 12.0 },
        { id: 709, name: "Lentil Curry", price: 11.5 },
        { id: 710, name: "Portobello Burger", price: 12.75 }
      ],
      "Side": [
        { id: 711, name: "Sweet Potato Mash", price: 4.5 },
        { id: 712, name: "Grilled Asparagus", price: 5.25 },
        { id: 713, name: "Quinoa Pilaf", price: 5.0 },
        { id: 714, name: "Roasted Brussels Sprouts", price: 4.75 },
        { id: 715, name: "Mixed Green Salad", price: 5.5 }
      ],
      "Dessert": [
        { id: 716, name: "Green Smoothie", price: 6.0 },
        { id: 717, name: "Chia Pudding", price: 5.5 },
        { id: 718, name: "Vegan Chocolate Cake", price: 6.25 },
        { id: 719, name: "Fruit Parfait", price: 5.75 },
        { id: 720, name: "Coconut Yogurt", price: 4.5 }
      ],
      "Drink": [
        { id: 721, name: "Cold Pressed Juice", price: 5.0 },
        { id: 722, name: "Kombucha", price: 4.5 },
        { id: 723, name: "Almond Milk Latte", price: 4.25 },
        { id: 724, name: "Herbal Tea", price: 3.5 },
        { id: 725, name: "Turmeric Latte", price: 4.75 }
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
        { id: 801, name: "Samosa Chaat", price: 6.5 },
        { id: 802, name: "Thai Fish Cakes", price: 8.25 },
        { id: 803, name: "Chicken Satay", price: 9.0 },
        { id: 804, name: "Vegetable Pakora", price: 5.75 },
        { id: 805, name: "Tom Yum Soup", price: 6.25 }
      ],
      "Main Course": [
        { id: 806, name: "Chicken Curry with Rice", price: 12.75 },
        { id: 807, name: "Thai Green Curry", price: 11.95 },
        { id: 808, name: "Palak Paneer", price: 10.99 },
        { id: 809, name: "Butter Chicken", price: 13.5 },
        { id: 810, name: "Massaman Curry", price: 14.25 }
      ],
      "Side": [
        { id: 811, name: "Steamed Rice", price: 2.5 },
        { id: 812, name: "Roti", price: 1.75 },
        { id: 813, name: "Garlic Naan", price: 3.0 },
        { id: 814, name: "Coconut Rice", price: 4.0 },
        { id: 815, name: "Papadum", price: 1.5 }
      ],
      "Dessert": [
        { id: 816, name: "Mango Sticky Rice", price: 5.5 },
        { id: 817, name: "Gulab Jamun", price: 4.25 },
        { id: 818, name: "Kheer", price: 4.0 },
        { id: 819, name: "Thai Tea Ice Cream", price: 4.75 },
        { id: 820, name: "Coconut Pancakes", price: 5.25 }
      ],
      "Drink": [
        { id: 821, name: "Mango Lassi", price: 3.75 },
        { id: 822, name: "Thai Iced Tea", price: 4.0 },
        { id: 823, name: "Masala Chai", price: 2.5 },
        { id: 824, name: "Coconut Water", price: 3.25 },
        { id: 825, name: "Lemongrass Tea", price: 3.0 }
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
        { id: 901, name: "Garlic Breadsticks", price: 5.0 },
        { id: 902, name: "Bruschetta", price: 6.5 },
        { id: 903, name: "Mozzarella Sticks", price: 7.25 },
        { id: 904, name: "Stuffed Mushrooms", price: 8.0 },
        { id: 905, name: "Antipasto Salad", price: 9.5 }
      ],
      "Main Course": [
        { id: 906, name: "Supreme Pizza", price: 16.0 },
        { id: 907, name: "Margherita Pizza", price: 12.0 },
        { id: 908, name: "Pepperoni Pizza", price: 14.5 },
        { id: 909, name: "BBQ Chicken Pizza", price: 15.75 },
        { id: 910, name: "Veggie Delight Pizza", price: 13.5 }
      ],
      "Side": [
        { id: 911, name: "Caesar Salad", price: 6.0 },
        { id: 912, name: "Pasta Salad", price: 5.5 },
        { id: 913, name: "French Fries", price: 4.0 },
        { id: 914, name: "Onion Rings", price: 4.5 },
        { id: 915, name: "Coleslaw", price: 3.5 }
      ],
      "Dessert": [
        { id: 916, name: "Chocolate Lava Cake", price: 6.0 },
        { id: 917, name: "Tiramisu", price: 6.5 },
        { id: 918, name: "Cannoli", price: 5.75 },
        { id: 919, name: "Cheesecake", price: 6.25 },
        { id: 920, name: "Gelato", price: 5.0 }
      ],
      "Drink": [
        { id: 921, name: "Soda", price: 2.5 },
        { id: 922, name: "Iced Tea", price: 3.0 },
        { id: 923, name: "Lemonade", price: 3.25 },
        { id: 924, name: "Italian Soda", price: 4.0 },
        { id: 925, name: "Sparkling Water", price: 2.75 }
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
        { id: 1001, name: "Hummus & Pita", price: 7.25 },
        { id: 1002, name: "Baba Ganoush", price: 7.5 },
        { id: 1003, name: "Falafel Plate", price: 8.0 },
        { id: 1004, name: "Stuffed Grape Leaves", price: 7.75 },
        { id: 1005, name: "Labneh", price: 6.5 }
      ],
      "Main Course": [
        { id: 1006, name: "Shish Kebab", price: 15.25 },
        { id: 1007, name: "Falafel Wrap", price: 9.5 },
        { id: 1008, name: "Chicken Shawarma", price: 13.0 },
        { id: 1009, name: "Lamb Kofta", price: 16.5 },
        { id: 1010, name: "Vegetable Tagine", price: 12.75 }
      ],
      "Side": [
        { id: 1011, name: "Tabbouleh", price: 5.5 },
        { id: 1012, name: "Fattoush Salad", price: 6.0 },
        { id: 1013, name: "Rice Pilaf", price: 4.5 },
        { id: 1014, name: "Grilled Vegetables", price: 5.25 },
        { id: 1015, name: "Lentil Soup", price: 5.0 }
      ],
      "Dessert": [
        { id: 1016, name: "Baklava", price: 4.75 },
        { id: 1017, name: "Kunafa", price: 5.5 },
        { id: 1018, name: "Mahalabia", price: 4.25 },
        { id: 1019, name: "Date Cake", price: 5.0 },
        { id: 1020, name: "Turkish Delight", price: 4.5 }
      ],
      "Drink": [
        { id: 1021, name: "Mint Lemonade", price: 3.5 },
        { id: 1022, name: "Turkish Coffee", price: 4.0 },
        { id: 1023, name: "Ayran", price: 3.0 },
        { id: 1024, name: "Pomegranate Juice", price: 4.5 },
        { id: 1025, name: "Rose Water", price: 3.25 }
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
        { id: 1101, name: "French Fries", price: 3.5 },
        { id: 1102, name: "Onion Rings", price: 4.0 },
        { id: 1103, name: "Mozzarella Sticks", price: 5.5 },
        { id: 1104, name: "Chilli Cheese Toast", price: 5.0 },
        { id: 1105, name: "Garlic Bread", price: 4.5 }
      ],
      "Main Course": [
        { id: 1106, name: "Veg Frankie", price: 5.5 },
        { id: 1107, name: "Chicken Roll", price: 6.75 },
        { id: 1108, name: "Egg Wrap", price: 5.25 },
        { id: 1109, name: "Cheese Corn Roll", price: 6.0 },
        { id: 1110, name: "Mayo Paneer Wrap", price: 6.5 }
      ],
      "Side": [
        { id: 1111, name: "Coleslaw", price: 2.5 },
        { id: 1112, name: "Potato Wedges", price: 3.5 },
        { id: 1113, name: "Corn Salad", price: 3.0 },
        { id: 1114, name: "Garlic Dip", price: 1.5 },
        { id: 1115, name: "Sweet Chilli Sauce", price: 1.0 }
      ],
      "Dessert": [
        { id: 1116, name: "Chocolate Brownie", price: 4.0 },
        { id: 1117, name: "Ice Cream Scoop", price: 3.5 },
        { id: 1118, name: "Gulab Jamun", price: 3.0 },
        { id: 1119, name: "Fruit Custard", price: 3.75 },
        { id: 1120, name: "Chocolate Mousse", price: 4.25 }
      ],
      "Drink": [
        { id: 1121, name: "Cold Coffee", price: 3.5 },
        { id: 1122, name: "Lemonade", price: 2.5 },
        { id: 1123, name: "Mango Shake", price: 4.0 },
        { id: 1124, name: "Iced Tea", price: 3.0 },
        { id: 1125, name: "Soft Drink", price: 2.0 }
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
        { id: 1201, name: "Chocolate Truffle", price: 3.5 },
        { id: 1202, name: "Red Velvet Cake", price: 4.25 },
        { id: 1203, name: "Black Forest", price: 4.0 },
        { id: 1204, name: "Cheesecake", price: 4.5 },
        { id: 1205, name: "Carrot Cake", price: 3.75 }
      ],
      "Pastries": [
        { id: 1206, name: "Croissant", price: 2.5 },
        { id: 1207, name: "Danish Pastry", price: 3.0 },
        { id: 1208, name: "Eclair", price: 3.5 },
        { id: 1209, name: "Fruit Tart", price: 3.75 },
        { id: 1210, name: "Puff Pastry", price: 2.75 }
      ],
      "Cookies": [
        { id: 1211, name: "Chocolate Chip", price: 1.5 },
        { id: 1212, name: "Oatmeal Raisin", price: 1.5 },
        { id: 1213, name: "Macarons", price: 2.0 },
        { id: 1214, name: "Butter Cookies", price: 1.75 },
        { id: 1215, name: "Almond Biscotti", price: 2.25 }
      ],
      "Desserts": [
        { id: 1216, name: "Blueberry Muffin", price: 2.75 },
        { id: 1217, name: "Vanilla Cupcake", price: 2.5 },
        { id: 1218, name: "Macarons Box", price: 6.0 },
        { id: 1219, name: "Tiramisu", price: 4.5 },
        { id: 1220, name: "Crème Brûlée", price: 4.75 }
      ],
      "Drinks": [
        { id: 1221, name: "Hot Chocolate", price: 3.5 },
        { id: 1222, name: "Cappuccino", price: 3.75 },
        { id: 1223, name: "Chai Latte", price: 3.0 },
        { id: 1224, name: "Iced Coffee", price: 4.0 },
        { id: 1225, name: "Herbal Tea", price: 2.5 }
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
        { id: 1301, name: "Cappuccino", price: 3.75 },
        { id: 1302, name: "Iced Latte", price: 4.0 },
        { id: 1303, name: "Espresso Shot", price: 2.5 },
        { id: 1304, name: "Cold Brew", price: 4.25 },
        { id: 1305, name: "Americano", price: 3.0 }
      ],
      "Tea": [
        { id: 1306, name: "Earl Grey", price: 2.75 },
        { id: 1307, name: "Chamomile", price: 2.5 },
        { id: 1308, name: "Green Tea", price: 2.5 },
        { id: 1309, name: "Masala Chai", price: 2.25 },
        { id: 1310, name: "Peppermint Tea", price: 2.5 }
      ],
      "Specialty Drinks": [
        { id: 1311, name: "Matcha Latte", price: 4.5 },
        { id: 1312, name: "Turmeric Latte", price: 4.25 },
        { id: 1313, name: "Caramel Macchiato", price: 4.75 },
        { id: 1314, name: "Mocha", price: 4.5 },
        { id: 1315, name: "Affogato", price: 5.0 }
      ],
      "Bakery": [
        { id: 1316, name: "Chocolate Chip Cookie", price: 1.5 },
        { id: 1317, name: "Croissant", price: 2.5 },
        { id: 1318, name: "Blueberry Muffin", price: 2.75 },
        { id: 1319, name: "Cinnamon Roll", price: 3.25 },
        { id: 1320, name: "Banana Bread", price: 3.0 }
      ],
      "Sandwiches": [
        { id: 1321, name: "Grilled Cheese", price: 5.5 },
        { id: 1322, name: "Ham & Cheese", price: 6.0 },
        { id: 1323, name: "Veggie Panini", price: 5.75 },
        { id: 1324, name: "Turkey Club", price: 6.5 },
        { id: 1325, name: "Avocado Toast", price: 5.25 }
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
        { id: 1401, name: "Nutella Waffle", price: 5.75 },
        { id: 1402, name: "Strawberry Delight", price: 6.0 },
        { id: 1403, name: "Banana Caramel", price: 5.5 },
        { id: 1404, name: "Choco Chip Waffle", price: 5.25 },
        { id: 1405, name: "Vanilla Ice Cream Waffle", price: 6.25 }
      ],
      "Pancakes": [
        { id: 1406, name: "Blueberry Pancakes", price: 6.5 },
        { id: 1407, name: "Chocolate Chip Pancakes", price: 6.75 },
        { id: 1408, name: "Banana Nut Pancakes", price: 6.25 },
        { id: 1409, name: "Buttermilk Pancakes", price: 5.5 },
        { id: 1410, name: "Apple Cinnamon Pancakes", price: 6.0 }
      ],
      "French Toast": [
        { id: 1411, name: "Classic French Toast", price: 6.25 },
        { id: 1412, name: "Stuffed French Toast", price: 7.0 },
        { id: 1413, name: "Cinnamon Roll French Toast", price: 7.5 },
        { id: 1414, name: "Berry French Toast", price: 7.25 },
        { id: 1415, name: "Banana Foster French Toast", price: 7.75 }
      ],
      "Sides": [
        { id: 1416, name: "Bacon", price: 4.0 },
        { id: 1417, name: "Sausage Links", price: 4.5 },
        { id: 1418, name: "Scrambled Eggs", price: 3.5 },
        { id: 1419, name: "Hash Browns", price: 3.0 },
        { id: 1420, name: "Fresh Fruit", price: 4.25 }
      ],
      "Drinks": [
        { id: 1421, name: "Fresh Orange Juice", price: 3.5 },
        { id: 1422, name: "Iced Coffee", price: 4.0 },
        { id: 1423, name: "Hot Chocolate", price: 3.75 },
        { id: 1424, name: "Milkshake", price: 5.0 },
        { id: 1425, name: "Smoothie", price: 5.5 }
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
        { id: 1501, name: "Hyderabadi Chicken Biryani", price: 13.99 },
        { id: 1502, name: "Veg Biryani", price: 10.75 },
        { id: 1503, name: "Mutton Biryani", price: 15.5 },
        { id: 1504, name: "Egg Biryani", price: 11.25 },
        { id: 1505, name: "Prawn Biryani", price: 14.5 }
      ],
      "Kebabs": [
        { id: 1506, name: "Chicken Tikka", price: 9.5 },
        { id: 1507, name: "Seekh Kebab", price: 10.25 },
        { id: 1508, name: "Paneer Tikka", price: 8.75 },
        { id: 1509, name: "Fish Tikka", price: 11.0 },
        { id: 1510, name: "Malai Kebab", price: 9.0 }
      ],
      "Curries": [
        { id: 1511, name: "Butter Chicken", price: 12.5 },
        { id: 1512, name: "Dal Makhani", price: 8.5 },
        { id: 1513, name: "Kadai Paneer", price: 10.0 },
        { id: 1514, name: "Chicken Korma", price: 11.5 },
        { id: 1515, name: "Palak Paneer", price: 9.25 }
      ],
      "Breads": [
        { id: 1516, name: "Butter Naan", price: 2.5 },
        { id: 1517, name: "Garlic Naan", price: 3.0 },
        { id: 1518, name: "Tandoori Roti", price: 2.0 },
        { id: 1519, name: "Laccha Paratha", price: 3.5 },
        { id: 1520, name: "Rumali Roti", price: 3.25 }
      ],
      "Desserts": [
        { id: 1521, name: "Raita & Salad", price: 3.0 },
        { id: 1522, name: "Gulab Jamun", price: 4.0 },
        { id: 1523, name: "Rasmalai", price: 4.5 },
        { id: 1524, name: "Kheer", price: 3.75 },
        { id: 1525, name: "Mango Lassi", price: 3.5 }
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
        { id: 1601, name: "Chicken Sizzler", price: 15.5 },
        { id: 1602, name: "Veg Sizzler", price: 13.0 },
        { id: 1603, name: "Beef Steak", price: 18.0 },
        { id: 1604, name: "Fish Sizzler", price: 16.5 },
        { id: 1605, name: "Prawn Sizzler", price: 17.5 }
      ],
      "Grills": [
        { id: 1606, name: "Grilled Chicken", price: 12.5 },
        { id: 1607, name: "Lamb Chops", price: 15.0 },
        { id: 1608, name: "Grilled Salmon", price: 16.0 },
        { id: 1609, name: "Vegetable Skewers", price: 11.0 },
        { id: 1610, name: "Pork Ribs", price: 14.5 }
      ],
      "Sides": [
        { id: 1611, name: "Grilled Vegetables", price: 7.5 },
        { id: 1612, name: "Mashed Potatoes", price: 5.0 },
        { id: 1613, name: "Coleslaw", price: 4.0 },
        { id: 1614, name: "French Fries", price: 4.5 },
        { id: 1615, name: "Garlic Bread", price: 3.5 }
      ],
      "Sauces": [
        { id: 1616, name: "Peppercorn Sauce", price: 2.0 },
        { id: 1617, name: "Mushroom Sauce", price: 2.0 },
        { id: 1618, name: "BBQ Sauce", price: 1.5 },
        { id: 1619, name: "Garlic Butter", price: 1.5 },
        { id: 1620, name: "Chilli Sauce", price: 1.0 }
      ],
      "Drinks": [
        { id: 1621, name: "Lemonade", price: 2.5 },
        { id: 1622, name: "Iced Tea", price: 3.0 },
        { id: 1623, name: "Fresh Lime Soda", price: 2.75 },
        { id: 1624, name: "Beer", price: 5.0 },
        { id: 1625, name: "Red Wine", price: 7.5 }
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
        { id: 1701, name: "Blueberry Pancakes", price: 6.25 },
        { id: 1702, name: "Banana Pancakes", price: 5.75 },
        { id: 1703, name: "Nutella Stack", price: 7.5 },
        { id: 1704, name: "Classic Maple Syrup", price: 5.5 },
        { id: 1705, name: "Chocolate Chip Pancakes", price: 6.5 }
      ],
      "Waffles": [
        { id: 1706, name: "Belgian Waffle", price: 6.0 },
        { id: 1707, name: "Strawberry Waffle", price: 6.75 },
        { id: 1708, name: "Chocolate Waffle", price: 6.5 },
        { id: 1709, name: "Cinnamon Waffle", price: 6.25 },
        { id: 1710, name: "Red Velvet Waffle", price: 7.0 }
      ],
      "French Toast": [
        { id: 1711, name: "Classic French Toast", price: 6.5 },
        { id: 1712, name: "Stuffed French Toast", price: 7.25 },
        { id: 1713, name: "Cinnamon French Toast", price: 6.75 },
        { id: 1714, name: "Banana French Toast", price: 7.0 },
        { id: 1715, name: "Berry French Toast", price: 7.5 }
      ],
      "Sides": [
        { id: 1716, name: "Bacon", price: 4.0 },
        { id: 1717, name: "Sausage", price: 4.5 },
        { id: 1718, name: "Scrambled Eggs", price: 3.5 },
        { id: 1719, name: "Hash Browns", price: 3.0 },
        { id: 1720, name: "Fresh Fruit", price: 4.25 }
      ],
      "Drinks": [
        { id: 1721, name: "Fresh Juice", price: 4.0 },
        { id: 1722, name: "Iced Coffee", price: 4.5 },
        { id: 1723, name: "Hot Chocolate", price: 3.75 },
        { id: 1724, name: "Milkshake", price: 5.0 },
        { id: 1725, name: "Smoothie", price: 5.5 }
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
        { id: 1801, name: "Masala Dosa", price: 6.75 },
        { id: 1802, name: "Plain Dosa", price: 5.5 },
        { id: 1803, name: "Mysore Dosa", price: 7.25 },
        { id: 1804, name: "Rava Dosa", price: 6.0 },
        { id: 1805, name: "Onion Dosa", price: 6.5 }
      ],
      "Idlis": [
        { id: 1806, name: "Plain Idli", price: 4.0 },
        { id: 1807, name: "Rava Idli", price: 4.5 },
        { id: 1808, name: "Stuffed Idli", price: 5.0 },
        { id: 1809, name: "Fried Idli", price: 5.5 },
        { id: 1810, name: "Mini Idlis", price: 4.75 }
      ],
      "Vadas": [
        { id: 1811, name: "Medu Vada", price: 4.5 },
        { id: 1812, name: "Sambar Vada", price: 5.0 },
        { id: 1813, name: "Rasam Vada", price: 5.0 },
        { id: 1814, name: "Masala Vada", price: 4.75 },
        { id: 1815, name: "Dahi Vada", price: 5.5 }
      ],
      "Meals": [
        { id: 1816, name: "South Indian Thali", price: 12.0 },
        { id: 1817, name: "Mini Meals", price: 8.5 },
        { id: 1818, name: "Curd Rice", price: 6.5 },
        { id: 1819, name: "Bisi Bele Bath", price: 7.5 },
        { id: 1820, name: "Pongal", price: 6.0 }
      ],
      "Drinks": [
        { id: 1821, name: "Coconut Chutney", price: 1.5 },
        { id: 1822, name: "Filter Coffee", price: 2.5 },
        { id: 1823, name: "Masala Tea", price: 2.25 },
        { id: 1824, name: "Badam Milk", price: 3.5 },
        { id: 1825, name: "Lassi", price: 3.0 }
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
        { id: 1901, name: "Tandoori Chicken", price: 12.5 },
        { id: 1902, name: "Paneer Tikka", price: 9.75 },
        { id: 1903, name: "Chicken Tikka", price: 11.25 },
        { id: 1904, name: "Fish Tikka", price: 13.0 },
        { id: 1905, name: "Malai Tikka", price: 10.5 }
      ],
      "Kebabs": [
        { id: 1906, name: "Seekh Kebab", price: 10.75 },
        { id: 1907, name: "Reshmi Kebab", price: 11.5 },
        { id: 1908, name: "Galouti Kebab", price: 12.0 },
        { id: 1909, name: "Shami Kebab", price: 9.5 },
        { id: 1910, name: "Hariyali Kebab", price: 10.25 }
      ],
      "Breads": [
        { id: 1911, name: "Tandoori Roti", price: 2.0 },
        { id: 1912, name: "Butter Naan", price: 2.5 },
        { id: 1913, name: "Garlic Naan", price: 3.0 },
        { id: 1914, name: "Laccha Paratha", price: 3.5 },
        { id: 1915, name: "Missi Roti", price: 2.75 }
      ],
      "Dips": [
        { id: 1916, name: "Mint Chutney", price: 1.0 },
        { id: 1917, name: "Tamarind Chutney", price: 1.0 },
        { id: 1918, name: "Garlic Mayo", price: 1.5 },
        { id: 1919, name: "Green Chutney", price: 1.0 },
        { id: 1920, name: "Yogurt Dip", price: 1.25 }
      ],
      "Drinks": [
        { id: 1921, name: "Mango Lassi", price: 3.5 },
        { id: 1922, name: "Masala Chaas", price: 2.5 },
        { id: 1923, name: "Jaljeera", price: 2.0 },
        { id: 1924, name: "Rose Sharbat", price: 2.75 },
        { id: 1925, name: "Sugarcane Juice", price: 3.0 }
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
        { id: 2001, name: "Caesar Salad", price: 7.25 },
        { id: 2002, name: "Kale & Quinoa", price: 8.0 },
        { id: 2003, name: "Greek Salad", price: 7.5 },
        { id: 2004, name: "Fruit Bowl", price: 6.5 },
        { id: 2005, name: "Cobb Salad", price: 8.5 }
      ],
      "Wraps": [
        { id: 2006, name: "Grilled Chicken Wrap", price: 8.75 },
        { id: 2007, name: "Veggie Wrap", price: 7.5 },
        { id: 2008, name: "Turkey Wrap", price: 9.0 },
        { id: 2009, name: "Falafel Wrap", price: 8.0 },
        { id: 2010, name: "Tuna Wrap", price: 9.5 }
      ],
      "Soups": [
        { id: 2011, name: "Tomato Basil", price: 5.0 },
        { id: 2012, name: "Lentil Soup", price: 5.5 },
        { id: 2013, name: "Minestrone", price: 5.25 },
        { id: 2014, name: "Chicken Noodle", price: 6.0 },
        { id: 2015, name: "Mushroom Soup", price: 5.75 }
      ],
      "Bowls": [
        { id: 2016, name: "Buddha Bowl", price: 9.5 },
        { id: 2017, name: "Acai Bowl", price: 8.0 },
        { id: 2018, name: "Grain Bowl", price: 8.5 },
        { id: 2019, name: "Protein Bowl", price: 9.0 },
        { id: 2020, name: "Poke Bowl", price: 10.0 }
      ],
      "Drinks": [
        { id: 2021, name: "Orange Juice", price: 3.25 },
        { id: 2022, name: "Green Juice", price: 4.0 },
        { id: 2023, name: "Detox Water", price: 3.5 },
        { id: 2024, name: "Smoothie", price: 5.0 },
        { id: 2025, name: "Iced Tea", price: 3.0 }
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
        { id: 2101, name: "Tonkotsu Ramen", price: 13.25 },
        { id: 2102, name: "Shoyu Ramen", price: 12.5 },
        { id: 2103, name: "Spicy Miso Ramen", price: 14.0 },
        { id: 2104, name: "Veg Ramen", price: 11.75 },
        { id: 2105, name: "Shio Ramen", price: 12.75 }
      ],
      "Donburi": [
        { id: 2106, name: "Chicken Don", price: 11.5 },
        { id: 2107, name: "Beef Don", price: 12.5 },
        { id: 2108, name: "Pork Don", price: 12.0 },
        { id: 2109, name: "Veggie Don", price: 10.0 },
        { id: 2110, name: "Salmon Don", price: 13.5 }
      ],
      "Appetizers": [
        { id: 2111, name: "Gyoza", price: 6.5 },
        { id: 2112, name: "Edamame", price: 5.0 },
        { id: 2113, name: "Agedashi Tofu", price: 6.0 },
        { id: 2114, name: "Takoyaki", price: 7.0 },
        { id: 2115, name: "Karaage", price: 7.5 }
      ],
      "Sides": [
        { id: 2116, name: "Egg Add-on", price: 1.25 },
        { id: 2117, name: "Extra Noodles", price: 2.0 },
        { id: 2118, name: "Seaweed Salad", price: 4.5 },
        { id: 2119, name: "Kimchi", price: 3.5 },
        { id: 2120, name: "Rice Bowl", price: 2.5 }
      ],
      "Drinks": [
        { id: 2121, name: "Matcha Latte", price: 4.5 },
        { id: 2122, name: "Ramune", price: 3.5 },
        { id: 2123, name: "Sake", price: 7.0 },
        { id: 2124, name: "Calpico", price: 3.0 },
        { id: 2125, name: "Green Tea", price: 2.5 }
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
        { id: 2201, name: "Paneer Kathi Roll", price: 6.75 },
        { id: 2202, name: "Chicken Kathi Roll", price: 7.5 },
        { id: 2203, name: "Double Egg Roll", price: 5.5 },
        { id: 2204, name: "Mutton Seekh Roll", price: 8.25 },
        { id: 2205, name: "Veg Kathi Roll", price: 6.0 }
      ],
      "Wraps": [
        { id: 2206, name: "Falafel Wrap", price: 7.0 },
        { id: 2207, name: "Chicken Shawarma", price: 8.0 },
        { id: 2208, name: "Paneer Wrap", price: 6.5 },
        { id: 2209, name: "Egg Wrap", price: 5.75 },
        { id: 2210, name: "Keema Wrap", price: 7.5 }
      ],
      "Sides": [
        { id: 2211, name: "Chilli Sauce Dip", price: 1.0 },
        { id: 2212, name: "French Fries", price: 3.5 },
        { id: 2213, name: "Onion Rings", price: 4.0 },
        { id: 2214, name: "Coleslaw", price: 2.5 },
        { id: 2215, name: "Garlic Bread", price: 3.0 }
      ],
      "Desserts": [
        { id: 2216, name: "Gulab Jamun", price: 3.0 },
        { id: 2217, name: "Rasmalai", price: 3.5 },
        { id: 2218, name: "Kheer", price: 3.25 },
        { id: 2219, name: "Ice Cream Scoop", price: 3.5 },
        { id: 2220, name: "Brownie", price: 4.0 }
      ],
      "Drinks": [
        { id: 2221, name: "Mango Lassi", price: 3.5 },
        { id: 2222, name: "Masala Chai", price: 2.0 },
        { id: 2223, name: "Cold Coffee", price: 3.0 },
        { id: 2224, name: "Fresh Lime Soda", price: 2.5 },
        { id: 2225, name: "Soft Drink", price: 2.0 }
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
        { id: 2301, name: "Mango Smoothie", price: 4.5 },
        { id: 2302, name: "Green Detox", price: 5.25 },
        { id: 2303, name: "Berry Blast", price: 5.75 },
        { id: 2304, name: "Carrot-Orange Juice", price: 4.0 },
        { id: 2305, name: "Beetroot Blend", price: 4.5 }
      ],
      "Smoothies": [
        { id: 2306, name: "Tropical Smoothie", price: 6.0 },
        { id: 2307, name: "Peanut Butter Banana", price: 6.5 },
        { id: 2308, name: "Acai Berry", price: 7.0 },
        { id: 2309, name: "Chocolate Banana", price: 6.25 },
        { id: 2310, name: "Strawberry Banana", price: 5.75 }
      ],
      "Shakes": [
        { id: 2311, name: "Vanilla Shake", price: 5.0 },
        { id: 2312, name: "Chocolate Shake", price: 5.5 },
        { id: 2313, name: "Strawberry Shake", price: 5.25 },
        { id: 2314, name: "Oreo Shake", price: 6.0 },
        { id: 2315, name: "Coffee Shake", price: 5.75 }
      ],
      "Bowls": [
        { id: 2316, name: "Acai Bowl", price: 7.5 },
        { id: 2317, name: "Pitaya Bowl", price: 7.75 },
        { id: 2318, name: "Oatmeal Bowl", price: 6.0 },
        { id: 2319, name: "Yogurt Bowl", price: 6.5 },
        { id: 2320, name: "Chia Pudding", price: 6.25 }
      ],
      "Snacks": [
        { id: 2321, name: "Energy Balls", price: 4.0 },
        { id: 2322, name: "Granola Bar", price: 3.5 },
        { id: 2323, name: "Fruit Salad", price: 5.0 },
        { id: 2324, name: "Avocado Toast", price: 5.5 },
        { id: 2325, name: "Protein Bar", price: 4.5 }
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
        { id: 2401, name: "Chocolate Shake", price: 5.25 },
        { id: 2402, name: "Strawberry Shake", price: 5.0 },
        { id: 2403, name: "Mango Shake", price: 5.0 },
        { id: 2404, name: "Oreo Shake", price: 5.5 },
        { id: 2405, name: "Vanilla Shake", price: 4.75 }
      ],
      "Sundaes": [
        { id: 2406, name: "Hot Fudge Sundae", price: 6.0 },
        { id: 2407, name: "Caramel Sundae", price: 6.0 },
        { id: 2408, name: "Strawberry Sundae", price: 5.75 },
        { id: 2409, name: "Nutella Sundae", price: 6.5 },
        { id: 2410, name: "Banana Split", price: 7.0 }
      ],
      "Ice Cream": [
        { id: 2411, name: "Vanilla Ice Cream", price: 2.75 },
        { id: 2412, name: "Chocolate Ice Cream", price: 2.75 },
        { id: 2413, name: "Strawberry Ice Cream", price: 2.75 },
        { id: 2414, name: "Mint Chip Ice Cream", price: 3.0 },
        { id: 2415, name: "Cookies & Cream", price: 3.0 }
      ],
      "Desserts": [
        { id: 2416, name: "Brownie", price: 4.0 },
        { id: 2417, name: "Cheesecake", price: 4.5 },
        { id: 2418, name: "Apple Pie", price: 4.25 },
        { id: 2419, name: "Chocolate Lava Cake", price: 5.0 },
        { id: 2420, name: "Tiramisu", price: 5.5 }
      ],
      "Drinks": [
        { id: 2421, name: "Cold Coffee", price: 3.5 },
        { id: 2422, name: "Iced Tea", price: 3.0 },
        { id: 2423, name: "Lemonade", price: 2.75 },
        { id: 2424, name: "Soda", price: 2.5 },
        { id: 2425, name: "Milkshake", price: 5.0 }
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
        { id: 2501, name: "Chicken Momos", price: 6.25 },
        { id: 2502, name: "Veg Momos", price: 5.5 },
        { id: 2503, name: "Fried Momos", price: 6.75 },
        { id: 2504, name: "Cheese Corn Momos", price: 7.0 },
        { id: 2505, name: "Paneer Momos", price: 6.5 }
      ],
      "Thukpa": [
        { id: 2506, name: "Chicken Thukpa", price: 8.0 },
        { id: 2507, name: "Veg Thukpa", price: 7.0 },
        { id: 2508, name: "Mushroom Thukpa", price: 7.5 },
        { id: 2509, name: "Pork Thukpa", price: 8.5 },
        { id: 2510, name: "Egg Thukpa", price: 7.25 }
      ],
      "Noodles": [
        { id: 2511, name: "Chowmein", price: 7.5 },
        { id: 2512, name: "Hakka Noodles", price: 7.75 },
        { id: 2513, name: "Thenthuk", price: 8.0 },
        { id: 2514, name: "Schezwan Noodles", price: 8.25 },
        { id: 2515, name: "Garlic Noodles", price: 7.5 }
      ],
      "Sides": [
        { id: 2516, name: "Spicy Chutney", price: 1.0 },
        { id: 2517, name: "Garlic Sauce", price: 1.0 },
        { id: 2518, name: "Chilli Oil", price: 1.0 },
        { id: 2519, name: "Soy Sauce", price: 0.75 },
        { id: 2520, name: "Pickled Vegetables", price: 1.5 }
      ],
      "Drinks": [
        { id: 2521, name: "Butter Tea", price: 3.0 },
        { id: 2522, name: "Sea Buckthorn Juice", price: 3.5 },
        { id: 2523, name: "Ginger Honey Tea", price: 2.75 },
        { id: 2524, name: "Tibetan Beer", price: 4.5 },
        { id: 2525, name: "Hot Lemon", price: 2.5 }
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
        { id: 2601, name: "Farmhouse Pizza", price: 11.0 },
        { id: 2602, name: "Cheese Burst", price: 12.5 },
        { id: 2603, name: "BBQ Chicken Pizza", price: 13.75 },
        { id: 2604, name: "Peri Peri Paneer", price: 12.0 },
        { id: 2605, name: "Margherita Pizza", price: 10.0 }
      ],
      "Calzones": [
        { id: 2606, name: "Cheese Calzone", price: 9.0 },
        { id: 2607, name: "Meat Lovers Calzone", price: 10.5 },
        { id: 2608, name: "Veggie Calzone", price: 9.5 },
        { id: 2609, name: "Spinach Ricotta Calzone", price: 9.75 },
        { id: 2610, name: "BBQ Chicken Calzone", price: 10.25 }
      ],
      "Pastas": [
        { id: 2611, name: "Spaghetti Bolognese", price: 10.0 },
        { id: 2612, name: "Fettuccine Alfredo", price: 11.0 },
        { id: 2613, name: "Penne Arrabiata", price: 9.5 },
        { id: 2614, name: "Lasagna", price: 12.0 },
        { id: 2615, name: "Mac & Cheese", price: 8.5 }
      ],
      "Sides": [
        { id: 2616, name: "Stuffed Crust Add-on", price: 2.0 },
        { id: 2617, name: "Garlic Bread", price: 4.0 },
        { id: 2618, name: "Cheesy Bread", price: 5.0 },
        { id: 2619, name: "Mozzarella Sticks", price: 6.0 },
        { id: 2620, name: "Caesar Salad", price: 6.5 }
      ],
      "Desserts": [
        { id: 2621, name: "Tiramisu", price: 6.0 },
        { id: 2622, name: "Cannoli", price: 5.5 },
        { id: 2623, name: "Chocolate Lava Cake", price: 6.5 },
        { id: 2624, name: "Cheesecake", price: 6.0 },
        { id: 2625, name: "Gelato", price: 5.0 }
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
        { id: 2701, name: "Classic Fish & Chips", price: 10.5 },
        { id: 2702, name: "Grilled Salmon", price: 13.0 },
        { id: 2703, name: "Beer Battered Fish", price: 11.0 },
        { id: 2704, name: "Fish Tacos", price: 9.5 },
        { id: 2705, name: "Fish Burger", price: 8.5 }
      ],
      "Seafood": [
        { id: 2706, name: "Prawn Platter", price: 14.0 },
        { id: 2707, name: "Calamari Rings", price: 10.5 },
        { id: 2708, name: "Scallops", price: 15.0 },
        { id: 2709, name: "Mussels", price: 12.0 },
        { id: 2710, name: "Lobster Roll", price: 16.5 }
      ],
      "Sides": [
        { id: 2711, name: "Fish Fingers", price: 7.25 },
        { id: 2712, name: "Tartar Sauce", price: 1.25 },
        { id: 2713, name: "Mashed Peas", price: 2.0 },
        { id: 2714, name: "Onion Rings", price: 4.0 },
        { id: 2715, name: "Coleslaw", price: 3.0 }
      ],
      "Desserts": [
        { id: 2716, name: "Sticky Toffee Pudding", price: 5.5 },
        { id: 2717, name: "Apple Crumble", price: 5.0 },
        { id: 2718, name: "Bread & Butter Pudding", price: 4.5 },
        { id: 2719, name: "Trifle", price: 6.0 },
        { id: 2720, name: "Eton Mess", price: 5.5 }
      ],
      "Drinks": [
        { id: 2721, name: "Ale", price: 5.0 },
        { id: 2722, name: "Cider", price: 5.5 },
        { id: 2723, name: "Ginger Beer", price: 3.5 },
        { id: 2724, name: "Lemonade", price: 3.0 },
        { id: 2725, name: "Iced Tea", price: 3.5 }
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
        { id: 2801, name: "Pani Puri", price: 4.0 },
        { id: 2802, name: "Aloo Tikki Chaat", price: 5.25 },
        { id: 2803, name: "Dahi Bhalla", price: 4.75 },
        { id: 2804, name: "Sev Puri", price: 4.5 },
        { id: 2805, name: "Chole Kulche", price: 6.0 }
      ],
      "Street Food": [
        { id: 2806, name: "Pav Bhaji", price: 7.0 },
        { id: 2807, name: "Vada Pav", price: 5.0 },
        { id: 2808, name: "Dabeli", price: 4.5 },
        { id: 2809, name: "Samosa", price: 3.5 },
        { id: 2810, name: "Kachori", price: 4.0 }
      ],
      "Sweets": [
        { id: 2811, name: "Jalebi", price: 4.0 },
        { id: 2812, name: "Rabri", price: 5.0 },
        { id: 2813, name: "Gulab Jamun", price: 3.5 },
        { id: 2814, name: "Rasgulla", price: 3.5 },
        { id: 2815, name: "Malpua", price: 4.5 }
      ],
      "Drinks": [
        { id: 2816, name: "Masala Chai", price: 2.0 },
        { id: 2817, name: "Lassi", price: 3.5 },
        { id: 2818, name: "Nimbu Pani", price: 2.5 },
        { id: 2819, name: "Jaljeera", price: 2.0 },
        { id: 2820, name: "Badam Milk", price: 3.5 }
      ],
      "Combos": [
        { id: 2821, name: "Chaat Platter", price: 12.0 },
        { id: 2822, name: "Street Food Combo", price: 15.0 },
        { id: 2823, name: "Sweet Lover's Combo", price: 10.0 },
        { id: 2824, name: "Family Pack", price: 25.0 },
        { id: 2825, name: "Mini Chaat Sampler", price: 8.0 }
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
        { id: 2901, name: "Buttered Toast", price: 3.0 },
        { id: 2902, name: "French Toast", price: 6.0 },
        { id: 2903, name: "Avocado Toast", price: 7.0 },
        { id: 2904, name: "Eggs Benedict", price: 8.5 },
        { id: 2905, name: "Pancake Stack", price: 7.5 }
      ],
      "Sandwiches": [
        { id: 2906, name: "Egg Sandwich", price: 4.75 },
        { id: 2907, name: "Grilled Cheese", price: 5.0 },
        { id: 2908, name: "BLT", price: 6.5 },
        { id: 2909, name: "Chicken Sandwich", price: 7.0 },
        { id: 2910, name: "Veggie Sandwich", price: 5.5 }
      ],
      "Beverages": [
        { id: 2911, name: "Masala Chai", price: 2.5 },
        { id: 2912, name: "Coffee", price: 2.25 },
        { id: 2913, name: "Hot Chocolate", price: 3.5 },
        { id: 2914, name: "Fresh Juice", price: 4.0 },
        { id: 2915, name: "Iced Tea", price: 3.0 }
      ],
      "Snacks": [
        { id: 2916, name: "Veg Cutlet", price: 3.5 },
        { id: 2917, name: "Samosa", price: 3.0 },
        { id: 2918, name: "Muffin", price: 3.5 },
        { id: 2919, name: "Croissant", price: 3.0 },
        { id: 2920, name: "Bagel", price: 3.5 }
      ],
      "Combos": [
        { id: 2921, name: "Breakfast Combo", price: 10.0 },
        { id: 2922, name: "Tea Time Combo", price: 8.0 },
        { id: 2923, name: "Lunch Special", price: 12.0 },
        { id: 2924, name: "Quick Bite Combo", price: 7.0 },
        { id: 2925, name: "Family Breakfast", price: 20.0 }
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
        { id: 3001, name: "BBQ Chicken Wings", price: 10.75 },
        { id: 3002, name: "Grilled Corn", price: 4.5 },
        { id: 3003, name: "Pulled Sandwich", price: 11.25 },
        { id: 3004, name: "Smoked Brisket", price: 13.5 },
        { id: 3005, name: "Ribs", price: 15.0 }
      ],
      "Grilled Meats": [
        { id: 3006, name: "Grilled Chicken", price: 12.0 },
        { id: 3007, name: "Steak", price: 18.0 },
        { id: 3008, name: "Lamb Chops", price: 16.0 },
        { id: 3009, name: "Pork Chops", price: 14.0 },
        { id: 3010, name: "Grilled Fish", price: 15.0 }
      ],
      "Sides": [
        { id: 3011, name: "Garlic Bread", price: 3.0 },
        { id: 3012, name: "Coleslaw", price: 3.5 },
        { id: 3013, name: "Baked Beans", price: 4.0 },
        { id: 3014, name: "Mac & Cheese", price: 5.0 },
        { id: 3015, name: "Potato Salad", price: 4.5 }
      ],
      "Sauces": [
        { id: 3016, name: "BBQ Sauce", price: 1.5 },
        { id: 3017, name: "Hot Sauce", price: 1.5 },
        { id: 3018, name: "Garlic Aioli", price: 1.5 },
        { id: 3019, name: "Honey Mustard", price: 1.5 },
        { id: 3020, name: "Ranch", price: 1.5 }
      ],
      "Drinks": [
        { id: 3021, name: "Lemonade", price: 3.0 },
        { id: 3022, name: "Iced Tea", price: 3.0 },
        { id: 3023, name: "Beer", price: 5.0 },
        { id: 3024, name: "Soda", price: 2.5 },
        { id: 3025, name: "Milkshake", price: 5.0 }
      ]
    }
  }
];

module.exports = data;