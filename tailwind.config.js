/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    screens:{
      "mob":"575px",
      "tab":"768px",
      "lap":"992px",
      "desk":"1200px"
    },
    extend: {
      backgroundImage:{
        "hero-bottom": "url('../images/hero-bg-bottom.png')",
        "hero-top":"url('../images/hero-bg-top.png')",
        "footer-bg":"url('../images/footer-bg.png')"
            },
      
      colors:{
        "battleship-gray": "hsl(0, 0%, 53%)",
        "viridian-green": "hsl(180, 98%, 31%)",
        "silver-chalice": "hsl(0, 0%, 69%)",
        "mikado-yellow": "hsl(47, 98%, 50%)",
        "granite-gray": "hsl(0, 0%, 40%)",
        "independence": "hsl(219, 20%, 32%)",
        "spanish-gray": "hsl(0, 0%, 61%)",
        "oxford-blue": "hsl(222, 46%, 17%)",
        "black-coral": "hsl(223, 8%, 44%)",
        "eerie-black": "hsl(210, 11%, 15%)",
        "light-gray": "hsl(0, 0%, 80%)",
        "white-2": "hsl(0, 0%, 98%)",
        "white-1": "hsl(0, 0%, 100%)",
        "black": "hsl(0, 0%, 0%)",
        "jet": "hsl(0, 0%, 20%)"
      },
      fontFamily:{
        "ff-abril-fatface": "'Abril Fatface', cursive",
        "ff-comforter-brush": "'Comforter Brush', cursive",
        "ff-heebo": "'Heebo', sans-serif",
      },
      fontSize:{
        "fs-1": '3.4rem',
        "fs-2": '3.2rem',
        "fs-3": '3rem',
        "fs-4": '2.4rem',
        "fs-5": '1.8rem',
        "fs-6": '1.7rem',
        "fs-7": '1.4rem',
        "fs-8": '1.2rem',
      },
      animation:{
"spin-slow": "spin 8s linear infinite"
      }
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [function ({ addComponents }) {
    addComponents({
      '.container': {
        maxWidth: '100%',
        '@screen mob': {
          maxWidth: '100%',
        },
        '@screen tab': {
          maxWidth: '750px',
        },
        '@screen lap': {
          maxWidth: '980px',
        },
        '@screen desk': {
          maxWidth: '1150px',
        },
      }
    })
  }],
}
