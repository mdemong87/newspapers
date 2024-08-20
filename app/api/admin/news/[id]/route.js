import { NextResponse } from "next/server";




// To handle a GET request 
export function GET(req,res){
    

    console.log('HELLO WORLD');

    return NextResponse.json({
        success: true,
        message: "Get all news successfully"
    },
        {
            status: 200
        }
    );

}


// To handle a POST request 
export async function POST(req, res) {


    const { email, pass } = await req.json();

    const storeEmail = 'demo@gmail.com';
    const storePass = '123456';


    if (email === storeEmail && pass === storePass) {
        return NextResponse.json({
            success: true,
            message: "Login Successfull"
        },
            {
                status: 200
            }
        );
    } else {
        return NextResponse.json({
            success: false,
            message: "Login Failed"
        },
            {
                status: 500
            }
        );
    }

}