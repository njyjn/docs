# Form urlencoded

This request format can be declared in any blocks (`execute`, `acquire`, `fields` etc.) in your custom adapter code. It should be chained to one of the [base request](../walk-through.md#base-request).

## Example
Let's use the Submit data to a form endpoint in [HubSpot API](https://developers.hubspot.com/docs/methods/forms/submit_form) as an example. This endpoint accepts form data in form urlencoded format.

A cURL example looks like this:
```sh
curl \
  https://forms.hubspot.com/uploads/form/v2/12345/67890 \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'firstname=TestContact&lastname=FormSub&email=formsub@hubspot.com&newcustomproperty=testing&hs_context=%7B%22hutk%22%3A%2260c2ccdfe4892f0fa0593940b12c11aa%22%2C%22ipAddress%22%3A%22192.168.1.12%22%2C%22pageUrl%22%3A%22http%3A%2F%2Fdemo.hubapi.com%2Fcontact%2F%22%2C%22pageName%22%3A%22Contact%2BUs%22%2C%22redirectUrl%22%3A%22http%3A%2F%2Fdemo.hubapi.com%2Fthank-you%2F%22%7D'

```

This cURL command can be replicated in Workato:
```ruby
{
  title: "HubSpot",

  connection: {...},

  actions: {
    submit_form: {
      input_fields: lambda do
        [
          { name: "portal_id", type: :string },
          { name: "form_guid", type: :string },
          { name: "hutk", type: :string },
          { name: "ipAddress", type: :string },
          { name: "pageUrl", type: :string },
          { name: "pageName", type: :string },
          { name: "redirectUrl", type: :string }
        ]
      end,

      execute: lambda do |connection, input|
        post("https://forms.hubspot.com/uploads/form/v2/#{input['portal_id']}/#{input['form_guid']}").
          request_format_www_form_urlencoded.
          request_body(
            input.reject { |k,v| k == 'portal_id' || k == 'form_guid' }
          )
      end
    },

    output_fields: {...}
  },
```

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
      <td><code>curl https://forms.hubspot.com/uploads/form/v2/{portal_id}/{form_guid} -X POST</code></td>
      <td><code>post("https://forms.hubspot.com/uploads/form/v2/#{input['portal_id']}/#{input['form_guid']}")</code></td>
    </tr>
    <tr>
      <td><code>-H 'Content-Type: application/x-www-form-urlencoded'</code></td>
      <td><code>.request_format_www_form_urlencoded</code></td>
    </tr>
    <tr>
      <td><code>-d '{data}'</code></td>
      <td><code>.request_body(input.reject { &#124;k,v&#124; k == 'portal_id' &#124;&#124; k == 'form_guid' })</code></td>
    </tr>
  </tbody>
</table>
