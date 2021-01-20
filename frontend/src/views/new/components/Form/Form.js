import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import { useMutation, useQuery, useQueryCache } from "react-query";
import axios from "axios";
import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import environment from "../../../../relay/environment";
import {
  FormGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Link,
  Divider,
} from "@material-ui/core";

const newUserMutation = graphql`
  mutation FormNewUserMutation($name: String, $type: String) {
    newUser(name: $name, type: $type) {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;

const updateUserMutation = graphql`
  mutation FormUpdateUserMutation($id: ID!, $name: String, $type: String) {
    updateUserById(id: $id, name: $name, type: $type)
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  text: {
    marginTop: "10px",
    fontSize: "26px",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  nome: {
    width: "30%",
  },
  select: {
    border: "1px solid #ced4da",
    borderRadius: 4,
    fontSize: 16,
  },
  formControl: {
    maxWidth: 120,
  },
  divider: {
    margin: theme.spacing(3),
  },
  spacingLeft: {
    marginLeft: theme.spacing(3),
  },
}));

const Form = (props) => {
  const classes = useStyles();

  const { url: id } = props;

  const [type, setType] = useState(props.type);
  const [name, setName] = useState(props.name);

  const typeHandleChange = (event) => {
    setType(event.target.value);
  };

  const nameHandleChange = (event) => {
    setName(event.target.value);
  };

  const addElement = () => {
    const variables = {
      type,
      name,
    };

    commitMutation(environment, {
      mutation: newUserMutation,
      variables,
      onError: (err) => console.log(err),
    });
  };

  const updateElement = () => {
    const variables = {
      id,
      type,
      name,
    };

    commitMutation(environment, {
      mutation: updateUserMutation,
      variables,
      onError: (err) => console.log(err),
    });
  };

  const buttonConfirm = () => {
    if (props.url == "cadastro") {
      return (
        <Button
          onClick={() => {
            addElement();
          }}
          variant="contained"
          color="primary"
        >
          Confirmar
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => {
            updateElement();
          }}
          variant="contained"
          color="primary"
        >
          Confirmar
        </Button>
      );
    }
  };

  return (
    <div>
      <FormGroup className={classes.root}>
        <p className={classes.text}>Digite o nome</p>
        <TextField
          value={name}
          onChange={nameHandleChange}
          className={classes.nome}
          id="outlined-basic"
          label="Nome"
          variant="outlined"
        />
        <p className={classes.text}>Selecione o tipo</p>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
          <Select
            value={type}
            onChange={typeHandleChange}
            className={classes.select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Tipo"
          >
            <MenuItem value={"DB"}>DB</MenuItem>
            <MenuItem value={"API"}>API</MenuItem>
            <MenuItem value={"FILA"}>FILA</MenuItem>
            <MenuItem value={"Host Estático"}>Host Estático</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
      <Divider className={classes.divider} style={{ marginTop: "30px" }} />
      <div className={classes.spacingLeft}>
        <Link component={RouterLink} to="/listagem" underline="none">
          {buttonConfirm()}
        </Link>
        <div style={{ marginLeft: 20, display: 'inline' }}>
          <Link component={RouterLink} to="/listagem" underline="none">
            <Button
              variant="contained"
              color="secondary"
            >
              Voltar
            </Button> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
