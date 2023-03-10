import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
// import localFont from "@next/font/local";

import { DM_Sans } from "@next/font/google";

import { api } from "../utils/api";

import "../styles/globals.css";

const dmSansFont = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// const satoshiFont = localFont({
//   variable: "--font-satoshi",
//   src: [
//     {
//       path: "../assets/fonts/satoshi/Satoshi-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/satoshi/Satoshi-LightItalic.woff2",
//       weight: "300",
//       style: "italic",
//     },
//     {
//       path: "../assets/fonts/satoshi/Satoshi-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/satoshi/Satoshi-Italic.woff2",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../assets/fonts/satoshi/Satoshi-Medium.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/satoshi/Satoshi-MediumItalic.woff2",
//       weight: "600",
//       style: "italic",
//     },
//     {
//       path: "../assets/fonts/satoshi/Satoshi-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/satoshi/Satoshi-BoldItalic.woff2",
//       weight: "700",
//       style: "italic",
//     },
//   ],
// });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      {/* --satoshi-font: ${satoshiFont.style.fontFamily}; */}
      <style jsx global>
        {`
          :root {
            --dm-sans-font: ${dmSansFont.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
