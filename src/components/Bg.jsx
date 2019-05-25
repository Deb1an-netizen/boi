import React, { Component } from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Slider from 'react-slick'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import {Autocomplete,TextInput, Pane} from 'evergreen-ui'
class Bg extends Component {
    state = {  }
    render() { 
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
          };
        return ( 
            <Parallax ref = {ref => (this.parallax = ref)} pages={3}>
                <ParallaxLayer offset={0} speed={0.5} style={{backgroundColor: '#845EC2'}} />
                <ParallaxLayer offset={1} speed={0.5} style={{backgroundColor: '#FF9671'}} />
                <ParallaxLayer offset={2} speed={0.5} style={{backgroundColor: '#F9F871'}} />
                <ParallaxLayer offset={1.3} speed={-0.3} factor={3} style={{pointerEvents: 'none'}}>
                    <img src={'https://img.icons8.com/cotton/2x/book.png'} style={{ width: '15%', marginLeft: '70%' }}></img>
                </ParallaxLayer>
                <ParallaxLayer  offset={1.5} speed={1} factor={1} style={{display:'flex',justifyContent:'start'}}>
                    <Container>
                        <Grid xs={12} sm={12} md={12}>
                            <Slider {...settings}>
                                <div>
                                    <img
                                        src={'https://helpdeskgeek.com/wp-content/pictures/2012/06/01Enchantment_real_Cover.jpg.webp'}
                                        alt="HP 2"
                                        style={{width:'50%',height:'100%',marginLeft:'25%'}}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={'https://helpdeskgeek.com/wp-content/pictures/2012/06/02Enchantment_eBook_Cover.jpg.webp'}
                                        alt="HP 1"
                                        style={{width:'50%',height:'100%',marginLeft:'25%'}}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={'https://helpdeskgeek.com/wp-content/pictures/2012/06/01Enchantment_real_Cover.jpg.webp'}
                                        alt="HP 2"
                                        style={{width:'50%',height:'100%',marginLeft:'25%'}}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={'https://helpdeskgeek.com/wp-content/pictures/2012/06/02Enchantment_eBook_Cover.jpg.webp'}
                                        alt="HP 1"
                                        style={{width:'50%',height:'100%',marginLeft:'25%'}}
                                    />
                                </div>
                            </Slider>
                        </Grid>
                    </Container>
                </ParallaxLayer>
                <ParallaxLayer offset={0.3} speed={1} >
                    <Pane 
                        height={"100%"}
                        width={"100%"}
                        style={{marginLeft:'15%'}}
                    >
                        <Autocomplete
                            title="Books"
                            onChange={changedItem => console.log(changedItem)}
                            items={['Chanderpahar', 'LOTR', 'Another']}
                        >
                            {(props) => {
                                const { getInputProps, getRef, inputValue, openMenu } = props
                                return (
                                <TextInput
                                    placeholder="Search for books"
                                    value={inputValue}
                                    innerRef={getRef}
                                    {...getInputProps({
                                    onFocus: () => {
                                        openMenu()
                                    }
                                    })}
                                />
                                )
                            }}
                        </Autocomplete>
                    </Pane>
                </ParallaxLayer>
            </Parallax>
         );
    }
}
 
export default Bg;