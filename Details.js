import React from "react";
import { useNavigate } from 'react-router-dom';
// import { Icon } from '@iconify/react';
// import lessThan from '@iconify/icons-mdi/less-than';
import "./Details.css";
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { useLocation } from "react-router-dom";



function Details() {
    const navigate = useNavigate();
    const location = useLocation();
    const { src, title, release } = location.state;

    const [artists, setArtists] = React.useState([
        {
            id: 1,
            firstname: 'AA',
            lastname: 'BB'
        }
    ]);

    return (
        <div>

            {/* <Icon icon={lessThan} /> */}
            <button className="backbtn" onClick={() => navigate(-1)}>Go back</button>
            <div className="detailcontainer">
                <div class="col-side" id="col1" style={{ height: 200 }} >
                    <img src={require(`E:/kkkw lecture/BookMovieApp/BookMovieApp/src/assets/img/${src}`)} alt="poster" />
                </div>
                <div class="col" id="col2">
                    Title: {title} <br />
                    Released Date: {release}<br />
                    <img src={require(`E:/kkkw lecture/BookMovieApp/BookMovieApp/src/assets/img/${src}`)} alt="poster" width={500} />



                </div>
                <div class="col-side" id="col3">
                    Rate this movie

                    <GridList cellHeight={350} cols={2}
                        style={{
                            gridAutoFlow: "column",
                            gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
                            gridAutoColumns: "minmax(160px, 1fr)"

                        }}>
                        {artists.map((aa) => (
                            <GridListTile key={aa.id}>
                                <GridListTileBar>`${aa.firstname} ${aa.lastname}`</GridListTileBar>

                            </GridListTile>
                        ))


                        }

                    </GridList>

                </div>
            </div>
        </div>

    );
}
export default Details;