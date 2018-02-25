# Configuration Fields

Occassionally, input/output fields depend on user input. For example, the fields for an object depends on the chosen object. Here, we introduce `config_fields`. It is an optional key available in both actions and triggers. It is a special type of input field that can be used to generate other dependent input/output fields. We see this in the merge_document action in Webmerge.

```ruby
action: {
  merge_document: {
    config_fields: [
      # this field shows up first in recipe as a picklist of documents to use
      {
        name: "document_id",
        label: "Document",
        control_type: :select,
        pick_list: "documents",
        optional: false
      }
    ],

    input_fields: lambda do |object_definition|
      object_definition["document"]
    end,

    execute: lambda do |_connection, input|
      d = input["document_id"].split("|")
      post(d.last.to_s, input)
    end,

    output_fields: lambda do |_object_definition|
      [
        {
          name: "success"
        }
      ]
    end
  }
}
```

Here, the fields are different for each document, hence a user first chooses a document (from a pick list of documents available in the instance) which is then used to generate the remaining fields. This part is done by specifying that the "document" object definition is dependent on the value of "document_id" within config_field. Notice that the fields block accepts a second argument `config_fields`. This argument refers to the field(s) you define in `config_fields` in each action/trigger.

```ruby
object_definition: {
  document: {
    fields: lambda do |_connection, config_fields|
      return [] if config_fields.blank?
      get("https://www.webmerge.me/api/documents/#{config_fields["document_id"]}/fields").
        map { |field| field.slice("name") }
    end
  }
}
```

While the config_fields is empty, document objects will have no fields (empty array of fields). As soon as config_fields is given a value, a request is made to retrieve the fields present in this document. From a recipe user perspective, the action will appear initially as a single input with a list of documents. After selecting a document, the corresponding set of fields will be generated, to be used in the recipe.

![config_fields schema screenshot](/assets/images/sdk/config_fields_demo.gif)
 *Configuration fields in action*
