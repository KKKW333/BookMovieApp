import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import MovieGridList from "./MovieGridList";

const UpComingMoveList = () => {
    let [movies, setImg] = React.useState([
        {
            id: 1,
            title: "Jocker",
            src: "one.jpg",
            released_date: '02-1-2000'
        },
        {
            id: 2,
            title: "The GodFather",
            src: "two.jpg",
            released_date: '02-2-2000'
        },
        {
            id: 3,
            title: "The Hill",
            src: "three.jpg",
            released_date: '02-3-2000'
        },
        {
            id: 4,
            title: "The Silence of the lambs",
            src: "four.jpg",
            released_date: '02-4-2000'
        },
        {
            id: 5,
            title: "Adventures",
            src: "five.jpg",
            released_date: '02-5-2000'
        },
        {
            id: 6,
            title: "Movie Name",
            src: "six.jpg",
            released_date: '02-6-2000'
        }

    ]);

    return (
        <div>
            {<GridList cellHeight={200} cols={5}
                style={{
                    gridAutoFlow: "column",
                    gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
                    gridAutoColumns: "minmax(160px, 1fr)",
                    flexWrap: "nowrap",
                    overflowX: "scroll",
                }}

            >


                {movies.map((img) => (

                    <GridListTile key={img.id}>
                        <div style={{ height: 200 }} >
                            {<img src={require(`E:/kkkw lecture/BookMovieApp/BookMovieApp/src/assets/img/${img.src}`)} alt="poster"></img>}

                        </div>

                    </GridListTile>
                ))


                }
            </GridList>
            }
            <br /><br />

            <MovieGridList movies={movies}></MovieGridList>

        </div >
    )
}
export default UpComingMoveList;