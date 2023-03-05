// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import fs from "fs";
export default {
  ssr: false,
  mode: "spa",
  css: ["~/assets/css/main.css"],
  serverMiddleware: ["redirect-https"],
  // server: {
  //   https: {
  //     key: fs.readFileSync("localhost.key"),
  //     cert: fs.readFileSync("localhost.crt"),
  //   },
  //   host: "localhost",
  //   port: 3000,
  // },
  app: {
    head: {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.10.0/lottie.min.js",
        },
        {
          src: "https://unpkg.com/aos@2.3.1/dist/aos.css",
        },
        {
          src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
        },
        {
          src: "https://connect.facebook.net/en_US/sdk.js",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
