import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faImage
} from "@fortawesome/free-solid-svg-icons";
import ml5 from "ml5";
import "./style/services.css";

const modelURL = `https://teachablemachine.withgoogle.com/models/kQGLLcyo6/`;

const classifier = ml5.imageClassifier(modelURL + 'model.json', () => { console.log('loaded ml5') });

const Services = () => {
    const [tragePhotoURL, setTargetPhotoURL] = useState();
    const [isProgress, setIsProgress] = useState(false);
    const [tragePhoto, setTargetPhoto] = useState();

    const onFileChange = (event) => {
        console.log('event.target.files[0] : ', event.target.files[0]);
        setTargetPhoto(event.target.files[0]);
         setTargetPhotoURL(URL.createObjectURL(event.target.files[0])) ;
    }
    const loadPicture = 
        <span>
            <input accept="image/*" id="icon-button-file" type="file" onChange={onFileChange} style={{ display: 'none' }} />
            <label htmlFor="icon-button-file">
                <FontAwesomeIcon icon={faImage} />
            </label>
        </span>;
    const showPicture = 
            <img id="image" style={{ maxWidth: '100%' }} src={tragePhotoURL ? tragePhotoURL : "http://placeimg.com/640/480/any"}  />;

    const onClickClassificationBtn = () => {
        setIsProgress(true);
        const image = document.getElementById('image');
        console.log('image : ', tragePhotoURL);
        classifier.classify(image, (error, results) => {
            setIsProgress(false);
            if (error) {
                console.error(error);
                return;
            }
            alert(results[0].label + ' : ' + (results[0].confidence * 100))
        });

    }

    return (
        <div className="services">
            <h2>SERVICES</h2>

            <div className="row">
                <div>
                        {tragePhoto ? showPicture : loadPicture }
                </div>
            </div>
            {tragePhoto ?  <button  onClick={ onClickClassificationBtn}> Classify </button> :  <h3>Click the Button and Select the picture.</h3>}


        </div>
    );
}

export default Services;



