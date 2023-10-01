import { useTheme } from '@emotion/react'
import { Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'

function SideBar({ title, description, archives, social }) {
    const theme = useTheme()
    return (
        <Grid item xs={12} md={4}>
            <Paper sx={{padding: theme.spacing(2), backgroundColor: '#313131'}}>
                <Typography variant='h6' marginBottom={2}>
                    {title}
                </Typography>
                <Typography marginBottom={2}>{description}</Typography>
            </Paper>
            <Typography variant='h6' marginBottom={1} marginTop={2}>
                Archives
            </Typography>
            {
                archives.map((archive) => (
                    <Link
                        display={'block'}
                        variant='body1'
                        href={archive.url}
                        key={archive.title}
                    >
                        {archive.title}
                    </Link>
                ))
            }
            <Typography variant='h6' marginTop={theme.spacing(3)}>
                Social
            </Typography>
            {social.map((network) => (
                <Link display={'block'} variant='body1' href='#' key={network.name}>
                    <Grid container direction={'row'} spacing={1} alignItems={'center'}>
                        <Grid item>
                            {<network.icon />}
                        </Grid>
                        <Grid item>
                            {network.name}
                        </Grid>
                    </Grid>
                </Link>
            ))}
        </Grid>
    )
}

export default SideBar
