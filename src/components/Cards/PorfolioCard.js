import {
  Button,
  Card
} from "reactstrap";
import { CardContent, Typography, CardActions } from '@mui/material';

//props: name, src, description, site, repo
export default function PortfolioCard(props) {
  const openInNewTab = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  // const classes = useStyles();

  return (
    <Card variant="elevation" style={{marginTop: '0px'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>

        <img src={props.src} alt="html5-icon" className="img-stretch" />
        <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: '24px'}}>
          {props.description}
          {props.techs}
        </Typography>
      </CardContent>
      <CardActions style={{paddingLeft: '16px'}}>
        <Button
          onClick={(e) => openInNewTab(props.site)}
          variant="outlined"
          size="small"
          color="secondary"
        >
          Site
        </Button>
        {props.repo ?
          <Button
            onClick={(e) => openInNewTab(props.repo)}
            href={props.repo}
            variant="outlined"
            size="small"
            color="secondary"
          >
            Repo
          </Button>
         : null
        }
      </CardActions>
    </Card>
  );
}
