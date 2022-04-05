import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

//material ui
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'


function Snack(props) {
    const dispatch = useDispatch()

    const useStyles = makeStyles(theme => ({
        icon: {
            marginLeft: '15px',

        }
    }));

    const MySnackbar = styled(Snackbar)({
        backgroundColor: props.snackbar.success ? '#006400' : '#9a031e',
        color: '#fff',
        borderRadius: '8px',
        padding: '0.5rem 2rem',
        fontWeight: '400',
        lineHeight: '1.43',
        letterSpacing: '0.01071em',
        marginBottom: 3,
    });

    const classes = useStyles();

    const handleClose = () => {
        dispatch({
            type: 'message',
            payLoad: {
                view: false,
                message: '',
                success: false
            }
        });
    };

    return (
        <div>
            {props.snackbar.view === true && (
                <MySnackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={props.snackbar.view}
                    onClose={handleClose}
                    autoHideDuration={7000}
                >
                    <>
                        {(typeof props.snackbar.message) === "string" ?
                            (<p>{props.snackbar.message}</p>) :
                            <ul>
                                {props.snackbar.message.map(message =>
                                    <li key={message.message}>{message.message}</li>
                                )}
                            </ul>
                        }
                        <IconButton className={classes.icon} size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </>
                </MySnackbar>
            )}

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        snackbar: state.usuariosReducer.snackbar,

    }
}

export default connect(mapStateToProps, null)(Snack);