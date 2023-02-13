import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={3} sx={{ position: "sticky", top: 0, backgroundColor: "#000000", justifyContent: "space-between" }} >
    <Link to="/" style={{ display: "flex", alignItems: 'center' }}>
      <img src='/images/logo4.png' alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar;
