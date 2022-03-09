import React from "react";
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import FilterCard from './FilterCard';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";





let MovieGridList = ({ movies }) => {
    const navigate = useNavigate();
    let [detailmovie, setDetailMoive] = React.useState();
    let [state, useState] = React.useState();
    // let details = ({ name }) => {
    //     console.log("go details with", name)
    //     navigate('/details')
    // }

    return (
        <React.Fragment className="main" >
            {/* <div className="left-column">{id}.{name}<br />{released_date}</div> */}
            <div className="left-column">
                <GridList cellHeight={350} cols={3}
                    style={{
                        gridAutoFlow: "column",
                        gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
                        gridAutoColumns: "minmax(160px, 1fr)"

                    }}               >

                    {movies.map((img) => (
                        <GridListTile key={img.id}>
                            <GridListTileBar>{img.title}</GridListTileBar>
                            <div style={{ height: 200, cursor: 'pointer' }} onClick={() => navigate("/details", { state: { src: `${img.src}`, title: `${img.title}`, release: `${img.released_date}` } })}>

                                {<img src={require(`E:/kkkw lecture/BookMovieApp/BookMovieApp/src/assets/img/${img.src}`)} alt="poster"></img>}

                            </div>

                        </GridListTile>
                    ))


                    }
                </GridList>
            </div>

            <div className="right-column"><FilterCard></FilterCard></div>
        </React.Fragment >
    )

}
export default MovieGridList;


