import Image from "next/image";
import {useState} from "react";

export default function Header() {
  const [imgSrc, setImgSrc] = useState("/images/smile.png")

  return (
      <div className={'w-full h-min'}>
        <div
            className={'relative w-[200px] h-[200px] mx-auto mt-[60px] border-[1px]' +
                ' border-white/[25%] rounded-xl bg-white/25 backdrop-blur-[2px]' +
                '  hover:cursor-pointer'}
            onMouseEnter={() => setImgSrc('/images/tongue.png')}
            onMouseLeave={() => setImgSrc('/images/smile.png')}
            onClick={() => setImgSrc('/images/confetti.png')}>
          <Image alt={'Luke Stephens Profile Emoji'} src={imgSrc}
                 width={500}
                 height={500} objectFit={'fit'}
                 className={'absolute z-20'}
          />
        </div>
      </div>
  )
}