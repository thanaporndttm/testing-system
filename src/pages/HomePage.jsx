// import { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  // Container,
  Grid,
  Stack,
  Box,
  Typography,
  Modal,
  Button,
  Container,
} from "@mui/material";
import { useState, useEffect } from "react";
// import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QUESTIONS from '../mocks/questions.json'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

// import Test1 from "../test";



// console.log(test);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
};


// const handleClickOpenProblemModal = () => {
//   setOpenProblemModal(true);
// };

export default function HomePage() {
  const [openTest, setOpenTest] = useState(false);
  const [clostModal, setclostModal] = useState(false);

  const handleOpenTest = () => setOpenTest(true);
  const handleCloseTest = () => setOpenTest(false);
  // const open = Boolean(openTest);

  const handleCloseProblemModal = () => {
    setOpenProblemModal(false);
  };


  return (


    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            align="center"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", fontSize: '18px' }}
          >
            PDPA Testing
          </Typography>
        </Toolbar>
      </AppBar>


      {QUESTIONS.questions.length > 0 ?  //อย่าลืมเปลี่ยนเป็นมากกว่า**
        // {/* Have some Examinations */}

        <Grid container justifyContent='center'>
          {/* <Grid item xs> */}
          <Box sx={{ width: '50%', paddingTop: "10px", margin: "10px" }}>
            <img src="https://testingsystemstorage.blob.core.windows.net/asset/over1.jpg?"
              alt=" Test System " width="100%" />
            <Typography color="primary" align="center" sx={{ fontWeight: "bold", fontSize: '20px', cursor: 'pointer' }} onClick={handleOpenTest}> PDPA Testing  </Typography>
            <Modal
              open={openTest}
              onClose={handleCloseTest}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseTest}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography color="primary" sx={{ fontWeight: "bold" }} id="modal-modal-title" variant="h6" component="h2">
                  PDPA Testing : บลาบลา
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  แบบทดสอบ-หมวดที่ 1 จำนวน 10 ข้อ
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    คำสั่ง จงพิจารณาพฤติกรรมในข้อที่ 1-10 ว่าเป็นพฤติกรรม "ทุจริต" หรือ "ไม่ทุจริต"
                  </Typography>
                </Typography>

                <DialogActions>
                  <Button autoFocus onClick={handleCloseTest}>
                    <Typography >  CLOSE   </Typography>
                  </Button>
                </DialogActions>
              </Box>
            </Modal>
          </Box>


        </Grid>


        :
        // {/* Not found Examinations */}
        <Grid
          container
          rowSpacing={1}
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ paddingTop: "50px", textDecoration: "underline", color: "primary.main" }}
        >
          <Stack>
            <div align="center" > <ErrorOutlineIcon color="primary" sx={{ fontSize: '100px' }} /> </div>
            <Typography align="center" color="primary" sx={{ fontWeight: "bold", fontSize: '20px' }} > ยังไม่มีข้อสอบ </Typography>
            <Typography align="center" color="primary" sx={{ fontWeight: "bold", fontSize: '20px' }} > กรุณาเข้าใช้ใหม่ในภายหลัง </Typography>
          </Stack>
        </Grid>
      }

    </Box>
  );
}
