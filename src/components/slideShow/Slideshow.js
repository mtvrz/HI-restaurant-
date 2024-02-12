import classes from "./Slideshow.module.css";
import React from 'react';
import sundayImage from '../../store/spec.jpg';
import mondayImage from '../../store/spec.jpg';
import tuesdayImage from '../../store/spec.jpg';
import wednesdayImage from '../../store/spec.jpg';
import thursdayImage from '../../store/spec.jpg';
import fridayImage from '../../store/spec.jpg';
import saturdayImage from '../../store/spec.jpg';

class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                sundayImage,
                mondayImage,
                tuesdayImage,
                wednesdayImage,
                thursdayImage,
                fridayImage,
                saturdayImage
            ],
            currentImageIndex: new Date().getDay()
        };
    }

    componentDidMount() {
        // Set interval to refresh the page every one hour
        this.refreshInterval = setInterval(this.refreshPage,  60 * 60 * 1000);
    }

    componentWillUnmount() {
        // Clear the interval when the component is unmounted
        clearInterval(this.refreshInterval);
    }

    refreshPage = () => {
        window.location.reload();
    };


    nextImage = () => {
        this.setState(prevState => ({
            currentImageIndex: (prevState.currentImageIndex + 1) % this.state.images.length
        }));
    };

    render() {
        const { images, currentImageIndex } = this.state;
        const currentImage = images[currentImageIndex];
        console.log(currentImageIndex)
        return (
            <div className={classes.slide}>
                <img src={currentImage} alt="Slideshow" className={classes.slideImage} />
            </div>
        );
    }
}

export default Slideshow;