/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2050px',
        'lf': '1000px',
        'mf': '950px',
        'mp': '980px',
        'mc': '900px',
        'mk': '850px',
        'mm': '800px',
        'mh': '700px',
        'sh': '600px',
        'sd': '550px',
        'sa': '500px',
        'sp': '450px',
        'sk': '400px',
        'sc': '360px',
        'sr': '340px',
        'sb': '300px',
      },
      boxShadow: {
        'custom-md': '2px 1px 12px rgba(0 0 0 / 0.1)',
        'custom-sm': '0px 0px 22px rgba(0 0 0 / 0.1)',
        'custom-sp': '0px 1px 5px rgba(0 0 0 / 0.1)',
        'custom-input': '-4px 4px 4px 0px #002B5B80',
      },
    },
  },
  plugins: [],
}