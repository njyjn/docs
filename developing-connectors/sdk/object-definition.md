# Object Definition

Object Definitions is an important component of the SDK. It allows you to define your schema for objects to be used in the actions and triggers. It allows you to easily define outputs and inputs later on.

## Static Definition

The most basic way to build an object definition is to define the field name and type

```ruby
object_definitions: {
  push: {
    fields: lambda do
      [
        { name: "active", type: :boolean },
        { name: "body" },
        { name: "created" },
        { name: "direction" },
        { name: "dismissed", type: :boolean },
        { name: "iden" },
        { name: "modified" },
        { name: "receiver_email" },
        { name: "receiver_email_normalized" },
        { name: "receiver_iden" },
        { name: "sender_email" },
        { name: "sender_email_normalized" },
        { name: "sender_iden" },
        { name: "sender_name" },
        { name: "title" },
        { name: "type" },
      ]
    end
  }
}
```

In this example, the object “Push” is being defined in the fields lambda literal.

Defined as an array of objects. Each field object corresponds to a field in the comment object.

## Dynamic Definition

```ruby
object_definitions: {

  form: {
    fields: lambda do |connection|
      get("https://api.unbounce.com/pages/#{connection['page_id']}/form_fields")["formFields"].
        map { |field| { name: field["id"] } }
    end
  }
}
```

## Components

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Key</th>
            <th>Definition</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>The name of this field. For example <code>id</code> or <code>created_at</code>
            </td>
        </tr>
        <tr>
            <td>label</td>
            <td>An optional key. All fields will have default labels based on the field name. Use this to change the default value of the field label.
            </td>
        </tr>        
        <tr>
            <td>type</td>
            <td>
              The data type of this field. Default value is <code>:string</code>. 
              Should be given the symbol notation (prepend colon).
              <ul>
                <li><code>:string</code></li>
                <li><code>:integer</code></li>
                <li><code>:number</code></li>
                <li><code>:date_time</code></li>
                <li><code>:date</code></li>
                <li><code>:timestamp</code></li>
                <li><code>:boolean</code></li>
                <li><code>:object</code> Must be accompanied with <code>:properties</code></li>
                <li><code>:array</code> Must be accompanied with <code>:properties</code></li>
              <ul>
            </td>
        </tr>
        <tr>
            <td>control_type</td>
            <td>
              The input field type to expose in a recipe.
              <ul>
                <li><code>:text</code></li>
                <li><code>:text-area</code></li>
                <li><code>:number</code></li>
                <li><code>:url</code></li>
                <li><code>:select</code> Make sure to include the <code>:pick_list</code> property.</li>
                <li><code>:date_time</code></li>
                <li><code>:checkbox</code></li>
                <li><code>:currency</code></li>
                <li><code>:phone</code></li>
                <li><code>:email</code></li>
                <li><code>:subdomain</code>Typically used in connection fields. Make sure to include the <code>:url</code> property.</li>
              <ul>              
            </td>
        </tr>
        <tr>
            <td>pick_list</td>
            <td>
              If <code>control_type</code> is <code>:select</code>, this property is required. 
              See more in <a href="/developing-connectors/sdk/pick-list.html">Pick List</a> chapter.
            </td>
        </tr>
        <tr>
            <td>properties</td>
            <td>
              When defining nested objects, use the <code>properties</code> key to define the fields in the object.
              Remember to define the type as <code>:array</code> or <code>:object</code>
            </td>
        </tr>
        <tr>
            <td>sticky</td>
            <td>Use this property to make the optional field visible on the Input section. For Ex: Since is optional field but to be displayed always under Input fields. Use <code>sticky: true</code>.
            </td>
        </tr>
    </tbody>
</table>

## Nested fields

Often, data returned from API request is not a simple one-level JSON. More often than not, the object is much more complex, with multiple levels of nesting. This section aims to illustrate how to define nested fields.

### Nested object

Take this sample User JSON from Okta:

```json
{
  "id": "00ub0oNGTSWTBKOLGLNR",
  "status": "STAGED",
  "created": "2013-07-02T21:36:25.344Z",
  "activated": null,
  "lastLogin": "2013-07-02T21:36:25.344Z",
  "profile": {
    "firstName": "Isaac",
    "lastName": "Brock",
    "email": "isaac.brock@example.com",
    "login": "isaac.brock@example.com",
    "mobilePhone": "555-415-1337"
  },
  "credentials": {
    "provider": {
      "type": "OKTA",
      "name": "OKTA"
    }
  },
  "_links": {
    "activate": {
      "href": "https://your-domain.okta.com/api/v1/users/00ub0oNGTSWTBKOLGLNR/lifecycle/activate"
    }
  }
}
```

Nested object field `profile` can be defined `type: :object` with fields nested inside using `properties`. Properties should be an array of fields objects (just like `fields` within the `user` object).

```ruby
object_definitions: {
  user: {
    fields: lambda do
      [
        {
          name: "id"
        },
        {
          name: "status"
        },
        {
          name: "created",
          type: :timestamp
        },
        {
          name: "activated",
          type: :timestamp
        },
        {
          name: "lastLogin",
          type: :timestamp
        },
        {
          name: "profile",
          type: :object,
          properties: [
            {
              name: "firstName"
            },
            {
              name: "lastName"
            },
            {
              name: "email",
              control_type: :email
            },
            {
              name: "login",
              control_type: :email
            },
            {
              name: "mobilePhone",
              control_type: :phone
            }
          ]
        }
      ]
    end
  }
}
```

### Nested Arrays

The other common type of nested field is array of objects. This type of field contains a list of repeated objects of the same fields. The defining such fields will be very similar to defining objects. Take the following sample `user` object from Asana for instance.

```json
{
  "data": {
    "id": 12149914544379,
    "email": "eeshan@workato.com",
    "name": "Ee Shan",
    "workspaces": [
      {
        "id": 1041269201604,
        "name": "Workato"
      },
      {
        "id": 498346130780,
        "name": "Product Documentation"
      }
    ]
  }
}
```

The `workspaces` array should be given `type: :array` as well as `of: :object`. This tells the `object_definitions` framework that the field contains an array of objects. Similar to nested objects, you will need to define `properties`, which is an array of fields corresponding to the fields of each object in the `workspaces` array.

```ruby
object_definitions: {
  user: {
    fields: lambda do
      [
        {
          name: 'id',
          type: :integer
        },
        { name: 'name' },
        {
          name: 'email',
          control_type: :phone
        },
        {
          name: 'workspaces',
          type: :array,
          of: :object,
          properties: [
            {
              name: 'id',
              label: 'Workspace ID',
              type: :integer
            },
            { name: 'name' }
          ]
        }
      ]
    end
  }
}
```
