import React from 'react'
const images = [
  {src: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",alt: "Paris"},
  {src:"https://www.universal-assistance.com/uablog/wp-content/uploads/2022/12/big-ben.png",alt: "London"},
  {src:"https://media.traveler.es/photos/63838947050e0f92cd80c982/16:9/w_2560%2Cc_limit/GettyImages-1392907424.jpg",alt: "Barcelona"},
  {src:"https://media.admagazine.com/photos/618a5ef1a8ad6c5249a74d1d/4:3/w_2000,h_1500,c_limit/91683.jpg",alt: "Tokio"},
  {src:"https://fotos.perfil.com/2022/07/14/trim/1280/720/ciudad-de-buenos-aires-1386884.jpg",alt: "Buenos Aires"},
  {src:"https://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg",alt: "New York"},
  {src:"https://v2umbapi.travelbag.co.uk/media/l3kflbvy/dubai-burj-khalifa.jpg?center=0.43865081331021383,0.493692943631275&mode=Crop&quality=80&width=1280&height=704",alt:"Dubai"},
  {src:"https://media.istockphoto.com/id/539115110/es/foto/colosseum-in-rome-italy-y-sol-de-la-ma%C3%B1ana.jpg?s=612x612&w=0&k=20&c=S2BE7bvASd4hm6Yp0VbtvaGnnqTR4p5HJ-6RfDjR-MQ=",alt: "Roma"},
  {src:"https://media.istockphoto.com/id/608540602/es/foto/panorama-a%C3%A9reo-de-la-bah%C3%ADa-de-botafogo-r%C3%ADo-de-janeiro.jpg?s=612x612&w=0&k=20&c=O6aoduINB_-zrtWY9HV6ubmrnVJbHvGamVcW_JKdP3w=",alt: "Rio de janeiro"},
  {src:"https://www.fundeu.es/wp-content/uploads/2013/01/efespnine198305.jpg",alt: "Beijing"},
  {src:"https://www.civitatis.com/f/egipto/egipto/guia/el-cairo.jpg",alt: "Cairo"},
  {src:"https://a.travel-assets.com/findyours-php/viewfinder/images/res70/504000/504084-amsterdam.jpg",alt: "Amsterdam"}
]

export const Slide = ({index}) => {
  return (
    <div className='flex flex-col no-wrap gap-y-1 justify-center '>
      <div className='flex flex-row no-wrap justify-center gap-4 '>
        <img className='md:w-2/5 mb-2 min-h-[45%] object-cover' src={images[0 + 4*index].src} alt={images[0].alt} />
        <img className='md:w-2/5 mb-2 min-h-[45%] object-cover' src={images[1 + 4*index].src} alt={images[1].alt}/>
      </div>
      <div className='flex flex-row no-wrap justify-center gap-4 ' >
        <img className='md:w-2/5 mb-2 min-h-[45%] object-cover' src={images[2 + 4*index].src} alt={images[2].alt}/>
        <img className='md:w-2/5 mb-2 min-h-[45%] object-cover' src={images[3 + 4*index].src} alt={images[3].alt}/>
      </div>
    </div>
  )
}
