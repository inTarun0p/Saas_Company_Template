import { connectToDB } from "@/helper/db";
import { user } from "@/models/user";
import { NextResponse } from "next/server";


connectToDB();
export async function GET(request){
    let users = []
    try {
        users = await user.find()

        return NextResponse.json(users,{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error},{status:500})
    }
}


export async function POST(request){

    const {name,email,password,confirmPassword} = await request.json()
    
    const USer = new user({name,email,password,confirmPassword})
    try {
        const userCreated = await USer.save()
        return NextResponse.json(userCreated,{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error},{status:500})
    }
}
