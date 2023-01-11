/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [],
  theme: {
    extend: {
      width: {
        1000: "300rem",
      },
      // colors: {
      //   "nav-home": "#404eed",
      //   "nav-nitro": "#bb87f4",
      //   "nav-safetycenter": "#5865f2",
      //   "nav-servers": "#542ef2",
      // },
    },
  },
};
