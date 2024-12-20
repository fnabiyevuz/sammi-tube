import { Paper, IconButton } from "@mui/material";
import { colors } from "../../constants/colors";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component={"form"}
      sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: "none" }}
    >
      <input type="text" placeholder="Search..." className="search-bar" />
      <IconButton>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
