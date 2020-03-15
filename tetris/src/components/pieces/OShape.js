import React from 'react';
import Block from '../component_constructs/Block';
import {Box} from 'grommet';
import {oShapeColor, oShapeColorBorder} from "../../constants";

const style = {
    background: oShapeColor,
    border: '1px solid ' + oShapeColorBorder
};

const OShape = () => {
    return(
        <Box className={'o-shape-main-class'} direction={'column'}>
            <Box className={'o-shape-first-lever'} direction={'row'}>
                <Block style={style}/>
                <Block style={style}/>
            </Box>
            <Box className={'o-shape-second-lever'} direction={'row'}>
                <Block style={style}/>
                <Block style={style}/>
            </Box>
        </Box>
    );
};

export default OShape;