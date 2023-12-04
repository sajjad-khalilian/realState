import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import DashboardSidebar from '@/components/layout/DashboardSidebar'
import User from '@/models/User'
import connectDB from '@/utils/connectDB'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

async function layout({children}) {
    const session = await getServerSession(authOptions)
    if(!session) redirect("/login")

    await connectDB()
    const user = await User.findOne({email: session.user.email})
    if(!user) return <h3>مشکلی پیش آمده است</h3>

    return <DashboardSidebar role={user.role} email={user.email}>{children}</DashboardSidebar>
}

export default layout
