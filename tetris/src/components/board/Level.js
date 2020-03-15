import React from 'react';
import {Box, Heading} from 'grommet'

const Level = () => {
    return(
        <Box id={'main-level-box'}>
            <Heading className={'goal-heading'}> LEVEL </Heading>
            <Box id={'level-loader-box'}>
                <Heading level={2} className={'goal-heading'}> 2 </Heading>
            </Box>
        </Box>
    );
};

export default Level;