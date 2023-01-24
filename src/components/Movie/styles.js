import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    paddingBottom: "20px",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    width: "240px",
    height: "300px",
    overflow: "hidden",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
  },
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: "20px",
    height: "300px",
    marginBottom: "10px",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));
