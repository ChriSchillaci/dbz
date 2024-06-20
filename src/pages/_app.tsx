import "../styles/globals.scss";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import { useRouter } from "next/router";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/about" ? (
        <img className="layout-bg" src="/images/bg-layout.jfif" />
      ) : null}
      <Navbar
        currentPage={router.pathname}
        isBtnActive={router.pathname !== "/about" ? true : false}
      />
      <main
        className={`dbz-main ${
          router.pathname === "/character/[id]" || router.pathname === "/about"
            ? "dbz-main-inactive"
            : ""
        }`}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
