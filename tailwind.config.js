/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        datadark:{
          "primary": "#1F2937", 
          "secondary": "#38BDF8",
          "accent": "#ea580c",
          "neutral": "#607274",
          "base-100": "#292524",
          "info": "#CBE4DE",
          "success": "#65A30D",
          "warning": "#EAB308",      
          "error": "#DC2626",
        },
      },
      "corporate",
    ],
  },
  plugins: [require('daisyui')],
}
