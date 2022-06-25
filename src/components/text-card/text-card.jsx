import './text-card.scss'

const TextCard = ({number, title, body}) => {
    return ( 
        <div className="text-card">
            <div className='title-head'>
                <span className='work-text-no'>0{number}</span>
                <span className='motto-title'>{title}</span>
            </div>
            <p className='motto-body'>{body}</p>
        </div>
    );
}

export default TextCard;