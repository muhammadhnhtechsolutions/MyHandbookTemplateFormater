import { Nunito } from "next/font/google";
import "./globals.css";
const nunito = Nunito({ subsets: ["latin"] });
import RootContextProvider from "./contexts/RootContextProvider";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Roboto } from 'next/font/google'
import StoreProvider from "./StoreProvider";
import { Inter } from 'next/font/google'
export const metadata = {
  title: "Family Hand Book | Home ",
  description: "Family Hand Book ",
};
const RootLayout = ({ children }) => {
  // const inter = Inter({
  //   subsets: ['latin'],
  //   display: 'swap',
  // })
  // const roboto = Roboto({
  //   weight: '400',
  //   subsets: ['latin'],
  //   display: 'swap',
  // })
   
  return (
    <html lang="en">
      <Head>
        {/* Favicon with multiple sizes */}
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 64x64" />
        <link rel="manifest" href="/manifest.json" /> {/* Optional for app icons */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script> */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <body className={nunito.className}>
        <RootContextProvider>
          <StoreProvider>
            {children}
            <ToastContainer />
          </StoreProvider>
        </RootContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
