
import { NextResponse } from "next/server"
export function GET(){
    return NextResponse.json({
        username : "shashank1623",
        email : "shashankbhardwaj2030@gmail.com",
        firstName : "shashank",
        lastName : "bhardwaj"
    })
}