// import { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  // Container,
  Grid,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import QUESTIONS from '../mocks/questions.json'

// import Test1 from "../test";



// console.log(test);

export default function HomePage() {
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
        <Box
        
        sx={{
          padding: "20px",
          margin: '50px',
          borderRadius: '10px',
          width: '300px',
          height: '120px',
          backgroundColor: '#C3EAFF',
        }}
      />
       :
        // {/* Not found Examinations */}
        <Grid
          container
          rowSpacing={1}
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ paddingTop: "50px", textDecoration: "underline" , color:"primary.main" }}
        >
          <Stack>
          <div align="center" > <ErrorOutlineIcon color="primary"  sx={ {fontSize: '100px' }}  /> </div>
            <Typography align="center" color="primary"  sx={ {fontWeight: "bold", fontSize: '20px' }} > ยังไม่มีข้อสอบ </Typography>
            <Typography align="center" color="primary" sx={ {fontWeight: "bold" ,  fontSize: '20px' }} > กรุณาเข้าใช้ใหม่ในภายหลัง </Typography>
          </Stack>
        </Grid>
      }

    </Box>
  );
}
