import mongoose from "mongoose";
import { StringDecoder } from "string_decoder";

const userSchema = new mongoose.Schema({
        username: {
            type: String,
        },
        password: {
            type: String,
            required: [true, "Please enter your username"]
        },
        email: {
            type: String,
            required: [true, "Please enter your email address"]
        },
        forgotpasswordToken: {
            type: String
        },
        forgotpasswordTokenExpiry: {
            type: Object
        },
        isverified: {
            type: Boolean
        },
        verifyToken: {
            type: String
        },
        verifyTokenExpiry: {
            type: Object
        }
    }
)

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User