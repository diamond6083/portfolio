import './projectCard.scss'

const ProjectCard = ({title,url,projectDomain,index}) => {
    return (
        <>
            <div className="card">
                <div className="image-wrapper">
                    <img src={url} alt="Project thumbnail" />
                </div>
                <span className='title'>{title}</span>
                <span className='domain'>{projectDomain}</span>
            </div>
        </>
        
    );
}

export default ProjectCard;