import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="80%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={65}>
        <Typography variant="body2" color="primary">{props.value}/{props.limite}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
  limite: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',

  },
});

export default function LinearWithValueLabel(props) {
  const classes = useStyles();
  const [progress, setProgress] = useState(props.question.length);

  useEffect(() => {

    setProgress((prevProgress) => (prevProgress >= props.indexAtual ? 1 : prevProgress + 1));

  }, [props.indexAtual]);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} limite={props.question.length} />
    </div>
  );
}
