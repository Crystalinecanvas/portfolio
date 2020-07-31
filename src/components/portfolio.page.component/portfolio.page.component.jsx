import React from 'react';
import './portfolio.page.styles.scss';

import PORTFOLIO_DATA from '../../data/portfolio.data';

import SimpleDialog from '../dialog.component/dialog.component';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';


const data = [PORTFOLIO_DATA.bostrent, PORTFOLIO_DATA.crownClothing, PORTFOLIO_DATA.lightsOut];
const useStyles = makeStyles({
    arrowRoot: {
        textDecoration: "none",
        color: "black",
        paddingTop: "2rem"
    }
});

const PortfolioPage = () => {

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(data[0]);

    const handleClickOpen = (newValue) => {
        setOpen(true);
        setSelectedValue(newValue);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const classes = useStyles();

        return(
            <div className="PortfolioPage">
                <div className="PortfolioHeaderSection">
                    <Link className={classes.arrowRoot} to="/">
                        <ArrowBackIosIcon className="Arrow-left" id="Portfolio-arrow-left" fontSize={"large"} />
                    </Link>
                    <div className="PortfolioHeader">
                        <h1>PORTFOLIO</h1>
                    </div>
                    <Link className={classes.arrowRoot} to="/about">
                        <ArrowForwardIosIcon className="Arrow-right" id="Portfolio-arrow-right" fontSize={"large"} />
                    </Link>
                </div>
                    <div className="Blue-header-underline" id="Portfolio-blue-underline" />
                <div className="PortfolioGrid">
                <Grid container spacing={1}>
                    <Grid className="Grid-item" id="Item-1" item xs={12} sm={12} sm={6} md={4}>
                        <div className="Portfolio-item">
                            <img 
                                className="bostrent-image"
                                src={require("../../imgs/bostrent.jpg")} 
                                alt="bostrent-preview" 
                            />
                            <button className="Portfolio-item-button" onClick={() => handleClickOpen(data[0])} >Learn More</button>
                        </div>
                    </Grid>
                    <Grid className="Grid-item" id="Item-2" item xs={12} sm={12} sm={6} md={4}>
                        <div className="Portfolio-item">
                            <img 
                                className="crownclothing-image"
                                src={require("../../imgs/crownclothing.jpg")} 
                                alt="crown-clothing-preview" 
                            />
                            <button className="Portfolio-item-button" onClick={() => handleClickOpen(data[1])} >Learn More</button>
                        </div>
                    </Grid>
                    <Grid className="Grid-item" id="Item-3" item xs={12} sm={12} sm={6} md={4}>
                        <div className="Portfolio-item">
                            <img 
                                className="crownclothing-image"
                                src={require("../../imgs/lightsout.jpg")} 
                                alt="lights-out-preview" 
                            />
                            <button className="Portfolio-item-button" onClick={() => handleClickOpen(data[2])}>Learn More</button>
                            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
                        </div>
                    </Grid>
                </Grid>
                </div>
            </div>    
        );
    }

export default PortfolioPage;