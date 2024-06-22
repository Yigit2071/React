import React from 'react'
import Container from '@mui/material/Container';

function PageContainer({ children }) {
    return (
        <Container>{children}</Container>  //buradaki children aslında Header.jsx componentini temsil ediyor.
    )
}

export default PageContainer