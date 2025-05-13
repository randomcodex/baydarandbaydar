# Baydar & Baydar Website

## Project Overview
The Baydar & Baydar website is a modern, responsive platform designed to showcase the company's portfolio, vision, and services. Built with React and Tailwind CSS, the website emphasizes accessibility, dynamic content, and a seamless user experience.

## Project Structure
```
src/
├── assets/          # Static assets like images and logos
├── components/      # Reusable UI components (e.g., Navbar, Footer)
├── data/            # Static data files (e.g., vision.js, brands.js)
├── pages/           # Page components (e.g., Home, Vision, Portfolio)
├── App.jsx          # Main application component
├── main.jsx         # Entry point for the React app
├── index.css        # Global CSS styles
```

## Key Features
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.
- **Dynamic Content**: React components and static data files enable easy updates.
- **Custom Domain**: Hosted on GitHub Pages with a custom domain.
- **SEO Optimized**: Includes robots.txt and meta tags for search engine visibility.
- **Client-Side Routing**: Uses `BrowserRouter` for seamless navigation with proper server-side fallback mechanisms.
- **Sitemap**: Includes a `sitemap.xml` file for search engine indexing, referenced in `index.html`.

## Component Documentation
### Footer
- **Purpose**: Displays copyright information and designer credit.
- **Responsive Design**: Adjusts text size and layout for different screen sizes.
- **Best Practices**:
  - Uses semantic HTML.
  - Includes `rel="noopener noreferrer"` for external links.
  - Maintains consistent color scheme.

### Navbar
- **Purpose**: Provides site navigation with a mobile-friendly hamburger menu.
- **Features**:
  - Meta menu with dropdown behavior for social media links.
  - Smooth animations for menu transitions.
  - Social media icons with hover effects and external links.
- **Responsive Design**: Adapts to screen size with a collapsible menu on smaller screens.
- **Best Practices**:
  - Uses accessible navigation links.
  - Closes the mobile menu when a link is clicked.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/baydarandbaydar.git
   ```
2. Navigate to the project directory:
   ```bash
   cd baydarandbaydar
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment
The website is deployed using GitHub Actions and hosted on GitHub Pages. To deploy manually:
1. Build the project:
   ```bash
   npm run build
   ```
2. Push the `dist` folder to the `gh-pages` branch.

## Testing
Ensure all routes work correctly with `BrowserRouter` by:
1. Running the development server locally.
2. Testing navigation between pages.
3. Verifying that proper server-side fallback mechanisms are in place.