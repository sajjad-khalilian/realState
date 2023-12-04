import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import MyProfilePage from "@/components/template/MyProfilePage"
import User from "@/models/User"
import { getServerSession } from "next-auth"

async function page() {
    const session = await getServerSession(authOptions)
    const [user] = await User.aggregate([
        { $match: {email: session.user.email} } , 
        {
            $lookup: {
                from: "profiles",
                foreignField: "userId",
                localField: "_id",
                as: "profiles"
            }
        }
    ])
    console.log(user.profiles)
    return <MyProfilePage profiles={user.profiles}/>
}

export default page
