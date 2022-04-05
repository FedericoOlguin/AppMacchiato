import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import user from "../img/avatarBlack.svg"
// import logo from "../img/LogoMi.svg"
import "../Styles/NavBar.css"
import { Link as LinkRouter } from "react-router-dom"
import { connect } from 'react-redux';
// import usersActions from "../redux/actions/usuariosActions"



const NavBar2 = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    
    function signOutUser() {
        console.log(props.user.email)

        props.signOut(props.user.email)
    }

    

    return (
        <AppBar className='App-header' position="static">
            {/* {console.log(props.user)} */}
            <Container maxWidth="xxl" className="navbarBackgound navbar-expand-lg ">
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div" sx={{ p: 0, mr: 2, display: { xs: 'none', md: 'block' } }}>
                        <LinkRouter className="navbar-brand linkLogo" to="/"><img className="logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coffee-bar-logo-cafe-logo-restaurant-logo-hot-design-template-329df9b033a19d100f99c3ef110ffc67_screen.jpg?ts=1588031580" alt="LogoMyTinerary" /> Macchiato</LinkRouter>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none', },
                            }}
                        >


                            <MenuItem className="navLi" onClick={handleCloseNavMenu}>
                                <LinkRouter className="nav-linkUser" aria-current="page" to="/">Home</LinkRouter>
                            </MenuItem>
                            <MenuItem className="navLi" onClick={handleCloseNavMenu}>
                                <LinkRouter className="nav-linkUser" to="/cities">Cities</LinkRouter>
                            </MenuItem>


                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <LinkRouter className="navbar-brand linkLogo" to="/"><img className="logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coffee-bar-logo-cafe-logo-restaurant-logo-hot-design-template-329df9b033a19d100f99c3ef110ffc67_screen.jpg?ts=1588031580" alt="LogoMyTinerary" /> MyTinerary</LinkRouter>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <div className='menuLinks'>

                            <Button onClick={handleCloseNavMenu} className="navLi">
                                <LinkRouter className="linkGeneral" aria-current="page" to="/">Home</LinkRouter>
                            </Button>
                            <Button sx={{ my: 0, color: 'white', display: 'flex' }} className="navLi">
                                <LinkRouter className="linkGeneral" to="/cities">Cities</LinkRouter>
                            </Button>

                        </div>
                    </Box>

                    <Box sx={{ flexGrow: 0.008 }}>
                        <Tooltip title="Open settings" >
                            {
                                props.user ? (
                                    <div>
                                        <span className='spanUser'> {props.user.name.firstName}</span>
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                            <Avatar alt="Remy Sharp" className='logo' src={props.user.imageUrl} />
                                        </IconButton>
                                    </div>
                                ) :
                                    (<IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                        <Avatar alt="Remy Sharp" className='logo' src={user} />
                                    </IconButton>)
                            }
                        </Tooltip>
                        <Menu
                            className='pruebaMenu'
                            sx={{ mt: '49px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {
                                props.user ?
                                    (
                                        <MenuItem onClick={handleCloseUserMenu} className="navLi">
                                            <LinkRouter className="nav-linkUser" aria-current="page" onClick={signOutUser} to="#">Sign out</LinkRouter>
                                        </MenuItem>
                                    ) : (
                                        <div>
                                            <MenuItem onClick={handleCloseUserMenu} className="navLi">
                                                <LinkRouter className="nav-linkUser" aria-current="page" to="/signIn">Sign in</LinkRouter>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseUserMenu} className="navLi">
                                                <LinkRouter className="nav-linkUser " to="/signUp">Sign Up</LinkRouter>
                                            </MenuItem>
                                        </div>
                                    )
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >

    );
};


const mapStateToProps = (state) => {
    return {
        // user: state.usuariosReducer.user
    }
}

const mapDispatchToProps = {
    // signOut: usersActions.signOut

}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar2);