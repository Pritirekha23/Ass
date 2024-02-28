import React from 'react'
import myImage from './assets/bgabtus.png';
import myImageabt from './assets/aboutusimg.jpg';
import './style/Aboutus.css';
import { Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const Aboutus = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <img src={myImage} alt="bgabtus" style={{ width: '100%' }} />
      <Typography style={{ margin: '6%' }} >

        <Typography variant="h6" style={{ color: 'red' }} >ARTIS STANDARDS</Typography>
        <Grid className='aboutussecond'>
          <Grid className='abtuscontent'>
            <Typography> We are one of the world leading companies in manufacturing pharmaceutical standards, including stable-isotope labeled internal standards, metabolites, degradation compounds/impurities, and inhibitor reference compounds. Our products are widely used in Bioanalysis (BA) for preclinical/early stage clinical studies and Bioequivalence (BE) studies for generic drug development.</Typography><br />

            <Typography> We also provide stable-isotope labeled reference standards for environmental and agricultural uses.</Typography>

            <Typography> All our products and documents are prepared under our Laboratory Manual, which is very closed to GLP regulations. Every single standard ships with a Certificate of Analysis, HNMR, MS, and HPLC. High Resolution HPLC and Carbon NMR are on client's request. Audit reports are also available on request.</Typography>

            <Typography> All our products and documents are prepared under our Laboratory Manual, which is very closed to GLP regulations. Every single standard ships with a Certificate of Analysis, HNMR, MS, and HPLC. High Resolution HPLC and Carbon NMR are on client's request. Audit reports are also available on request.</Typography>
            <Typography>Our utmost goal is to provide high-quality, low-cost standard compounds and commercial non-available research chemicals to global pharmaceutical, biotechnological, clinical and bio-analytical companies.</Typography>
          </Grid>
          <Grid className='abtusimg2'>
            <img src={myImageabt} alt="myimgabt" />
          </Grid>


        </Grid>
        <Typography className='m-3'>
          <IconButton href="https://wa.me/" target="_blank" style={{ color: 'rgb(94, 84, 84)' }}>
            <WhatsAppIcon />
          </IconButton>
          <IconButton href="https://www.facebook.com/pe" target="_blank" style={{ color: 'rgb(94, 84, 84)' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://www.youtube.com/" target="_blank" style={{ color: 'rgb(94, 84, 84)' }}>
            <YouTubeIcon />
          </IconButton>
          <IconButton href="https://twitter.com/" target="_blank" style={{ color: 'rgb(94, 84, 84)' }}>
            <TwitterIcon />
          </IconButton>
        </Typography>

      </Typography>



      
    </Grid>





  )
}

export default Aboutus;
