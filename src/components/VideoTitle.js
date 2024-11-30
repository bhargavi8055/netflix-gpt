
// import { IoIosPlay } from "react-icons/io";


const VideoTitle = ({title,overview})=>{
    return (
        
        // <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
        <div className="w-full max-w-full overflow-hidden">
            <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="text-md py-6 w-1/4">{overview}</p>
                <div>
                    <button className="bg-white text-black p-2 px-8 text-lg  rounded-lg hover:bg-opacity-80">
                    {/* <IoIosPlay />  */}
                    Play</button>
                    <button className=" mx-2 bg-gray-500 text-white p-2 px-8 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80">More Info</button>
                </div>
            </div>
        </div>
    )
}
export default VideoTitle;