import "../styles/globals.scss";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      {router.pathname !== "/about" ? (
        <img
          className="layout-bg"
          src="https://s3-alpha-sig.figma.com/img/8423/a08b/2281e8709993baf02fccdb6f43b629e2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c2SikvyHAQ-fPyPul3EU~vScv1fEZc7KADGRuDHb9QWmAwV-1eRy~PUTHov6cxQZjgaadSC-nGFDPrGdGig9PzTfQOPhVIPQNhal4t5kBmGjoYc9lknzeyMGy1EZvOgj9pbNmwppsSoY5PXPyKoh8ALaF3joEoJ9Uvj0m0Ukd9r08GH4WLVyiNGzBNFDWoj5yuARZzd5hHKLL5tBpiGm3XCW-bapsev6P17ij8lAmyG71HGkg28ves2R~DAK7Gwd9TM1O5Y9GELeZEfBEGaW~y6YJ7VgjODEG7nJauHCGR4mtZ~34EParBV9RnNFVJDByv7si1eoIyBn1~Qn~TSi4Q__"
        />
      ) : null}
      <Navbar
        isBtnActive={
          router.pathname === "/" ||
          router.pathname === "/character/[id]" ||
          router.pathname === "/404"
            ? true
            : false
        }
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
