/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://ik.imagekit.io/damtyizj0/studentr/Rectangle%2024%20(1).png?updatedAt=1728431261233')",
        camera: "url('/images/camera.jpg')"
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

