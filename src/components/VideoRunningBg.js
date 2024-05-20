import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";

const VideoRunningBg = ({id}) => {
    const bgRunningTrailer= useSelector((store)=>store.movie?.bgRunningTrailer);
    useGetTrailer(id);

    return (
        <div className=" w-screen">
            <iframe 
            className=" aspect-video  w-screen  "
            src={"https://www.youtube.com/embed/"+bgRunningTrailer?.key+"?autoplay=1&mute=1"} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin">
                
            </iframe>
        </div>
    )
}

export default VideoRunningBg;