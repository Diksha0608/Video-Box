// import { Paper,IconButton } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { Search } from '@mui/icons-material';

// import React from 'react'

// const Searchbar = () => {
//   return (
//     <Paper 
//     component='form'
//     onSubmit={()=>{}}
//     sx={{
//         borderRadius:20,
//         border:'1px solid #e3e3e3',
//         pl:2,
//         boxShadow:'none',
//         mr:{ sm:5 }
//     }}
    
//     >
//     <input 
//     // type="text" 
//     className='search-bar'
//     onChange={()=>{}}
//     value=""
//     placeholder='Search...'
//     />
//     <IconButton type='submit' sx={{p:'10px',color:'red'}}>
//         <Search/>
//     </IconButton>
//     </Paper>
//   )
// }

// export default Searchbar


import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search here...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: '#f27e0a' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;