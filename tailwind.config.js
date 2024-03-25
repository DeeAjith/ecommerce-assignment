/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx,css}", // Adjust paths as needed
    // Add other content paths as needed (e.g., plugins, custom directives)
  ],
  // ... other configurations
  important: true,
  theme: {
    extend: {}, // Add custom theme extensions here
  },
  plugins: [], // Add any plugins you require
};
