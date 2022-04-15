import "../styles/globals.css";
import MainLayout from "../layouts/Main";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
