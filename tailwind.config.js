/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fluideLayout": "repeat(auto-fit, minmax(15rem,1fr))",
        "fluideLayoutPayment": "repeat(auto-fit, minmax(5rem,1fr))",
        "fluideLayoutPayment1": "repeat(auto-fit, minmax(8rem,1fr))",
        "fluideLayout2": "repeat(auto-fit, minmax(20rem,1fr))"
      },
      fontSize: {
        'buttonTitle': "20.48px",
        'buttonText' : '14px',
      },
      colors: {
        'buttonTitleClr' : "#5f6368",
        'buttonClr' : "#ffc000",
        'buttonTextClr' : '#5f6368',
      },
      gap: {
        'buttonPadX' : '24px',
      },
      padding:{
        'buttonPadX' : '24px',
        'buttonPadY' : '12px',
        'buttonContainerPad' : "26px",
        'buttonContainerPadY' : "32px"
      } 
    },
  },
  plugins: [],
}
