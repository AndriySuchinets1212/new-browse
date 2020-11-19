import React from 'react';
import './Asteroid.css';
import {StarBorderIcon, StarIcon} from '@material-ui/icons';


const Asteroid = ({name, data}) =>{
    return(
        <div className="item">
            <span className="span">{name}</span>
            <span>{data ? data.close_approach_date_full : ' Comming...' }</span>
        </div>
    );
}
export default Asteroid;