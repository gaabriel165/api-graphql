import React from "react";
import Header from "./components/Header/Header";
import DataTable from "./components/Table/Table";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import environment from "../../relay/environment";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

const styles = {
  root: {
    marginLeft: "50%",
    transform: "translate(-50%, 0)",
    width: '70%'
  },
  addButton: {
    marginTop: "35px",
  },
};

const Resources = (props) => {
  const { classes } = props;

  return (
    <div>
      <Header nome="Listagem de Recursos"></Header>
      <div className={classes.root}>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query listQuery {
              getUser {
                id
                name
                type
                createdAt
                updatedAt
              }
            }
          `}
          variables={{}}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return <DataTable elements={props}></DataTable>;
          }}
        />

        <Link component={RouterLink} to="/cadastrar" underline="none">
          <Button
            className={classes.addButton}
            variant="contained"
            color="primary"
          >
            Adicionar
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Resources);
