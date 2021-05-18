import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { TextWrapper, Button, InfoContainer, InfoWrapper} from '../Common/CommonElements';
import { ImageSlide, Slider, Title, Description} from './SliderElements';

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
        <InfoContainer>
            
            <InfoWrapper>
                
        <Slider>
        
        {slides.map((slide, index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'}>
                {index === current && (
                    <div >
                        <FaArrowAltCircleLeft className= 'left-arrow' onClick ={prevSlide} style={{padding:'9px'}} />
        <FaArrowAltCircleRight className= 'right-arrow' onClick={nextSlide} style={{padding:'9px'}} />
                        <TextWrapper>
                        <ImageSlide src={slide.image} alt={slide.name}/>
                        <Title style={{textAlign:'center', marginTop:'20px'}}>{slide.name}</Title>
                        <Description style={{textAlign:'center'}}>{slide.details}</Description>
                        </TextWrapper>
                        
                        <Link to={slide.link}>
                        <Button style={{ marginTop:'20px', padding:'10px'}}>Read More {'>'}</Button>
                        </Link>
                    
                    </div>
                )}
                </div>
                )}
                
        )}
        </Slider>
        </InfoWrapper>
        </InfoContainer>
    );
};

export default ImageSlider
