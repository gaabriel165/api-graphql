/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type listQueryVariables = {||};
export type listQueryResponse = {|
  +getUser: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +type: string,
    +createdAt: ?string,
    +updatedAt: ?string,
  |}>
|};
export type listQuery = {|
  variables: listQueryVariables,
  response: listQueryResponse,
|};
*/


/*
query listQuery {
  getUser {
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
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getUser",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "listQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "listQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "64870c3bb9b50cd8cc9507e58751c97a",
    "id": null,
    "metadata": {},
    "name": "listQuery",
    "operationKind": "query",
    "text": "query listQuery {\n  getUser {\n    id\n    name\n    type\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2242d2bab67e1644ae1f4353584e195b';

module.exports = node;
