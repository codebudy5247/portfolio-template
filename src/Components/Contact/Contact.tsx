import { Box, Button, TextField } from "@mui/material";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import "./contact.css";

const Contact = () => {
  return (
    <Box sx={{}}>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +1 1234 556 75
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                contact@example.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                245 King Street, Touterie Victoria 8520 Australia
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What’s your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
            <form>
              <Box sx={{ p: 2 }}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Message"
                  rows={4}
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Button variant="contained">Submit</Button>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Contact;
