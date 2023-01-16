import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card
} from "reactstrap";
// import {
//   CardActions,
//   CardContent,
//   Typography,
// } from "@material-ui/core";
import { CardContent, Typography, CardActions } from '@mui/material';

//props: name, src, description, site, repo
export default function PortfolioCard(props) {
  const openInNewTab = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  // const classes = useStyles();

  return (
    <Card variant="elevation">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>

        <img src={props.src} classes="icon-1" alt="html5-icon" />
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
          {props.techs}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={(e) => openInNewTab(props.site)}
          // href={props.site}
          variant="outlined"
          size="small"
          color="secondary"
        >
          Site
        </Button>

        <Button
          onClick={(e) => openInNewTab(props.repo)}
          // href={props.repo}
          variant="outlined"
          size="small"
          color="secondary"
        >
          Repo
        </Button>
      </CardActions>
    </Card>
  );
}
