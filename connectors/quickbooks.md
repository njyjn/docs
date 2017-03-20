---
title: Workato connectors - QuickBooks Online
date: 2017-02-16 06:15:00 Z
---

# QuickBooks Online

## Connector information

### API version


### Supported editions and versions
The QuickBooks connector works with all versions of **QuickBooks Online-** QuickBooks Self-Employed, QuickBooks Simple Start, QuickBooks Essentials, as well as QuickBooks Plus.

Workato currently does not support QuickBooks Desktop/Enterprise versions. 

## How to connect to QuickBooks on Workato

### QuickBooks connection 
![QBO connect1](/_uploads/QBO connect1.JPG)

* **Connection name**

  Give this QuickBooks Connection a unique name which identifies the QuickBooks account you are connected to and click 'Connect'. A pop-up will appear.
  
  ![QBO connect2](/_uploads/QBO connect2.JPG)
  
* **Username & Password**

  Login with your QuickBooks credentials and allow Workato to access your QuickBooks account. 

## Connecting to Multiple Companies on QuickBooks
If you have multiple Companies on your QuickBooks account, you can connect them to Workato using the same QuickBooks authentication. Simply create new connections for each Company.

However, if you have multiple Workato accounts and try to connect to the same Company, the earlier connection will be disconnected. Hence, we recommend that only 1 Workato account is used to connect to 1 Company to prevent any disruption to your recipes. 

## QuickBooks Triggers
The following triggers are currently available for the QuickBooks Connector: 

**NEW:** Account, Bank Deposit, Bill Payment, Credit Note, Customer, Employee, Estimate, Invoice, Item, Payment, Sales Receipt, Vendor

**NEW/UPDATED:** Account, Tax Code, Tax Rate

**UPDATED:** Bill, Credit Note, Customer, Employee, Estimate, Invoice, Item, Purchase, Vendor 

If you wish to submit a request for a new Trigger not currently available, please visit: 

## Action: Add Line to Invoice
### Sales Item Detail vs. Discount Line Detail vs. Description only

##### Sales Item Detail
As the name suggests, user is required to key in some of the details regarding the sales item. This includes Item ID, Total Amount, Unit Price/Quantity and also the Description. 

##### Discount Line Detail

##### Description Only
When user wants to include only the description of the items, he/she would choose this option.  
As such, "Description only" is a subset of "Sales Item Detail", if the user wants to include more details in the invoice, he/she should choose "Sales Item Detail".

### Difference between Create with 1 line item and Create with Line items

#### Creating Transactional Objects with line items
Workato QuickBooks actions for creating Transactional objects (Invoice, Sales receipt, Bill, Credit Memo, etc) generally has two ways for populating them : 

1) Creating first an invoice with a single line item (as mandatory by QuickBooks Online to have at least one line item), and use Add Line Item to X action for any further addition

or 

2) Creating an invoice with line items. The line items detail will be pulled dynamically from a list data pill. You can learn more about it here.

**When do I use 'Create with 1 line item'?** 

Creating a single invoice with only line items are great for Single sync ups, where details of the transactional items are minimal. Example of this is creating an invoice for an opportunity, or creating a Sales Receipt for donations. Subsequently, adding on line items to an invoice can be done in another recipe when new items are added for an existing invoice, giving you the flexibility of structuring your invoices.

In all other cases, you should use 'Create with line items' and simply place the list of items where required. 

![QBO mulltiline](/_uploads/QBO_docs/QBO mulltiline.png)

A 'list' type pill is marked with the list logo as can be seen above in red.

## Bank Deposit

Workato has several QuickBooks actions that are related to a Bank Deposit object : 
  
  * Create bank deposits
  * Search bank deposits
  * Update bank deposits

The available fields for a Bank Deposits are : 

* Txn Date
  * Date of the transaction object

* Total amount
  * The total amount that the bank deposit should amount to. Note that this value cannot be negative.

* Cash back
  * Specify an account that should return a certain amount back to for this deposit
    * Account
    * Amount
    * Memo

* Deposit To Account Reference
  * Specify an account that this bank deposit should be targeted to. Note that you cannot specify Undeposited Funds as the Deposit To Account here.
  * Account
    * Account specified here must be of Bank or Other Current Asset Account type.

* Transaction tax detail
  * Tax Code
  * Total Tax

* Line
  * Line Source list
    * Specify a line item object here where data will be accessed from. The total number of line item created will equals to the size of the source list. To learn more about source list, see here
  * Description
    * For each of the line item, specify its Description
  * Amount
    * For each of the line items, specify its Amount

* Linked Transaction
  * If there are existing transactions that needs to be related, specify details here to record a deposit for an existing transaction. 
  * Linked transaction source list
    * Specify a line item object here where data will be accessed from. The total number of line item created will equals to the size of the source list. To learn more about source list, see here
  * Transaction ID
  * Transaction Type
    * Possible types of transactions that can be linked to a Deposit include: `Transfer`, `Payment` (for Cash, CreditCard, and Check payment method types), `SalesReceipt`,`RefundReceipt`, `JournalEntry`.
  * Transaction Line ID

* Deposit Line Detail
  * Entity Name
    * Reference to a customer Display Name from which deposit was received
  * Type
    * Specify if it is a Customer or Vendor
  * Value
    * Reference to a customer ID from which deposit was received

* Class reference
  * Reference to the Class associated with the transaction
* Account Reference
  * Account where the funds are deposited
* Payment method reference
  * Payment method
* Check num
  * Check number for the desposit.
