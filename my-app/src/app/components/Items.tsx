interface itemsProps {
    contadores:
    {
        num: number;
        description: string;
    }[]
}

export default function Items({ contadores }: itemsProps) {
    return (
        <div className='w-full grid grid-cols-2 gap-6'>
            {
                contadores.map((couter) => (
                    <div key={couter.description} className='flex flex-col gap-3 items-start lg:gap-4'>
                        <h1 className='font-medium text-[20px] lg:text-[32px]'>
                            {couter.num}+
                        </h1>
                        <p className='text-[16px] text-[#5F7896] lg:text-[18px]'>
                            {couter.description}
                        </p>
                    </div>

                ))
            }
        </div>)
}