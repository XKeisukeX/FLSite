import Icon1 from '../assets/Icon1.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import Icon4 from '../assets/Icon4.png';
import ImgDesign1 from '../assets/StyleImg1.svg';
export default function Learning() {
    return (
        <div id='Learning' className='relative bg-primary/5'>
            <img src={ImgDesign1} className='absolute md:h-80 md:w-80 w-60 h-60 -left-3 -top-20 md:-top-28 opacity-80 -z-10' alt="" />
            <div className='max-w-screen-xl mx-auto px-4 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-3 text-center Design'>
                <div className='bg-gradient-to-r from-primary/20 to-white/85 py-6 px-4 rounded shadow-lg'>
                    <img src={Icon1} className='h-14 w-14 m-auto' alt="" />
                    <h4 className='text-xl font-bold py-2 text-primary'>Interactive Design</h4>
                    <p className='text-sm leading-relaxed text-gray-500'>Intuitively crafting engaging experiences with seamless interfaces for optimal user interaction and satisfaction.</p>
                </div>
                <div className='bg-gradient-to-r from-primary/20 to-white/85 py-6 px-4 rounded shadow-lg'>
                    <img src={Icon2} className='h-14 w-14 m-auto' alt="" />
                    <h4 className='text-xl font-bold py-2 text-primary'>Responsive Layout</h4>
                    <p className='text-sm leading-relaxed text-gray-500'>Adapting designs to various devices, ensuring seamless functionality across different screen sizes and orientations.</p>
                </div>
                <div className='bg-gradient-to-r from-primary/20 to-white/85 py-6 px-4 rounded shadow-lg'>
                    <img src={Icon3} className='h-14 w-14 m-auto' alt="" />
                    <h4 className='text-xl font-bold py-2 text-primary'>User Interface (UI)</h4>
                    <p className='text-sm leading-relaxed text-gray-500'>UI design blends aesthetics, usability, and accessibility to enhance user engagement and satisfaction.</p>
                </div>
                <div className='bg-gradient-to-r from-primary/20 to-white/85 py-6 px-4 rounded shadow-lg'>
                    <img src={Icon4} className='h-14 w-14 m-auto' alt="" />
                    <h4 className='text-xl font-bold py-2 text-primary'>Frontend Frameworks</h4>
                    <p className='text-sm leading-relaxed text-gray-500'>Frontend development relies on structured tools for crafting interactive, responsive, and user-friendly interfaces.</p>
                </div>
            </div>
        </div>
    )
}