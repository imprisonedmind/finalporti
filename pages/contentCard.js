import {useEffect} from "react";
import Image from "next/image";

export default function ContentCard() {
  const x = [
    {
      'title': 'Erin',
      'year': '2019',
      'description': 'Emotional social media support',
      'link': 'www.google.com',
      'image': '/images/cover/erin.png',
      'colour': 'bg-blue-500',
    }, {
      'title': 'hyyp',
      'year': '2022',
      'description': 'Mobile home security app',
      'link': 'www.google.com',
      'image': '/images/cover/hyyp.png',
      'colour': 'bg-green-500',
    }, {
      'title': 'Portal',
      'year': '2022',
      'description': 'Backend security monitoring',
      'link': 'www.google.com',
      'image': '/images/cover/portal.png',
      'colour': 'bg-zinc-900/50',
    }, {
      'title': 'Barrows',
      'year': '2022',
      'description': 'Vendor voucher app',
      'link': 'www.google.com',
      'image': '/images/cover/barrows.png',
      'colour': 'bg-yellow-500/50',
    }
  ]


  const moveImages = () => {
    const windowWidth = 1360

    const cCard = document.getElementById('cCard')
    const xCard = document.getElementById('xCard')

    let cPos = 0
    let xPos = 0

    let id = null
    clearInterval(id)

    id = setInterval(moveCards, 40)

    function moveCards() {
      if (cPos < -windowWidth) {
        console.log('something here')
        cPos = windowWidth
      } else {
        cCard.style.transform = `translateX(${cPos}px)`
        cPos--
        console.log(`something else ${cPos} `)
      }
      if (xPos < -windowWidth * 2) {
        xPos = 0
      } else {
        xCard.style.transform = `translateX(${xPos}px)`
        xPos--
      }
    }
  }

  useEffect(() => {
    moveImages()
  }, [])


  return (
      <div className={'w-min h-full flex '}>
        <div id={'cCard'}
             className={`relative flex h-full w-full justify-between `}>
          {
            x.map(x => {
              return <div id={x.title} key={Math.random()}
                          className={`relative mr-10 w-[300px] h-full -rotate-3 
                           rounded-md transition overflow-hidden ease-in-out duration-300
                            hover:scale-110 hover:cursor-pointer`}>
                <Image src={x.image} objectFit={'cover'} layout={"fill"} alt={x.title}/>
              </div>
            })
          }
        </div>
        <div id={'xCard'}
             className={`relative flex h-full  w-full justify-between`}>
          {
            x.map(x => {
              return <div id={x.title} key={Math.random()}
                          className={`relative mr-10 w-[300px] h-full -rotate-3 
                           rounded-md transition overflow-hidden ease-in-out duration-300
                            hover:scale-110 hover:cursor-pointer`}>
                <Image src={x.image} objectFit={'cover'} layout={"fill"} alt={x.title}/>
              </div>
            })
          }
        </div>
      </div>
  )
}