// Require the Cloudinary library
const cloudinary = require('cloudinary').v2;


//configure the cloudinary
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUD_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUD_SECRECT,
    secure: true
});


//file upload in cloudinary
export async function fileUpload(file) {

    const cloudresult = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
        width: "auto",
        crop: "auto"
    })

    return cloudresult;
}
