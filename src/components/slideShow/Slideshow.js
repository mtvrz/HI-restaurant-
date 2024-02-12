import classes from "./Slideshow.module.css";
import React from 'react';
import sundayImage from '../../store/logo.png';
import mondayImage from '../../store/pondeli.JPG';
import tuesdayImage from '../../store/utery.JPG';
import wednesdayImage from '../../store/streda.JPG';
import thursdayImage from '../../store/ctvrtek.JPG';
import fridayImage from '../../store/patek.JPG';
import saturdayImage from '../../store/logo.png';

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
            <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                <img src={currentImage} alt="Slideshow" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        );
    }
}

export default Slideshow;