import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import LoginPage from "@/components/template/LoginPage"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

async function login() {
    const session = await getServerSession(authOptions)
    if(session) redirect("/")
    return <LoginPage/>
}

export default login
