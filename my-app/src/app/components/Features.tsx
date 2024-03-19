import Image from 'next/image'
import Listas from './Listas'
import Items from './Items'
import Feature1 from '../../../public/assets/feature-1.svg'
import Feature2 from '../../../public/assets/feature-2.svg'
import Feature3 from '../../../public/assets/feature-3.svg'

import Bluebutton from '../../../public/assets/blue-button.svg'
import Greenbutton from '../../../public/assets/green-button.svg'
import Pinkbutton from '../../../public/assets/pink-button.svg'


export default function Features() {

    const features = [
        {
            image: Feature1,
            theme: 'Sales Monitoring',
            tittle: 'Simplify your sales monitoring',
            description: "Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.",
            checks: [
                'Lorem ipsum dolor sit amet consectetur',
                'Lorem ipsum dolor sit amet consectetur',
                'Lorem ipsum dolor sit amet consectetur',
            ],
            color: 'text-feature1',
            button: Bluebutton
        },
        {
            image: Feature2,
            theme: 'Customer Support',
            tittle: 'Get in touch with your customers',
            description: "Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.",
            checks: [
                'Lorem ipsum dolor sit amet consectetur',
                'Lorem ipsum dolor sit amet consectetur',
                'Lorem ipsum dolor sit amet consectetur',
            ],
            color: 'text-feature2',
            button: Greenbutton
        },
        {
            image: Feature3,
            theme: 'Growth Monitoring',
            tittle: 'Monitor your site’s new subscribers ',
            description: "Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. ",
            count: [
                {
                    num: 100,
                    description: 'Lorem ipsum dolor sit'
                },
                {
                    num: 800,
                    description: 'Conse adipiscing elit'
                },
            ],
            color: 'text-feature3',
            button: Pinkbutton
        },
    ]

    return (
        <div className="px-[20px] lg:container lg:px-20 mx-auto">
            <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]'>
                {features.map((feature, index) => (
                    <div key={feature.theme} className={`flex flex-col gap-x-6 ${index % 2 == 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                        <Image src={feature.image} className='hidden w-1/2 sm:block' alt='feature-1' />
                        <div className={`sm:w-1/2 lg:py-[56px] ${index % 2 == 0 ? 'lg:pr-[56px]' : 'lg:pl-[56px]'}`}>
                            <h3 className={`font-medium ${feature.color} lg:text-[18px]`}>{feature.theme}</h3>
                            <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">{feature.tittle}</h1>
                            <Image src={Feature1} className='pt-[24px] sm:hidden' alt='feature-1' />
                            <p className='py-[24px] text-[#36485c] lg:text-[18px]'>{feature.description}</p>

                            {/*Lista o Item*/}

                            {feature.checks && <Listas checks={feature.checks} />}
                            {feature.count && <Items contadores = {feature.count} />}

                            <p className={`flex items-center gap-x-2 pt-[24px] ${feature.color} lg:text-[18px]`}>
                                Learn More
                                <span>
                                    <Image src={feature.button} alt='Learn more' />
                                </span>
                            </p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}