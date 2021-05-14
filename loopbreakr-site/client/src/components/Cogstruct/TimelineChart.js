import React from 'react'
import { ReactComponent as WorkIcon} from '../../images/work.svg';
import { ReactComponent as SchoolIcon} from '../../images/school.svg';
import timelineData from './timelineData'

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import "react-vertical-timeline-component/style.min.css";
import { TimelineDescription, TimelineTitle } from '../Common/CommonElements';

const TimelineChart = () => {
    let workIconStyles = { background: "#56cfe1" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        
      <VerticalTimeline>
        {timelineData.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <TimelineTitle>{element.title}</TimelineTitle>
              <TimelineDescription>{element.description}</TimelineDescription>
            
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
        
    )
}

export default TimelineChart
