import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import LanguageIcon from '@mui/icons-material/Language';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



import {
  AppBar,
  Toolbar,
  // Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openProblemModal, setOpenProblemModal] = useState(false);
  const [language, setLanguage] = useState('en');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lang) => () => {
    console.log('lang:', lang)
    setLanguage(lang)
  }


  const handleClickOpenProblemModal = () => {
    setOpenProblemModal(true);
  };
  const handleCloseProblemModal = () => {
    setOpenProblemModal(false);
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
           </IconButton> */}

          <Grid
            justifyContent="flex-start"
            container
            rowSpacing={1}
            alignItems="center"
            // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >

            <Grid item xs sx={{flexGrow:1}}>
              <Typography align="left" sx={{ fontWeight: "bold", fontSize: "16px" }} >Testing System </Typography>
              <Typography align="left"  > สยามคูโบต้าคอร์ปอเรชั่น </Typography>
            </Grid>

            <Grid item xs='auto'>
              <Stack>
                <Typography align="right"> มานี มีงานเยอะมาก </Typography>
                <Typography align="right"> 12345 </Typography>
              </Stack>
            </Grid>

            <Grid
              item
              xs='auto'
              sx={{ paddingLeft: "10px",cursor: 'pointer' }}
              onClick={handleClick}
            >
              <AccountCircleIcon color="white" sx={{ fontSize: '50px' }} />
            </Grid>

          </Grid>


          {/* <div> */}
          {/* <Grid sx={{ paddingRight: 0, flexGrow:1 }}
            container
            // rowSpacing={1}
            justifyContent="flex-end"
            alignItems="center"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          > */}
          {/* </Grid> */}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose} disabled={true} >
              <LanguageIcon />
              <Grid sx={{ paddingLeft: '10px', }} > Language  </Grid>
            </MenuItem>

            <MenuItem onClick={handleChangeLanguage('th')} selected={language === 'th'}>TH</MenuItem>
            <MenuItem onClick={handleChangeLanguage('en')} selected={language === 'en'}>EN</MenuItem>

            <MenuItem onClick={handleClose}>
              <MeetingRoomIcon color="white" />
              <Grid sx={{ paddingLeft: '10px' }} > Logout </Grid>
            </MenuItem>

            <MenuItem onClick={() => {
              handleClickOpenProblemModal();
              handleClose();
            }} >
              <ErrorOutlineIcon />
              <Grid sx={{ paddingLeft: '10px' }} >  แจ้งปัญหา  </Grid>
            </MenuItem>
          </Menu>

          {/* </div> */}



        </Toolbar>
      </AppBar>

      <Dialog
        open={openProblemModal}
        onClose={handleCloseProblemModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">

        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold" }} >
          {"แจ้งปัญหาการใช้งาน"}
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleCloseProblemModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers >
          <DialogContentText id="alert-dialog-description">
            <Typography sx={{ fontWeight: "bold", paddingBottom: '10px' }} >  ข้อมูลพนักงานไม่ถูกต้อง ติดต่อ HR</Typography>
            <Typography sx={{ fontWeight: "bold" }} >  นวนคร :  </Typography >
            <Typography>คุณรัญชนา สันติภาพลือชา(ฟ้า) โทร. 087-713-6037,   </Typography>
            <Typography sx={{ paddingBottom: '10px' }} >  คุณอภิวัฒน์ เทพาสิต (อัพ) โทร. 082-9693194 </Typography>


            <Typography sx={{ fontWeight: "bold" }} >  อมตะซิตี้ :   </Typography>
            <Typography> คุณเบญญาพร (เอม) โทร. 083-5614265,  </Typography>
            <Typography sx={{ paddingBottom: '10px' }} >  คุณนุชจนันท์ (นุช) โทร. 062-5144549 </Typography>

            <Typography sx={{ fontWeight: "bold" }}  > SKL :  </Typography>
            <Typography> คุณสุภาพร(จ๋า) โทร. 086-353-9936, </Typography>
            <Typography sx={{ paddingBottom: '10px' }} > คุณหนึ่งเดียว(หม่งม้ง) โทร. 087-099-0630 </Typography>
          </DialogContentText>

        </DialogContent>
        <DialogContent dividers >
          <DialogContentText id="alert-dialog-description">
            <Typography sx={{ fontWeight: "bold", paddingBottom: '10px' }} > ปัญหาจากการใช้งานระบบ ติดต่อ IT </Typography>

            <Typography>SKC : คุณนันทนัช(นัช) Email nanthanut.s@kubota.com, Tel. 0979745674 </Typography>
            <Typography sx={{ paddingBottom: '10px' }} >  SKL : คุณธนากร (ต้อง) โทร. 085-1166699, คุณกฤตเมธ (กฤต) โทร. 081-5410568 </Typography>


          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseProblemModal}>
            <Typography >  CLOSE   </Typography>
          </Button>
        </DialogActions>
      </Dialog>

      {/* <Container maxWidth="md"> */}
      <Outlet />
      {/* </Container> */}
    </Fragment>
  );
}
