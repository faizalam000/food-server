# Restaurant API Server 🍽️

A RESTful API server for accessing restaurant and menu data, built with Express.js. This server provides detailed information about various restaurants, their menus categorized by course types, and special offers.

## Features ✨

- **Restaurant Details**: Get comprehensive information about each restaurant including name, cuisine types, rating, delivery time, and current offers.
- **Categorized Menu Items**: Menu items are organized into logical categories (Appetizers, Main Courses, Sides, Desserts, Drinks).
- **Search Functionality**: Find restaurants by ID or get all restaurants at once.
- **CORS Support**: Configured to accept requests from any origin with proper headers.

## API Endpoints 🌐

### Get All Restaurants
```
GET /getAllData
```
Returns the complete list of all restaurants with their full details.

**Response:**
```json
{
  "id": 1,
  "name": "Spicy Grill",
  "cuisines": ["Indian", "Barbecue"],
  "image": "https://example.com/image.jpg",
  "rating": 4.5,
  "time": "30 mins",
  "offer": "20% off on orders above $30",
  "items": {
    "Appetizer": [...],
    "Main Course": [...],
    "Side": [...],
    "Dessert": [...],
    "Drink": [...]
  }
}
```

### Get Single Restaurant by ID
```
GET /getRes/:id
```
Returns details for a specific restaurant by its ID.

**Parameters:**
- `id` (required): The ID of the restaurant to retrieve

**Success Response:**
```json
{
  "message": "successfully fetched",
  "data": {
  }
}
```

**Error Responses:**
- 404 if restaurant not found
- 500 for server errors

## Installation & Setup ⚙️

1. Clone the repository:
```bash
git clone https://github.com/yourusername/restaurant-api.git
cd restaurant-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node server.js
```

The server will run on `http://localhost:3000`

## Dependencies 📦

- express: ^4.18.2
- cors: ^2.8.5

## Data Structure 📊

Each restaurant object contains:

```typescript
{
  id: number;
  name: string;
  cuisines: string[];
  image: string;
  rating: number;
  time: string;
  offer: string;
  items: {
    Appetizer: MenuItem[];
    MainCourse: MenuItem[];
    Side: MenuItem[];
    Dessert: MenuItem[];
    Drink: MenuItem[];
  };
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
}
```

## Example Usage 💻

### Fetching all restaurants:
```javascript
fetch('http://localhost:3000/getAllData')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Fetching a specific restaurant:
```javascript
fetch('http://localhost:3000/getRes/1')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Contributing 🤝

Contributions are welcome! Please fork the repository and submit a pull request.


