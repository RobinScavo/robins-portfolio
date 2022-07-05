import { projectData } from '../../tools/utils';

import './project.css';

const Project = ({content}) => {
    return (
        <div className="project-container">
            {/* <img
                // src={ projectData[content].mainImage }
                src="../../../public/images/bathroom.png"
                alt="image alt"
                className="project-image"
            /> */}

            <div
                className="project-title"
            >{ projectData[content].title }</div>
        </div>
     );
}

export default Project;
