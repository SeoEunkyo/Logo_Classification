import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Button, Card, Container, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from "@material-ui/core/LinearProgress";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { Line } from 'rc-progress';
// import axios, { post } from 'axios';
import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(3),
  },
  colorPrimary: {
    color: "green",
  }
}));




function App() {

  const pciRef = useRef();
  const classes = useStyles();
  const [tragePhotoURL, setTargetPhotoURL] = React.useState();
  const [isProgress, setIsProgress] = React.useState(false);
  const [tragePhoto, setTargetPhoto] = React.useState();
  const [firstLabel, setFirstLabel] = React.useState();
  const refs = React.useRef();


  let modelURL = `https://teachablemachine.withgoogle.com/models/kQGLLcyo6/`;


  const onFileChange = (event) => {
    console.log('event.target.files[0] : ', event.target.files[0]);
    setTargetPhoto(event.target.files[0]);
    setTargetPhotoURL(URL.createObjectURL(event.target.files[0]));
  }


  const classifier = ml5.imageClassifier(modelURL + 'model.json', () => { console.log('loaded ml5') });

  const getBrandName = () => {
    setIsProgress(true);
    const image = document.getElementById('image');
    console.log('image : ', tragePhotoURL);
    classifier.classify(image, (error, results) => {
      setIsProgress(false);
      if (error) {
        console.error(error);
        return;
      }
      
      //setFirstLabel({lable :  results[0].label , value : (results[0].confidence*100)})
      console.log('result : ', results);
      alert(results[0].label + ' : '+ (results[0].confidence*100) )
    });

  }


  return (
    <div className="App">
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={onFileChange} />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>

        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
          onClick={getBrandName}
        >
          Check the Brand
          </Button>
        <br />
        <br />
      </Container>



      
      <br />
      <br />
      <Container>
        <img id="image" style={{ maxWidth: '100%' }} src={tragePhotoURL ? tragePhotoURL : "http://placeimg.com/640/480/any"} ref={refs} />
      </Container>

    </div>
    
  );
}

export default App;
