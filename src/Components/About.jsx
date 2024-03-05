export default function About() {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-16">
              <div className="flex items-center gap-5">
                <div className='h-10 w-1.5 bg-primary'></div>
                <h2 className="md:text-4xl text-3xl font-semibold text-primary">About Me</h2>
              </div>
              <div className="space-y-8 mt-5 text-gray-800 tracking-wider md:w-4/5">
                <p className="leading-relaxed text-base">Welcome to My front-end learning platform! Were here to guide you through the exciting journey of mastering front-end development. Whether youre just starting out or looking to enhance your skills, our platform is designed to support learners of all levels.</p>
                <p className="leading-relaxed text-base">At my website, I am passionate about helping you understand the ins and outs of front-end technologies. From HTML and CSS basics to advanced JavaScript frameworks like React and Vue.js, we provide comprehensive courses and tutorials to meet your learning needs.</p>
                <p className="leading-relaxed text-base">My focus is on practical, hands-on learning experiences that empower you to build real-world projects and applications. With our step-by-step guidance, youll not only grasp the fundamentals but also gain the confidence to tackle complex challenges in front-end development.</p>
                <p className="leading-relaxed text-base">In addition to my core curriculum, we offer specialized expertise in interactive marketing, UX/UI research and engineering, and systems engineering & administration. These skills are essential for creating engaging user experiences and optimizing system performance, and were here to help you master them.</p>
                <p className="leading-relaxed text-base">What sets me apart is my commitment to personalized learning. We understand that everyone learns at their own pace and has unique goals, which is why our platform offers flexible learning paths tailored to your needs. Whether you prefer structured courses or self-paced tutorials, we provide the resources and support to help you succeed.</p>
                <p className="leading-relaxed text-base">Embark on your front-end development journey with me and unlock your full potential in the world of web development. Start exploring our resources today and take the first step towards building a rewarding career in front-end development!</p>
              </div>
              <div className="flex md:gap-40 gap-12  mt-20">
                <div className="space-y-12 text-sm font-bold">
                    <h4>Website</h4>
                    <h4>Industry</h4>
                    <h4>Company size</h4>
                    <h4>Type</h4>
                    <h4>Founded</h4>
                    <h4>Specialties</h4>
                </div>
                <div className="space-y-12 text-sm tracking-wider font-thin text-gray-800 mb-10">
                    <p className="text-primary font-semibold cursor-pointer hover:underline">www.jmdiv-frontend-learning.com</p>
                    <p>Technology, Information and Internet</p>
                    <p>Sole Proprietorship</p>
                    <p>Self-Owned</p>
                    <p>2024 - 2025</p>
                    <p className="md:w-3/5">Frontend Development and Design, User Experience (UX) and User Interface (UI) Design for Frontend, Interactive Frontend Marketing Solutions, Frontend Social Media Integration and Engagement.</p>
                </div>
              </div>
              <div className="w-full bg-gray-300 h-[1px] mb-10"></div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Location</h2>
                <p className="text-sm font-semibold">Primary</p>
                <p className="text-sm font-semibold">Lingayen, Pangasinan</p>
              </div>
            </div>
        </section>
    )
}