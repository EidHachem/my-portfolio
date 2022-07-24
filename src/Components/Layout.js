import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const drawerWidth = 340;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    background: '#003049',
  },
});

const Layout = () => {
  const classes = useStyles();
  return (
    <div>
      <Drawer className={classes.drawer} variant="permanent" anchor="left">
        <Typography variant="h5">Eid</Typography>
      </Drawer>
    </div>
  );
};

export default Layout;
