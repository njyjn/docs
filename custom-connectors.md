---
title: Custom connectors
date: 2017-02-16 06:15:00 Z
---

# Basics

## Making requests

The custom adapter framework supports building adapters to applications that offer an API reachable over HTTP/HTTPS.  The common request/response formats are supported: JSON (default), XML, and `www-form-urlencoded`.

In parts of the adapter that need to make requests, the HTTP verbs (GET, POST etc) are supported as ruby methods.  Let's use an example of an API that uses simple token-based authentication passed as a URL parameter, and returns customer records wrapped in a superfluous `customer` JSON object that we want the adapter to peel off as it's not useful to recipe authors using it:

`GET https://api.my-app.com/v1/customers.json?id=1234&api_token=xyz`

```javascript
{
  "customer": {
    "id": 1234,
    "name": "John Smith",
    "email": "john.smith@email.com",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "94321",
      "country": "USA"
    }
  }
}
```

A request to do the above could be written in a custom adapter as:

```ruby
get('https://api.my-app.com/v1/customers.json?id=1234&api_token=xyz')['customer']
```

or

```ruby
get('https://api.my-app.com/v1/customers.json').params(id: 1234, api_token: 'xyz')['customer']
```

## Request execution

Let's dissect the different parts of the second form of the request above:

```ruby
get('https://api.my-app.com/v1/customers.json').params(id: 1234, api_token: 'xyz')['customer']
```

This chains three method calls:

* Create the base request.

* Mix in more request options.

* Access the response, at which point the request is lazy-executed.

### Base request

`GET https://api.my-app.com/v1/customers.json`

```ruby
get('https://api.my-app.com/v1/customers.json')
```

No request has been made yet: The result so far is the cued-up request for the base URL, and with the request and expected response format set to the default, JSON.

### Mix in request options

`id=1234&api_token=xyz`

```ruby
params(id: 1234, api_token: 'xyz')
```

`params` is one of the methods available on the request object, adding URL parameters, which are passed as a hash object.  More methods can be similarly chained to mix in other aspects of the request that is to be made:

* `payload`

  Payload fields (PATCH, POST, PUT only), also passed as a hash.

* `headers`

  Request headers, passed as a hash

* Methods to change the request/response (or both) formats from the JSON default:

  `request_format_json`, `response_format_json`, `format_json`, `request_format_xml`, `response_format_xml`, `format_xml`, `request_format_www_form_urlencoded`

* HTTP authentication

  `user`, `password`

### Execute request and process the response

```ruby
['customer']
```
By calling any method (`[]` here) that is not a request option, the adapter signals that it is time to make the request so that we can process the API response.  In this JSON default case, the response is parsed into a ruby hash:

```ruby
{
  "customer" => {
    "id" => 1234,
    "name" => "John Smith",
    "email" => "john.smith@email.com",
    "address" => {
      "street" => "123 Main St",
      "city" => "Anytown",
      "state" => "CA",
      "zip" => "94321",
      "country" => "USA"
    }
  }
}
 ```

Which then has the `['customer']` method evaluated on it, peeling off the `customer` envelope and resulting in the action's output:

```ruby
{
  "id" => 1234,
  "name" => "John Smith",
  "email" => "john.smith@email.com",
    "address" => {
      "street" => "123 Main St",
      "city" => "Anytown",
      "state" => "CA",
      "zip" => "94321",
      "country" => "USA"
    }
}
```

## Schema - describing input/output

There are several components where the adapter needs to describe the expected fields for input, output or configuration.  This is done using schema notation:

```ruby
[
  { name: "id", type: :integer },
  { name: "name" },
  { name: "email" },
  {
    name: "address",
    type: :object,
    properties: [
      { name: "street" },
      { name: "city" },
      { name: "zip" },
      { name: "country" }
    ]
  }
]
```

# Adapter components

With these basics out of the way, we can now walk through an example adapter, and show how its various parts relate to how users will edit and run recipes.

```ruby
    {
      title: 'My sample adapter',
    
      connection: {
```

## Connection fields

