# TodoApp-in-React [ Fully Responsive ]
Todo App made in React. . . Saves the User-Data

# React with TailwindCSS Project

This project is a React application styled with TailwindCSS, set up using Vite for a fast development environment.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js installed. You can download and install it from the official website: [Node.js](https://nodejs.org/).

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/yourprojectname.git
    cd yourprojectname
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

### Setting up Node.js

1. **Download Node.js** from the official [Node.js website](https://nodejs.org/).
2. **Run the installer** and follow the setup instructions. Make sure to install `npm` alongside Node.js.
3. **Verify the installation** by running the following commands in your terminal:
    ```bash
    node -v
    npm -v
    ```

### Setting up the Project with Vite

1. **Create a new React project using Vite**:
    ```bash
    npm create vite@latest yourprojectname --template react
    cd yourprojectname
    ```

2. **Install TailwindCSS**:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

3. **Configure TailwindCSS** by adding the following content to your `tailwind.config.js` file:
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4. **Add TailwindCSS directives** to your `src/index.css` file:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. **Run the development server**:
    ```bash
    npm run dev
    ```

## Usage

Start the development server and navigate to `http://localhost:3000` to see the application in action.

## Contributing

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/dhirubhai-123/TodoApp-in-React](https://github.com/dhirubhai-123/TodoApp-in-React)

