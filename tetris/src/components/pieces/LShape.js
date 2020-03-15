import React, {useState, useEffect} from 'react';
import Block from '../component_constructs/Block';
import ThreePieceShape from '../component_constructs/ThreePieceShape'
import {Box} from 'grommet';
import {backgroundIsDark} from "grommet/utils";
import {lShapeColor, lShapeColorBorder} from "../../constants";

const style = {
    background: lShapeColor,
    border: '1px solid ' + lShapeColorBorder,
};

const LShape = () => {
    const possibleDirections = ['l-shape-first-form', 'l-shape-second-form', 'l-shape-third-form', 'l-shape-forth-form'];
    const [position, setPosition] = useState('l-shape-first-form');
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

export default LShape;