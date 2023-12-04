import AdminDetailesPage from "@/components/template/AdminDetailesPage"
import Profile from "@/models/Profile"
import connectDB from "@/utils/connectDB"

async function Edit({params: {editId}}) {
    await connectDB()

    const profiles = await Profile.findOne({_id : editId})

    
    return <AdminDetailesPage data={JSON.parse(JSON.stringify(profiles))}/>
}

export default Edit
