import React from 'react';
import Block from './Block';
import {Box} from 'grommet';

const OShape = () => {
    return(
        <Box className={'o-shape-main-class'} direction={'column'}>
            <Box className={'o-shape-first-lever'} direction={'row'}>
                <Block />
                <Block />
            </Box>
            <Box className={'o-shape-second-lever'} direction={'row'}>
                <Block />
                <Block />
            </Box>
        </Box>
    );
};

export default OShape;