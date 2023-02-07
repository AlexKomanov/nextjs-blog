import Divider from "@mui/material/Divider";
import { FC, ReactNode } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({children}: IProps) => {
  return (
    <div className="p-4">
    <NavBar/>
    <Divider sx={{borderBottomWidth: 3}}/>
    <main>{children}</main>
    <Footer/>
    </div>
  )
}

export default Layout