<div align="left">

[![Visit Lucca](./header.png)](https://lucca-hr.com)

# [Lucca](https://lucca-hr.com)<a id="lucca"></a>

Welcome on the documentation for the Organization Structure API


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`luccaorganization.axisSections.createNewAxisSection`](#luccaorganizationaxissectionscreatenewaxissection)
  * [`luccaorganization.axisSections.deleteById`](#luccaorganizationaxissectionsdeletebyid)
  * [`luccaorganization.axisSections.getById`](#luccaorganizationaxissectionsgetbyid)
  * [`luccaorganization.axisSections.list`](#luccaorganizationaxissectionslist)
  * [`luccaorganization.axisSections.list_0`](#luccaorganizationaxissectionslist_0)
  * [`luccaorganization.axisSections.updateById`](#luccaorganizationaxissectionsupdatebyid)
  * [`luccaorganization.departments.getAll`](#luccaorganizationdepartmentsgetall)
  * [`luccaorganization.departments.getById`](#luccaorganizationdepartmentsgetbyid)
  * [`luccaorganization.departments.listTree`](#luccaorganizationdepartmentslisttree)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Lucca&serviceName=Organization&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { LuccaOrganization } from "lucca-organization-typescript-sdk";

const luccaorganization = new LuccaOrganization({
  // Defining the base path is optional and defaults to https://example.ilucca.net
  // basePath: "https://example.ilucca.net",
  apiKey: "API_KEY",
});

const createNewAxisSectionResponse =
  await luccaorganization.axisSections.createNewAxisSection({
    code: "code_example",
    multilingualName: "multilingualName_example",
    active: true,
    axisId: 1,
  });

console.log(createNewAxisSectionResponse);
```

## Reference<a id="reference"></a>


### `luccaorganization.axisSections.createNewAxisSection`<a id="luccaorganizationaxissectionscreatenewaxissection"></a>

Create a new AxisSection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAxisSectionResponse =
  await luccaorganization.axisSections.createNewAxisSection({
    code: "code_example",
    multilingualName: "multilingualName_example",
    active: true,
    axisId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `any`<a id="description-any"></a>

##### id: `number`<a id="id-number"></a>

##### name: `string`<a id="name-string"></a>

##### url: `string`<a id="url-string"></a>

##### code: `string`<a id="code-string"></a>

##### multilingualName: `string`<a id="multilingualname-string"></a>

##### ownerId: `any`<a id="ownerid-any"></a>

##### startOn: `any`<a id="starton-any"></a>

##### endOn: `any`<a id="endon-any"></a>

##### active: `boolean`<a id="active-boolean"></a>

##### axisId: `number`<a id="axisid-number"></a>

##### parentAxisSections: [`AxisSectionTreeless`](./models/axis-section-treeless.ts)[]<a id="parentaxissections-axissectiontreelessmodelsaxis-section-treelessts"></a>

##### childrenAxisSections: [`AxisSectionTreeless`](./models/axis-section-treeless.ts)[]<a id="childrenaxissections-axissectiontreelessmodelsaxis-section-treelessts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AxissectionsCreateNewAxisSectionResponse](./models/axissections-create-new-axis-section-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/axisSections` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccaorganization.axisSections.deleteById`<a id="luccaorganizationaxissectionsdeletebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await luccaorganization.axisSections.deleteById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### axisSectionId: `number`<a id="axissectionid-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/axisSections/{axisSectionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccaorganization.axisSections.getById`<a id="luccaorganizationaxissectionsgetbyid"></a>

Retrieve a single AxisSection by its unique identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await luccaorganization.axisSections.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### axisSectionId: `number`<a id="axissectionid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AxissectionsGetByIdResponse](./models/axissections-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/axisSections/{axisSectionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccaorganization.axisSections.list`<a id="luccaorganizationaxissectionslist"></a>

List all Axes satisfying query filters.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await luccaorganization.axisSections.list({
  isActive: true,
  paging: "100,0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paging: `string`<a id="paging-string"></a>

{offset},{limit}. Defaults to 0,1000.

##### id: `number`[]<a id="id-number"></a>

Filter on axes unique identifiers.

##### isActive: `boolean`<a id="isactive-boolean"></a>

Filter on axes active status.

#### 🔄 Return<a id="🔄-return"></a>

[AxissectionsListResponse](./models/axissections-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/axes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccaorganization.axisSections.list_0`<a id="luccaorganizationaxissectionslist_0"></a>

List all AxisSections satisfying query filters.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const list_0Response = await luccaorganization.axisSections.list_0({
  paging: "100,0",
  active: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paging: `string`<a id="paging-string"></a>

{offset},{limit}. Defaults to 0,1000.

##### axisId: `number`[]<a id="axisid-number"></a>

Filter on the axis it belongs to.

##### ownerId: `number`[]<a id="ownerid-number"></a>

Filter on the owner managing it.

##### active: `boolean`<a id="active-boolean"></a>

Filter on active status.

#### 🔄 Return<a id="🔄-return"></a>

[AxissectionsList200Response](./models/axissections-list200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/axisSections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccaorganization.axisSections.updateById`<a id="luccaorganizationaxissectionsupdatebyid"></a>

Partial or complete update to an existing AxisSection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await luccaorganization.axisSections.updateById({
  code: "code_example",
  multilingualName: "multilingualName_example",
  active: true,
  axisId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### axisSectionId: `number`<a id="axissectionid-number"></a>

##### description: `any`<a id="description-any"></a>

##### id: `number`<a id="id-number"></a>

##### name: `string`<a id="name-string"></a>

##### url: `string`<a id="url-string"></a>

##### code: `string`<a id="code-string"></a>

##### multilingualName: `string`<a id="multilingualname-string"></a>

##### ownerId: `any`<a id="ownerid-any"></a>

##### startOn: `any`<a id="starton-any"></a>

##### endOn: `any`<a id="endon-any"></a>

##### active: `boolean`<a id="active-boolean"></a>

##### axisId: `number`<a id="axisid-number"></a>

##### parentAxisSections: [`AxisSectionTreeless`](./models/axis-section-treeless.ts)[]<a id="parentaxissections-axissectiontreelessmodelsaxis-section-treelessts"></a>

##### childrenAxisSections: [`AxisSectionTreeless`](./models/axis-section-treeless.ts)[]<a id="childrenaxissections-axissectiontreelessmodelsaxis-section-treelessts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AxissectionsUpdateByIdResponse](./models/axissections-update-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/axisSections/{axisSectionId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccaorganization.departments.getAll`<a id="luccaorganizationdepartmentsgetall"></a>

List all Departments satisfying query filters.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await luccaorganization.departments.getAll({
  paging: "100,0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paging: `string`<a id="paging-string"></a>

{offset},{limit}. Defaults to 0,1000.

##### headId: `number`<a id="headid-number"></a>

##### parentId: `number`<a id="parentid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsGetAllResponse](./models/departments-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/departments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccaorganization.departments.getById`<a id="luccaorganizationdepartmentsgetbyid"></a>

Retrieve a single Department by its unique identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await luccaorganization.departments.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### departmentId: `number`<a id="departmentid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsGetByIdResponse](./models/departments-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/departments/{departmentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccaorganization.departments.listTree`<a id="luccaorganizationdepartmentslisttree"></a>

List all departments as a tree.
Remark: first node is always empty and represents the starting point of the tree as multiple departments might be set to the highest level. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTreeResponse = await luccaorganization.departments.listTree();
```

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsListTreeResponse](./models/departments-list-tree-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/departments/tree` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
