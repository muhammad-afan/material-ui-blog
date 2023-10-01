import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import MarkDown from 'markdown-to-jsx'
import { posts } from '../Data/Data'

function Main({ title }) {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant='h6' gutterBottom>
                {title}
            </Typography>
            <Divider />
            {
                posts.map((post) => (
                    <MarkDown key={post.body}>
                        {post.body}
                    </MarkDown>
                    // console.log('helo')
                ))
            }
        </Grid>
    )
}

export default Main
