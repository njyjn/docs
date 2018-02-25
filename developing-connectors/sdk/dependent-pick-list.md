# Dependent Pick List

Dependent pick lists allow you to change the contents of a pick list based on the value of another field. For example, rather than displaying every city in the world in a single pick list, we can selectively display only cities from a country selected in another field.

## Defining a dependent pick list

A dependent pick list can be defined dynamically or statically.

### Static example

```ruby
pick_lists: {
  countries: lambda { |_connection|
    [
      ["United States", "USA"],
      ["India", "IND"]
    ]
  },
  cities: lambda { |_connection, country_code:|
    {
      "USA" => [
        ["New York City", "NYC"],
        ["San Fransisco", "SF"]
      ],
      "IND" => [
        ["Bangalore", "BNG"],
        ["Delhi", "DLH"]
      ]
    }[country_code]
  }
}
```

This example shows 2 pick lists. `cities` is a dependent and static pick list while `countries` is an independent and static pick list. The dependent pick list will return an array of cities based on the value of country provided as an argument. Notice that the `country_code:` is a required keyword argument with a trailing colon.

#### Usage

```ruby
input_fields: lambda do
  {
    name: "country",
    control_type: "select",
    pick_list: "countries",
    optional: false
  },
  {
    name: "city",
    control_type: "select",
    pick_list: "cities",
    pick_list_params: { country_code: "country" },
    optional: false
  }
end
```

We use `pick_list_params` to pass the value selected in a parent input to the dependent pick list in the form of a hash.

```ruby
pick_list_params: { country_code: "country" }
```

This hash can contain one or more key/value pair to be passed as arguments to the dependent pick list. In this example, the string `"country"` is used to point to the name of the parent input field to retrieve the value from. This value must be assigned to the key `country_code`, matching the keyword argument defined in the dependent pick list code block.

The parent input field does not need to be a pick list, a text field can also be used to filter contents of a dependent pick list.

```ruby
input_fields: lambda do
  {
    name: "country",
    optional: false,
    change_on_blur: true,
    hint: "Use 3 letter combination country codes. e.g. USA"
  },
  {
    name: "city",
    control_type: "select",
    pick_list: "cities",
    pick_list_params: { country_code: "country" },
    optional: false
  }
end
```

### Dynamic example

```ruby
pick_lists: {
  accounts: lambda do |_connection|
    get("https://www.googleapis.com/analytics/v3/management/accounts")["items"].
      pluck("name", "id")
  end,

  properties: lambda do |_connection, account_id:|
    get("https://www.googleapis.com/analytics/v3/management/accounts/#{account_id}/webproperties")["items"].
      pluck("name", "id")
  end
}
```

In this example, `accounts` is an independent and dynamic pick list while `properties` is a dependent and dynamic pick list. Values from both pick lists are dynamically generated and may be different between 2 Google Analytics connections.

Once again, the required value, `account_id:` is defined as a required keyword argument.

#### Usage

```ruby
input_fields: lambda do
  {
    name: "account",
    control_type: "select",
    pick_list: "accounts",
    optional: false
  },
  {
    name: "property",
    control_type: "select",
    pick_list: "properties",
    pick_list_params: { account_id: "account" },
    optional: false
  }
end
```

Similar to the static example, the parent input does not have to be a pick list. The following snippet uses a text field to pass the acount ID instead.

```ruby
input_fields: lambda do
  {
    name: "account_id",
    optional: false,
    change_on_blur: true
  },
  {
    name: "property",
    control_type: "select",
    pick_list: "properties",
    pick_list_params: { account_id: "account_id" },
    optional: false
  }
end
```

Notice that the name of the parent input field to retrieve the value from is now `account_id` instead of `account`, hence, the string `"account_id"` is used in the `pick_list_params` hash.
