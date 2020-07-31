import React from 'react';

import './contact.page.styles.scss';
import Grid from '@material-ui/core/Grid';

import ReplayIcon from '@material-ui/icons/Replay';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    arrowRoot: {
        textDecoration: "none",
        color: "black",
        paddingTop: "2rem"
    },

    phoneIconRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            color: "white",
            paddingBottom: "1.5rem",
            fontSize: "14px"
        },
        [theme.breakpoints.up('sm')]: {
            color: "white",
            paddingBottom: "4rem",
            marginRight: "0.5rem",
            fontSize: "40px"
        },
        [theme.breakpoints.up('md')]: {
            color: "white",
            paddingBottom: "3rem",
            marginRight: "1rem",
            fontSize: "55px"
        },
        [theme.breakpoints.up('lg')]: {
            color: "white",
            paddingBottom: "3rem",
            marginRight: "2rem"
        },
    },

    emailIconRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            color: "white",
            paddingTop: "1.5rem",
            fontSize: "14px"
        },
        [theme.breakpoints.up('sm')]: {
            color: "white",
            paddingTop: "2.5rem",
            marginLeft: "0.5rem",
            fontSize: "35px"
        },
        [theme.breakpoints.up('md')]: {
            color: "white",
            paddingTop: "3rem",
            marginLeft: "1rem",
            fontSize: "50px"
        },
        [theme.breakpoints.up('lg')]: {
            color: "white",
            paddingTop: "3rem",
            marginLeft: "2rem"
        },
    },

    phoneTriangleRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            backgroundColor: "#0d47a1",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "20%",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)"
        },
        [theme.breakpoints.up('sm')]: {
            backgroundColor: "#0d47a1",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "40%",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)"
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: "#0d47a1",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "40%",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)"
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: "#0d47a1",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "40%",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)"
        },
    },

    phoneTextRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            height: "20%",
            backgroundColor: "#0d47a1",  
            clipPath: "polygon(29% 0, 100% 0, 100% 100%, 0 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.up('sm')]: {
            height: "40%",
            backgroundColor: "#0d47a1",  
            clipPath: "polygon(29% 0, 100% 0, 100% 100%, 0 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.up('md')]: {
            height: "40%",
            backgroundColor: "#0d47a1",  
            clipPath: "polygon(29% 0, 100% 0, 100% 100%, 0 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.up('lg')]: {
            height: "40%",
            backgroundColor: "#0d47a1",  
            clipPath: "polygon(29% 0, 100% 0, 100% 100%, 0 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
    },

    phoneNumberRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            color: "white",
            fontSize: "18px",
            paddingLeft: "3rem"
        },
        [theme.breakpoints.up('sm')]: {
            color: "white",
            fontSize: "24px",
            paddingLeft: "5rem"
        },
        [theme.breakpoints.up('md')]: {
            color: "white",
            fontSize: "30px",
            paddingLeft: "8rem"
        },
        [theme.breakpoints.up('lg')]: {
            color: "white",
            fontSize: "30px",
            paddingLeft: "12rem"
        },
    },

    emailRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            marginBottom: "50px",
            marginTop: "50px",
            height: "20%",
            backgroundColor: "#0d47a1",  
            clipPath: "polygon(0 0, 100% 0, 71% 100%, 0 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.up('sm')]: {
            marginBottom: "50px",
            marginTop: "50px",
            height: "40%",
            backgroundColor: "#0d47a1",  
            clipPath: "polygon(0 0, 100% 0, 71% 100%, 0 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: "50px",
            marginTop: "50px",
            height: "40%",
            backgroundColor: "#0d47a1",  
            clipPath: "polygon(0 0, 100% 0, 71% 100%, 0 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: "50px",
            marginTop: "50px",
            height: "40%",
            backgroundColor: "#0d47a1",  
            clipPath: "polygon(0 0, 100% 0, 71% 100%, 0 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
    },

    emailAddressRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            color: "white",
            width: "100%",
            fontSize: "14px",
            paddingLeft: "1rem"
        },
        [theme.breakpoints.up('sm')]: {
            color: "white",
            width: "100%",
            fontSize: "18px",
            paddingRight: "4rem"
        },
        [theme.breakpoints.up('md')]: {
            color: "white",
            width: "100%",
            fontSize: "26px",
            paddingRight: "8rem"
        },
        [theme.breakpoints.up('lg')]: {
            color: "white",
            width: "100%",
            fontSize: "30px",
            paddingRight: "12rem"
        },
    },

    emailTriangleRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            marginBottom: "50px",
            marginTop: "50px",
            backgroundColor: "#0d47a1",
            height: "20%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            clipPath: "polygon(0 0, 0 100%, 100% 100%)"
        },
        [theme.breakpoints.up('sm')]: {
            marginBottom: "50px",
            marginTop: "50px",
            backgroundColor: "#0d47a1",
            height: "40%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            clipPath: "polygon(0 0, 0 100%, 100% 100%)"
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: "50px",
            marginTop: "50px",
            backgroundColor: "#0d47a1",
            height: "40%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            clipPath: "polygon(0 0, 0 100%, 100% 100%)"
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: "50px",
            marginTop: "50px",
            backgroundColor: "#0d47a1",
            height: "40%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            clipPath: "polygon(0 0, 0 100%, 100% 100%)"
        },
    },

    bottomRectangleRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            backgroundColor: "#0d47a1",
            height: "15%",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.up('sm')]: {
            backgroundColor: "#0d47a1",
            height: "20%",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: "#0d47a1",
            height: "20%",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: "#0d47a1",
            height: "20%",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
    },

    githubIconRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            color: "white",
            fontSize: "30px",
            
        },
        [theme.breakpoints.up('sm')]: {
            color: "white",
            fontSize: "30px",
            
        },
        [theme.breakpoints.up('md')]: {
            color: "white",
            fontSize: "40px",
            
        },
        [theme.breakpoints.up('lg')]: {
            color: "white",
            fontSize: "50px",
            
        },
    },

}));

