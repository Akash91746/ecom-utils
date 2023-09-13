import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const images = [
    "https://www.w3schools.com/howto/img_nature_wide.jpg",
    "https://www.w3schools.com/howto/img_lights_wide.jpg",
    "https://www.w3schools.com/howto/img_snow_wide.jpg"
]

const MaterialCarousel = () => {
    return <Carousel
        navButtonsAlwaysVisible
    >
        {
            images.map((image) => (
                <Box width='100%' height='264px'>
                    <img src={image} width='100%' height='100%' />
                </Box>
            ))
        }
    </Carousel>
}


export default MaterialCarousel;