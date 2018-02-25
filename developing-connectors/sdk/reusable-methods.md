# Reusable Methods

Reusable methods are supported in Workato. Reusable methods help keep your custom adapter code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and may be used in any code block.

Such methods are declared using the `methods` block. This block is a top-level key, similar to triggers and actions.

## Example
```ruby
{
  title: "Math",

  connection: {...},

  methods: {
    factorial: lambda do |input|
      number = input[:number]
      if number > 1
        number * call(:factorial, { number: number - 1 })
      else
        number
      end
    end

    hello: lambda do
      puts "Hello world"
    end
  },

  actions: {
    factorial: {
      input_fields: lambda do
        [
          { name: "number", type: :integer }
        ]
      end,

      execute: lambda do |connection, input|
        { factorial: call(:factorial, { number: input["number"] }) }
      end
    },

    say_hello: {
      execute: lambda do
        call(:hello)
      end
    }
  },
```

## The `call` method

```ruby
call(:name, { number: 1 })
```

Use the `call()` method to reference a method. This method takes in two parameters:

1. Method name
  - Use the method name defined. You can use either `:method_name` (symbol) or `"method_name"` (string) representations.
2. Input hash (optional)
  - This is a hash of input variables. Leave blank if your method does not take in an input.

The input hash is passed into the method as an argument, which you may reference as so:

```ruby
methods: {
  factorial: lambda do |input|
    number = input[:number]
    ...
```

## Recursion
Methods can also be called within method code blocks. This means that a method can be called by another method or by itself. In the case of the factorial example provided above, note that the `factorial` method has some degree of recursion. Be careful when writing recursive loops by setting failsafes as in the example below:

```ruby
if number > 1
  number * call(:factorial, { number: number - 1 })
else
  number
end
```

## Testing
The SDK console only allows testing of actions and triggers. To test your reusable method, write an action which encapsulates it.

## Summary
Reusable methods are powerful tools that can make development more efficient. It is especially useful when making schema introspection calls within the `object_definitions` or `input_schema` lambdas. You can also use these in conjunction with some [whitelisted methods](methods.md).
