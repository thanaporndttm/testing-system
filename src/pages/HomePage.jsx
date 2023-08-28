import { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Test1 from "../test";

const testArray1 = [
  {
    uniqueId: "test-1",
    questionTitle: "เลือกข้อที่ถูกที่สุด",
    labelAnswers: [15, 20, 30, 40],
  },
  {
    uniqueId: "test-2",
    questionTitle: "ข้อใดคือผลไม้?",
    labelAnswers: ["เงาะ", "ทุเรียน", "มังคุด", "กะหล่ำ"],
  },
  {
    uniqueId: "test-3",
    questionTitle: "ข้อใดคือผัก?",
    labelAnswers: ["เงาะ", "ทุเรียน", "มังคุด", "กะหล่ำปี"],
  },
];
const test = testArray1.map(function (demo) {
  return (
    <span key={demo.uniqueId}>
      <Typography>{demo.questionTitle}</Typography>

      <ol>
        {demo.labelAnswers.map(function (p1) {
          return (
            <Fragment key={p1}>
              <li> {p1} </li>
            </Fragment>
          );
        })}
      </ol>
    </span>
  );
});
// console.log(test);

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            align="center"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            PDPA Testing
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid
        container
        rowSpacing={1}
        justifyContent="center"
        alignItems="center"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ paddingTop: "50px", textDecoration: "underline" }}
      >
        <Stack>
          <Typography align="center"> ยังไม่มีข้อสอบ </Typography>
          <Typography align="center"> กรุณาเข้าใช้ใหม่ในภายหลัง </Typography>
        </Stack>
      </Grid>

      <Container maxWidth="md">
        <Grid
          container
          rowSpacing={1}
          justifyContent="flex-start"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ paddingTop: "20px" }}
        >
          <Stack>
            <form>{test}</form>
          </Stack>
        </Grid>
      </Container>

      <Test1 />
    </Box>
  );
}
