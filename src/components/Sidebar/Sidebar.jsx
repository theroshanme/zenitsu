import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import useStyles from "./styles";

import { useGetGenresQuery } from "../../services/TMDB";

const Categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const demoCategories = [
  { label: "Comedy", value: "comedy" },
  { label: "Action", value: "action" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];

const redLogo = "https://zoro.to/images/logo.png";
const blueLogo = "https://zoro.to/images/logo.png";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  console.log(data);

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="Zenitsu Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {Categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>

        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          data?.genres?.map(({ name, id }) => (
            <Link key={name} className={classes.links} to="/">
              <ListItem onClick={() => {}} button>
                {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon> */}
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
