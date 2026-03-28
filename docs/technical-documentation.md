# Technical Documentation

## Project Structure
- `index.html` – Main structure of the portfolio website
- `css/styles.css` – Styling, layout, and animations
- `js/script.js` – JavaScript for interactivity and validation
- `assets/images/` – Images used in the website
- `docs/` – Documentation files

## HTML Structure
The website is divided into main sections:
- **Hero Section**: Introduction with name, role, and call-to-action button
- **About Section**: Information cards about me
- **Projects Section**: Project cards with descriptions
- **Contact Section**: Form for user input messages

## CSS Design
- Used Flexbox for layout and alignment
- Applied gradients and soft color themes for modern design
- Added rounded cards and shadows for depth
- Used transitions and hover effects for interactivity
- Implemented responsive spacing and layout

## JavaScript Functionality

### 1. Toggle Projects
- A button allows users to show or hide the projects section
- Implemented using event listeners and DOM manipulation

### 2. Form Validation
- Checks if all input fields are filled
- Displays error message if fields are empty
- Displays success message when form is valid
- Resets form after successful submission

## User Feedback
- Error message: shown when form fields are empty
- Success message: shown after valid submission
- Interactive button behavior to improves user experience

## Animations
- Hover effects on cards and buttons
- Smooth transitions for better UX
- Fade in effect for sections

## Limitations
- there is no backend so contact form does not send data
- Projects are static and not fetched from external data with no url to show them 