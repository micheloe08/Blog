import BlogNav from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div> 
          <BlogNav/>
          <hr/>
          <Outlet/>
        </div>
    )
}

export default Layout;