import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
  width: 300px; /* Adjust the width as needed */
  margin: 0 auto; /* Center horizontally */
`;

const SearchInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  flex: 1; /* Take remaining space */
`;

const SearchIcon = styled.div`
  padding: 8px;
  background-color: #f0f0f0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Search = ({ setSearchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
    </SearchContainer>
  );
};

export default Search;
