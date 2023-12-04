import { Schema , models , model } from "mongoose";


const profileSchema = new Schema({
    title : {
        type: String , 
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    realState: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ["villa" , "apartment" , "office" , "store"]
    },
    amenities: {
        type: [String],
        default: []
    },
    rules: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    published: {
        type: Boolean,
        default: false,
    }
})
const Profile = models.Profile || model("Profile" , profileSchema)
export default Profile