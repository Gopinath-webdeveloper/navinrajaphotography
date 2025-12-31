# Navinraja Photography Website

This is the official portfolio website for **Navinraja Photography**, built with modern web technologies to showcase photography work in an elegant, interactive, and responsive manner.

## 🌟 Key Features

*   **Dynamic Image Loading**: Automatically loads new images added to project folders without changing code.
*   **Hero Slideshow**: Full-screen background image slider on the home page with smooth 3-second transitions.
*   **Interactive Portfolio**: Masonry-style grid with category filtering (Portrait, Landscape, Wedding, Outdoor, Baby, Street).
*   **Lightbox Gallery**: Full-screen image viewer with "Next" and "Previous" navigation controls.
*   **Home Stream Carousel**: Infinite scrolling marquee of highlighted work.
*   **Video Integration**: Embedded YouTube video support ("Stories by navinrajaphotography").
*   **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.
*   **Modern Animations**: Smooth scroll reveals and page transitions using Framer Motion.
*   **Booking System**: "Book an Event" CTA section to drive client inquiries.

## 🚀 Technology Stack

*   **Framework**: React (v18) + Vite
*   **Styling**: Vanilla CSS (Modular & Global)
*   **Animations**: Framer Motion
*   **Routing**: React Router DOM (v6)
*   **Icons**: React Icons (Feather, Simple Icons)

## 📂 Project Structure

```
src/
├── assets/                  # Images and static files
│   ├── herosection/         # Images for the Home Page Hero content
│   ├── homecarousel/        # Images for the Home Page Scrolling Marquee
│   ├── portfolio/           # Portfolio images organized by category
│   │   ├── baby/
│   │   ├── landscape/
│   │   ├── outdoor/
│   │   ├── portrait/
│   │   ├── street/
│   │   └── wedding/
│   └── navinraja.jpg        # Profile image for About page
├── components/              # Reusable UI components (Navbar, Footer, etc.)
├── pages/                   # Main page views (Home, About, Portfolio, etc.)
└── index.css                # Global styles and variables
```

## 📖 How to Update Content

### 1. Adding Portfolio Images
*   Navigate to `src/assets/portfolio/`.
*   Open the folder corresponding to the category you want to update.
*   **Paste your new image files** into that folder. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`.
*   The website will automatically detect the new file and display it.

### 2. Updating Hero Slideshow (Home Page)
*   Navigate to `src/assets/herosection/`.
*   Add or remove images to change the main background slideshow.

### 3. Updating Home Stream Carousel
*   Navigate to `src/assets/homecarousel/`.
*   Add images here for the scrolling marquee at the bottom of the Home page.

### 4. Updating Profile Picture
*   Replace `src/assets/navinraja.jpg` with your new photo. Keep the filename as is.

### 5. Updating Contact & Socials
*   **Email**: navinrajaphotography@gmail.com
*   **Phone**: +91 81445 75573
*   **Social Handles**:
    *   Instagram: [@navinrajaphotography](https://www.instagram.com/navinrajaphotography/)
    *   Facebook: [Nagarajan Mech](https://www.facebook.com/nagarajanmech.be/)
    *   Threads: [@navinrajaphotography](https://www.threads.com/@navinrajaphotography)
    *   X (Twitter): [@NavinRa07938227](https://x.com/NavinRa07938227)

To update links, edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`.

## 🛠️ Running Locally

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

## 📦 Building for Production

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  Upload the contents of the `dist` folder to your hosting provider.

---
*Created by Google DeepMind Agents*
