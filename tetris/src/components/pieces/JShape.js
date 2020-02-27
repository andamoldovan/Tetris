import React, {useEffect, useState} from 'react';
import {Box} from 'grommet';
import IShape from "./IShape";
import Block from "./Block";

const JShape = () => {

    const possibleDirections = ['j-shape-first-form', 'j-shape-second-form', 'j-shape-third-form', 'j-shape-forth-form'];
    const [position, setPosition] = useState('j-shape-first-form');
    const [iShapePosition, setIShapePosition] = useState('');

    useEffect(() => {
        const random = Math.floor(Math.random() * possibleDirections.length);
        setPosition(possibleDirections[random]);
        (random === 0 || random === 2) ? setIShapePosition('row') : setIShapePosition('column');
        console.log("RANDOM");
        console.log(random);
        console.log((random === 0 || random === 2));
    }, []);

    return(
        <Box alignContent={"end"} fill={'true'} className={'two-row-shapes-' + iShapePosition + ' ' + position}>
            <IShape propDirection={iShapePosition}/>
            <Block />
        </Box>
    );
};

export default JShape;