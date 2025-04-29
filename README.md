# Yemek Tarifleri (Food Recipes)

A React application for browsing, searching, and creating food recipes. This project features a responsive design with theme customization capabilities.

## Features

- **Browse Recipes**: View all available food recipes on the homepage
- **Recipe Details**: Click on a recipe to see detailed information including ingredients and preparation instructions
- **Search Functionality**: Search for specific recipes by keyword
- **Create Recipes**: Add new recipes through a user-friendly form
- **Theme Customization**: 
  - Choose from multiple color themes (primary, danger, warning, success)
  - Toggle between light and dark mode

## Technologies Used

- **React**: Frontend UI library
- **React Router**: For page navigation
- **Context API**: For global state management (theme settings)
- **JSON Server**: Backend mock API for storing recipe data
- **Bootstrap**: For styling and responsive design

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd yemek-tarifleri
```

2. Install dependencies:
```bash
npm install
```

3. Start the JSON Server (for the mock API):
```bash
npx json-server --watch data/db.json
```

4. Start the React development server:
```bash
npm start
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

- **src/components/**: Reusable UI components
- **src/contexts/**: Context API definitions (ThemeContext)
- **src/hooks/**: Custom hooks (useFetch)
- **src/layouts/**: Page layout components
- **src/pages/**: Application pages (Home, Create, Detail, Search)
- **src/reducers/**: State management reducers
- **data/**: JSON Server data file

## How to Use

1. **Browse Recipes**: Visit the homepage to see all recipes
2. **View Recipe Details**: Click on "Tarifi İncele" (View Recipe) button on any recipe card
3. **Search**: Use the search bar in the navigation to find recipes by keyword
4. **Create Recipe**: 
   - Click on "Create" in the navigation
   - Fill out the form with recipe details
   - Click "Kaydet" (Save) to add the recipe

5. **Change Theme**:
   - Click on color circles to change the color theme
   - Toggle light/dark mode by clicking on the mode icon

## API Endpoints

- `GET /tarifler`: Get all recipes
- `GET /tarifler/:id`: Get a specific recipe by ID
- `POST /tarifler`: Create a new recipe
- `GET /tarifler?q=:keyword`: Search for recipes

## Future Enhancements

- User authentication
- Recipe rating system
- Comment section for recipes
- Recipe categories and filtering
- Mobile application