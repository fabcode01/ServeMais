import { allWishIcon, preparationicon, wishReadyIcon } from "@/utils/Icons";

interface SliderProps {
    className?: string
}

export function Slider(props: SliderProps) {
  const listStyle =
    " flex cursor-pointer justify-center items-center gap-2 bg-orange-main text-white font-semibold px-5 py-2 rounded-lg active:scale-110 tooltip md:tooltip-bottom";

   const text = 'hidden md:block' 

  return (
    <ul className={`flex h-10 mt-5 justify-center items-center gap-6 w-full ${props.className}`}>
      <li className={`${listStyle} `} data-tip='Todos'>
        <span className="text-3xl md:text-lg">{allWishIcon}</span>
        <p className={text}>TODOS</p>
      </li>
      <li className={`${listStyle}`} data-tip='Preparando'>
      <span className="text-3xl md:text-lg">{preparationicon}</span>
        <p className={text}>EM PREPARAÇÃO</p>
      </li>
      <li className={`${listStyle}`} data-tip='Prontos'>
        <span className="text-3xl md:text-lg">{wishReadyIcon}</span>
        <p className={text}>PRONTOS</p>
      </li>
    </ul>
  );
}
