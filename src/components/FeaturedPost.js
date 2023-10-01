import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'


function FeaturedPost({ post }) {
    return (
        <>
            <Card
                sx={{
                    backgroundImage: `url(${post.image})`,
                    padding: '35px 25px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <CardContent>
                    <Typography gutterBottom sx={{ fontSize: 40, fontFamily: 'Montserrat' }}>{post.title}</Typography>
                    <Typography variant='h5'>{post.description}</Typography>
                </CardContent>
                <CardActions>
                    <Button>{post.linkText}</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default FeaturedPost