* Tax reference
  * Tax code
    * Sales/Purchase tax code associated with the Line. For Non US Companies only
  * Tax applicable on
* Private Note
* Currency Reference
  * Value
  * Name
* Transaction source
  * A field used internally to specify originating source of a credit card transaction.

## Exchange Rate

QuickBooks Online provides international trades to be done in multiple currencies. 
Workato adapts your business needs and supports all necessary changes needed to automate your business.

QuickBooks Online allows you to support multiple currencies. To do so, you may enable it in your Accounts and Settings section. Do note that enabling multiple currency may incur setting changes. Please do seek consultation with QuickBooks Online support.

![QBO currency](/_uploads/QBO_docs/QBO currency.png)

Exchange Rate field allows you to specify the exchange rate to your home currency from the specified currency. If no Currency is specified, the exchange rate will be defaulted to 1 in respect of the home currency.

For dependent transaction documents such as Credit memo, the applied currency will depends on its parent transactions document, such as payment, or bank deposit.

An Example:

![QBO currency2](/_uploads/QBO_docs/QBO currency2.png)

This field means that it will take 1.5239475 to exchange for 1 unit of the specified currency of the transaction document


## Different Labels between profit and non-profit versions

If you are using the non-profit version of QuickBooks, do note that on Workato, certain terms may be labelled differently from what appears in your QuickBooks account. Refer to the table below to know which triggers and actions to use:

| For Profit  | Non-Profit |
| ------------- | ------------- |
| Invoice | Pledge |
| Sales Receipt  | Donations (Sales) |
| Expenses | Expenditure |
| Profit & Loss | Statement of Activity |
| Balance Sheet | Statement of Financial Positions | 

For more info on non-profit organization in QuickBooks, you can click [here](https://community.intuit.com/articles/1145585-quickbooks-online-for-nonprofits).

## Common Errors & Troubleshooting

### Duplicate Name Exists
In Quickbooks, the display name is used as a unique identifier across Customer (also known as Donor, Tenants etc.), Employee and Vendor. 

As such, trying to add another record with the same display name which already exist in any of the three types will give you an error: Another tenant, vendor or employee is already using this name. Please use a different name.

![QBO error1](/_uploads/QBO_docs/QBO error1.png)

On Workato, you will receive a Duplicate Name Exists Error.

![QBO error2](/_uploads/QBO_docs/QBO error2.png)

One solution to this is to add a Prefix or Suffix before or after the Display name of the Customer, Employee or Vendor.

![QBO error3](/_uploads/QBO_docs/QBO error3.png)

Do note however that QuickBooks does not allow for certain special characters in the Display Name including colon (:).

Here is a list of accepted characters:

* Alpha-numeric (A-Z, a-z, 0-9)
* Comma (,)
* Dot or period (.)
* Question mark (?)
* At symbol (@)
* Ampersand (&)
* Exclamation point (!)
* Number/pound sign (#)
* Single quote (')
* Tilde (~)
* Asterisk (*)
* Space ( )
* Underscore (_)
* Minus sign/hyphen (-)
* Semi-colon (;)
* Plus sign (+)
* Brackets (())

### Account period closed, cannot update through API

Error 6210: Account period closed, cannot update through API

This error means that in QuickBooks you have set a closing date, and it will not let you create/update transactions within that period. To remedy it, you have to take out the closed date. 

Refer to this article below to see how. 
https://support.quickbooks.intuit.com/support/Articles/HOW12993
 
### Malformed Website Address format

QuickBooks fault: {"Error"=>[{"Message"=>"Malformed Web Site Address format", "Detail"=>"Web Site URL does not have correct format. Supplied value:example.com", "code"=>"2200", "element"=>"WebAddr"}], "type"=>"ValidationFault"}

You get this error when you are trying to create a record in QuickBooks Online and you have mapped a field that requires a website address. Quickbooks API requires a well formed web address of the form http://example.com, but if your input does not have the **http:// or https://** at the beginning then the recipe fails.

### App Already Purchased

![QBO purchased](/_uploads/QBO_docs/QBO purchased.png)
If you receive the following error, there is someone else in your company who is already connected to Workato. Contact your colleague to delete their Workato connection to resolve this error.

### Object Not found. Error while accessing QuickBooks API

![QBO errorobjnotfound1](/_uploads/QBO_docs/QBO errorobjnotfound1.png)
What does this mean : This usually happens when you tried to get an object based on an ID in QuickBooks and that object does not exist. For example,
![QBO errorobjnotfound3](/_uploads/QBO_docs/QBO errorobjnotfound3.png)
The recipe tries to get the item from QuickBooks based on the ID, unfortunately that object does not exist in your Quickbooks account. You would want to check again in your QuickBooks.

You can find the ID of your object in the URL. It would usually shown up with an ID=6 where 6 is the ID of your object. 
![QBO errorobjnotfound2](/_uploads/QBO_docs/QBO errorobjnotfound2.png)

You can always re-run the job again once it has been ensured, or you may have to change your recipe to make sure that the workflow is correct. 

### 784 QuickBooks API not responding

![QBO APIerror](/_uploads/QBO_docs/QBO APIerror.png)
This usually happens when there is an API outage on QuickBooks side, or it has some intermittent issues
Keep watch of http://status.developer.intuit.com, and try re-running the same job after a while

### 403 Forbidden Error

This error could mean that there were some connectivity issues with the app connection.
Disconnect your app by going to the connections tab at the bottom of your recipe page, and reconnect it again.

![QBO connect3](/_uploads/QBO_docs/QBO connect3.png)




