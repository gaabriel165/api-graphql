/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FormNewUserMutationVariables = {|
  name?: ?string,
  type?: ?string,
|};
export type FormNewUserMutationResponse = {|
  +newUser: {|
    +id: string,
    +name: string,
    +type: string,
    +createdAt: ?string,
    +updatedAt: ?string,
  |}
|};
export type FormNewUserMutation = {|
  variables: FormNewUserMutationVariables,
  response: FormNewUserMutationResponse,
|};
*/


/*
mutation FormNewUserMutation(
  $name: String
  $type: String
) {
  newUser(name: $name, type: $type) {
    id
    name
    type
    createdAt
    updatedAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "type"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "type",
        "variableName": "type"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "newUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormNewUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormNewUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "00194610c8aa7cb80d1a6b6bae55d532",
    "id": null,
    "metadata": {},
    "name": "FormNewUserMutation",
    "operationKind": "mutation",
    "text": "mutation FormNewUserMutation(\n  $name: String\n  $type: String\n) {\n  newUser(name: $name, type: $type) {\n    id\n    name\n    type\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fef30e76c3fa3e9a7276d6620fbd8e87';

module.exports = node;
