import React from 'react';

import PORTFOLIO_DATA from '../../data/portfolio.data';

import './portfolio.item.styles.scss';

import SimpleDialog from '../dialog.component/dialog.component';

import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { requirePropFactory } from '@material-ui/core';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

const PortfolioItem = (props) => {

    const { title, url, image, description, lightsOutUri } = props.subject;

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div className="Portfolio-item">
            <img 
                src={props.subject.lightsOutUri} 
                alt="portfolio-item-preview" 
            />
            <p>{title}</p>
            <button className="Portfolio-item-button" onClick={handleClickOpen}>Learn More</button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}

export default PortfolioItem;