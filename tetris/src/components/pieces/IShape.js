import React, {useState, useEffect} from 'react';
import Block from './Block';
import {Box} from 'grommet';

const IShape = ({propDirection}) => {

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

    return(
        <Box className={'i-shape-main-class'} direction={direction}>
            <Block />
            <Block />
            <Block />
            <Block />
        </Box>
    );
};

export default IShape;
