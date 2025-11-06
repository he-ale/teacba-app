import { Outlet } from "react-router"

import { CustomHeader } from "../../components/custom/CustomHeader"
import { CustomChatWidget } from "../../components/custom/CustomChatWidget"
import { CustomFooter } from "../../components/custom/CustomFooter"
import { TecbaSidebar } from "../components/TecbaSidebar"

export const TecbaLayout = () => {
  return (
    <div className="font-poppins min-h-screen bg-slate-950">
      <CustomHeader/>
      <div className="min-h-screen bg-slate-950">
      <Outlet/>
      {/* Chat Widget */}
      <CustomChatWidget/>

      <TecbaSidebar/>
      {/* Footer */}
      <CustomFooter/>
      </div>
    </div>
  )
}
