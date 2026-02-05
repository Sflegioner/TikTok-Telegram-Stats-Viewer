import tailwind from "tailwindcss";
export default function Template() {

    return (
        <div className="w-3/4 h-screen bg-[#111111]
        rounded-lg shadow-lg shadow-[#39ff14] p-4 mx-auto p-4 mt-4 border border-[#141414] border- ">
            <p className="text-white 
        text-lg mx-auto text-center">Welcome to the TikTok Telegram Stats Viewer!</p>
            {/* Divider*/}
            <div className="h-px w-full  bg-gradient-to-r 
        from-transparent via-[#ffffff] to-transparent my-6" />
            {/* Divider*/}
            <div className="w-1/4 rounded-lg h-4/10 bg-[#151515]">
                <img className="pt-2 w-4/10 h-1/2 p-4 rounded-full  mx-auto object-cover ring-1 ring-[#39ff14]/30" src="/images/user.png" alt="" />
                <p className="text-white text-center text-sm mt-2">@username</p>
                <li className="flex justify-center gap-6 pt-4">
                    <p className="text-white text-sm  justify-center">Followers:
                        <p className="text- font-bold text-[#39ff14] center text-sm mx-auto">
                            657</p>
                    </p>
                    <p className="text-white text-sm">Likes: 62k</p>
                    <p className="text-white text-sm">Comments: 62k</p>
                </li>
                <p className="text-white text-center text-sm mt-1">@//link/ticktok/tgds</p>
            </div>
        </div>

    );
}