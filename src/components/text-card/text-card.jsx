import React from 'react';
import './text-card.scss'

const TextCard = React.forwardRef(({number, title, body},ref) => {

    return ( 
        <div className="text-card" ref={ref}>
            <div className='title-head'>
                <span className='work-text-no'>0{number}</span>
                <div className='motto-head'>
                    <p className='motto-title'>{title}</p>
                </div>
            </div>
            <p className='motto-body'>{body}</p>
        </div>
    );
})

export default TextCard;