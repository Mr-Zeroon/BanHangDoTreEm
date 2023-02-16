import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '540px'
}
const slideImages = [
  {
    url: 'https://sadesign.vn/wp-content/uploads/2021/04/cach-chup-anh-quan-ao-tre-em-dep.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://htsport.com.vn/uploads/images/do-choi-tre-em.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://media.vietq.vn/files/lelan/2022/05/11/do-choi-tre-em-2-11-5-2022.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'https://nhanhmua.com/wp-content/uploads/2020/03/Thoi-trang-be-xinh.jpg',
    caption: 'Slide 4'
  }
];

const Home = () => {
  return (
    <div className='home'>
      <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}></div>
            </div>
          ))} 
        </Slide>
      
    </div>
    
  )
}

export default Home