/**
    * @description      : Sidebar Component
    * @author           : computer
    * @group            : 
    * @created          : 30/11/2024 - 10:06:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/11/2024
    * - Author          : computer
    * - Modification    : Fixed className usage issue
**/
import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

const Root = styled(Box)(({ theme }) => ({
    position: "relative",
    height: '100vh',
    padding: '20px',
    background: "5px 10px #888888",
}));

const SearchBox = styled('input')({
    width: '90%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
});

const MenuItem = styled('div')({
    marginBottom: '20px',
});

const MenuHeading = styled('div')({
    fontWeight: 'bold',
    marginBottom: '10px',
});

const List = styled('ul')({
    listStyleType: 'none',
    paddingLeft: '15px',
});

const ListItem = styled('li')({
    marginBottom: '5px',
    cursor: 'pointer',
    '&:hover': {
        color: '#007bff',
        textDecoration: 'underline',
    },
});

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <Root>
            <SearchBox type="text" placeholder="Search" />
            <MenuItem>
                <MenuHeading>
                    <span role="img" aria-label="leave">📝</span> Leave
                </MenuHeading>
                <List>
                    <ListItem onClick={() => navigate("/new")}>new</ListItem>
                    <ListItem onClick={() => navigate("/new collective leave")}>new collective leave</ListItem>
                    <ListItem onClick={() => navigate("/List")}>List</ListItem>
                    <ListItem onClick={() => navigate("/Draft")}>Draft</ListItem>
                </List>
            </MenuItem>

            <MenuItem>
                <MenuHeading>
                    <span role="img" aria-label="expense">📂</span> Expense reports
                </MenuHeading>
                <List>
                    <ListItem>New</ListItem>
                    <ListItem>List</ListItem>
                    <ListItem>Payments</ListItem>
                    <ListItem>Statistics</ListItem>
                </List>
            </MenuItem>

            <MenuItem>
                <MenuHeading>
                    <span role="img" aria-label="time">⏱️</span> Time tracking
                </MenuHeading>
            </MenuItem>

            <MenuItem>
                <MenuHeading>
                    <span role="img" aria-label="recruitment">📋</span> Recruitment
                </MenuHeading>
                <List>
                    <ListItem>New job positions</ListItem>
                    <ListItem>List of job positions</ListItem>
                    <ListItem>New application</ListItem>
                    <ListItem>List of applications</ListItem>
                </List>
            </MenuItem>
        </Root>
    );
};

export default Sidebar;
