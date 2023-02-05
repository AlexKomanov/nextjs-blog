import { Divider } from "@mui/material"

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-24">
      <Divider sx={{borderBottomWidth: 3}}/>
      <div className="text-2xl p-8 text-center">© 2023 SPWS. ALL RIGHTS RESERVED.</div>
      </div>
  )
}

export default Footer