import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CheckIcon from '@material-ui/icons/Check';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  dialogIconRoot: {
    paddingRight: "1rem"
  }
}));

export default function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const { title, description, url, features, whatILearned } = selectedValue;

  const handleClose = () => {
    onClose();
  };

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
      <List>
          <ListItem>
              <Typography>
                <Link href={url}>
                  {url}
                </Link>
                <ListItemText secondary="*Please note, Heroku apps may take a bit longer to load than other websites*" />
              </Typography>
          </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemText primary={description} />
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemText primary="Features" />
        </ListItem>
        {features.map((feature) => (
          <ListItem>
            <CheckIcon className={classes.dialogIconRoot} fontSize="small" />
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem>
          <ListItemText primary="What I Learned" />
        </ListItem>
        {whatILearned.map((learned) => (
          <ListItem>
            <EmojiObjectsIcon className={classes.dialogIconRoot} fontSize="small" />
            <ListItemText primary={learned} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
