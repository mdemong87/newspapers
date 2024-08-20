import AttachFiles from "@/components/admin/AttachFiles";
import Checkbox from "@/components/admin/Checkbox";
import Content from "@/components/admin/Content";
import Location from "@/components/admin/Location";
import Photo from "@/components/admin/Photo";
import Time from "@/components/admin/Time";

const IndexPage: React.FC = () => {
    return (
        <>
            <div className="container my-4">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/3">
                        <div className="mb-4">
                            <p>
                                Title
                            </p>
                            <input
                                type="text"
                                placeholder="title"
                                className="p-2 mt-2 w-full outline-none rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <p>
                                YouTube Video
                            </p>
                            <input
                                type="text"
                                placeholder="example: 123"
                                className="p-2 mt-2 w-full outline-none rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <p>
                                Description
                            </p>
                            <Content />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="border-2 border-main border-dashed rounded-md p-2 my-8">
                            <button type="submit" className="bg-main flex items-center justify-center w-full text-white px-4 py-2 rounded-md">
                                Publish
                            </button>
                        </div>
                        <Checkbox
                            title="Category"
                            items={[
                                { title: "Category 1", subItems: [{ title: "SubCategory 1.1" }, { title: "SubCategory 1.2" }] },
                                { title: "Category 2", subItems: [{ title: "SubCategory 2.1", checked: true }] },
                                { title: "Category 3", checked: true },
                                { title: "Category 4" }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default IndexPage;