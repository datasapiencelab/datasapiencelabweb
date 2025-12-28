/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			brand: {
  				primary: '#f2500d'
  			},
  			neutral: {
  				'50': '#fafafa',
  				primary: '#18181b',
  				secondary: '#27272a',
  				tertiary: '#3f3f47',
  				quartinary: '#52525c',
  				disable: '#9f9fa9',
  				inverse: '#ffffff'
  			},
  			zinc: {
  				'50': '#fafafa',
  				'100': '#f4f4f5',
  				'200': '#e4e4e7',
  				'800': '#27272a',
  				'900': '#18181b',
  				'950': '#09090b'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			geist: [
  				'Geist',
  				'sans-serif'
  			],
  			engagement: [
  				'Engagement',
  				'serif'
  			]
  		},
  		fontSize: {
  			'display-1': [
  				'144px',
  				{
  					lineHeight: '144px',
  					letterSpacing: '-10px'
  				}
  			],
  			h1: [
  				'60px',
  				{
  					lineHeight: '72px',
  					letterSpacing: '-2px'
  				}
  			],
  			h3: [
  				'40px',
  				{
  					lineHeight: '48px',
  					letterSpacing: '-1px'
  				}
  			],
  			h4: [
  				'32px',
  				{
  					lineHeight: '36px',
  					letterSpacing: '-1px'
  				}
  			],
  			h5: [
  				'24px',
  				{
  					lineHeight: '36px',
  					letterSpacing: '-0.25px'
  				}
  			],
  			h6: [
  				'20px',
  				{
  					lineHeight: '32px',
  					letterSpacing: '0.5px'
  				}
  			],
  			'body-xl': [
  				'18px',
  				{
  					lineHeight: '28px',
  					letterSpacing: '0.5px'
  				}
  			],
  			'body-lg': [
  				'16px',
  				{
  					lineHeight: '24px',
  					letterSpacing: '0.5px'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem',
  			'26': '6.5rem',
  			'30': '7.5rem',
  			'4.5': '1.125rem'
  		},
  		screens: {
  			xs: '475px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

