import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import RadioIcon from "@material-ui/icons/RadioTwoTone";
import HeadsetIcon from '@material-ui/icons/Headset';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import FaceIcon from "@material-ui/icons/FaceTwoTone";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

import Signout from '../Auth/Signout';


const Header = ({ classes, currentUser }) => {
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        {/* Title, Logo  Start*/}
        <Link to="/" className={classes.grow}>
          <GraphicEqIcon className={classes.logo} color="secondary" />
          <Typography variant="headline" color="secondary" noWrap>
          ShareVideo
          </Typography>
        </Link>
        {/* Title, Logo  End*/}

        {/* Auth User Info Start */}
        {currentUser && (
          <Link to={`/profile/${currentUser.id}`} className={classes.grow}>
          <AccountCircleIcon className={classes.faceIcon}/>
          <Typography variant="headline" className={classes.username} noWrap>
          {currentUser.username}
          </Typography>
          </Link>
        )}
          {/* Auth User Info End */}

        {/* Signout Button  Start*/}
          <Signout/>
        {/* Signout Button  End*/}

      </Toolbar>
    </AppBar>
  );
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
  },
  logo: {
    marginRight: theme.spacing.unit,
    fontSize: 45
  },
  faceIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 30,
    color: "white"
  },
  username: {
    color: "white",
    fontSize: 24
  }
});

export default withStyles(styles)(Header);
