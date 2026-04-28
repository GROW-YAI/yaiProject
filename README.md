# Nana Apeko - Organic Pest Control Product Website

## Project Overview

Nana Apeko is a promotional e-commerce website for an organic bedbug spray and powder product manufactured by JESSITRY ENTREPRISE. The product is marketed as a powerful organic solution to eliminate bedbugs and household pests including cockroaches and mosquitoes.

### Purpose

The website serves as a product showcase and online storefront to:
- Promote the Nana Apeko pest control products
- Showcase product catalog with pricing
- Enable direct purchases through Paystack payment integration
- Provide contact channels for customer inquiries

### Main Features

- **Hero Section**: Auto-playing image carousel (Swiper) showcasing promotional product images
- **About Section**: Product description highlighting 100% natural ingredients, safety for home use, and effectiveness against bedbugs, cockroaches, and mosquitoes
- **Catalog Section**: Product listings with 3 products (Double Shield, Total Terminator, Twin Force) with Paystack payment integration
- **Testimonials Section**: Customer reviews and feedback
- **Innovator Section**: Information about the product creator
- **Contact Form**: Customer inquiry submission via EmailJS
- **Accessibility Widget**: Boafo accessibility widget to make the site accessible to all users

### Technologies Used

- **Frontend Framework**: React 19 with Vite
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 6
- **Payment Integration**: Paystack
- **Email Service**: EmailJS
- **Image Carousel**: Swiper.js
- **Icons**: Font Awesome
- **Accessibility**: Boafo Accessibility Widget
- **Language**: JavaScript (JSX)

---

## How to Get Your Boafo API Key

To use the Boafo accessibility widget on this website, you need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account or log in if you already have one
3. Navigate to your dashboard
4. Locate and copy your API key from the dashboard settings

---

## How to Integrate the Boafo Widget

For detailed instructions on integrating the Boafo accessibility widget into your project, please refer to the official integration guide:

[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

---

## Setup Instructions

### Prerequisites

- Node.js (version 18 or higher)
- npm or pnpm package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/yaiProject.git
   cd yaiProject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Open the `.env` file and fill in your Boafo API key:
   ```
   VITE_BOAFO_API_KEY=your_actual_api_key_here
   ```
   
   **Note**: Never commit your `.env` file to version control. It contains sensitive information.

4. **Run the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Building for Production

To create a production build:
```bash
npm run build
```
or
```bash
pnpm build
```

The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```
or
```bash
pnpm preview
```

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BOAFO_API_KEY` | Your Boafo accessibility widget API key | Yes |

---

## Project Structure

```
yaiProject/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── BoafoWidgetInitializer.jsx
│   │   ├── Catalog.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Innovator.jsx
│   │   ├── Navbar.jsx
│   │   └── Testimonials.jsx
│   ├── assets/
│   │   └── style.css    # Custom styles
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── .env                 # Environment variables (not tracked by Git)
├── .env.example         # Example environment variables
├── .gitignore           # Git ignore rules
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

---

## License

This project is proprietary software of JESSITRY ENTREPRISE.

---

## Support

For support or inquiries, please use the contact form on the website or reach out to JESSITRY ENTREPRISE.