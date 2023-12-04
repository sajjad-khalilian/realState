import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import DashboardSidebar from "@/components/layout/DashboardSidebar"
import AdminPage from "@/components/template/AdminPage"
import Profile from "@/models/Profile"
import User from "@/models/User"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

async function Admin() {

    const session = await getServerSession(authOptions)
    if(!session) redirect("/login")


    const user = await User.findOne({email : session.user.email})
    if(user.role !== "ADMIN") redirect("/dashboard")


    const profiles = await Profile.find({published: false})

    return (
        <div>
            <DashboardSidebar role={user.role} email={user.email}>
                <AdminPage profiles={profiles}/>
            </DashboardSidebar>
        </div>
    )
}

export default Admin
