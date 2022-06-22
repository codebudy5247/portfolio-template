import { Box, Typography } from '@mui/material'
import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
		<footer id="footer">

			<Box sx={{display:"flex",flexDirection:'row',justifyContent:'space-evenly'}}>

			<Box>
			<Typography variant="h6" sx={{ color: "gray" }}>
         Usefull Links
        </Typography>
			</Box>
			<Box>
			<Typography variant="h6" sx={{ color: "gray" }}>
         Social Links
        </Typography>
			</Box>
			<Box>
			<Typography variant="h6" sx={{ color: "gray" }}>
         Address
        </Typography>
			</Box>

			</Box>
			{/* <div className="container">
				<div className="row container">
					<div className="col-md-3">
						

					</div>
					<div className="col-md-3">
						<div className="useful-link">
							<h2>Useful Links</h2>
							<div className="use-links">
								<li><a href="index.html"><i className="fa-solid fa-angles-right"></i> Home</a></li>
								<li><a href="about.html"><i className="fa-solid fa-angles-right"></i> About Us</a></li>
								<li><a href="gallery.html"><i className="fa-solid fa-angles-right"></i> Gallery</a></li>
								<li><a href="contact.html"><i className="fa-solid fa-angles-right"></i> Contact</a></li>
							</div>
						</div>

					</div>
                    <div className="col-md-3">
                        <div className="social-links">
							<h2>Follow Us</h2>
							<div className="social-icons">
								<li><a href=""><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
								<li><a href=""><i className="fa-brands fa-instagram"></i> Instagram</a></li>
								<li><a href=""><i className="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
							</div>
						</div>
                    

                    </div>
					<div className="col-md-3">
						<div className="address">
							<h2>Address</h2>
						
							<div className="address-links">
								<li className="address1"><i className="fa-solid fa-location-dot"></i> Kolathur ramankulam-
									Malappuram Dt 
								   Kerala 679338</li>
								   <li><a href=""><i className="fa-solid fa-phone"></i> +91 90904500112</a></li>
								   <li><a href=""><i className="fa-solid fa-envelope"></i> mail@1234567.com</a></li>
							</div>
						</div>
					</div>
                  
				</div>
			</div> */}

		</footer>
	
		<section id="copy-right">
			<div className="copy-right-sec"><i className="fa-solid fa-copyright"></i>  
				lorem ispum lorem ispum 2022 Powerd By <a href="#">lorem ispum</a> 


			</div>

		</section>
		
    </>
  )
}

export default Footer