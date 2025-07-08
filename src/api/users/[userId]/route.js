import { user } from "@/models/user"
import { NextResponse } from "next/server"

export const GET = async(request,{params}) => {
 
    const {userId} = params
    const users = await user.findOne({
        _id:userId
    })
    return NextResponse.json(users,{status:200})
}

export const DELETE = async(request,{params}) => {
    const {userId} = params
    try{
    const users = await user.deleteOne({
        _id:userId
    })
    return NextResponse.json({
        message:"User deleted successfully",
        status:200
    })
    }catch(error){
        console.log(error)
        return NextResponse.json({error:error},{status:500})
    }
}


export const PUT = async(request,{params}) => {
    const {userId} = params
    const {name,email,password,confirmPassword} = await request.json()
    try{
    const users = await user.findById({
        _id:userId
    })
    users.name = name
    users.email = email
    users.password = password
    users.confirmPassword = confirmPassword
  const updatedUser =  await users.save()
    return NextResponse.json({
        message:"User updated successfully",
        updatedUser,
        status:200
    })
    }catch(error){
        console.log(error)
        return NextResponse.json({error:error},{status:500})
    }
}
