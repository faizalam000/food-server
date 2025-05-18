const data = [
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db06" },
    "restaurantName": "Burger Haven",
    "cuisine": "American",
    "image": "https://example.com/images/burgers.jpg",
    "location": "Los Angeles, CA",
    "rating": 4.4,
    "priceRange": "$",
    "description": "Gourmet burgers with unique flavor combos.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "BBQ Bacon Burger",
        "price": 10.0,
        "image": "https://example.com/images/bbq-bacon.jpg",
        "description": "Beef patty with BBQ sauce, crispy bacon, and cheddar."
      },
      {
        "dishName": "Veggie Stack",
        "price": 9.0,
        "image": "https://example.com/images/veggie-stack.jpg",
        "description": "Grilled portobello, zucchini, and peppers."
      },
      {
        "dishName": "Classic Cheeseburger",
        "price": 8.5,
        "image": "https://example.com/images/classic-cheeseburger.jpg",
        "description": "Angus beef with American cheese and pickles."
      },
      {
        "dishName": "Sweet Potato Fries",
        "price": 4.5,
        "image": "https://example.com/images/sweet-potato.jpg",
        "description": "Crispy sweet potato fries with chipotle aioli."
      }
    ]
  },
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db07" },
    "restaurantName": "Green Bowl",
    "cuisine": "Healthy / Vegan",
    "image": "https://example.com/images/green-bowl.jpg",
    "location": "Portland, OR",
    "rating": 4.9,
    "priceRange": "$$",
    "description": "Plant-based bowls and smoothies for a clean lifestyle.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "Quinoa Power Bowl",
        "price": 11.0,
        "image": "https://example.com/images/quinoa-bowl.jpg",
        "description": "Quinoa, kale, chickpeas, and tahini dressing."
      },
      {
        "dishName": "Acai Smoothie",
        "price": 7.0,
        "image": "https://example.com/images/acai.jpg",
        "description": "Acai, banana, and berries blended into a smoothie."
      },
      {
        "dishName": "Vegan Wrap",
        "price": 9.5,
        "image": "https://example.com/images/vegan-wrap.jpg",
        "description": "Tofu, avocado, hummus, and greens in a whole-wheat wrap."
      },
      {
        "dishName": "Sweet Green Salad",
        "price": 8.0,
        "image": "https://example.com/images/green-salad.jpg",
        "description": "Mixed greens with mango, cucumber, and lime dressing."
      }
    ]
  },
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db08" },
    "restaurantName": "Pho Real",
    "cuisine": "Vietnamese",
    "image": "https://example.com/images/pho.jpg",
    "location": "Seattle, WA",
    "rating": 4.7,
    "priceRange": "$",
    "description": "Comforting Vietnamese soups and street food.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "Pho Ga",
        "price": 10.0,
        "image": "https://example.com/images/pho-ga.jpg",
        "description": "Vietnamese chicken noodle soup with herbs."
      },
      {
        "dishName": "Banh Mi Sandwich",
        "price": 8.0,
        "image": "https://example.com/images/banh-mi.jpg",
        "description": "Crispy baguette with pickled veggies and pork."
      },
      {
        "dishName": "Spring Rolls",
        "price": 5.5,
        "image": "https://example.com/images/spring-rolls.jpg",
        "description": "Rice paper rolls with shrimp and herbs."
      },
      {
        "dishName": "Vietnamese Iced Coffee",
        "price": 4.0,
        "image": "https://example.com/images/iced-coffee.jpg",
        "description": "Strong coffee with sweetened condensed milk."
      }
    ]
  },
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db09" },
    "restaurantName": "Seoul Kitchen",
    "cuisine": "Korean",
    "image": "https://example.com/images/korean.jpg",
    "location": "Atlanta, GA",
    "rating": 4.6,
    "priceRange": "$$",
    "description": "Authentic Korean BBQ and street eats.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "Bibimbap",
        "price": 12.0,
        "image": "https://example.com/images/bibimbap.jpg",
        "description": "Mixed rice bowl with vegetables, beef, and egg."
      },
      {
        "dishName": "Bulgogi Beef",
        "price": 14.0,
        "image": "https://example.com/images/bulgogi.jpg",
        "description": "Marinated grilled beef slices."
      },
      {
        "dishName": "Kimchi Pancakes",
        "price": 7.0,
        "image": "https://example.com/images/kimchi-pancakes.jpg",
        "description": "Savory pancakes with kimchi and scallions."
      },
      {
        "dishName": "Tteokbokki",
        "price": 8.0,
        "image": "https://example.com/images/tteokbokki.jpg",
        "description": "Spicy rice cakes in gochujang sauce."
      }
    ]
  },
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db10" },
    "restaurantName": "Bagel & Bean",
    "cuisine": "Breakfast / Cafe",
    "image": "https://example.com/images/bagel.jpg",
    "location": "Philadelphia, PA",
    "rating": 4.5,
    "priceRange": "$",
    "description": "Fresh bagels, coffee, and cozy vibes.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "Everything Bagel with Lox",
        "price": 9.5,
        "image": "https://example.com/images/lox-bagel.jpg",
        "description": "Toasted everything bagel with cream cheese and smoked salmon."
      },
      {
        "dishName": "Breakfast Burrito",
        "price": 7.5,
        "image": "https://example.com/images/breakfast-burrito.jpg",
        "description": "Eggs, cheese, and avocado in a warm tortilla."
      },
      {
        "dishName": "Oat Milk Latte",
        "price": 4.5,
        "image": "https://example.com/images/oat-latte.jpg",
        "description": "Smooth espresso with steamed oat milk."
      },
      {
        "dishName": "Blueberry Muffin",
        "price": 3.5,
        "image": "https://example.com/images/muffin.jpg",
        "description": "Moist muffin packed with fresh blueberries."
      }
    ]
  },
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db11" },
    "restaurantName": "Mediterraneo",
    "cuisine": "Mediterranean",
    "image": "https://example.com/images/mediterranean.jpg",
    "location": "Denver, CO",
    "rating": 4.6,
    "priceRange": "$$",
    "description": "Fresh Mediterranean cuisine with a modern spin.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "Lamb Kofta",
        "price": 16.0,
        "image": "https://example.com/images/lamb-kofta.jpg",
        "description": "Spiced ground lamb skewers grilled to perfection."
      },
      {
        "dishName": "Falafel Wrap",
        "price": 9.0,
        "image": "https://example.com/images/falafel.jpg",
        "description": "Chickpea fritters in pita with tahini."
      },
      {
        "dishName": "Greek Salad",
        "price": 8.0,
        "image": "https://example.com/images/greek-salad.jpg",
        "description": "Cucumber, tomato, olives, and feta."
      },
      {
        "dishName": "Baklava",
        "price": 5.0,
        "image": "https://example.com/images/baklava.jpg",
        "description": "Flaky pastry with honey and pistachios."
      }
    ]
  },
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db01" },
    "restaurantName": "Spice Symphony",
    "cuisine": "Indian Fusion",
    "image": "https://example.com/images/indian-fusion.jpg",
    "location": "New York, NY",
    "rating": 4.6,
    "priceRange": "$$",
    "description": "A modern take on traditional Indian dishes with global influences.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "Tandoori Lamb Chops",
        "price": 24.99,
        "image": "https://example.com/images/tandoori-lamb.jpg",
        "description": "Chargrilled lamb chops marinated in spicy yogurt."
      },
      {
        "dishName": "Butter Chicken Bao",
        "price": 14.99,
        "image": "https://example.com/images/butter-chicken-bao.jpg",
        "description": "Fusion bao filled with creamy butter chicken."
      },
      {
        "dishName": "Paneer Tikka Tacos",
        "price": 13.5,
        "image": "https://example.com/images/paneer-tacos.jpg",
        "description": "Indian-spiced paneer in soft tacos with mint chutney."
      },
      {
        "dishName": "Masala Fries",
        "price": 6.0,
        "image": "https://example.com/images/masala-fries.jpg",
        "description": "Crispy fries tossed in house-made spice blend."
      }
    ]
  },
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db02" },
    "restaurantName": "Sushi Tide",
    "cuisine": "Japanese",
    "image": "https://example.com/images/sushi.jpg",
    "location": "San Francisco, CA",
    "rating": 4.8,
    "priceRange": "$$$",
    "description": "Fresh sushi and sashimi with a Pacific twist.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "Dragon Roll",
        "price": 18.5,
        "image": "https://example.com/images/dragon-roll.jpg",
        "description": "Eel, cucumber, avocado, and spicy mayo."
      },
      {
        "dishName": "Tuna Sashimi",
        "price": 15.0,
        "image": "https://example.com/images/tuna-sashimi.jpg",
        "description": "Premium-grade raw tuna slices."
      },
      {
        "dishName": "Tempura Udon",
        "price": 13.0,
        "image": "https://example.com/images/tempura-udon.jpg",
        "description": "Udon noodles in broth served with shrimp tempura."
      },
      {
        "dishName": "Salmon Nigiri",
        "price": 10.0,
        "image": "https://example.com/images/salmon-nigiri.jpg",
        "description": "Fresh salmon over seasoned rice."
      }
    ]
  },
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db03" },
    "restaurantName": "La Baguette Belle",
    "cuisine": "French",
    "image": "https://example.com/images/french.jpg",
    "location": "Chicago, IL",
    "rating": 4.3,
    "priceRange": "$$$",
    "description": "Authentic French pastries and bistro fare.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "Croque Monsieur",
        "price": 12.0,
        "image": "https://example.com/images/croque.jpg",
        "description": "Classic French ham and cheese sandwich."
      },
      {
        "dishName": "Beef Bourguignon",
        "price": 21.0,
        "image": "https://example.com/images/bourguignon.jpg",
        "description": "Slow-cooked beef in red wine sauce."
      },
      {
        "dishName": "Ratatouille",
        "price": 14.0,
        "image": "https://example.com/images/ratatouille.jpg",
        "description": "Vegetable medley baked in olive oil and herbs."
      },
      {
        "dishName": "Crème Brûlée",
        "price": 9.0,
        "image": "https://example.com/images/creme-brulee.jpg",
        "description": "Rich custard with a caramelized sugar top."
      }
    ]
  },
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db04" },
    "restaurantName": "Taco Terranova",
    "cuisine": "Mexican",
    "image": "https://example.com/images/tacos.jpg",
    "location": "Austin, TX",
    "rating": 4.5,
    "priceRange": "$",
    "description": "Street-style tacos with bold flavors.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "Al Pastor Tacos",
        "price": 8.0,
        "image": "https://example.com/images/al-pastor.jpg",
        "description": "Marinated pork with pineapple and cilantro."
      },
      {
        "dishName": "Carne Asada Burrito",
        "price": 9.5,
        "image": "https://example.com/images/carne-asada.jpg",
        "description": "Grilled beef, rice, beans, and salsa wrapped in a tortilla."
      },
      {
        "dishName": "Elote",
        "price": 4.0,
        "image": "https://example.com/images/elote.jpg",
        "description": "Grilled corn topped with cheese, lime, and chili powder."
      },
      {
        "dishName": "Churros",
        "price": 5.0,
        "image": "https://example.com/images/churros.jpg",
        "description": "Fried dough pastry with cinnamon sugar and chocolate sauce."
      }
    ]
  },
  {
    "_id": { "$oid": "68139e6c7005a930aaf6db05" },
    "restaurantName": "Pasta Pronto",
    "cuisine": "Italian",
    "image": "https://example.com/images/italian.jpg",
    "location": "Boston, MA",
    "rating": 4.7,
    "priceRange": "$$",
    "description": "Fresh, handmade pasta served fast but flavorful.",
    "owner": { "$oid": "68139e6c7005a930aaf6da86" },
    "menu": [
      {
        "dishName": "Spaghetti Carbonara",
        "price": 13.0,
        "image": "https://example.com/images/carbonara.jpg",
        "description": "Pasta with pancetta, eggs, and parmesan."
      },
      {
        "dishName": "Fettuccine Alfredo",
        "price": 12.5,
        "image": "https://example.com/images/alfredo.jpg",
        "description": "Creamy alfredo sauce over fettuccine noodles."
      },
      {
        "dishName": "Lasagna Bolognese",
        "price": 15.0,
        "image": "https://example.com/images/lasagna.jpg",
        "description": "Layered pasta with beef, ricotta, and tomato sauce."
      },
      {
        "dishName": "Tiramisu",
        "price": 7.5,
        "image": "https://example.com/images/tiramisu.jpg",
        "description": "Classic Italian dessert with coffee-soaked ladyfingers."
      }
    ]
  }
]
module.exports = data ;