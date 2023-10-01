import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'


function PostCard({ post }) {
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href='#'>
                <Card sx={{display: 'flex'}}>
                    <div sx={{flex: 1}}>
                        <CardContent>
                            <Typography component={'h2'} variant='h5'>
                                {post.title}
                            </Typography>
                            <Typography variant='subtitle1' color={'textSecondary'}>
                                {post.date}
                            </Typography>
                            <Typography variant='subtitle1' paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant='subtitle1' style={{ color: 'skyblue' }}>
                                Continue Reading...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden mdDown>
                        <CardMedia sx={{width: 160}} image={post.image} title={post.imageText} />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default PostCard
