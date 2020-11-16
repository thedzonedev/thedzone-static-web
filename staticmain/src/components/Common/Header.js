import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import './Common.css'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'block'
    },
    sectitle: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        margin: theme.spacing(2)
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(1),
        height: '100%',
        position: 'relative',
        pointerEvents: 'none',
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    backcolor: {
        backgroundColor: '#3D80E4',
        padding: theme.spacing(3)
    }
}));

export default function Header() {
    const classes = useStyles();
    const [show, setShow] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        if (!show) {
            document.getElementById('line2').setAttribute('class', 'line2hide')
            document.getElementById('line1').setAttribute('class', 'rotateminus45')
            document.getElementById('line3').setAttribute('class', 'rotate45')
            setShow(true)
        }
        else {
            document.getElementById('line2').setAttribute('class', '')
            document.getElementById('line1').setAttribute('class', '')
            document.getElementById('line3').setAttribute('class', '')
            setShow(false)
        }
    };

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.backcolor}>
                    <Typography className={classes.title} variant="h4" noWrap>
                        CANVAS
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Typography className={classes.sectitle} variant="h10" noWrap>
                            Home
                        </Typography>
                        <Typography className={classes.sectitle} variant="h10" noWrap>
                            Features
                        </Typography>
                        <Typography className={classes.sectitle} variant="h10" noWrap>
                            About
                        </Typography>
                        <Typography className={classes.sectitle} variant="h10" noWrap>
                            Pricing
                        </Typography>
                        <Typography className={classes.sectitle} variant="h10" noWrap>
                            Contact
                        </Typography>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            style={{
                                textDecoration: "none"
                            }}
                        >
                            <div id='toggle' class="burger">
                                <div id='line1'></div>
                                <div id='line2'></div>
                                <div id='line3'></div>
                            </div>
                        </IconButton>

                    </div>
                </Toolbar>
                {show ?
                    <div style={{
                        background: "white",
                        color: 'black'
                    }} >
                        <ul style={{
                            listStyle: 'none',
                        }}>
                            <li>Home</li>
                            <li>Features</li>
                            <li>About</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </div> : <div></div>}
            </AppBar>
        </div>
    );
}
