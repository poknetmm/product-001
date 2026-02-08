# Lotto Number Generator

## Overview

This is a simple web application that generates and displays a set of lottery numbers. The user can click a button to get a new set of random numbers.

## Design and Features

*   **UI:**
    *   A clean and modern interface.
    *   A prominent button to generate numbers.
    *   A clear display for the generated lottery numbers.
    *   Responsive design for both mobile and web.
*   **Functionality:**
    *   Generates 6 unique random numbers between 1 and 45.
    *   Displays the numbers in a visually appealing way.

## Current Plan

1.  **Modify `index.html`:**
    *   Update the title and header.
    *   Create a container for the application.
    *   Add a custom element `<lotto-generator></lotto-generator>` to encapsulate the functionality.
2.  **Modify `style.css`:**
    *   Apply a modern and visually appealing theme.
    *   Style the main container, button, and number display.
    *   Use CSS variables for colors and a subtle background texture.
    *   Add responsive styles.
3.  **Modify `main.js`:**
    *   Create a `LottoGenerator` web component.
    *   The component will handle number generation and display.
    *   Use Shadow DOM for encapsulation.
