import React from 'react';
import {Box, Heading} from 'grommet';

const Goal = () => {
    return (
        <Box id={'goal-main-box'}>
            <Heading className={'goal-heading'}> GOAL </Heading>
            <Heading className={'goal-heading'} level={2}> 10 </Heading>
        </Box>
    )
};

export default Goal;