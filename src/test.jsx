import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CssBaseline, Grid } from "@mui/material";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import QUESTIONS from './mocks/questions.json';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const value2Boolean = (value) => {
    if (value && typeof value === "string") {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
    }
    return value;
};

export default function Test1() {

    const [answers, setAnswers] = useState({});
    const handleChangeAnswer = (qid) => (event) => {
        console.log(event.target.value);
        setAnswers(function (prevAnswers) {
            console.log({
                ...prevAnswers,
                [qid]: {
                    id: qid,
                    value: value2Boolean(event.target.value),
                },
            })
            return {
                ...prevAnswers,
                [qid]: {
                    id: qid,
                    value: value2Boolean(event.target.value),
                },
            };
        });
    };
    // const [users, setUsers] = useState([]);
    // const [address, setAddress] = useState([]);

    // const [answer, setAnswer] = useState([]);



    // useEffect(function () {
    //     const fetcApi = async () => {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const users = await response.json();
    //         console.log("users: ", users);
    //         setUsers(users);
    //     };
    //     fetcApi();
    // }, [])

    // useEffect(function () {
    //     const fetcApi = async () => {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const address = await response.json();
    //         console.log("address: ", address);
    //         setAddress(address);
    //     };
    //     fetcApi();
    // }, [])

    // console.log('answer: ', answer)

    return <>

        {QUESTIONS.questions.map(function (tt) {
            // console.log(tt)
            return <span key={tt.category}>

                <Container maxWidth='md'>

                    <Typography sx={{ fontariantcaps: 'all-petite-caps', fontWeight: "bold", paddingtop: '10px' }} >
                        Category : {tt.category}
                    </Typography>

                </Container>


                <Container maxWidth='md' sx={{ paddingtop: '10px' }}>
                    <FormControl sx={{ width: '100%' }}>
                        {tt.set.map(function (quest) {
                            const questionNumber = quest.qid.slice(quest.qid.indexOf('-') + 1); //การ slice 

                            return <span key={quest.qid}>
                                <CardContent >
                                    <Card sx={{ padding: '16px' }}>
                                        <FormLabel id="demo-radio-buttons-group-label">{questionNumber}. {quest.quiz} {answers[quest.qid] ? '' : <Typography component='span' color='red'>*</Typography>}</FormLabel>
                                        <RadioGroup
                                            value={answers[quest.qid]?.value ?? ""}
                                            onChange={handleChangeAnswer(quest.qid)}
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="radio-buttons-group"
                                        // value={answer}
                                        // onChange={(event) => {
                                        //     setAnswer(event.target.value)
                                        // }}
                                        >
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio />} label="No" />

                                        </RadioGroup>
                                    </Card>
                                </CardContent>
                            </span>
                        })}
                    </FormControl>
                </Container>

            </span >
        })}
    </>

    // key = { questions.category.qid }



    // users.map(function (user) {
    //     return < CardContent key={user.id} >
    //          <Container maxWidth='md' >
    //         <Card sx={{ minWidth: 290, padding: '16px' }} >
    //             <Grid container spacing={1} justifyContent="flex-start" columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ paddingTop: '10px' }}>
    //                 <Stack sx={{ fontWeight: "bold", fontSize: "16px", padding: '16px' }}>
    //                     {user.name}
    //                 </Stack>
    //             </Grid>
    //             <hr></hr>

    //             <Grid container spacing={2} columns={16} sx={{ paddingTop: '10px' }} >
    //                 <Grid item xs={8} >
    //                     <Typography  sx={{ fontWeight: "bold", fontSize: "14px" , display:'inline'}}>
    //                         Email :
    //                     </Typography>
    //                     <Typography   sx={{ fontSize: "14px",display:'inline' }}>
    //                         {user.email}
    //                     </Typography>
    //                 </Grid>
    //                 <Grid item xs={8}>
    //                     <Typography sx={{ fontWeight: "bold", fontSize: "14px" ,display:'inline'}}>
    //                         Phone :
    //                     </Typography>
    //                     <Typography sx={{ fontSize: "14px" , display:'inline'}}>
    //                         {user.phone}
    //                     </Typography>
    //                 </Grid>
    //             </Grid>

    //             <Grid container spacing={2} columns={16} sx={{ paddingTop: '10px' }}>
    //                 <Grid item xs={4}>
    //                     <Typography  component='span' sx={{ fontWeight: "bold", fontSize: "14px" }}>
    //                         City :
    //                     </Typography>
    //                     <Typography   component='span' sx={{ fontSize: "14px" }}>
    //                         {user.address.city}
    //                     </Typography>
    //                 </Grid>
    //                 <Grid item xs={4}>
    //                     <Typography sx={{ fontWeight: "bold", fontSize: "14px" , display:'inline'}}>
    //                         Street :
    //                     </Typography>
    //                     <Typography sx={{ fontSize: "14px" , display:'inline' }}>
    //                         {user.address.street}
    //                     </Typography>
    //                 </Grid>
    //                 <Grid item xs={4}>
    //                     <Typography  component='span' sx={{ fontWeight: "bold", fontSize: "14px" }}>
    //                         Zipcode :
    //                     </Typography>
    //                     <Typography   component='span' sx={{ fontSize: "14px" }}>
    //                         {user.address.zipcode}
    //                     </Typography>
    //                 </Grid>
    //             </Grid>               

    //         </Card>

    //         </Container>
    //     </ CardContent>

    // });

}
