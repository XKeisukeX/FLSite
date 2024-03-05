export default function Footer() {
    return (
        <footer className="bg-primary/20 text-white">
            <div className="max-w-screen-xl mx-auto px-4 py-10">
                <div className="text-center">
                   <h2 className="md:text-4xl text-3xl font-bold text-primary mb-2">Frontend Learning</h2>
                   <p className="md:w-2/5 m-auto text-gray-500 font-medium mb-3 leading-relaxed">Engage with a comprehensive web development guide to refine your skills, expand knowledge, and excel in creating dynamic websites and applications effectively.</p>
                   <div className="flex items-center justify-center gap-3">
                        <div className=" border-2 border-primary rounded-full px-3 py-1 cursor-pointer text-primary hover:text-white hover:bg-primary ease-in duration-200">
                            <i className="fa fa-facebook-f font-bold text-xl"></i>
                        </div>
                        <div className="px-2.5 py-1 rounded-full border-2 border-primary cursor-pointer text-primary hover:text-white hover:bg-primary ease-in duration-200">
                            <i className="fa fa-github font-bold text-xl"></i>
                        </div>
                        <div className="px-2.5 py-1 rounded-full border-2 border-primary cursor-pointer text-primary hover:text-white hover:bg-primary ease-in duration-200">
                            <i className="fa fa-instagram font-bold text-xl"></i>
                        </div>
                        <div className="px-2.5 py-1 rounded-full border-2 border-primary cursor-pointer text-primary hover:text-white hover:bg-primary ease-in duration-200">
                            <i className="fa fa-linkedin font-bold text-xl"></i>
                        </div>
                        <div className="px-2.5 py-1 rounded-full border-2 border-primary cursor-pointer text-primary hover:text-white hover:bg-primary ease-in duration-200">
                            <i className="fa fa-skype font-bold text-xl"></i>
                        </div>
                   </div>
                </div>
            </div>
        </footer>
    )
}