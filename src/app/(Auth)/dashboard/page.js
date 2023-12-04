import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import DashboardPage from '@/components/template/DashboardPage'
import User from '@/models/User'
import connectDB from '@/utils/connectDB'
import { getServerSession } from 'next-auth'
import React from 'react'

async function page() {
    await connectDB()
    const session = await getServerSession(authOptions)
    const user = await User.findOne({email : session.user.email})
    return (
        <div>
            <DashboardPage createdAt={user.createdAt}/>
        </div>
    )
}

export default page
