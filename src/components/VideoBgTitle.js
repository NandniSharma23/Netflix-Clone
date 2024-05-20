const VideoBgTitle = ({overview,title}) => {
    console.log(overview);
    console.log(title);
    return (
        <div className="pt-72 px-12 absolute  top-10  bg-gradient-to-r from-black w-screen h-auto aspect-video" >
            <h2 className="font-bold text-white text-4xl">{title}</h2>
             <p className="pt-5 text-base w-1/4 text-white"> {overview}</p>
             <div className="flex py-3  ">
                <button className="bg-white text-black p-4 m-4 rounded-lg text-base font-semibold hover:bg-opacity-70 ">
                    ▶ Play Now 
                </button>
                <button className="bg-gray-400 text-white p-2 m-4 rounded-lg text-base bg-opacity-30 font-semibold hover:bg-opacity-40">
                    ℹ More Info
                </button>
             </div>
        </div>
    
    )
}

export default VideoBgTitle;