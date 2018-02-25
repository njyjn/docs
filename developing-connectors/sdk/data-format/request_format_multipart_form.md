# Multipart form

[Multipart form request](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.2)  is typically used to send large files and data to a server.

This request format can be declared in any blocks (`execute`, `acquire`, `fields` etc.) in your custom adapter code. It should be chained to one of the [base request](../walk-through.md#base-request).

## Example
Let's use the Convert document endpoint in [IBM Watson API](https://www.ibm.com/watson/developercloud/document-conversion/api/v1/#convert-document) as an example. This endpoint accepts a document in multipart/form-data format.

A cURL example looks like this:
```sh
curl \
  https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document?version=2015-12-15 \
  -X POST \
  -u "{username}":"{password}" \
  -F config="{\"conversion_target\":\"answer_units\"}" \
  -F "file=@sample.pdf;type=application/pdf"
```

Workato:
```ruby
{
  title: "IBM Watson",

  connection: {...},

  actions: {
    upload_file: {
      input_fields: lambda do
        [
          { name: "file_name", type: "string" },
          { name: "file_data", type: "string" },
          { name: "conversion_target", type: "string" }
        ]
      end,

      execute: lambda do |connection, input|
        post("https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document").
          params(version: "2015-12-15").
          request_format_multipart_form.
          payload(file: [input['file_data'], 'application/pdf'],
                  file_name: input['file_name'],
                  config: "{\"conversion_target\":\"#{input['conversion_target']}\"}")
      end
    },

    output_fields: {...}
  },
  ...
```

In the SDK, notice that the `file` key in the payload takes an array of length 2. This defines the request as form data. The first item in the array is the file data and the second item is the media type (MIME type) of the input file.

## Components
<table class="unchanged rich-diff-level-one">
  <thead>
      <tr>
          <th>cURL</th>
          <th>Workato</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>curl https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document?version=2015-12-15 -X POST</code></td>
      <td><code>post("https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document")</code><br><code>.params(version: "2015-12-15")</code></td>
    </tr>
    <tr>
      <td><code>-u "{username}":"{password}"</code></td>
      <td>This is defined in the [connection](../authentication/basic-authentication.md) block and is automatically added onto the outgoing request.</td>
    </tr>
    <tr>
      <td><code>-F config="{\"conversion_target\":\"answer_units\"}"</code><br><code>-F "file=@sample.pdf;type=application/pdf"</code></td>
      <td><code>.request_format_multipart_form</code><br><code>.payload(</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>file: [input['file_data'], 'application/pdf'], </code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>file_name: input['file_name'],</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>config: "{\"conversion_target\":\"#{input['conversion_target']}\"}")</code></td>
    </tr>
  </tbody>
</table>
