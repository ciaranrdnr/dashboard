import type { Config } from 'tailwindcss'

const config: Config = {
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
      fontFamily: {
         "sans": [
            "Lato",
            "sans-serif",
         ]
      },
      "fontSize": {
        "body-base":"14px",
        "body-lg":"16px",
         "heading-xs": "14px",
         "heading-base": "14px",
         "heading-lg": "16px",
        "headline-md":"20px",
        "headline-lg":"24px",
      },
       "colors": {
         "transparent": "transparent",
         "current": "currentColor",
         "white": "#FFFFFF",
         "grey": {
          "50":"#EFEFEF",
          "100":"#ABAFB2"
        },
         "black": "#181F5D",
         "persimmon": {
          "20":"#FDF7F5",
          "40":"#FFEFD8",
          "60":"#F6DCB7",
          "80":"#F5A135",
          "100":"#DB5F4C",
        },
         "blue": {
          "20":"#F5F5FD",
          "40":"#E8E8FF",
          "60":"#C1C3FA",
          "80":"#4656E3",
          "100":"#3E4CC6",
        },
        // delete
         "navy": "#133F5D",
         "tertiary": "#C2CDD5",
         "green" : {
            "10" : "#C4E1A2",
            "25" : "#ABD57B",
            "50" : "#93C854",
            "75" : "#F7AF80",
            "100" : "#EF6000",
         },
      },
    },
  },
  plugins: [],
}
export default config
