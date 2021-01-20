/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FormUpdateUserMutationVariables = {|
  id: string,
  name?: ?string,
  type?: ?string,
|};
export type FormUpdateUserMutationResponse = {|
  +updateUserById: ?boolean
|};
export type FormUpdateUserMutation = {|
  variables: FormUpdateUserMutationVariables,
  response: FormUpdateUserMutationResponse,
|};
*/


/*
mutation FormUpdateUserMutation(
  $id: ID!
  $name: String
  $type: String
) {
  updateUserById(id: $id, name: $name, type: $type)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
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
        "name": "id",
        "variableName": "id"
      },
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
    "kind": "ScalarField",
    "name": "updateUserById",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormUpdateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormUpdateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e9a9042304a90318b9a7e8a197eea12f",
    "id": null,
    "metadata": {},
    "name": "FormUpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation FormUpdateUserMutation(\n  $id: ID!\n  $name: String\n  $type: String\n) {\n  updateUserById(id: $id, name: $name, type: $type)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7c7430965b666d13941e14a4ae65a10f';

module.exports = node;
