import Image from 'next/image'
import Logo from '../../../public/assets/Logo.svg'
import User from '../../../public/assets/User.svg';
import Menu from '../../../public/assets/Menu.svg'
export default function Nav() {

    const NavLinks = [
        {
            name: 'Features'
        },
        {
            name: 'Pricing'
        },
        {
            name: 'Enterprice'
        },
        {
            name: 'Careers'
        },
    ]

    return (
        <nav className="flex items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
            <div className='flex gap-[74px] items-center'>
                <Image src={Logo} alt='logo' />

                <div className='hidden lg:flex gap-[56px] items-center'>
                    {NavLinks.map((item,key)=>(
                        <p key={key} className='text-[#36485c] font-medium'>{item.name}</p>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='hidden pr-[56px] text-[#36485c] lg:block'>Open an Acount</p>
                <Image src={Menu} className='lg:hidden' alt='menu' />
               
                <div className='flex items-center gap-3'>
                    <Image src={User} alt='user' />
                    <span className='hidden font-medium text-[#36485c] lg:block'>Sing In</span>
                </div>
            </div>

        </nav>
    )
}