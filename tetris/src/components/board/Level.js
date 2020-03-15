import React, {useEffect} from 'react';
import {Box, Heading} from 'grommet'
import {connect} from 'react-redux';

const Level = (props) => {

    const {level, modifyLevel} = props;

    useEffect(() => {
            modifyLevel(1);
    }, []);

    return(
        <Box id={'main-level-box'}>
            <Heading className={'goal-heading'}> LEVEL </Heading>
            <Box id={'level-loader-box'}>
                <Heading level={2} className={'goal-heading'}> {level} </Heading>
            </Box>
        </Box>
    );
};


const mapStateToProps = (state) => {
    return{
        level: state.level,
    }
};

const mapDispatchToProps = (dispatch) => {
   return{
       modifyLevel: (newLevel) => {dispatch({type: 'MODIFY_LEVEL', data: newLevel})},
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Level);