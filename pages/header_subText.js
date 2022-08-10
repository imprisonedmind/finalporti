import LinkedWord from "./linkedWord";

export default function Header_subText() {
  return (
      <div className={'text-[70px] text-white/80 mx-auto max-w-[500px] text-center mt-[30px]'}>
        <h1 className={'font-sac'}>hi there!</h1>
        <p className={'font-sans text-[20px]'}>I'm Luke, I draw rectangles
          on <LinkedWord link={'https://www.figma.com'} title={'Figma'}
                         colour={'text-pink-500'}/> and bring
          them to
          life in <LinkedWord link={'https://www.react.com'} title={'React'}
                              colour={'text-blue-500'}/> , <LinkedWord
              link={'https://www.flutter.com'} title={'Flutter'} colour={'text-sky-500'}/> and
          others.
        </p>
      </div>
  )
}