import React, {useEffect, useState} from 'react';
import TwoPieceShape from "../component_constructs/TwoPieceShape";
import {Box} from 'grommet';
import {zShapeColor, zShapeColorBorder} from "../../constants";

const style = {
    background: zShapeColor,
    border: '1px solid ' + zShapeColorBorder
};


const ZShape = () => {
    // z and s only have two DIFFERENT rotations
    const possibleDirections = ['z-shape-first-form', 'z-shape-second-form'];
    const [position, setPosition] = useState('z-shape-first-form');
    const [twoShapeDirection, setTwoShapeDirection] = useState('column');

    useEffect(() => {
        const random = Math.floor(Math.random() * possibleDirections.length);
        setPosition(possibleDirections[random]);
        (random === 0) ? setTwoShapeDirection('row') : setTwoShapeDirection('column');
    }, [])

    return(
        <Box className={position}>
            <TwoPieceShape propDirection={twoShapeDirection} additionalClass={'first-block'} style={style}/>
            <TwoPieceShape propDirection={twoShapeDirection} additionalClass={'second-block'}  style={style}/>
        </Box>
    );
};

export default ZShape;