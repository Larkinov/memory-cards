import React from 'react'
import {Outlet} from "react-router-dom";
import Header from '../components/UI/Header';
import { Box, Grid } from '@mui/material';

const MainLayout:React.FC = () => {
  return (
    <div>
      <Header />
      <Box height={"90vh"} mt={"10px"} bgcolor={"white"}>
        <Grid container spacing={2} height={"100%"}>
          <Outlet/>
        </Grid>
      </Box>
    </div>
  )
}

export default MainLayout