const VideoTitle = ({title,overview}) => {
    return (
        <>
            <div className=" relative px-28 pt-24">
                <h1 className="text-2xl font-semibold from-orange-100  text-black">{title}</h1>   
                <p className="py-6 text-lg w-1/2   text-black">{overview}</p>
                <div>
                <button className="bg-gray-500/50 px-8 py-2 text-black text-xl rounded-lg"> ▶️ Play</button>
                <button className="bg-gray-500/50 mx-4 px-8 py-2 text-black text-xl rounded-lg">More Info</button>
                </div>
                
            </div>
        </>
    )
}
export default VideoTitle;