import React from 'react'
import myImage from './assets/bgimg.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Customanalysis = () => {
  return (
    <Grid>
      <img src={myImage} alt="bgimg" style={{ width: '100%' }} />
      <Typography style={{ margin: '6%' }} >
        <Typography variant="h6" style={{ color: 'red' }} >ANALYSIS SERVICE</Typography>
        <Grid>Our Analytical Services team consists of highly skilled scientists with expertise in modern analytical techniques, supported by state-of-the-art instruments. This team has extensive experience in developing, optimizing and validating methods. Our reliable analytical methods and techniques ensure that the quality of the products that we�ve produced is of the highest standard and we can also act as an independent testing facility.</Grid>
        <Grid>
          <Typography style={{ marginTop: '3%' }}>Services offered include:</Typography>
          <Grid container spacing={2} style={{ marginTop: '1%' }}>
            <Grid item xs={12} sm={6} md={4}>
              <ArrowRightIcon />  Certification of reference standards via full chemical analysis
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArrowRightIcon /> NMR Analysis
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArrowRightIcon /> Mass Spectrometry Analysis (HPLC/LCMS)
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArrowRightIcon /> Isotope enrichment Analysis
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArrowRightIcon />  Melting Point
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArrowRightIcon />Water Content by Karl Fischer
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArrowRightIcon /> Residual Solvent Content by 1H-NMR or GC-Headspace
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArrowRightIcon /> Optical Rotation
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArrowRightIcon />Resolution of chiral compounds
            </Grid>
          </Grid>
        </Grid>
      </Typography>



    </Grid>
  )
}

export default Customanalysis;
