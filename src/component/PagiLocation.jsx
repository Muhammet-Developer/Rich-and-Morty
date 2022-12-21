import React from "react";
import { useSelector } from "react-redux";
import PaginationStyle from "../scss/Pagination.module.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

const PagiLocation = ({ postsPerPage, setPage}) => {
  const { data } = useSelector((state) => state.api);

  const pagesNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.length / postsPerPage); i++) {
    pagesNumbers.push(i);
  }
  const handleChange = (event, value) => {
    setPage(value)
}

  return (
    <>
  <div className={PaginationStyle.center}>
    <Container sx={{display:"flex", justifyContent:"center",marginTop:"2rem"}} >
    <Stack >
      <Pagination count={pagesNumbers.length} color="primary" onChange={handleChange} />
    </Stack>
    </Container>
   </div>
 </>
  );
};

export default PagiLocation;
