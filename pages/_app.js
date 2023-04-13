// import '../styles/globals.css'
// import '../assets/css/main.css'
// import '../assets/css/base.css'
// import '../assets/css/login.css'
// import "@fortawesome/fontawesome-svg-core/styles.css"
// import "@fortawesome/free-solid-svg-icons"
// import "@fortawesome/react-fontawesome"
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default MyApp
