module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '10px': '10px',
        '50px': '50px',
        '60px': '60px',
        '20px': '20px',
        '30px': '30px',
      },
      fontFamily: {
        body: ["Epilogue", "sans-serif;"],
      },
      fontSize: {
        '20px': '20px',
      },
      colors: {
        primary: "#1DC071",
        secondary: '#6F49FD',
        text1: '#171725',
        text2: '#4B5264',
        text3: '#808191',
        text4: '#B2B3BD',
        'icon-color': '#A2A2A8',
        white: '#FFFFFF',
        'white-soft': '#FCFBFF',
        'gray-soft': '#FCFCFC',
        'strock-color': '#F1F1F3',
        'lite-background': '#FCFCFD',
        'error': '#EB5757',
        'dark-bg': '#13131A',
        'dark-secondary': '#1C1C24',
        'soft-dark': '#22222C',
        'dark-soft': '#24242C',
        'dark-stroke': '#3A3A3A',
        'dark-red': '#422C32'
      },
      borderRadius: {
        '10px': '10px',
      },
      boxShadow: {
        shadowPrimary: '10px 10px 20px rgba(211,211,211,.25)'
      }
    },
  },
  plugins: [],
};
