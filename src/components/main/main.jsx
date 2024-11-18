import { useState, useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import {colors} from '../../constants/colors'
import {Category, Videos} from "../";

import {ApiService} from '../../service/api.service'

const Main = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectedCategoryHandler = category => setselectedCategory(category)
  
  useEffect(() => {
    const getData = async () => {

      try{
        const data = await ApiService.fetching('search')
        setVideos(data)
      }catch(error){
        console.log(error)
      }

    }

    getData()

    // ApiService.fetching('search').then(data=> setVideos(data))
  }, [])

  return (
    <Stack>
      <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory} />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth="90%">
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCategory} <span style={{color:colors.secondary}}> videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
