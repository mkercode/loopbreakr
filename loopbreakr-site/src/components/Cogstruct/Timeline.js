import React from 'react'
import { Column1, Column2, TopInfoRow, InfoContainer,InfoWrapper,TextWrapper, TopLine, Heading, Subtitle, ImgWrap} from '../Common/CommonElements';
import TimelineChart from './TimelineChart';


const Timeline = () => {
    return (
        <div style={{backgroundColor: '#88EAAF'}}>
            <InfoContainer>
                <InfoWrapper>
                    <TopInfoRow>
                        <Column1>
                        <TextWrapper >
                                <TopLine style={{color:'#fff'}}>Where we're at</TopLine>
                                <Heading style={{color:'#f393aa'}}>Timeline</Heading>
                                <Subtitle>Status: Testing</Subtitle>
                                <Subtitle>Expected release: June 2021</Subtitle>
                                <Subtitle>This project is all done and currently being prepared for release on the GooglePlay Store. Keep checking back for updates!</Subtitle>
                            </TextWrapper>
                        
                        </Column1>
                        
                        <Column2>
                        <ImgWrap>
                        <TimelineChart/>
                        </ImgWrap>
                        </Column2>

                        </TopInfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default Timeline
