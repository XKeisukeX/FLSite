import ImgDesign2 from '../assets/StyleImg3.svg';
export default function Gallery() {
    return (
        <div className="relative bg-primary/15 w-full">
            <img src={ImgDesign2} className='absolute md:h-96 md:w-96 w-64 h-64 -right-4 md:-right-10 top-0 opacity-90 -z-10' alt="" />
            <div className="text-center max-w-screen-xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-[2.7rem] font-bold text-primary mb-7">Sample Web Design</h2>
                <div className="h-1.5 md:w-36 w-24 rounded-lg bg-primary m-auto"></div>
                <div className="grid sm:grid-cols-5 gap-2 mt-10">
                    <div className="sm:col-span-3 col-span-2 row-span-2 scale-100 overflow-hidden">
                        <img className="h-full w-full object-cover rounded hover:scale-125 ease-in duration-200" src="https://design4users.com/wp-content/uploads/2021/04/website-design-3d-art.png" alt="" />
                    </div>
                    <div className="scale-100 overflow-hidden">
                        <img className="h-full w-full object-cover rounded hover:scale-125 ease-in duration-200" src="https://cdn.dribbble.com/userupload/8712618/file/still-5f07b9c8760c24b9f90898891e4b1c46.png?resize=400x300&vertical=center" alt="" />
                    </div>
                    <div className="scale-100 overflow-hidden">
                        <img className="h-full w-full object-cover rounded hover:scale-125 ease-in duration-200" src="https://cdn.dribbble.com/users/4053754/screenshots/16542924/shot__comp_.png?resize=400x300&vertical=center" alt="" />
                    </div>
                    <div className="scale-100 overflow-hidden">
                        <img className="h-full w-full object-cover rounded hover:scale-125 ease-in duration-200" src="https://i0.wp.com/cdn.dribbble.com/users/427857/screenshots/14487117/media/1d43a345182131381b99bfd4bde1e47d.png?w=1200&ssl=1" alt="" />
                    </div>
                    <div className="scale-100 overflow-hidden">
                        <img className="h-full w-full object-cover rounded hover:scale-125 ease-in duration-200" src="https://cdn.dribbble.com/users/3887720/screenshots/15656872/media/25717b7fd96576bcc4ad2d4ad01d5c61.png?resize=400x0" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}