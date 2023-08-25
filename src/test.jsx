import { useState, useEffect } from "react";
import Box from '@mui/material/Box'; 
import Card from '@mui/material/Card'; 
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CssBaseline, Grid } from "@mui/material";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Test1() {
  const[users, setUsers] = useState([])
  
  useEffect(function() {
    const fetcApi = async() => {
       const response = await fetch("https://jsonplaceholder.typicode.com/users");

       const users = await response.json();

       console.log("users: ",users);

       setUsers(users);
      };
    fetcApi();
    }, [])
   
    return users.map(function(user) {
       
       

        return < CardContent >
        <Card sx={{ minWidth: 290}}>
        <Grid  rowSpacing={1}  justifyContent="flex-start"  columnSpacing={{ xs: 1, sm: 2, md: 3 }}  sx={{paddingTop: '20px', }}>
        <Stack>
        {user.name}
        </Stack>
      </Grid>
        </Card>
      
       
     
        </ CardContent>
        
    });

}

