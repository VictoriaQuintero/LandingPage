import BlurArrow from '../../../public/assets/blue-button.svg'
import Gradient from '../../../public/assets/Gradient.svg'
import HeroImage from '../../../public/assets/Image.svg'
import Google from '../../../public/assets/Google.svg'
import Slak from '../../../public/assets/Slack.svg'
import Trust from '../../../public/assets/Trustpilot.svg'
import CNN from '../../../public/assets/CNN.svg'
import CLUTCH from '../../../public/assets/Clutch.svg'
import Image from 'next/image'


export default function Hero() {
    return (
        <div className="pt-4 font-medium lg:pt-10 ">
            <div className="px-[20px] lg:px-[280px]">
                <h1 className="text-center text-[32px] text-[#172026] lg:text-[64px] leading-[72px]">
                    Start monitoring your website like a pro
                </h1>
                <p className="text-center pt-6 text-[#36485c] lg:text-[18px] lg:leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed ducimus aut, ipsum eius nihil mollitia porro vel officiis iure suscipit sequi. Magni ea in culpa vel, commodi aperiam iure.
                </p>
                <div className="flex w-full pt-8 justify-center lg:gap-x-6">
                    <button className="bg-[#4328eb] w-1/2 py-4 px-8 rounded-[4px] text-white lg:w-fit">Try for free</button>
                    <button className="w-1/2 flex items-center justify-center gap-x-2 text-[#4328eb] lg:w-fit">View Pricing <span><Image src={BlurArrow} alt='arrow' /></span></button>
                </div>
            </div>

            <div className='relative flex h-full w-full justify-center'>
                <Image src={Gradient} className='min-h-[500px] w-full object-cover lg:h-auto' alt='gradient' />
                <div className='absolute bottom-5 flex w-full flex-col items-center'>
                    <Image src={HeroImage} className='-ml-4 h-[310px] sm:-mb-20  sm:h-[400px] lg:-mb-28 lg:h-auto lg:w-[70%]' alt='heroImage' />
                    <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20'>
                        <p className='text-white text-center lg:text-[18px]'>Trusted by these companies</p>
                        <div className='grid grid-cols-3 items-center justify-items-center px-[20px] align-middle lg:grid-cols-5'>
                            <Image src={Google} alt='GOOGLE' />
                            <Image src={Slak} alt='SLAK' />
                            <Image src={Trust} alt='Trustpilot' />
                            <Image src={CNN} alt='CNN' />
                            <Image src={CLUTCH} alt='CLUTCH' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}