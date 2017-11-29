# Action

## Endpoints

An action can make one or more requests to various endpoints. Because the framework handles the authentication side of a request, you will not have to worry about that here.

The most important thing is to identify which endpoint will address the purpose of the action. Here we will take a look at Close.io's Lead object and how to retrieve it via the API.

![close.io get lead object image](/assets/images/closeio-doc.png)

```ruby
actions: {

  get_lead_by_id: {

    input_fields: lambda do
      [
        { name: "lead_id", optional: false }
      ]
    end,

    execute: lambda do |connection, input|
      get("https://app.close.io/api/v1/lead/#{input["lead_id"]}/")
    end,

    output_fields: lambda do |object_definitions|
      object_definitions["lead"]
    end
  }
}
```

A very simple action looks like this. A get request to the Close.io leads endpoint. In this case, the particular lead’s details is appended in the endpoint.

## Body

Other endpoints require parameters to access certain details, instead of accessing a particular resource route.

A GET request can have parameters added to the request like so:

```ruby
execute: lambda do |connection, input|
  {
    'companies': get("https://#{connection['deployment']}.api.accelo.com/api/v0/companies.json").
                 params(_search: input["company_name"])["response"]
  }
end
```

A POST or PUT or PATCH request can have payloads attached as well. There are 2 ways you can do this.

Add payloads to the method

```ruby
execute: lambda do |connection, input|
  {
    "users": get("https://#{connection['helpdesk']}.freshdesk.com/api/users.json", input)["results"]
  }
end
```

Add payloads using the payload method

```ruby
execute: lambda do |connection, input|
  post("https://api.pushbullet.com/v2/pushes").
    payload(
      email: input["email"],
      title: input["title"]
      body: input["body"]
    )
end
```

See [Methods](/developing-connectors/sdk/methods.md) section for list of methods available for use in your custom connector actions.

### Output

Did you notice that some requests were encapsulated in `{ }`, and some were not? This will depend on what your endpoint returns and how you would like to map the response to your `output_definition`. Typically, most REST endpoints would return a JSON response, whether the request was successful or not.

Here are two examples. In all cases, the SDK expects the last line of the execute block to be a Hash object.

Assume that the output from an example endpoint is as so

```json
{
  "email": "j@a.co"
}
```

#### 1. Simple object output

Encapsulating the response from the `GET` method within a Hash `{ }` would suffice, since it maps directly into our `output_fields` definition.

```ruby
execute: lambda do |connection, input|
  {
    get("https://api.example.com/v1/email")
  }
end,

output_fields: lambda do
  [
    { name: "email" }
  ]
end
```


#### 2. Nested object output

Here we need to take the extra step of mapping the response returned as a nested Hash object.

```ruby
execute: lambda do |connection, input|
  response = get("https://api.example.com/v1/email")
  
  { user: response }
end,

output_fields: lambda do
  [
    { name: "user", type: :object, properties: [
      { name: "email" }
    ] }
  ]
end
```

Do also take precautions if the endpoint returns a non-JSON response, e.g. `"j@a.co"`. If you do not encapsulate these into a final Hash object, you may get this commonly seen error:

```
undefined method `to_hash` for "j@a.co":String
Did you mean? to_s
```

Use the method `response_format_raw` in these cases

```ruby
execute: lambda do |connection, input|
  response = get("https://api.example.com/v1/email").
    response_format_raw

    { email: response }
end,

output_fields: lambda do
  [
    { name: "email" }
  ]
end
```
