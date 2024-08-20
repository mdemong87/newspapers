import { copyFileSync } from "fs";
import { NextResponse } from "next/server";
import {fileUpload} from "../../../../utlity/cloudinary/cloudinaryConfig";




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


    const { title, dis,photo,date,category,repoter,location } = await req.json();

    const updateData={
        title,
        dis,
        file:await fileUpload(photo),
        newsdata:date,
        category,
        repoter,
        location
    }

    console.log(updateData);





    
        return NextResponse.json({
            success: true,
            message: "News Posted Successfully",
            data:updateData
        },
            {
                status: 200
            }
        );
    

}