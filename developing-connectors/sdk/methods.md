# Methods

Not all ruby public instance methods are available. Methods are whitelisted to ensure security. The Workato SDK Framework also exposes some methods to make building SDKs convenient.

Here is a list of methods available:

## REST verb methods
- get(url, input)
- post(url, input)
- put(url, input)
- patch(url, input)
- delete(url, input)

### Argument types
Each REST verb method must be provided a `url` string as the first argument. The second argument (optional) can be in 2 forms.

Firstly, `input` can be passed as a single hash. This hash can simply be the `input` of the `execute` or `poll` argument, such as the following:

```ruby
execute: lambda do |connection, input|
  get("https://www.some_api_endpoint.com/api", input)
end
```

The hash can also be formed before like this:

```ruby
execute: lambda do |connection, input|
  params = {
    "id" => input["id"]
  }

  get("https://www.some_api_endpoint.com/api", params)
end
```

The SDK framework processes this hash value and transforms it into the respective data format. For GET requests, the hash data is formed as part of URL parameters. For POST, PUT and PATCH, a payload body will be generated.

The other method of passing request data is as a series of key/value pairs.

```ruby
execute: lambda do |connection, input|
  post("https://www.some_api_endpoint.com/api", name: input["name"], email: input["email"])
end
```

All arguments after the first (URL string) will be transformed into request data. In this case, since the default data format is JSON, the following request body is formed:

```json
{
  "name": "Ee Shan",
  "email": "eeshan@workato.com"
}
```

For a GET request, the following URL parameters are formed.

```ruby
execute: lambda do |connection, input|
  get("https://www.some_api_endpoint.com/api", name: input["name"], email: input["email"])
end
```

The request URL query string will be:

`?name%3DEe%20Shan%26email%3Deeshan%40workato.com`

## Ruby methods

Method | Description
--- | ----------
each | Basic iterator<br>`[1, 2, 3].each { \|i\| puts i }`
group_by | [Group arrays into sets](http://apidock.com/rails/Enumerable/group_by)
headers | Add headers to a request<br>`.headers(Authorization: "Bearer HTB674HJK1")`
params | Add parameter to a request<br>`.params(api_key: "HTB674HJK1")`
payload | Add payload to a request<br>`.payload(id: "345")`
ignored | Ignore a comma-separate list of fields<br>`object_definition["user"].ignored("id", "created_at")`
only | White list a comma-separate  of fields<br>`object_definition["user"].only("id", "name")`
required | Make a comma-separate list of fields required<br>`object_definition["user"].required("id", "created_at")`
inject | [Combine elements in an array using an operation](http://apidock.com/ruby/Enumerable/inject)
iso8601 | Convert a date/date-time variable to ISO8601 format
map | Returns a new array after invoking block on each element
merge | Returns a new hash containing [merged contents](https://ruby-doc.org/core-2.2.0/Hash.html#method-i-merge) of another hash
pluck | Select one or more attributes from an array of objects<br>`[{"id": 1, "name": "David"},{"id": 2, "name": "Peter"}].pluck("id")` returns `[1, 2]`
rand | Random number between 0 and 1
select | [Selectively returns](http://apidock.com/ruby/v1_9_3_392/Array/select) elements for which the block returns true
reject | [Selectively returns](http://apidock.com/ruby/v1_9_3_392/Array/reject) elements for which the block returns false (similar but opposite of select)
sort | [Sort function](http://apidock.com/ruby/Array/sort) returning new sorted array
sort_by | [Sort function](http://apidock.com/ruby/v1_9_3_392/Array/sort_by) returning self
utc | Convert Time to [utc](http://ruby-doc.org/core-2.2.0/Time.html#method-c-utc)
puts | ruby version of console.log/stdout, not the same as put
while | [while loop statement](https://www.tutorialspoint.com/ruby/ruby_loops.htm)

(This list can and will be expanded constantly, feel free to [contact us](mailto:support@workato.com) to update/add to this list)

Workato also supports custom reusable methods. See [Reusable Methods](reusable-methods.md) for more information.
