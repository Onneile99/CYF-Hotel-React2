import React from 'react'
import Clock from './Clock';

const Heading = (props) => {

    return (
        <div>
            <header className="heading-header" >{props.headingHeader}
                <Clock />
                <img className="image-header" src="https://images.unsplash.com/photo-1492455417212-e162ed4446e1" alt=".." />
            </header>


        </div>
    )


}

export default Heading;
