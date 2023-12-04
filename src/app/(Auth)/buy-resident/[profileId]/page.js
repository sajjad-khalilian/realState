import ProfileDetailesPage from "@/components/template/ProfileDetailesPage"
import Profile from "@/models/Profile"
import connectDB from "@/utils/connectDB"

async function ProfileDetailes({params: {profileId}}) {
    await connectDB()


    const profile = await Profile.findOne({_id : profileId})
    if(!profile) return <h3>مشکلی پیش امده است</h3>


    return <ProfileDetailesPage data={profile}/>
}

export default ProfileDetailes
