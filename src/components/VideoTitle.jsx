const VideoTitle = ({title,overview}) => {
    return (
        <>
            <div className=" w-screen aspect-video relative px-28 pt-[22%] bg-gradient-to-r from-black">
                <h1 className="text-3xl font-bold from-orange-100  text-white">{title}</h1>   
                <p className="py-6 text-lg w-1/2   text-white">{overview}</p>
                <div>
                <button className="bg-white hover:bg-opacity-80 px-8 py-2 text-black  text-xl rounded-lg">  Play</button>
                <button className="bg-gray-500/50 hover:bg-opacity-100 mx-4 px-8 py-2 text-white  text-xl rounded-lg">More Info</button>
                </div>
                     
            </div>
        </>
    )
}
export default VideoTitle;