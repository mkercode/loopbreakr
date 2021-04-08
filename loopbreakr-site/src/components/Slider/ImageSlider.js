import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { TextWrapper, Button} from '../Common/CommonElements';
import { ImageSlide, Slider, Title, Description } from './SliderElements';

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    
    return (
        <Slider>
        <FaArrowAltCircleLeft className= 'left-arrow' onClick ={prevSlide} />
        <FaArrowAltCircleRight className= 'right-arrow' onClick={nextSlide} />
        {slides.map((slide, index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'}>
                {index === current && (
                    <div >
                        <TextWrapper>
                        <ImageSlide src={slide.image} alt={slide.name}/>
                        <Title>{slide.name}</Title>
                        <Description>{slide.details}</Description>
                        </TextWrapper>
                        <Button style={{marginLeft:'20px'}}>Read More {'>'}</Button>
                        
                    </div>
                )}
                </div>
                )}
                
        )}
        </Slider>
    );
};

export default ImageSlider
