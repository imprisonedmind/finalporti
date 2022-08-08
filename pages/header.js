import Image from "next/image";
import {useState} from "react";

export default function Header() {
  const {imgSrc, setImgSrc} = useState('/images/smile.png')

  return (
      <div className={'w-full h-min'}>
        <div className={'w-[300px] h-[300px] mx-auto bg-red-500'}>
          <Image alt={'Luke Stephens Profile Emoji'} src={'images/smile.png'} layout={'fill'} width={500}' +
            ' height={500} objectFit={'fit'}/>
        </div>
      </div>
  )
}