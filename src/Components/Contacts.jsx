import ImgDesign3 from '../assets/StyleImg2.svg';
import ImgDesign1 from '../assets/StyleImg1.svg';
export default function Contacts() {
    return (
        <div id='Contacts' className='relative bg-primary/5'>
            <img src={ImgDesign3} className='absolute md:h-80 md:w-80 w-60 h-60 -right-3 -top-20 md:-top-28 opacity-80 -z-10' alt="" />
            <img src={ImgDesign1} className='absolute md:h-80 md:w-80 w-60 h-60 -left-7 top-[63%] opacity-80 -z-10' alt="" />
            <div className='max-w-screen-xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-12'>
            <div>
                <img className="w-full h-full object-cover rounded m-auto" src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-communication-5656800-4715341.png?f=webp" alt="" />
            </div>
                <form>
                   <div className='grid grid-cols-2 md:gap-3 gap-2'>
                       <input type="text" className='shadow border-2 rounded bg-gray-200 p-3 w-full focus:outline-primary font-bold text-sm text-gray-700' placeholder='First Name' />
                       <input type="text" className='shadow border-2 rounded bg-gray-200 p-3 w-full focus:outline-primary font-bold text-sm text-gray-700' placeholder='Last Name' />
                       <input type="text" className='shadow border-2 rounded bg-gray-200 p-3 w-full focus:outline-primary font-bold text-sm text-gray-700' placeholder='Email' />
                       <input type="text" className='shadow border-2 rounded bg-gray-200 p-3 w-full focus:outline-primary font-bold text-sm text-gray-700' placeholder='Phone' />
                       <textarea className='col-span-2 shadow border-2 rounded bg-gray-200 p-3 w-full focus:outline-primary font-bold text-sm text-gray-700' placeholder='Message' cols="30" rows="10"></textarea>
                       <button className='py-2 bg-primary hover:bg-primary/20 hover:text-primary text-white rounded text-base ease-in duration-200 col-span-2 font-bold w-full'>Submit</button>
                   </div>
                </form>
            </div>
        </div>
    )
}