import { projectData } from '../../tools/utils';
import Seperator from '../seperator/Seperator';

import bpmSmall from '../../images/bpm/bpm-300.png';
import bpmMedium from '../../images/bpm/bpm-768.png';
import bpmLarge from '../../images/bpm/bpm-1280.png';
import bpmXLarge from '../../images/bpm/bpm-3200.png';

import ccSmall from '../../images/cc/cc-300.png';
import ccMedium from '../../images/cc/cc-768.png';
import ccLarge from '../../images/cc/cc-1280.png';
import ccXLarge from '../../images/cc/cc-3200.png';

import oeSmall from '../../images/oe/oe-300.png';
import oeMedium from '../../images/oe/oe-768.png';
import oeLarge from '../../images/oe/oe-1280.png';
import oeXLarge from '../../images/oe/oe-3200.png';

import portSmall from '../../images/port/port-300.jpg';
import portMedium from '../../images/port/port-768.jpg';
import portLarge from '../../images/port/port-1280.jpg';
import portXLarge from '../../images/port/port-3200.jpg';


import './project.scss';

const Project = ({content}) => {
    return (
        <div className="project-container">
            {content === 'bpm' && <img
                src={bpmSmall}
                srcSet={`${bpmSmall} 300w, ${bpmMedium} 768w, ${bpmLarge} 1280w, ${bpmXLarge} 3200w`}
                alt="image alt"
                className="project-image"
            />}

            {content === 'cc' && <img
                src={ccSmall}
                srcSet={`${ccSmall} 300w, ${ccMedium} 768w, ${ccLarge} 1280w, ${ccXLarge} 3200w`}
                alt="image alt"
                className="project-image"
            />}

            {content === 'oe' && <img
                src={oeSmall}
                srcSet={`${oeSmall} 300w, ${oeMedium} 768w, ${oeLarge} 1280w, ${oeXLarge} 3200w`}
                alt="image alt"
                className="project-image"
            />}

            {content === 'port' && <img
                src={portSmall}
                srcSet={`${portSmall} 300w, ${portMedium} 768w, ${portLarge} 1280w, ${portXLarge} 3200w`}
                alt="image alt"
                className="project-image"
            />}

            <Seperator />

            <div
                className="project-title"
            >{ projectData[content].title }</div>

            <div className="overlay"></div>
        </div>
     );
}

export default Project;
