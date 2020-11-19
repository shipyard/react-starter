import logo from './logo.svg';
import './App.css';

import {
  Box,
  Container,
  Link,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appHeader: {
    fontSize: "calc(10px + 2vmin)",
  },
  paragraph: {
    fontSize: "calc(10px + 2vmin)",
    margin: "1rem 0"
  },
  link: {
    color: "#61dafb",
    marginBottom: "1rem"
  }
})

function App() {
  const classes = useStyles();
  
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
    >
      <Box
        className={classes.appHeader}
        bgcolor="#282c34"
        minHeight="100vh"
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <img src={logo} className="App-logo" alt="logo" />
        <Typography className={classes.paragraph}>
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <Link
          className={classes.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
        >
          Learn React
        </Link>
        <Link
          className={classes.link}
          href="https://material-ui.com/getting-started/templates/"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
        >
          See more Material-UI templates
        </Link>
      </Box>
    </Container>
  );
}

export default App;
