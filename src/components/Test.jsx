import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Slider from 'react-slick'

class Test extends Component {
    state = { 
        studentId: [1,2,3],
        studentName: ['raja','kaja','khaja']
    }
    handleClick(event){
        this.setState({
            studentName: event.target.value
        });
    }
    handleChange(event){
        this.setState({
            studentName: event.target.value
        });
    }
    render() { 
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return ( 
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
            </div>
         );
    }
}
 
export default Test;