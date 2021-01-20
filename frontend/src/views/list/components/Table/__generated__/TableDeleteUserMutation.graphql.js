/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TableDeleteUserMutationVariables = {|
  id: string
|};
export type TableDeleteUserMutationResponse = {|
  +deleteUserById: ?boolean
|};
export type TableDeleteUserMutation = {|
  variables: TableDeleteUserMutationVariables,
  response: TableDeleteUserMutationResponse,
|};
*/


/*
mutation TableDeleteUserMutation(
  $id: ID!
) {
  deleteUserById(id: $id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
      }
    ],
    "kind": "ScalarField",
    "name": "deleteUserById",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TableDeleteUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TableDeleteUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "06d576ef44e4919e08596d077201f933",
    "id": null,
    "metadata": {},
    "name": "TableDeleteUserMutation",
    "operationKind": "mutation",
    "text": "mutation TableDeleteUserMutation(\n  $id: ID!\n) {\n  deleteUserById(id: $id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6582c1e8c69e024f1f7200adba24d99';

module.exports = node;
