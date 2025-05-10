# Baydar & Baydar Website

## Project Overview
This repository contains the source code for the Baydar & Baydar website, showcasing the company's portfolio, vision, and services. The website is built using modern web technologies and follows best practices for responsive design and accessibility.

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
- **Dynamic Content**: Uses React components and static data files for easy updates.
- **Custom Domain**: Hosted on GitHub Pages with a custom domain.
- **SEO Optimized**: Includes sitemap, robots.txt, and meta tags.

## Component Documentation
### Footer
- **Purpose**: Displays copyright information and designer credit.
- **Responsive Design**: Adjusts text size and layout for different screen sizes.
- **Best Practices**:
  - Uses semantic HTML.
  - Includes rel="noopener noreferrer" for external links.
  - Maintains consistent color scheme.

### Navbar
- **Purpose**: Provides site navigation with a mobile-friendly hamburger menu.
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

## Automated Updates to README

### Auto-Generated Commit Logs
This project uses a Git hook to automatically append a description of changes made to the codebase, along with the date and time, to this README file. This ensures that the documentation remains up-to-date with minimal manual effort.

### Example Log Format
- **Date**: YYYY-MM-DD HH:mm:ss
- **Description**: Brief summary of the changes made.

### How It Works
1. A Git hook appends a log entry to the README file with the date, time, and a brief description of the changes.

### Benefits
- Ensures consistent and up-to-date documentation.
- Reduces the manual effort required to maintain the README file.
- Provides a clear history of changes for contributors and maintainers.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
\n- **Date**: 2025-05-10 19:51:42\n  **Description**: added canonical metatag
