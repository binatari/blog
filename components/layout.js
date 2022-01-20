import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, categories, seo, articles }) => (
  <>
    <Navbar categories={categories} articles={articles}/>
    {children}
    <Footer/>
  </>
)

export default Layout
