import {Fragment} from 'react';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Grid } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';



const customizedTheme = createTheme({
  palette: {
    primary: {
      main: '#00A8A9',
      contrastText: '#fff'
    },
    secondary:{
      main: '#ED6F2D'
    }
  }
})

const testArray1 = [
  {
    uniqueId: 'test-1',
    questionTitle: "เลือกข้อที่ถูกที่สุด",
    labelAnswers: [15, 20, 30, 40],
  },
  {
    uniqueId: 'test-2',
    questionTitle: "ข้อใดคือผลไม้?",
    labelAnswers: ["เงาะ", "ทุเรียน", "มังคุด", "กะหล่ำ"],
  },
  {
    uniqueId: 'test-3',
    questionTitle: "ข้อใดคือผัก?",
    labelAnswers: ["เงาะ", "ทุเรียน", "มังคุด", "กะหล่ำปี"],
  },
];
const test = testArray1.map(function (demo) {
  return (
    <span key={demo.uniqueId}>
      <Typography>
        {demo.questionTitle}
      </Typography>

      <ol>
       {
        
        demo. labelAnswers.map(function (p1) {
          return(
            <Fragment key={p1}>
              
                 <li>{p1} </li>
            </Fragment>
          )
        } )
        }
        </ol>

    </span>
  );

});
console.log(test);


function App() {
  return (
    <ThemeProvider theme={customizedTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent:'flex-end', paddingRight:0}} >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
           </IconButton> */}
          <Grid container rowSpacing={1} justifyContent="flex-end"  alignItems="center"  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs='auto' >
             <Stack >
                <Typography align="right"> มานี มีงานเยอะมาก </Typography>
                <Typography align="right">  12345 </Typography>
             </Stack>
           </Grid>
           <Grid item xs='auto' sx={{paddingLeft: '10px',paddingRight: '10px'}}>
             <Stack >
               < AccountCircleIcon  color="white" />
              </Stack>
            </Grid> 
          </Grid>
        </Toolbar>
      </AppBar>

      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PDPA Testing
          </Typography>
        
        </Toolbar>
      </AppBar>

      <Grid container rowSpacing={1} justifyContent="center"  alignItems="center"  columnSpacing={{ xs: 1, sm: 2, md: 3 }}  sx={{paddingTop: '50px', textDecoration: 'underline'}}>
        <Stack >
          <Typography align="center" > ยังไม่มีข้อสอบ </Typography>
          <Typography align="center"> กรุณาเข้าใช้ใหม่ในภายหลัง </Typography>
        </Stack>
      </Grid>
      
      <Container maxWidth='md'>
      <Grid container rowSpacing={1}  justifyContent="flex-start"  columnSpacing={{ xs: 1, sm: 2, md: 3 }}  sx={{paddingTop: '20px', }}>
        <Stack>
       
          <form>
            { test } 
          </form> 
        </Stack>
      </Grid>
      </Container>
      
      
  

      
      
    </Box>
    </ThemeProvider>
  );
}

export default App;