import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Icon, IconButton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

import styles from './Carousel.module.css';

const images = [
    "https://www.w3schools.com/howto/img_nature_wide.jpg",
    "https://www.w3schools.com/howto/img_lights_wide.jpg",
    "https://www.w3schools.com/howto/img_snow_wide.jpg"
]

const CarouselActionButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing(2),
    borderRadius: '0 3px 3px 0',
    color: 'white',
    top: '50%',
    marginTop: '-22px',
    transition: '0.6s ease',
    ":hover": {
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
}));

const CarouselDot = styled('span')<{ selected?: boolean }>(({ selected }) => ({
    cursor: 'pointer',
    height: '12px',
    width: '12px',
    margin: '0 2px',
    backgroundColor: selected ? "#717171" : '#bbb',
    borderRadius: '50%',
    display: 'inline-block',
    transition: 'background-color 0.6s ease',
    ":hover": {
        backgroundColor: '#717171',
    }
}));

const Carousel = () => {

    const [index, setIndex] = useState(0);
    const timeoutRef = React.useRef<any>(null);

    const onClickNext = () => {
        setIndex((value) => value < images.length - 1 ? ++value : 0);
    }

    const onClickPrev = () => {
        setIndex((value) => value > 0 ? --value : images.length - 1);
    }

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();

        timeoutRef.current = setTimeout(() => {
            setIndex((value) => value < images.length - 1 ? ++value : 0);
        }, 4000);

        return () => {
            resetTimeout();
        }
    }, [index]);

    return <Box className={styles.container} >
        {
            images.map((image, i) => (
                <Box className={styles.fade} sx={{ display: index == i ? 'block' : 'none' }}>
                    <img src={image} style={{ width: '100%' }} />
                </Box>
            ))
        }

        <CarouselActionButton onClick={onClickPrev}>
            <Icon>
                <KeyboardArrowLeft />
            </Icon>
        </CarouselActionButton>

        <CarouselActionButton sx={{ right: 0, borderRadius: '3px 0 0 3px' }} onClick={onClickNext}>
            <Icon>
                <KeyboardArrowRight />
            </Icon>
        </CarouselActionButton>

        <Box
            textAlign='center'
            position='absolute'
            bottom={0}
            left={'50%'}
            marginLeft='-22px'
            marginBottom={2}
        >
            {
                images.map((_, i) => (
                    <CarouselDot selected={index == i} onClick={() => setIndex(i)} />
                ))
            }
        </Box>
    </Box>;
}


export default Carousel;