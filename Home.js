import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import "./Home.css";
import "./model.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

////////////Panel/////////////
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//login input//
import TextField from '@material-ui/core/TextField';

import UpComingMoveList from "./UpComingMovieList";

const RegisterModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal fade" : "modal display-none";

    return (
        <div className={showHideClassName} id="myModal" data-backdrop="false" role="dialog">
            <section className="modal-main">
                {children}
                <BasicTabs />
            </section>
        </div>
    );
};
export function BasicTabs() {
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Login" {...a11yProps(0)} />
                    <Tab label="Register" {...a11yProps(1)} />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <LoginForm />

            </TabPanel>
            <TabPanel value={value} index={1}>
                <RegisterFrom />
            </TabPanel>

        </Box>
    );
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function LoginForm() {
    const [login, setLogin] = React.useState('');
    const loginsubmit = () => {

    }


    return (
        <form noValidate autoComplete="off">
            <TextField id="standard-secondary"
                label="user name *"
                color="secondary" /><br /><br /><br />
            <TextField id="standard-secondary"
                type="password"
                label="password *"
                color="secondary" />
            <button type="button" onClick={loginsubmit}>
                Login
            </button>

        </form>
    );
}


function RegisterFrom() {

    let [register, setRegister] = React.useState('');
    const registersubmit = () => {
        setRegister("Registration Successful! Please log in.")

    }

    const RegisterSubmit = () => {
        return (
            <div>{register}</div>
        )
    }


    return (
        <form noValidate autoComplete="off">
            <TextField id="standard-secondary"
                label="Frist Name"
                color="secondary" required /><br /><br />
            <TextField id="standard-secondary"
                label="Last Name"
                color="secondary" /><br /><br />
            <TextField id="standard-secondary"
                label="Email"
                type="email"
                color="secondary" /><br /><br />

            <TextField id="standard-secondary"
                type="password"
                label="Password"
                color="secondary" /><br /><br />
            <TextField id="standard-secondary"
                label="Contact No:"
                color="secondary" /><br /><br />
            <RegisterSubmit />
            <button type="button" onClick={registersubmit}>
                Register
            </button>
        </form>
    );
}
export const Buttons = () => {
    const [show, setShow] = React.useState()
    const showModal = () => {
        setShow(true)
    };

    const hideModal = () => {
        setShow(false)
    };
    return (
        <div>

            <RegisterModal show={show} handleClose={hideModal} />

            <div className='header-button'>
                <Button variant="contained" color="primary" name='bookshow' > Book Show</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" name="login" onClick={showModal}>Login</Button>
            </div>

        </div>
    );
}

const UpComingMovie = () => {
    return (
        <div className="upcoming">
            Upcoming Movie
        </div>
    )
}

const Home = () => {
    return (
        <Fragment>
            <div className='header'>
                <img src="#" className='logo' alt='logo'></img>
                <Buttons />
            </div>
            <div><UpComingMovie /></div>
            <div><UpComingMoveList /></div>
        </Fragment>
    )
}
export default Home;