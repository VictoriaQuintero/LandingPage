import Image from "next/image"
import Check from '../../../public/assets/check.svg'

interface ListasProps{
    checks : string[];
}

export default function Listas({checks}:ListasProps) {
    return (
        <ul className='flex flex-col gap-y-3 text-[#36485c] lg:text-[18px]'>
            {checks.map((item) => (
                <li key={item} className='flex items-center gap-x-2 '>
                    <span>
                        <Image src={Check} alt='check' />
                    </span>
                    {item}
                </li>
            ))}
        </ul>
    )
}