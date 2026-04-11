import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: "#66ccaa",
                      "background-light": "#fdfdfc",
                      "background-dark": "#2e3b48",
                      "poo-accent": "#d4a373",
                      "pee-accent": "#8ecae6"
                    },
                    fontFamily: {
                      sans: ["Plus Jakarta Sans", "sans-serif"],
                    },
                    boxShadow: {
                      'soft': '0 8px 30px rgb(0 0 0 / 4%)',
                      'glow': '0 0 20px -5px rgba(102, 204, 170, 0.5)',
                    }
                  },
                },
              };
            `,
          }}
        />
      </Head>
      <body className="bg-background-light text-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
