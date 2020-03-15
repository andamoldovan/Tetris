import React from 'react';
import {Box} from 'grommet';
import DropScreen from "./DropScren";
import Goal from "./Goal";
import Level from './Level';

const MainScreen = () => {
    return (
        <Box id={"main-screen-box"}>
            <DropScreen />
            <Goal />
            <Level />
        </Box>
    );
};

export default MainScreen;
