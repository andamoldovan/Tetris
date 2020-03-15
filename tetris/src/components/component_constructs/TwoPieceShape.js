import React, {useEffect, useState} from 'react';
import {Box} from "grommet";
import Block from "./Block";

const TwoPieceShape = ({propDirection, additionalClass, style}) => {

    const possibleDirections = ['row', 'column'];
    const [direction, setDirection] = useState();

    useEffect(() => {
        if(propDirection !== undefined){
            setDirection(propDirection);
        }else {
            const random = Math.floor(Math.random() * possibleDirections.length);
            setDirection(possibleDirections[random]);
        }
    }, []);

    useEffect(() => {
        if(propDirection !== undefined) setDirection(propDirection);
    },[propDirection]);

    let externalClassName = (additionalClass) ? additionalClass : '';
    return(
        <Box className={'two-piece-shape-main-class' + ' ' + additionalClass} direction={direction}>
            <Block style={style}/>
            <Block style={style}/>
        </Box>
    );
};

export default TwoPieceShape;