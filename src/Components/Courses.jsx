import ProfileImg from '../assets/JmdP1.png';
export default function Courses() {
    return (
        <div className="bg-primary/5">
            <div className="bg-primary/20">
                <div className="py-10 px-4 text-center">
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary">Frontend Learning Courses</h2>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 py-16">
               <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
                    <div className="shadow-lg hover:shadow-2xl rounded-lg md:hover:-translate-y-3 ease-in duration-200">
                        <div className="bg-gradient-to-r from-primary/35 to-primary/10 py-6 px-2 text-center rounded-[30px] rounded-t">
                            <h4 className="text-2xl font-bold text-primary/85">Learn HTML</h4>
                        </div>
                        <div className="relative flex items-center gap-5 px-4 py-10 scale-100 overflow-hidden">
                            <div className="w-24 h-24 absolute bg-primary/10 top-[35%] left-[35%] translate-x-[-35%] translate-y-[-35%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <div className="w-24 h-24 absolute bg-primary/10 top-[60%] left-[60%] translate-x-[-60%] translate-y-[-60%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <p className="text-gray-500 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime.</p>
                            <img className="w-12 h-12 rounded-full" src={ProfileImg} alt="" />
                        </div>
                        <div className="p-4">
                            <a href="/HTML">
                                <p className="underline text-sm cursor-pointer text-primary font-semibold hover:opacity-60">Click to Learn</p>
                            </a>
                        </div>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl rounded-lg md:hover:-translate-y-3 ease-in duration-200">
                        <div className="bg-gradient-to-r from-primary/35 to-primary/10 py-6 px-2 text-center rounded-[30px] rounded-t">
                            <h4 className="text-2xl font-bold text-primary/85">Learn CSS</h4>
                        </div>
                        <div className="relative flex items-center gap-5 px-4 py-10 scale-100 overflow-hidden">
                            <div className="w-24 h-24 absolute bg-primary/10 top-[60%] left-[35%] translate-x-[-35%] translate-y-[-60%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <div className="w-24 h-24 absolute bg-primary/10 top-[35%] left-[60%] translate-x-[-60%] translate-y-[-35%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <p className="text-gray-500 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime.</p>
                            <img className="w-12 h-12 rounded-full" src={ProfileImg} alt="" />
                        </div>
                        <div className="p-4">
                            <p className="underline text-sm cursor-pointer text-primary font-semibold hover:opacity-60">Click to Learn</p>
                        </div>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl rounded-lg md:hover:-translate-y-3 ease-in duration-200">
                        <div className="bg-gradient-to-r from-primary/35 to-primary/10 py-6 px-2 text-center rounded-[30px] rounded-t">
                            <h4 className="text-2xl font-bold text-primary/85">Learn Flexbox</h4>
                        </div>
                        <div className="relative flex items-center gap-5 px-4 py-10 scale-100 overflow-hidden">
                            <div className="w-24 h-24 absolute bg-primary/10 top-[35%] left-[35%] translate-x-[-35%] translate-y-[-35%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <div className="w-24 h-24 absolute bg-primary/10 top-[60%] left-[60%] translate-x-[-60%] translate-y-[-60%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <p className="text-gray-500 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime.</p>
                            <img className="w-12 h-12 rounded-full" src={ProfileImg} alt="" />
                        </div>
                        <div className="p-4">
                            <p className="underline text-sm cursor-pointer text-primary font-semibold hover:opacity-60">Click to Learn</p>
                        </div>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl rounded-lg md:hover:-translate-y-3 ease-in duration-200">
                        <div className="bg-gradient-to-r from-primary/35 to-primary/10 py-6 px-2 text-center rounded-[30px] rounded-t">
                            <h4 className="text-2xl font-bold text-primary/85">Learn Grid</h4>
                        </div>
                        <div className="relative flex items-center gap-5 px-4 py-10 scale-100 overflow-hidden">
                            <div className="w-24 h-24 absolute bg-primary/10 top-[60%] left-[35%] translate-x-[-35%] translate-y-[-60%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <div className="w-24 h-24 absolute bg-primary/10 top-[35%] left-[60%] translate-x-[-60%] translate-y-[-35%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <p className="text-gray-500 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime.</p>
                            <img className="w-12 h-12 rounded-full" src={ProfileImg} alt="" />
                        </div>
                        <div className="p-4">
                            <p className="underline text-sm cursor-pointer text-primary font-semibold hover:opacity-60">Click to Learn</p>
                        </div>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl rounded-lg md:hover:-translate-y-3 ease-in duration-200">
                        <div className="bg-gradient-to-r from-primary/35 to-primary/10 py-6 px-2 text-center rounded-[30px] rounded-t">
                            <h4 className="text-2xl font-bold text-primary/85">Learn Wrap</h4>
                        </div>
                        <div className="relative flex items-center gap-5 px-4 py-10 scale-100 overflow-hidden">
                            <div className="w-24 h-24 absolute bg-primary/10 top-[35%] left-[35%] translate-x-[-35%] translate-y-[-35%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <div className="w-24 h-24 absolute bg-primary/10 top-[60%] left-[60%] translate-x-[-60%] translate-y-[-60%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <p className="text-gray-500 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime.</p>
                            <img className="w-12 h-12 rounded-full" src={ProfileImg} alt="" />
                        </div>
                        <div className="p-4">
                            <p className="underline text-sm cursor-pointer text-primary font-semibold hover:opacity-60">Click to Learn</p>
                        </div>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl rounded-lg md:hover:-translate-y-3 ease-in duration-200">
                        <div className="bg-gradient-to-r from-primary/35 to-primary/10 py-6 px-2 text-center rounded-[30px] rounded-t">
                            <h4 className="text-2xl font-bold text-primary/85">Learn Javascript</h4>
                        </div>
                        <div className="relative flex items-center gap-5 px-4 py-10 scale-100 overflow-hidden">
                            <div className="w-24 h-24 absolute bg-primary/10 top-[60%] left-[35%] translate-x-[-35%] translate-y-[-60%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <div className="w-24 h-24 absolute bg-primary/10 top-[35%] left-[60%] translate-x-[-60%] translate-y-[-35%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <p className="text-gray-500 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime.</p>
                            <img className="w-12 h-12 rounded-full" src={ProfileImg} alt="" />
                        </div>
                        <div className="p-4">
                            <p className="underline text-sm cursor-pointer text-primary font-semibold hover:opacity-60">Click to Learn</p>
                        </div>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl rounded-lg md:hover:-translate-y-3 ease-in duration-200">
                        <div className="bg-gradient-to-r from-primary/35 to-primary/10 py-6 px-2 text-center rounded-[30px] rounded-t">
                            <h4 className="text-2xl font-bold text-primary/85">Learn Tailwind</h4>
                        </div>
                        <div className="relative flex items-center gap-5 px-4 py-10 scale-100 overflow-hidden">
                            <div className="w-24 h-24 absolute bg-primary/10 top-[35%] left-[35%] translate-x-[-35%] translate-y-[-35%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <div className="w-24 h-24 absolute bg-primary/10 top-[60%] left-[60%] translate-x-[-60%] translate-y-[-60%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <p className="text-gray-500 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime.</p>
                            <img className="w-12 h-12 rounded-full" src={ProfileImg} alt="" />
                        </div>
                        <div className="p-4">
                            <p className="underline text-sm cursor-pointer text-primary font-semibold hover:opacity-60">Click to Learn</p>
                        </div>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl rounded-lg md:hover:-translate-y-3 ease-in duration-200">
                        <div className="bg-gradient-to-r from-primary/35 to-primary/10 py-6 px-2 text-center rounded-[30px] rounded-t">
                            <h4 className="text-2xl font-bold text-primary/85">Learn React</h4>
                        </div>
                        <div className="relative flex items-center gap-5 px-4 py-10 scale-100 overflow-hidden">
                            <div className="w-24 h-24 absolute bg-primary/10 top-[60%] left-[35%] translate-x-[-35%] translate-y-[-60%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <div className="w-24 h-24 absolute bg-primary/10 top-[35%] left-[60%] translate-x-[-60%] translate-y-[-35%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <p className="text-gray-500 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime.</p>
                            <img className="w-12 h-12 rounded-full" src={ProfileImg} alt="" />
                        </div>
                        <div className="p-4">
                            <p className="underline text-sm cursor-pointer text-primary font-semibold hover:opacity-60">Click to Learn</p>
                        </div>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl rounded-lg md:hover:-translate-y-3 ease-in duration-200">
                        <div className="bg-gradient-to-r from-primary/30 to-primary/10 py-6 px-2 text-center rounded-[30px] rounded-t">
                            <h4 className="text-2xl font-bold text-primary/85">Learn Firebase</h4>
                        </div>
                        <div className="relative flex items-center gap-5 px-4 py-10 scale-100 overflow-hidden">
                            <div className="w-24 h-24 absolute bg-primary/10 top-[35%] left-[35%] translate-x-[-35%] translate-y-[-35%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <div className="w-24 h-24 absolute bg-primary/10 top-[60%] left-[60%] translate-x-[-60%] translate-y-[-60%] rounded-full z-[-1] hover:scale-110 ease-in duration-200"></div>
                            <p className="text-gray-500 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime.</p>
                            <img className="w-12 h-12 rounded-full" src={ProfileImg} alt="" />
                        </div>
                        <div className="p-4">
                            <p className="underline text-sm cursor-pointer text-primary font-semibold hover:opacity-60">Click to Learn</p>
                        </div>
                    </div>

               </div>
            </div>
        </div>
    )
}