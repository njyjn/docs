---
title: Message template
date: 2017-12-09 18:00:00 Z
---

# Message template
Message templates enable you to create static templates for commonly used messages. Workato templates use [Mustache](https://mustache.github.io/mustache.5.html) as the templating language. Message templates can be used to generate HTML/text/JSON/XML messages. They also allow you to separate the message composition logic (what the message should look like) from the message generation logic (when the message should be sent). This separation enables the template developer to change the format of the message without making changes to the recipe that sends the message out.

Workato templates are "logic-less" as there is no control flow logic in the template(if/else/looping etc). The 
templates use tags for variable substitution, conditional blocks and list iteration. Tags are enclosed inside 2 opening and closing curly braces, e.g. `{{`email`}}`. Tag syntax determines the tag behavior.

Each message template has an associated input schema. The schema defines the variables that can be used in the 
template. Schema supports both scalar data types (string, integer, date etc.) and complex data types (object, array). 

The recipe developer has to supply the values for the template schema when creating messages from a template.

## Message template example
The UI developer builds a HTML template for outgoing emails about shipped products in an order. The message template contains CSS and it uses template variables for dynamic content.

![HTML template with variable substitution ](/assets/images/message-template/template-with-input.png)
*HTML template with variable substitution*

The recipe developer generates the email message by selecting the template to use and providing the values for message variables.

![Creating a message from a template](/assets/images/message-template/creating-message.jpg)
*Creating a message from a template*

## Variables
The variable tag enables you to specify placeholders in a template. Variable tags are enclosed inside 2 opening and closing curly braces, e.g. `{{`email`}}`. The template engine will look for the variable `email` in the current context. If `email` is not present in the current context, then the parent contexts are traversed till the top context. An empty string is returned when the variable is not found.

Variable values are HTML escaped. To unescape the value use triple mustache (`{{{email}}}`) or `&` (`{{& email}}`).

### Template definition with variables example
We define the template below with the variables `name`, `email`, HTML escaped `bio` and unescaped `bio`.

![Template with variables](/assets/images/message-template/template-with-variables.png)
*Template with variables*

If we pass in the following values into the template:

```javascript
{
  "name": "Fiona Summers",
  "bio": "<b>President of debate club</b>"
}
```

We would receive the following template output:

```html
<html>
  <body>
    <p>Fiona Summers</p>
    <p></p>
    <p>&lt;b&gt;President of debate club&lt;/b&gt;</p>
    <p><b>President of debate club</b></p>    
  </body>
</html>
```

## Sections
Sections render single or repeated blocks of text. Section begin with a `#` ( `{{#user}}` ) and ends with a `/` ( `{{/user}}` ). The value of the section variable determines behavior of the section. 

### Object section
Section is rendered once when the value of section variable is an object. The block has access to all the keys declared in the object.

#### Template definition with object section example
We define the template below with an object section `user` with the fields `name`, `email` and `phone`.

![Template with object section](/assets/images/message-template/template-with-object-section.png)
*Template with object section*

If we pass in the following values into the template:

```javascript
{
  "user": {
    "name": "Fiona Summers",
    "email": "fiona.summers@foobar.com",
    "phone": "650 8xx 7567"
  }
}
```

We would receive the following template output:

```html
<html>
  <body>
    <div class="user">
      <p> Fiona Summers </p>
      <p> fiona.summers@foobar.com </p>
      <p> 650 8xx 7567 </p>
    </div>
  </body>
</html>
```

### List section
Section is rendered multiple times when the value of section variable is a list. The block has access to all the keys declared in a row of the list.

#### Template definition with list section example
We define the template below with a list section `order_lines` with fields `product_name`, `qty`, `price`, `total`.

![Template with list section](/assets/images/message-template/template-with-list-section.png)
*Template with list section*

If we pass in the following values into the template:

```javascript
{
  "id": "KA100",
  "order_lines": [
    { "product_name": "Anker USB charger", "qty": 1, "price": "15.99", "total": "15.99" },
    { "product_name": "Guard screen protector", "qty": 1, "price": "7.50", "total": "7.50" }
  }
}
```

We would receive the following template output:

```html
<html>
  <body>    
    <table>
      <tr  class="order-lines">
        <td>Anker USB charger</td>
        <td>1</td>
        <td>15.99</td>        
        <td>15.99</td>        
      </tr>
      <tr  class="order-lines">
        <td>Guard screen protector</td>
        <td>1</td>
        <td>7.50</td>        
        <td>7.50</td>        
      </tr>
    </table>
  </body>
</html>
```

### Inverted section
Inverted section is rendered when a template variable is missing/false/empty list. Inverted section begin with a `^` ( `{{^order_lines}}` ) and ends with a `/` ( `{{/order_lines}}` ).

#### Template definition with inverted section example
We define the template below with an inverted section `order_lines` that displays an error message `No error lines!!` if the order_lines list is missing/false/empty. 

![Template with list section](/assets/images/message-template/template-with-inverted-section.png)
*Template with inverted section*

If we pass in the following values into the template:

```javascript
{
  "id": "KA100",
  "order_lines": []
}
```

We would receive the following template output:

```html
<html>
  <body>    
    <table>
      <tr  class="no-order-lines">
        <td>No order lines!</td>
      </tr>
    </table>
  </body>
</html>
```

## Comments
Comments tags begin with a `!`. Comments are ignored while generating message from a template.

### Template definition with comments example
We define the template below with the comment `Render the management section for administrators`.

```html
<html>
  <body>
    {{!
      Render the management section for administrators 
    }}
    {{#admin}}
    <div class="user-management">
      <a href="/admin">Manage users</a>
    </div>
    {{/admin}}
  </body>
</html>
```

If we pass in the following values into the template:

```javascript
{
  "admin": true
}
```

We would receive the following template output:

```html
<html>
  <body>
    <div class="user-management">
      <a href="/admin">Manage users</a>
    </div>
  </body>
</html>
```

## Partials
Partials begin with `>`(`{{> common_css }}`). Partials enables you to create reusable template snippets.
Workato supports nested partials. Care must be taken to avoid infinitely recursive partials. 

The partials inherit the calling context of the parent.

### Template/partial definition example
We define the template below with the partial `user_name`.

The following is the partial definition (header):

```html
<div class="header">
  <a href="/">Home</a>
  <a href="/users">Users</a>
  <a href="/logout">Logout</a>
  <p> {{user_name}} </p>
</div>
```

The following is the template definition (header):

```html
<html>
  <body>
    {{> header }}
    <div class="user-management">
      <a href="/admin">Manage users</a>
    </div>
  </body>
</html>
```

If we pass in the following values into the template:

```javascript
{
  "user_name": "Fiona Summers"
}
```

We would receive the following template output:

```html
<html>
  <body>
    <div class="header">
      <a href="/">Home</a>
      <a href="/users">Users</a>
      <a href="/logout">Logout</a>
      <p> Fiona Summers </p>
    </div>
    <div class="user-management">
      <a href="/admin">Manage users</a>
    </div>
  </body>
</html>
```

## Using templates in recipes
Use the **Create message** action in **Message template by Workato** adapter to generate a message from 
a message template.

The action requires values for the template input while creating the recipe. You can either hardcode these values by typing in text, or pass in datapills from Workato datatrees, as seen below.

![Creating a message from a template](/assets/images/message-template/creating-message.jpg)
*Mapping datapills to template input fields when creating the recipe*

The action generates a message conforming to the template while running a job.
