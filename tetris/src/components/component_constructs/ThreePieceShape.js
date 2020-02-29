import React, {useState, useEffect} from 'react';
import {Box} from 'grommet';
import Block from "./Block";

const ThreePieceShape = ({propDirection}) => {

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
        <Box className={'three-piece-shape-main-class'} direction={direction}>
            <Block />
            <Block />
            <Block />
        </Box>
    );
};

export default ThreePieceShape;
