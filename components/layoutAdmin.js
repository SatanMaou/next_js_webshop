import Head from "next/head";
import StyleG from "/styles/general.module.css";

const Layout = ({children}) => (
    <div className={StyleG.fullHeight}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin website</title>

      </Head>

      <body className={StyleG.fullHeight}>
        <main>{children}</main>
      </body>

    </div>
)
export default Layout;