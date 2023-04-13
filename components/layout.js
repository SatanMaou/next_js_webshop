import Head from "next/head";
import Container from "react-bootstrap/Container";
import NavBarMenu from "./navBarMenu";
import Footer from "./footer"


const Layout = ({children}) => (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>website saler</title>

      </Head>
      <header>
        <NavBarMenu/>
      </header>

      <main>{children}</main>

      <Footer />
    </Container>
)
export default Layout;