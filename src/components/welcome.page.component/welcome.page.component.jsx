import React from 'react';
import './welcome.page.styles.scss';

import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import { Link } from 'react-router-dom';

import Particles from 'react-tsparticles';



const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[900]),
      backgroundColor: blue[900],
      '&:hover': {
        backgroundColor: blue[800],
        opacity: "0.85"
      },
      width: "250px",
      height: "50px",
      opacity: "0.95"
    },
  }))(Button);

const useStyles = makeStyles((theme) => ({
    typeRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            width: "250px",
            color: "white",
            fontSize: "12px",
            zIndex: "1",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            fontFamily: "Roboto",
            margin: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
        },
        [theme.breakpoints.up('sm')]: {
            width: "250px",
            color: "white",
            fontSize: "20px",
            zIndex: "1",
            width: "100%",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Roboto",
            margin: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingBottom: "5rem"
        },
        [theme.breakpoints.up('md')]: {
            width: "250px",
            color: "white",
            fontSize: "24px",
            zIndex: "1",
            width: "100%",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Roboto",
            margin: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingBottom: "7rem"
        },
        [theme.breakpoints.up('lg')]: {
            width: "250px",
            color: "white",
            fontSize: "30px",
            zIndex: "1",
            width: "100%",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Roboto",
            margin: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingBottom: "10rem"
        },
    },

    buttonRoot: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            width: "150px",
            height: "35px",
            fontSize: "12px"
        },
        [theme.breakpoints.up('sm')]: {
           width: "225px",
           height: "45px",
           fontSize: "16px"
        },
        [theme.breakpoints.up('md')]: {
            width: "250px",
            height: "50px",
            fontSize: "18px"
        },
        [theme.breakpoints.up('lg')]: {
            width: "250px",
            height: "50px",
            fontSize: "18px"
        },
    },
}));


const WelcomePage = () => {

        const typeClasses = useStyles();

        return(
            <div className='WelcomePage'>
                <Particles
                    className="WelcomeParticles"
                    id="tsparticles"
                    options={{
                                background: {
                                    color: {
                                    value: "#000000",
                                    },
                                },
                                fpsLimit: 60,
                                interactivity: {
                                    detectsOn: "canvas",
                                    events: {
                                    onClick: {
                                        enable: false,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "grab",
                                    },
                                    resize: true,
                                    },
                                    modes: {
                                    bubble: {
                                        distance: 400,
                                        duration: 2,
                                        opacity: 0.8,
                                        size: 40,
                                    },
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                    },
                                },
                                particles: {
                                    color: {
                                    value: "#ffffff",
                                    },
                                    links: {
                                    color: "#0d47a1",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                    },
                                    collisions: {
                                    enable: true,
                                    },
                                    move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: false,
                                    speed: 6,
                                    straight: false,
                                    },
                                    number: {
                                    density: {
                                        enable: true,
                                        value_area: 800,
                                    },
                                    value: 200,
                                    },
                                    opacity: {
                                    value: 0.5,
                                    },
                                    shape: {
                                    type: "circle"
                                    },
                                    size: {
                                    random: true,
                                    value: 5,
                                    },
                                },
                                detectRetina: true,
                    }}
                />
            <div className={typeClasses.typeRoot}>
                <h1>Hello, my name is Joshua Kern, </h1>
                <h1>and I make websites</h1>
            </div>
                <div className="Link-button">
                    <Link to="/portfolio">
                        <ColorButton className={typeClasses.buttonRoot} variant="contained" color="primary">
                            View my work
                        </ColorButton>
                    </Link>
                </div>
            </div>
        );
    }

export default WelcomePage;