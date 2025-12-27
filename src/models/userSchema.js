import mongoose from  'mongoose';

const userSchema = new mongoose.Schema(
    {
        fullName : {
            type : String,
            required :true,
            trim : true,
        },

        email :{
            type :String,
            required :true,
            lowercase : true,
        },

        password :{
            type : String,
            required : true,
            minimumLength : 8

        },
    },

    {
        timestamps :true
    }
);

const User = mongoose.model('user',userSchema);

export default User;