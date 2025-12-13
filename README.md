# SAMO ZDRAVO - Premium Cold-Pressed Juice Website

A modern, minimalist website for SAMO ZDRAVO, a premium cold-pressed juice brand.

## Features

- **Hero Section**: Full-screen split layout with SVG brand logo and compelling messaging
- **Interactive Flavors Section**: Cards that expand on hover/tap with flavor details
- **About Section**: Brand story with quality highlights
- **Locations Section**: Store locations with hours
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- **Smooth Animations**: Fade-in effects, parallax scrolling, and hover transitions

## Structure

```
Samo Zdravo/
├── index.html           # Main website file
├── assets/
│   ├── Logo - Samo Zdravo-01.svg  # Brand logo
│   └── images/          # Additional images folder
└── README.md
```

## Customization

### Adding Real Product Images

Replace the SVG placeholders in the Flavors section with actual product images:

1. Place your product images in `assets/images/`
2. Update the `<svg>` elements in flavor cards with `<img>` tags:

```html
<img class="flavor-image" src="assets/images/orange-juice.jpg" alt="Orange & Carrot">
```

### Adding Real Photos

- **Hero Product Image**: Replace the SVG in the hero section (around line 200)
- **About Section Image**: Replace the SVG for owner/production image (around line 350)
- **Location Maps**: Add map embeds or images to location cards

### Color Customization

Edit CSS variables in the `:root` selector (lines 14-25):

```css
:root {
    --color-dark: #1a1a1a;
    --color-light: #fafafa;
    --color-orange: #ff8c42;
    /* etc. */
}
```

### Content Updates

- **Flavors**: Edit flavor cards starting at line 280
- **About Text**: Update about section content around line 350
- **Locations**: Modify location cards around line 420
- **Contact Info**: Update footer details around line 450

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- Semantic HTML5
- Modern CSS (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, Playfair Display)

## Performance Features

- Smooth scroll behavior
- Intersection Observer for animations
- CSS transitions (hardware-accelerated)
- Optimized SVG placeholders

## License

© 2025 SAMO ZDRAVO. All rights reserved.
