import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignupPage from '@/components/template/SignupPage'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

async function Signup() {
    const session = await getServerSession(authOptions)
    if(session) redirect("/login")
    return <SignupPage/>
}

export default Signup

