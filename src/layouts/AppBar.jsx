import { Fragment } from "react";
import { Outlet } from "react-router-dom";
// import axios from "axios";
import axios from '../configs/axios-configs'

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
  const [user, setUser] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null);
  const [openProblemModal, setOpenProblemModal] = useState(false);

  const [language, setLanguage] = useState('en');
  const open = Boolean(anchorEl);


  useEffect(() => {
    const requestVerifyUser = async () => {
      // axios({
      //   method: 'get',
      //   url: 'https://testingsystem-backend-dev.azurewebsites.net/user/profile',
      //   headers: {
      //     id_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJjZjZiZmYyZS01NTQ4LTRhZDctYWUyNy04YTUzYWM0ZjQ5NWYiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZWVmMzhhMWYtNzIwZi00ZWRlLTljN2EtNzllZjZkNWRkMzQyL3YyLjAiLCJpYXQiOjE2OTMzNjUzNzgsIm5iZiI6MTY5MzM2NTM3OCwiZXhwIjoxNjkzMzY5Mjc4LCJuYW1lIjoiVEhBTkFQT1JOIE1BSU1FRUtMQUQiLCJub25jZSI6ImMwZDgyODI3LTNkMWItNGYyNy05MDk3LTNhZDgyMGE4NjA0MSIsIm9pZCI6ImFmYWNkYWQwLWMzN2ItNDMzNS1iZjJiLTJiMzE3NGY5MjRlNiIsInByZWZlcnJlZF91c2VybmFtZSI6InRoYW5hcG9ybi5tQHNpYW1rdWJvdGEuY28udGgiLCJyaCI6IjAuQVQ0QUg0cno3Zzl5M2s2Y2VubnZiVjNUUWk3X2E4OUlWZGRLcmllS1U2eFBTVjgtQUkwLiIsInN1YiI6Ik5lTEEwVGxVZGFrbFI3SzJMVWF6NUZGdllnUnJrOC14NTJKMHEzaHEzQk0iLCJ0aWQiOiJlZWYzOGExZi03MjBmLTRlZGUtOWM3YS03OWVmNmQ1ZGQzNDIiLCJ1cG4iOiJ0aGFuYXBvcm4ubUBzaWFta3Vib3RhLmNvLnRoIiwidXRpIjoiS1pzWjRqTE1yVUN2SDJDTWUtb0JBQSIsInZlciI6IjIuMCJ9.YeQZMDbBU-GyUofDIqx1iTzznwXSk0tM_beJlB8Nc9AsBFTqfT7NHa0dgM-SHLUbefQm_73gs8yZkHpF1WgzuXrFm-dpDwAO1VWc_WP5t2jtbehJc5Go_ZMNkScIBMJyJSVSbECugqi415WpR0nBST9tjkYNptr5SS_9lM8pf0FICUYJWMRrntwyECdhS-Zu-BkQGv8oNA01Vagr8QxhC1fxA2_5KGJ4Q3tC_qOGxC_HzrYioroQ3rMSoXSTgeWQjV3RFxVN8GadyxsmCryfORCrP3q6sR0W4LMdPzZBfX1l61zV8ywzrOJ2L5snCNCWrFx8RfagyDawZFk9x0SawQ',
      //     access_token: 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkpiVUtCdjVzVjFxd2tnTEdfTHRCUmZFV1FmQ09la1VpQkxzU3dzeHI0RWciLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lZWYzOGExZi03MjBmLTRlZGUtOWM3YS03OWVmNmQ1ZGQzNDIvIiwiaWF0IjoxNjkzMzY1Mzc4LCJuYmYiOjE2OTMzNjUzNzgsImV4cCI6MTY5MzM2OTk4NywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQUxnbmZyaVFDaWZNZ0ExcjdBK2Q0YmEvRERPZmpUT25GUFhWR2huc2IxWStXVzJocTg0SEh2Q1BGTjBRWlFsc2IiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IlNLQyBUZXN0aW5nLXN5c3RlbSIsImFwcGlkIjoiY2Y2YmZmMmUtNTU0OC00YWQ3LWFlMjctOGE1M2FjNGY0OTVmIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNQUlNRUVLTEFEIiwiZ2l2ZW5fbmFtZSI6IlRIQU5BUE9STiIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjQ5LjIyOS4yMy4yMjgiLCJuYW1lIjoiVEhBTkFQT1JOIE1BSU1FRUtMQUQiLCJvaWQiOiJhZmFjZGFkMC1jMzdiLTQzMzUtYmYyYi0yYjMxNzRmOTI0ZTYiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTg0NDIzNzYxNS0xMzkwMDY3MzU3LTgzOTUyMjExNS01MTQyNiIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMkMyNzMyMjQxIiwicmgiOiIwLkFUNEFINHJ6N2c5eTNrNmNlbm52YlYzVFFnTUFBQUFBQUFBQXdBQUFBQUFBQUFBLUFJMC4iLCJzY3AiOiJvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQgZW1haWwiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJtcDdZVHVNOTVlZXhpQTF3dHlpR29zRFZxTi10RFFReTRkN3Z6MlY1SFZVIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkFTIiwidGlkIjoiZWVmMzhhMWYtNzIwZi00ZWRlLTljN2EtNzllZjZkNWRkMzQyIiwidW5pcXVlX25hbWUiOiJ0aGFuYXBvcm4ubUBzaWFta3Vib3RhLmNvLnRoIiwidXBuIjoidGhhbmFwb3JuLm1Ac2lhbWt1Ym90YS5jby50aCIsInV0aSI6Iktac1o0akxNclVDdkgyQ01lLW9CQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiTmVMQTBUbFVkYWtsUjdLMkxVYXo1RkZ2WWdScms4LXg1MkowcTNocTNCTSJ9LCJ4bXNfdGNkdCI6MTU4MjE1NTU1OH0.n_dh7X4kSwLhSgBc5G2UoplYJWGYOfwRQK36ip7D3eJ2oE_Lbdvj4_9cY77iB-9Poz6fxHkDh3ujxqjPHgz631tOWF0kE0aVW0JEamJGZ_q7jmGfqtu5R7vnkEqCMpQrVSYRvlzXUOEU63mreM_ydBqR0Xdg2kqp9gLC6gUpejEfVWFNrC2UPmmJq8LU0Hem3AxvhStAumSDZSamEbOH7SqEk7O7E6VnnngGFkiJX_BUDIX3AqnfW-LfYdYZ42tm2KyW-Bf461ssBVGZloG-_Spr5GJklggUdK1XTsEQrOV8KiZdmdB7dxeg1tVDnK0xXtkdTYVebGVoKpmZL9Z1OQ'
      //   }
      //   // responseType: 'stream'
      // })
      //   .then(function (response) {
      //     console.log('response: ', response)
      //     setUser(response.data);

      //     // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      //   }).catch(function(error) {
      //     console.error('error: ', error)
      //   });
      axios.get('user/profile').then(function (response) {
        // console.log('response: ', response)
        setUser(response.data);
      })
    }

    requestVerifyUser();
  }, [])

  console.log('user:', user);

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
            <Grid item xs sx={{ flexGrow: 1 }}>
              <Typography align="left" sx={{ fontWeight: "bold", fontSize: "16px" }} >Testing System </Typography>
              <Typography align="left"  > สยามคูโบต้าคอร์ปอเรชั่น </Typography>
            </Grid>

            <Grid item xs='auto'>
              <Stack>
                <Typography align="right" > {user?.nameTH}{user?.lastnameTH}</Typography>

                <Typography align="right">  {user?.eid} </Typography>
              </Stack>
            </Grid>

            <Grid
              item
              xs='auto'
              sx={{ paddingLeft: "10px", cursor: 'pointer' }}
              onClick={handleClick}
            >
              <AccountCircleIcon color="white" sx={{ fontSize: '50px' }} />
            </Grid>
          </Grid>
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
