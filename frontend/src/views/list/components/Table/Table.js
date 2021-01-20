import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {
    Grid,
    Tooltip,
    IconButton,
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Button,
    DialogActions
} from '@material-ui/core';

import axios from 'axios';
import { useMutation, useQuery, useQueryCache } from 'react-query';

import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import environment from "../../../../relay/environment";

const styles = {
    tableHead: {
        '& > *': {
            fontWeight: 'bold',
            width: '100px',
            backgroundColor: '#EAE8EB'
        }
    },
    tableRow: {
        '& > *': {
            width: '100px'
        }
    },
    container: {
        border: '1px solid #DBD7D3',
        marginTop: '100px',
        boxShadow: 'none'
    }
};

const deleteUserMutation = graphql`
  mutation TableDeleteUserMutation($id: ID!) {
    deleteUserById(id: $id)
  }
`;

const DataTable = (props) => {
    const { classes } = props;

    const rows = props.elements.getUser;
    
    const deleteElement = () => {

        console.log(id);

        const variables = {
            id
        }

        commitMutation(environment, {
            mutation: deleteUserMutation,
            variables,
            onCompleted: () => window.location.reload(),
            onError: (err) => console.log(err)
        });
    };
    
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <TableContainer className={classes.container} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow className={classes.tableHead}>
                        <TableCell align="center">NOME</TableCell>
                        <TableCell align="center">TIPO</TableCell>
                        <TableCell align="center">DATA</TableCell>
                        <TableCell align="center">AÇÕES</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow className={classes.tableRow} hover={true} key={index}>
                            <TableCell size='small' align="center">{row.name}</TableCell>
                            <TableCell size='small' align="center">{row.type}</TableCell>
                            <TableCell size='small' align="center">{row.createdAt}</TableCell>
                            <TableCell size='small' align="center">
                                <Grid container justify='space-evenly' alignItems='center'>
                                    <Tooltip title="editar">
                                        <Link component={RouterLink} to={{ pathname: `/editar/${row.id}`, state: { name: row.name, type: row.type } }}>
                                            <IconButton aria-label="editar">
                                                <EditIcon></EditIcon>
                                            </IconButton>
                                        </Link>
                                    </Tooltip>
                                    <Tooltip title="deletar" >
                                        <IconButton aria-label="deletar" onClick={ () => { setId(row.id); handleClickOpen() }}>
                                            <DeleteIcon></DeleteIcon>
                                        </IconButton>
                                    </Tooltip>
                                    <Dialog 
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"Tem certeza que deseja remover esse item?"}</DialogTitle>
                                        <DialogActions>
                                            <Button onClick={handleClose} color="primary">
                                                Cancelar
                                            </Button>
                                            <Button onClick={ () => { deleteElement(row.id) } } color="primary" autoFocus>
                                                Confirmar
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Grid>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default withStyles(styles)(DataTable);