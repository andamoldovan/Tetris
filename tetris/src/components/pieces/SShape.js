import React, {useEffect, useState} from 'react';
import TwoPieceShape from "../component_constructs/TwoPieceShape";
import {Box} from 'grommet';
import {sShapeColor, sShapeColorBorder} from "../../constants";

const style = {
    background: sShapeColor,
    border: '1px solid ' + sShapeColorBorder
};

const SShape = () => {
    // z and s only have two DIFFERENT rotations
    const possibleDirections = ['s-shape-first-form', 's-shape-second-form'];
    const [position, setPosition] = useState('s-shape-first-form');
    const [twoShapeDirection, setTwoShapeDirection] = useState('column');

    useEffect(() => {
        const random = Math.floor(Math.random() * possibleDirections.length);
        setPosition(possibleDirections[random]);
        (random === 0) ? setTwoShapeDirection('row') : setTwoShapeDirection('column');
    }, []);

    return(
        <Box className={position}>
            <TwoPieceShape propDirection={twoShapeDirection} additionalClass={'first-block'} style={style}/>
            <TwoPieceShape propDirection={twoShapeDirection} additionalClass={'second-block'} style={style}/>
        </Box>
    );
};

export default SShape;