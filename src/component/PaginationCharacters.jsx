import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import PaginationStyle from "../scss/Pagination.module.scss";
const PaginationCharacters = ({
  postsPerPage,
  setPage,
}) => {

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: '#212121',
    },
  },
});
  const {charactersData} = useSelector((state)=>state.api)
  const pagesNumbers = [];
  for (let i = 1; i <= Math.ceil(charactersData.length/ postsPerPage); i++) {
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
      <Pagination count={pagesNumbers.length} color="secondary" onChange={handleChange} />
    </Stack>
    </Container>
</div>
    </>
  );
};

export default PaginationCharacters;
