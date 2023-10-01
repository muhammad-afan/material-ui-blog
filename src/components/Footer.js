import { Container, Link, Typography, useTheme } from '@mui/material'
import React from 'react'

function Footer({ title, description }) {
    const theme = useTheme();
    return (
        <footer style={{
            background: theme.palette.background.paper,
            marginTop: theme.spacing(4),
            padding: theme.spacing(6, 0)
        }}>
            <Container maxWidth='lg'>
                <Typography variant='h6' align='center' gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant='subtitle1'
                    align='center'
                    color={'textSecondary'}
                    component={'p'}
                >
                    {description}
                </Typography>
                <Typography variant='body2' color={'textSecondary'} align='center'>
                    Copyright &copy; {" "}
                    <Link color={'inherit'} href="#" underline='hover'>
                        Your Website
                    </Link>{" "}
                    {new Date().getFullYear()}
                </Typography>
            </Container>
        </footer>
    )
}

export default Footer
