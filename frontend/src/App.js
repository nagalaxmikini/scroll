import React from "react";
import "./App.css";
import {
  GridList,
  GridListTile,
  makeStyles,
  ListSubheader,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import image1 from "./lightHouse.jpg";
import image2 from "./fish.jpg";
import image3 from "./gomatesha.jpg";
import image4 from "./saptotsava1.jpg";
import image5 from "./mini-idli.jpg";
import image6 from "./malpe.jpg";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const tileData = [
  { img: image6, title: "Image", author: "author", cols: 2 },
  { img: image2, title: "Image", author: "author", cols: 2 },
  { img: image2, title: "Image", author: "author", cols: 2 },
  { img: image3, title: "Image", author: "author", cols: 2 },
  { img: image5, title: "Image", author: "author", cols: 2 },
  { img: image5, title: "Image", author: "author", cols: 2 },
  { img: image1, title: "Image", author: "author", cols: 2 },
  { img: image1, title: "Image", author: "author", cols: 2 },
  { img: image1, title: "Image", author: "author", cols: 2 },
  { img: image4, title: "Image", author: "author", cols: 2 },
  { img: image5, title: "Image", author: "author", cols: 2 },
  { img: image4, title: "Image", author: "author", cols: 2 },
  { img: image5, title: "Image", author: "author", cols: 2 },
  { img: image6, title: "Image", author: "author", cols: 2 }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "auto",
    height: "auto"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  title: {
    color: "red"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListSubheader component="div">Images by different authors</ListSubheader>
      <GridList cellHeight={400} className={classes.gridList} cols={8}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${tile.title}`}
                  className={classes.icon}
                >
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default App;