const ContactPage = () => {

    const classes = useStyles();

    return(
        <div className="ContactPage">
            <div className="ContactHeaderSection">
                    <Link className={classes.arrowRoot} to="/about">
                        <ArrowBackIosIcon className="Arrow-left" id="Contact-arrow-left" fontSize={"large"} />
                    </Link>
                    <div className="ContactHeader">
                        <h1>CONTACT</h1>
                    </div>
                    <Link className={classes.arrowRoot} to="/portfolio">
                        <ReplayIcon className="Arrow-right" id="Contact-arrow-right" fontSize={"large"} />
                    </Link>
                </div>
            <div className="Blue-header-underline" id="Contact-blue-underline" />

            <div className="ContactGridContainer">
                <Grid className="ContactGrid" container spacing={1}>

                    <Grid className={classes.phoneTriangleRoot} id="Phone-triangle" item xs={2} sm={4} md={4}>
                        <PhoneIcon className={classes.phoneIconRoot} fontSize={"large"} />
                    </Grid>
                    <Grid className={classes.phoneTextRoot} id="Phone-text" item xs={10} sm={8} md={8}>
                        <p className={classes.phoneNumberRoot}>626.342.5550</p>
                    </Grid>

                    <Grid className={classes.emailRoot} id="Email-text" item xs={10} sm={8} md={8}>
                        <p className={classes.emailAddressRoot}>crystalinecanvas@gmail.com</p>
                    </Grid>
                    <Grid className={classes.emailTriangleRoot} id="Email-triangle" item xs={2} sm={4} md={4}>
                        <EmailIcon className={classes.emailIconRoot} fontSize={"large"} />
                    </Grid>

                    <Grid className={classes.bottomRectangleRoot} id="Github-polygon" item xs={8} sm={6} md={6}>
                        <a href="https://github.com/Crystalinecanvas">
                            <GitHubIcon className={classes.githubIconRoot} fontSize={"large"} />
                        </a>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}

export default ContactPage;