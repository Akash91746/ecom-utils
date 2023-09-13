import React from "react";
import { Card, CardActionArea, CardContent, Container, Icon, Stack, Typography } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Screens from "../common/utils/Screen";

const HomeScreen = () => {
    return <React.Fragment>
        <Container component='main' maxWidth='xl' sx={{ p: 2 }}>
            <Stack direction='row'>
                <Link to={Screens.Cart}>
                    <Card>
                        <CardActionArea>
                            <CardContent component={Stack} direction='column' alignItems='center' spacing={1}>
                                <Icon>
                                    <ShoppingCartRounded />
                                </Icon>
                                <Typography>
                                    Cart
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Stack>
        </Container>
    </React.Fragment>
}


export default HomeScreen;