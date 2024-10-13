import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST( req: NextRequest){
    //extract the body
    const body = await req.json();

    //story the boday
    console.log(body);
    const response = await client.user.create({
        data : {
            name : body.name,
            email : body.email,
            password : body.password
        }
    })

    //sent a res message
    return NextResponse.json({
        msg : "aa rha hai bhai data"
    })
}