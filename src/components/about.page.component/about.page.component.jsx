import React from 'react';
import './about.page.styles.scss';
import Grid from '@material-ui/core/Grid';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import MongoLogo from '../../imgs/mongodb.png';
import jQueryLogo from '../../imgs/jqueryWhite.png';
import ExpressIcon from '../express.icon.component/express.icon.component';
import ExpressSmallIcon from '../express.icon.component/express.icon.small.component';

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    arrowRoot: {
        textDecoration: "none",
        color: "black",
        paddingTop: "2rem"
    },

    pictureRoot: {
        height: "100%",
        backgroundColor: "#0d47a1",
        clipPath: "polygon(0 0, 100% 0, 71% 100%, 0 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    profileImageRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            maxWidth: "80%",
            maxHeight: "85%",
            paddingRight: "7rem",
            filter: "grayscale(100%)"
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: "80%",
            maxHeight: "90%",
            paddingRight: "7rem",
            filter: "grayscale(100%)"
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: "80%",
            maxHeight: "70%",
            paddingRight: "5rem",
            filter: "grayscale(100%)"
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: "80%",
            maxHeight: "90%",
            paddingRight: "7rem",
            filter: "grayscale(100%)"
        },
    },

    hiddenIntroTextRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            color: "white",
            width: "60%",
            paddingLeft: "7.5rem",
            overflow: "scroll"
        },
        [theme.breakpoints.up('sm')]: {
            color: "white",
            width: "63%",
            paddingLeft: "9.25rem",
            overflow: "scroll"
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
    },

    introRoot: {
        marginBottom: "50px",
        height: "100%",
        backgroundColor: "#0d47a1",  
        clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    introTextRoot: {
        color: "white",
        width: "80%",
        paddingLeft: "5rem",
        overflow: "scroll"
    },

    introLinkRoot: {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold"
    },

    paddedRoot: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "50px",
        height: "100%",
        backgroundColor: "#0d47a1",
        margin: "0",
        padding: "0",  
        clipPath: "polygon(33% 0, 100% 0, 100% 100%, 0 100%)"
    },

    triangleRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            marginTop: "50px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
            backgroundColor: "#0d47a1",
            height: "40%",
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)"
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: "50px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
            backgroundColor: "#0d47a1",
            height: "30%",
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)"
        },
        [theme.breakpoints.up('md')]: {
            marginTop: "50px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
            backgroundColor: "#0d47a1",
            height: "40%",
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)"
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: "50px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
            backgroundColor: "#0d47a1",
            height: "60%",
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)"
        },
    },

    invertedTriangleRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            marginTop: "50px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
            backgroundColor: "#0d47a1",
            height: "40%",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)"
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: "50px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "50px",
            backgroundColor: "#0d47a1",
            height: "30%",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)"
        },
        [theme.breakpoints.up('md')]: {
            marginTop: "50px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "50px",
            backgroundColor: "#0d47a1",
            height: "40%",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)"
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: "50px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "50px",
            backgroundColor: "#0d47a1",
            height: "60%",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)"
        },
    },

    iconTextRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            color: "white",
            display: "none",
            marginTop: "0px",
            paddingTop: "0px"
        },
        [theme.breakpoints.up('sm')]: {
            color: "white",
            display: "flex",
            marginTop: "0px",
            paddingTop: "0.25rem",
            fontSize: "12px"
        },
        [theme.breakpoints.up('md')]: {
            color: "white",
            display: "flex",
            marginTop: "0px",
            paddingTop: "0px",
            fontSize: "16px",
            marginTop: "1rem"
        },
        [theme.breakpoints.up('lg')]: {
            color: "white",
            display: "flex",
            marginTop: "0px",
            paddingTop: "0px",
            fontSize: "24px",
            marginTop: "2.5rem"
        },
    },

    mongoIconTextRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            color: "white",
            display: "none",
            marginTop: "0px",
            paddingTop: "0px"
        },
        [theme.breakpoints.up('sm')]: {
            color: "white",
            display: "flex",
            marginTop: "0px",
            paddingTop: "0rem",
            fontSize: "11px"
        },
        [theme.breakpoints.up('md')]: {
            color: "white",
            display: "flex",
            marginTop: "0px",
            paddingTop: "0px",
            fontSize: "16px",
            marginTop: "0.5rem"
        },
        [theme.breakpoints.up('lg')]: {
            color: "white",
            display: "flex",
            marginTop: "0px",
            paddingTop: "0px",
            fontSize: "24px",
            marginTop: "2rem"
        },
    },

    expressIconRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            display: "flex"
        },
        [theme.breakpoints.up('sm')]: {
            display: "flex"
        },
        [theme.breakpoints.up('md')]: {
            display: "flex"
        },
        [theme.breakpoints.up('lg')]: {
            display: "flex"
        },
    },

    hideOnMobileSpanRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            display: "flex"
        },
        [theme.breakpoints.up('sm')]: {
            display: "flex"
        },
        [theme.breakpoints.up('md')]: {
            display: "flex"
        },
        [theme.breakpoints.up('lg')]: {
            display: "flex"
        },
    },
}));

