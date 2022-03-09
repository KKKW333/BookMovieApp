import React from "react";
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Home.css";
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from "@material-ui/core";
import DatePicker from '@mui/lab/DatePicker';



const FilterCard = () => {
    // const classes = useStyles();

    const [anchorEl, open] = React.useState(null);
    const handleClick = event => {
        open(event.currentTarget);
    };

    const handleClose = () => {
        open(null);
    };
    const [genres, setGenres] = React.useState([
        "Drama", "Romance", "Horror", "Actioi", "Crime", "Thriller", "Polities"
    ])
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(
            [...checked, event.target.checked]);
    };


    const [artists, setArtists] = React.useState([
        "AA", "BB", "CC", "DD", "FF"
    ])
    const [artists_checked, setArtChecked] = React.useState(true);
    const handleArtistsChange = (event) => {
        setArtChecked(
            [...artists_checked, event.target.checked]);
    };

    return (
        <Card className=".card" variant="outlined">
            <CardContent>
                <Typography className="card bullet" color="textSecondary" gutterBottom>
                    FIND MOVIES BY:
                </Typography>
                <Typography variant="h5" component="h2">
                    <FormControl>
                        <InputLabel htmlFor="moviename">Movie Name</InputLabel>
                        <Input id="my-moviename" aria-describedby="my-helper-text" />
                        <div>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Genres
                            </Button>
                            <Menu
                                id="Menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {/* <MenuItem onClick={handleClose}>About</MenuItem>
                                <MenuItem onClick={handleClose}>Contact</MenuItem> */}
                                {
                                    genres.map(genre => (
                                        <MenuItem ><Checkbox onChange={handleChange} value={genre} />{genre}</MenuItem>
                                    ))
                                }
                            </Menu>
                        </div>
                        <div>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleArtistsChange}
                            >
                                {
                                    artists.map((artist) => (
                                        <MenuItem ><Checkbox onChange={handleChange} value={artist} />{artist}</MenuItem>
                                    ))
                                }

                            </Select>
                        </div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Release Date Start"
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Release Date End"
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>

                        </div>

                    </FormControl>
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary">
                    APPLY
                </Button>
            </CardActions>
        </Card>
    );
}
export default FilterCard;
