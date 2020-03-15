import React, {useState, useEffect} from 'react';
import Block from '../component_constructs/Block';
import {Box} from 'grommet';
import {iShapeColor, iShapeColorBorder} from "../../constants";

const style = {
    background: iShapeColor,
    border: '1px solid ' + iShapeColorBorder,
}

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
            <Block style={style}/>
            <Block style={style}/>
            <Block style={style}/>
            <Block style={style}/>
        </Box>
    );
};

export default IShape;
