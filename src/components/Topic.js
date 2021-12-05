import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import PropTypes from 'prop-types';



function Topics(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        // m:0,
        // bgcolor: 'secondary.light',
        color: 'white',
        p: 1,
        width:"70%",
        borderRadius: 1,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Topics.propTypes = {
  sx: PropTypes.object,
};

const ariaLabel = { 'aria-label': 'description' };
const Topic = () => {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
      <Topics><h4>Topic</h4></Topics>
      <Topics><h4>Keywords</h4></Topics>

      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
      <Topics><Input sx={{width:"100%", m:0}} inputProps={ariaLabel}/></Topics>
    
    </Box>
    </div>
  );
}

export default Topic;