The optional connection `fields` use the [schema](#schema---describing-inputoutput) notation to describe the connection configuration fields, if any are needed.  Using the example API above that requires an `api_token` URL parameter, this might be:

```ruby
        fields: [
          {
            name: 'api_token',
            label: 'API token',
            optional: false,
            hint: 'You can find your MyApp API token under "Account Settings"'
          }
        ],
```

use the [schema](#schema---describing-inputoutput) notation to describe the connection's properties, shown wherever the connection configuration is displayed, for example in the recipe's connection tab:

![connection_settings.png](/_uploads/connection_settings.png)

## Authorization

`connection` can optionally also contain an `authorization` component to consolidate the API's authorization logic.  `authorization` can contain several components, its most important one being `apply`, which lets us define [request options](#mix-in-request-options) that will be added to any API request made by the adapter:

```ruby
        authorization: {
          apply: lambda do |connection|
            params(api_token: connection['api_token'])
          end
        },
```

This way our [requests](#request-execution) don't need to repeat the authorization options:

```ruby
get('https://api.my-app.com/v1/customers.json').params(id: 1234)['customer']
```

## Connection test

Back outside `connection`, the `test` component lets the connection be tested, e.g. to make sure the credentials, like `api_token` in this example, are still valid.

```ruby
    },

    test: lambda do |connection|
        get('https://api.my-app.com/v1/customers.json').params(limit: 1)
    end,
```

As long as the lambda does not raise an exception, the connection is considered live.  It is invoked:

* With non-OAuth adapters only: when the `Connect` button is clicked.

* In all cases:  When starting a recipe, each connection used in it has the corresponding `test` called; starting the recipe fails if any `test` raises an error.

# Actions

```ruby
    actions: {
      get_customer_by_id: {
```
## Input form

When one of the adapter's actions is used in a recipe, its input form is based on its `input_fields` lambda, which also uses the [schema](#schema---describing-inputoutput) notation.

Continuing with our "get customer by ID" action example:

```ruby
        input_fields: lambda do
          [
            { name: 'id', type: :integer, optional: false }
          ]
        end,
```

![input_form.png](/_uploads/input_form.png)

## Output tree

Using the same [schema](#schema---describing-inputoutput) notation, `output_fields` describes the action's output that will appear downstream in the recipe job data:

```ruby
        output_fields: lambda do
          [
            { name: "id", type: :integer },
            { name: "name" },
            { name: "email" },
            {
              name: "address",
              type: :object,
              properties: [
                { name: "street" },
                { name: "city" },
                { name: "zip" },
                { name: "country" }
              ]
            }
          ]
        end,
```

![output_tree.png](/_uploads/output_tree.png)

## `execute`

At runtime, when the job reaches a recipe line that uses this action, its `execute` lambda is called.

* The first argument is the [`connection`](#connection-fields) fields, packaged in a hash object.

* The second argument is the action's input, evaluated based on how the [input form](#input-form) is configured in the recipe.  Also packaged as a hash object.

As discussed earlier, the `execute` lambda [makes the request](#request-execution).  The result, lazy-evaluated either within the lambda or right after it returns, is expected to contain the specified [output fields](#output-tree).

```ruby
        execute: lambda do |connection, input|
          get('https://api.my-app.com/v1/customers.json').params(id: input['id'])['customer']
        end

      } # get_customer_by_id
    }, # actions:
```

# Triggers

      triggers: {
        new_customer: {

## Input form

Same as the one for [actions](#input-form)

## Output tree

Similar to [actions](#output-tree), but describes what each **one** of the collection of records that the trigger's `poll` (see below) contains.

## Polling for trigger events

There are two types of trigger, to cater to two common patterns in such API endpoints: "Ascending" (the default), and "paging", a.k.a. descending.

### "Ascending" endpoints

These are API endpoints that list records in the same order as we would want them consumed.  This is typically ascending in creation or modification time.

`GET /v1/customers.json?created_since=2017-01-01T12:00:00Z&order=asc&limit=100`

    {
      "customers": [
         {
           id: 1234,
           created_at: "2017-01-02T12:34:56Z",
           ...
         },
         ... (up to 100 total customer records)
         {
           id: 2345,
           created_at: "2017-01-03T12:34:56Z",
           ...
         }
      ]
    }

#### `poll`

        new_customer_ascending: {
          poll: lambda do |connection, input, last_created_since|
            created_since = last_created_since || input['created_since']
            customers = get('https://api.my-app.com/v1/customers.json').
                          params(created_since: created_since.iso8601,
                                 order: 'asc',
                                 limit: 100)['customers'] || []
            {
              events: customers,
              next_poll: (customers.length > 0 && customers.last['created_at'] ||
                            created_since),
              can_poll_more: (customers.length >= 100)
            }
          end,

The `poll` response contains three parts:

##### `events`

This is the array of events polled (customer objects in this case), out of which jobs may be started with the recipe.

##### `next_poll`

An object to be passed as the last argument (named to `last_created_since` in this example) to the next poll cycle.  Use this to maintain a "cursor" for the next request.

##### `can_poll_more`

A flag that informs the runtime whether more results may be immediately available.  If true, a further poll will be made (almost) immediately.

#### `dedup`

          dedup: lambda do |customer|
            customer['id']
          end,
        }, # closing out the trigger

It is not always possible to prevent the same record from appearing in separate `poll` invocations.  To avoid duplicate recipe jobs, the runtime uses `dedup`, passing it each item returned in [`events`](#events).  The output is a unique identifier associated with the recipe job that results from that item.

For triggers that track the creation of new objects, the unique identifier is typically the application-specific unique ID for that object.

Another common trigger pattern is tracking object modification.  To reflect that, the adapter would typically mix the object's modification timestamp into the event's unique ID:

    "#{customer['id']}@#{customer['modified_at']}"

### "Descending" endpoints

These are endpoints that list records in the opposite order from the one we want them consumed.

`GET /v1/customers.json?created_since=2017-01-01T12:00:00Z&created_before=2017-01-21T00:00:00Z&order=desc&limit=100`

    {
      "customers": [
         {
           id: 9876,
           created_at: "2017-01-20T12:34:56Z",
           ...
         }
         ... (up to 100 total customer records)
         {
           id: 8765,
           created_at: "2017-01-19T12:34:56Z",
           ...
         }
      ]
    }

#### `poll`

The polling strategy for these endpoints is to "page" backwards, until we reach the beginning of the result set (or results we have processed before).  At that point the runtime handles creating the recipe jobs in the "correct" order.

        new_customer_descending: {
          type: :paging_desc, # marks this as a "descending" trigger
    
          poll: lambda do |connection, input, last_created_before|
            created_before = last_created_before || Time.now
            customers = get('https://api.my-app.com/v1/customers.json').
                          params(created_since: input['created_since'].iso8601,
                                 created_before: created_before.iso8601,
                                 order: 'desc',
                                 limit: 100)['customers'] || []
            {
              events: customers,
              next_page: (customers.length >= 100 && customers.last['created_at']).presence
            }
          end,

This trigger variant's `poll` response contains two parts:

##### `events`

Similar to the ascending variant's [`events`](#events), but expected to be in descending order.

##### `next_page`

If present (not `nil`), this signals the runtime that there may be more, "earlier", events available in the endpoint.

This value will be passed to the next `poll` as the third argument, named `last_created_before` in this example.

In comparison with the ascending trigger variant, this value plays the roles of both the "cursor" ([`next_poll`](#next_poll)) and poll timing hint ([`can_poll_more`](#can_poll_more)).

The adapter doesn't need to keep track of how far we can go before we encounter already-seen events; the runtime handles that state, in combination with the rest of the descending trigger components:

#### `document_id`

          document_id: lambda do |customer|
            customer['id']
          end,

Extracts the unique ID of the underlying object.  This is optional, if absent then the default behavior is to use the field called `id` (case insensitive) in the object (the example above just illustrates the default).

**Note**: This is not the same as [`dedup`](#dedup-1) below.

#### `sort_by`

          sort_by: lambda do |customer|
            customer['created_at']
          end,

Extracts a sorting/ranking value for the underlying object, so the runtime can determine whether we have polled "far enough" backwards.

#### `dedup`

          dedup: lambda do |customer|
            "#{customer['id']}@#{customer['created_at']}"
          end
        }, # closing out the trigger

Performs the same de-duplication logic as in [the case](#dedup) of ascending triggers.  However in the case of descending triggers it is optional; example above is the default, of combining the result of `document_id` and `sort_by`, separated by a `@` character.

# Complete adapter

At this point, after closing the remaining "open" braces in the adapter description:

      } # triggers
    } # top-level adapter hash

The adapter should be ready to be used.
