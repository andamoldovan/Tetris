import React, {useState, useEffect} from 'react';
import Block from './Block';
import IShape from "./IShape";
import {Box} from 'grommet';

const LShape = () => {
    const possibleDirections = ['l-shape-first-form', 'l-shape-second-form', 'l-shape-third-form', 'l-shape-forth-form'];
    const [position, setPosition] = useState('l-shape-first-form');
    const [iShapePosition, setIShapePosition] = useState('');

    return(
        <Box alignContent={"end"} fill={'true'} className={'two-row-shapes-' + iShapePosition + ' ' + position}>
            <IShape propDirection={iShapePosition}/>
            <Block />
        </Box>
    );
}