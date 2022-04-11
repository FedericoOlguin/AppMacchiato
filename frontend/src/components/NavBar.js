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
import user from "../img/avatarWhite.svg"
// import logo from "../img/LogoMi.svg"
import "../Styles/NavBar.css"
import { Link as LinkRouter } from "react-router-dom"
import { connect } from 'react-redux';
import logo from '../img/logo.png'
import userActions from "../redux/actions/userAction"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';



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

    /* when windows do scroll */
    const [color, setColor] = React.useState(false)

    const changeColor = () => {

        if (window.scrollY >= 10) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    return (
        <div className={color ? 'header header-bg' : 'header'}>

            <AppBar position="static" sx={{ background: '#0001' }}>

                <Container maxWidth="xxl" className="navbarBackgound navbar-expand-lg ">
                    <Toolbar disableGutters>
                        <Typography variant="h6" component="div" sx={{ p: 0, mr: 2, display: { xs: 'none', md: 'block' } }}>
                            <LinkRouter className="navbar-brand linkLogo" to="/"><img className="logo" src={logo} alt="LogoMyTinerary" /> Macchiato</LinkRouter>
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
                                    <LinkRouter className="nav-linkUser" to="/shop">Store</LinkRouter>
                                </MenuItem>
                                <MenuItem className="navLi" onClick={handleCloseNavMenu}>
                                    <LinkRouter className="nav-linkUser" to="/aboutUs">About Us</LinkRouter>
                                </MenuItem>

                                <LinkRouter className="carritolink2" to="/shoppingCart">
                                    <Badge badgeContent={
                                        props.cart.length
                                    } color="warning">
                                        <ShoppingCartIcon className='carritoCompras2' />
                                    </Badge>
                                </LinkRouter>


                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <LinkRouter className="navbar-brand linkLogo" to="/"><img className="logo" src={logo} alt="LogoMachiato" /> Macchiato</LinkRouter>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <div className='menuLinks'>

                                <Button onClick={handleCloseNavMenu} className="navLi">
                                    <LinkRouter className="linkGeneral" aria-current="page" to="/">Home</LinkRouter>
                                </Button>
                                <Button sx={{ my: 0, color: 'white', display: 'flex' }} className="navLi">
                                    <LinkRouter className="linkGeneral" to="/shop">Store</LinkRouter>
                                </Button>
                                <Button sx={{ my: 0, color: 'white', display: 'flex' }} className="navLi">
                                    <LinkRouter className="linkGeneral" to="/aboutUs">About Us</LinkRouter>
                                </Button>

                                <LinkRouter className="carritolink" to="/shoppingCart">
                                    <Badge badgeContent={props.cart.length} color="warning">
                                        <ShoppingCartIcon className='carritoCompras' color="black" />
                                    </Badge>
                                </LinkRouter>


                            </div>
                        </Box>

                        <Box sx={{ flexGrow: 0.008 }}>
                            <Tooltip title="Open settings" >

                                {
                                    props.user ? (
                                        <div>
                                            <span className='spanUser'> {props.user.name.firstName}</span>
                                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                                <Avatar alt="Remy Sharp" className='logo' src={props.user.photoURL} />
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
                                        (<div className='container-nav-LinkUser'>
                                            {/* <MenuItem onClick={handleCloseUserMenu} className="navLi"> */}
                                            <LinkRouter className="nav-linkUser" aria-current="page" onClick={() => {
                                                signOutUser()
                                                handleCloseUserMenu()
                                            }} to="#">Sign out</LinkRouter>
                                            {/* </MenuItem> */}
                                            {/* <MenuItem> */}
                                            <LinkRouter className="nav-linkUser" aria-current="page" to={'/seetings'}>⚙
                                                Setting</LinkRouter>
                                            {/* </MenuItem> */}
                                            {/* {console.log(props.authorized)} */}
                                            {props.authorized ? (
                                                <LinkRouter onClick={handleCloseUserMenu} className="nav-linkUser" to="/panel">Panel</LinkRouter>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                        ) : (
                                            <div className='container-nav-LinkUser'>
                                                {/* <MenuItem onClick={handleCloseUserMenu} className="navLi"> */}
                                                <LinkRouter onClick={handleCloseUserMenu} className="nav-linkUser" aria-current="page" to="/signIn">Sign In</LinkRouter>
                                                {/* </MenuItem> */}
                                                {/* <MenuItem onClick={handleCloseUserMenu} className="navLi"> */}
                                                <LinkRouter onClick={handleCloseUserMenu} className="nav-linkUser" to="/signUp">Sign Up</LinkRouter>
                                                {/* </MenuItem> */}

                                            </div>
                                        )
                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
        </div >
    );
};


const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        authorized: state.userReducer.authorized,
        cart: state.productReducer.cart
    }
}

const mapDispatchToProps = {
    signOut: userActions.signOut

}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar2);