import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <Grid>
        <Grid container spacing={2} style={{ backgroundColor: "black", color: "white" ,margin:"0px"}}>

            <Grid item xs={12} sm={4}>
                <Typography variant="h6">COMPANY INFO</Typography>
                <Typography>We are one of the world leading companies in manufacturing pharmaceutical standards, including stable-isotope labeled internal standards, metabolites, degradation compounds / impurities, and inhibitor reference compounds.</Typography>
                <Typography>
                    <Button variant="contained"> Read More<ArrowRightIcon />  </Button>
                </Typography>

            </Grid>


            <Grid item xs={12} sm={4}>
                <Typography variant="h6">CONTACT US</Typography>
                <Typography>India: <span>+91-8849247288</span></Typography>
                <Typography>Email: <span>sales@artisbiotech.com</span></Typography>
            </Grid>


            <Grid item xs={12} sm={4}>
                <Typography variant="h6">INFORMATION</Typography>
                <Typography>  <Button variant="contained"> PRODUCTS </Button>
                </Typography> <br/>
                <Typography>  <Button variant="contained"> CUSTOM SYNTHEIS </Button>
                </Typography>
                {/* <Typography>  <Button variant="contained">  CUSTOM ANALYSIS</Button>
                </Typography>
                <Typography>  <Button variant="contained">  CONTACT US</Button>
                </Typography> */}
            </Grid>
            
        </Grid>
        </Grid>
    );
}

export default Footer;
