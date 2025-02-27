# Digital Bank Landing Page

## Overview

This project is a landing page for Digital Bank, designed to provide users with information about the bank's services and encourage them to open a digital account. The landing page is built with HTML, CSS, and JavaScript, and it includes features such as smooth scrolling, scroll animations, and form validation.

## Features

- **Responsive Design**: The landing page is fully responsive and works on various devices, including desktops, tablets, and mobile phones.
- **Smooth Scrolling**: Smooth scrolling functionality for anchor links to enhance user experience.
- **Scroll Animations**: Elements animate into view as the user scrolls down the page.
- **Form Validation**: Client-side form validation to ensure that users provide valid information before submitting the form.
- **Accessible Navigation**: The navigation menu is accessible and keyboard-friendly.
- **Social Media Links**: Links to social media profiles that open in new tabs.

## Technologies Used

- **HTML5**: For the structure of the landing page.
- **CSS3**: For styling the landing page, including Flexbox for layout and custom properties (variables) for theming.
- **JavaScript**: For interactivity, including smooth scrolling, scroll animations, and form validation.
- **Font Awesome**: For the page icons.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari)
- A code editor (e.g., VS Code, Sublime Text)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/albertgubau/digital-bank.git
2. Navigate to the project directory
   ```bash
   cd landing-page
3. Execute ``index.html`` using Live Server extension.

### Project Structure

The project structure is pretty standard, it is the following one:

```markdown
landing-page/
├── assets/
│   ├── hero-image.webp
│   └── user-avatar.webp
├── styles.css
├── app.js
├── index.html
└── README.md
```

### CSS Custom Properties

You have predefined tokens that you can use to style the website.

```css
:root {
  --db-color-background-primary: #141414;
  --db-color-background-secondary: white;
  --db-color-background-tertiary: lightgreen;
  --db-color-text-primary: white;
  --db-color-text-secondary: #333;
  --db-color-text-tertiary: lightgreen;
  --db-color-text-error: rgb(179, 17, 17);
  --db-color-icon-primary: white;
  --db-color-border-primary: black;
}
```