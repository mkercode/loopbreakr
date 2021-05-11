import React from 'react'
import { ReactComponent as WorkIcon} from '../../images/work.svg';
import { ReactComponent as SchoolIcon} from '../../images/school.svg';
import timelineElements from './timelineElements'

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import "react-vertical-timeline-component/style.min.css";

const TimelineChart = () => {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        <div>
             <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <p id="description">{element.description}</p>
            
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
        </div>
    )
}

export default TimelineChart