const AboutPage = () => {

    const classes = useStyles();

        return(
            <div className="AboutPage">
                <div className="AboutHeaderSection">
                    <Link className={classes.arrowRoot} to="/portfolio">
                        <ArrowBackIosIcon className="Arrow-left" id="Arrow-left" fontSize={"large"} />
                    </Link>
                    <div className="AboutHeader">
                        <h1>ABOUT</h1>
                    </div>
                    <Link className={classes.arrowRoot} to="/contact">
                        <ArrowForwardIosIcon className="Arrow-right" id="Arrow-right" fontSize={"large"} />
                    </Link>
                </div>
                <div className="Blue-header-underline" id="Blue-header-underline-left"/>
                
                <div className="AboutTriangleDisplay">
                    <Grid className="TriangleGrid" container spacing={1}>
                        <Grid className={classes.pictureRoot} id="about-picture-polygon" item  xs={12} sm={12} md={5}>
                            <img 
                                className={classes.profileImageRoot}
                                src={require("../../imgs/profileforportfolio.jpg")} 
                                alt="bostrent-preview" 
                            />
                        </Grid>
                            <Hidden smDown={true}>
                                <Grid className={classes.introRoot} id="about-intro-polygon" item xs={6} sm={6} md={7}>
                                    <p className={classes.introTextRoot}>
                                        I develop front-end or full-stack applications in Boston, MA, or remotely.
                                        I'm interested in working with motivated teams to bring designs to life with
                                        precision.
                                        <br /><br /> 
                                        I enjoy learning new technology, and I adapt quickly to the needs
                                        of my clients to deliver intuitive and responsive UI functionality. 
                                        <br /><br />
                                        I am also
                                        an audio engineer and avid music enthusiast who loves a good chat. Feel free
                                        to <Link className={classes.introLinkRoot} to="/contact">contact me
                                        </Link> for a copy of my resume.
                                    </p>
                                </Grid>
                            </Hidden>
                            <Hidden mdUp={true}>
                                <Grid className={classes.paddedRoot} id="about-intro-polygon" item xs={12} >
                                    <p className={classes.hiddenIntroTextRoot}>
                                        I develop front-end or full-stack applications in Boston, MA, or remotely.
                                        I'm interested in working with motivated teams to bring designs to life with
                                        precision.<Link className={classes.introLinkRoot} to="/contact">contact me
                                        </Link> for a copy of my resume.
                                    </p>
                                </Grid>
                            </Hidden>

                        <Grid className="Blue-header-underline" id="Blue-header-underline-right" item xs={12} >
                        </Grid>
                        <h4 id="Familiar-text">I AM MOST FAMILIAR WITH</h4>
                        <Grid className="Blue-header-underline" id="Blue-header-underline-left2" item xs={12} >
                        </Grid>

                        <Grid className={classes.triangleRoot} item  xs={12} sm={3} md={3}>
                            <i className="fab fa-js" id="jsIcon" />
                            <p className={classes.iconTextRoot}>
                                JavaScript
                            </p>
                        </Grid>
                        <Grid className={classes.invertedTriangleRoot} item  xs={12} sm={3} md={3}>
                            <i className="fab fa-react" id="reactIcon" />
                            <p className={classes.iconTextRoot}>
                                ReactJS
                            </p>
                        </Grid>
                        <Grid className={classes.triangleRoot} item  xs={12} sm={3} md={3}>
                            <Hidden smUp>
                                <ExpressSmallIcon id="expressSmallIcon" fill="white" className={classes.expressIconRoot} />
                            </Hidden>
                            <Hidden only="xs">
                                <ExpressIcon id="expressSmallIcon" fill="white" className={classes.expressIconRoot} />
                            </Hidden>
                        </Grid>
                        <Grid className={classes.invertedTriangleRoot} item  xs={12} sm={3} md={3}>
                            <img className="Mongo-image" src={MongoLogo} alt="mongo-db-logo" />
                            <p className={classes.mongoIconTextRoot}>
                                MongoDB
                            </p>
                        </Grid>

                        <Grid className={classes.invertedTriangleRoot} item  xs={12} sm={3} md={3}>
                            <i className="fab fa-html5" id="HTMLIcon" />
                            <p className={classes.iconTextRoot}>
                                HTML
                            </p>
                        </Grid>
                        <Grid className={classes.triangleRoot} item  xs={12} sm={3} md={3}>
                            <i className="fab fa-css3-alt" id="CSSIcon" />
                            <p className={classes.iconTextRoot}>
                                CSS
                            </p>
                        </Grid>
                        <Grid className={classes.invertedTriangleRoot} item  xs={12} sm={3} md={3}>
                            <i className="fab fa-sass" id="SassIcon" />
                            <p className={classes.iconTextRoot}>
                                Sass
                            </p>
                        </Grid>
                        <Grid className={classes.triangleRoot} item  xs={12} sm={3} md={3}>
                            <i className="fab fa-node-js" id="NodeIcon" />
                            <p className={classes.iconTextRoot}>
                                NodeJS
                            </p>
                        </Grid>

                        <Grid className="Blue-header-underline" item xs={12} >
                        </Grid>
                        <h4>I HAVE WORKED WITH</h4>
                        <Grid className="Blue-header-underline" item xs={12} >
                        </Grid>

                        <Grid className={classes.triangleRoot} id="jQuery-triangle" item  xs={12} sm={3} md={3}>
                            <img className="jQuery-image" src={jQueryLogo} alt="j-query-logo" />
                                <p className={classes.iconTextRoot}>
                                    jQuery
                                </p>
                        </Grid>

                    </Grid>
                </div>
            </div>
        );
    }

export default AboutPage;