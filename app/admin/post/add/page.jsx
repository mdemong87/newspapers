'use client'

import AttachFiles from "@/components/admin/AttachFiles";
import Checkbox from "@/components/admin/Checkbox";
import Content from "@/components/admin/Content";
import Location from "@/components/admin/Location";
import Photo from "@/components/admin/Photo";
import Time from "@/components/admin/Time";
import {useStore} from "../../../../lib/store";
import Loading from "../../../../components/Loading";

const IndexPage = () => {

 
    const loading = useStore((state) => state.loading);
    const setLoading = useStore((state) => state.setLoading);
    const title = useStore((state) => state.title);
    const settitle = useStore((state) => state.settitle);
    const dis = useStore((state) => state.dis);
    const setdis = useStore((state) => state.setdis);
    const photo = useStore((state) => state.photo);
    const setphoto = useStore((state) => state.setphoto);
    const date = useStore((state) => state.date);
    const setdate = useStore((state) => state.setdate);
    const category = useStore((state) => state.category);
    const setcategory = useStore((state) => state.setcategory);
    const repoter = useStore((state) => state.repoter);
    const setrepoter = useStore((state) => state.setrepoter);
    const location = useStore((state) => state.location);
    const setlocation = useStore((state) => state.setlocation);



    const handleBtnClick=async()=>{

        setLoading(true);

        const response = await fetch(`/api/admin/news`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, dis,photo,date,category,repoter,location })
        });
        const res = await response.json();

        setLoading(false);
        console.log(res);

    }


    
    return (
        <>
        {loading && <Loading/>}
            <div className="container my-4">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/3">
                        <div className="mb-4">
                            <p>
                                Title
                            </p>
                            <input onChange={(e)=>{settitle(e.target.value)}}
                                type="text"
                                placeholder="title"
                                className="p-2 mt-2 w-full outline-none rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <p>
                                Description
                            </p>
                            <Content/>
                        </div>

                        
                                
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="border-2 border-main border-dashed rounded-md p-2 my-8">
                            <button onClick={()=>handleBtnClick()} type="submit" className="bg-main flex items-center justify-center w-full text-white px-4 py-2 rounded-md">
                                Publish
                            </button>
                        </div>
                        
                        <Photo
                            title="Photo (600x600px)"
                            img=""
                        />
                        <Time />
                        {/* <Checkbox
                    
                            title="Category"
                            items={[
                                { title: "Category 1", subItems: [{ title: "SubCategory 1.1" }, { title: "SubCategory 1.2" }] },
                                { title: "Category 2", subItems: [{ title: "SubCategory 2.1", checked: true }] },
                                { title: "Category 3", checked: true },
                                { title: "Category 4" }
                            ]}
                        /> */}

                        <div className="mb-4">
                            <p>
                                Reporter
                            </p>
                            <select onChange={(e)=>setrepoter(e.target.value)}
                                className="p-2 mt-2 w-full outline-none rounded-md"
                                defaultValue=""
                            >
                                <option value="HeRa">HeRa</option>
                                <option value="Khan">Khan</option>
                                <option value="Reporter">Reporter</option>
                            </select>
                        </div>

                        {/* <Location
                            items={[
                            {
                                name: "City Name 1",
                                areas: [
                                { name: "Area 1" },
                                { name: "Area 2", selected: true },
                                { name: "Area 3" },
                                ],
                            },
                            {
                                name: "City Name 2",
                                areas: [
                                { name: "Area 4" },
                                { name: "Area 5" },
                                { name: "Area 6" },
                                ],
                            },
                            // Add more cities as needed
                            ]}
                        /> */}

                    </div>
                </div>
            </div>
        </>
    );
};
export default IndexPage;