import React, {useEffect, useState} from 'react';
import {Box} from 'grommet';
import ThreePieceShape from '../component_constructs/ThreePieceShape';
import Block from "../component_constructs/Block";
import {jShapeColor, jShapeColorBorder} from "../../constants";

const style = {
    background: jShapeColor,
    border: '1px solid ' + jShapeColorBorder,
};

const JShape = () => {

    const possibleDirections = ['j-shape-first-form', 'j-shape-second-form', 'j-shape-third-form', 'j-shape-forth-form'];
    const [position, setPosition] = useState('j-shape-first-form');
    const [iShapePosition, setIShapePosition] = useState('');

    useEffect(() => {
        const random = Math.floor(Math.random() * possibleDirections.length);
        setPosition(possibleDirections[random]);
        (random === 0 || random === 2) ? setIShapePosition('row') : setIShapePosition('column');
    }, []);

    return(
        <Box alignContent={"end"} fill={'true'} className={'two-row-shapes-' + iShapePosition + ' ' + position}>
            <ThreePieceShape propDirection={iShapePosition} style={style}/>
            <Block style={style}/>
        </Box>
    );
};

export default JShape;