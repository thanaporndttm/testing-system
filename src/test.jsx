import { useState, useEffect } from "react";
import { Grid, Card, CardContent, Stack, Typography } from "@mui/material";

export default function Test1() {
  const [users, setUsers] = useState([]);
  // const [email, setEmail] = useState([]);

  useEffect(function () {
    const fetcApi = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const users = await response.json();

      console.log("users: ", users);

      setUsers(users);
    };
    fetcApi();
  }, []);

  return users.map(function (user) {
    return (
      <CardContent key={user.id}>
        <Card sx={{ minWidth: 290 }}>
          <Grid
            rowSpacing={1}
            justifyContent="flex-start"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ paddingTop: "20px" }}
          >
            <Stack sx={{ fontWeight: "bold", fontSize: "16px" }}>
              {user.name}
            </Stack>
          </Grid>
          <hr></hr>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
              Email :
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{user.email}</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
              Email :
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{user.email}</Typography>
          </Stack>
        </Card>
      </CardContent>
    );
  });
}
