#ALX Project
This is a Recipe search API powered website project by:
- Collins Karweru
- Wendy Cheboi
# Envision Cooking

## Project Overview
**Envision Cooking** is a web application designed to help users discover recipes based on the ingredients they have at home. It provides an easy-to-use interface for searching, selecting, and viewing detailed recipes, allowing users to explore a wide variety of meal options.

## Objective
- **Discover Recipes**: Users can search for recipes by entering the ingredients they have.
- **Simple Interface**: The application features an intuitive and interactive interface.
- **Detailed Recipes**: Each recipe includes instructions, ingredients, and nutritional details.

## Architecture Overview

### Frontend
The application is built using **React.js**, enabling a smooth and dynamic user experience with the following components:
- **Navbar**: For navigation across the application.
- **Search**: Allows users to input ingredients and search for relevant recipes.
- **DisplayCard**: Displays recipe results in a card layout.
- **RecipeDetail**: Provides detailed recipe information, including ingredients, instructions, and nutrition.
- **About**: Displays information about the app and its purpose.
- **Contacts**: Allows users to get in touch.

### Backend / API
- **Spoonacular API**: Used to fetch recipe data, including ingredients, instructions, and nutritional information.
- **Axios**: Utilized for handling HTTP requests to the API, ensuring efficient data retrieval.

### Modal Windows
- Implemented using **React** for displaying information on the **About** and **Contacts** sections in an elegant popup format.

### Styling
- The app uses **CSS** for layout and visual design.
- A **custom spinner** is included to enhance the user experience during loading states.

## Technologies and Services
- **Frontend Framework**: [React.js](https://reactjs.org/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **API**: [Spoonacular API](https://spoonacular.com/food-api) (for recipe data and nutrition details)
- **Version Control**: [Git](https://git-scm.com/) & [GitHub](https://github.com/) for version control and collaboration.
- **IDE/Tools**: [Visual Studio Code](https://code.visualstudio.com/) for development.

## Getting Started

### Prerequisites
To run this project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/collinsk70/ALX-Project.git
    ```

2. Navigate into the project directory:
    ```bash
    cd envision-cooking
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file at the root and add your Spoonacular API key:
    ```bash
    REACT_APP_SPOONACULAR_API_KEY=your-api-key
    ```

5. Run the app locally:
    ```bash
    npm start
    ```

### Usage
- Enter the ingredients you have in the search bar and hit "Search" to discover recipes.
- Click on a recipe card to view its detailed instructions and nutrition information.


## Contact
For any inquiries, please reach out via:
- Cheboi Wendy - Cheboiwendy98@gmail.com
- Collins Karweru - Collinskarweru@gmail.com
