import { connectToDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectToDB();

export async function GET() {
    try {
        const users = await User.find().select('-password -confirmPassword -__v');
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json(
            { error: 'Failed to fetch users' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const { name, email, password, confirmPassword } = await request.json();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: 'User already exists with this email' },
                { status: 400 }
            );
        }

        const newUser = new User({
            name,
            email,
            password,
            confirmPassword
        });

        const savedUser = await newUser.save();
        
        // Remove sensitive data before sending response
        const userResponse = savedUser.toObject();
        delete userResponse.password;
        delete userResponse.confirmPassword;
        delete userResponse.__v;

        return NextResponse.json(
            { user: userResponse, message: 'User created successfully' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating user:', error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return NextResponse.json(
                { error: 'Validation failed', details: errors },
                { status: 400 }
            );
        }
        
        return NextResponse.json(
            { error: 'Failed to create user' },
            { status: 500 }
        );
    }
}
