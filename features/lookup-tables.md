# Lookup Tables
The primary reason for lookup tables (also termed as cross reference tables) is to enable fast and easy lookup of frequently used data that are static and immutable. 

Some of examples of such data include:
* Given a city name, you want to get the zip code 
* Conversion from metric to SI for distances 
* Given a department, rank, retrieve vacation accrual rate

Lookup tables is currently only available to **Business plans and up**.

#### Limits
You cannot have more than 5000 entries in one lookup table
We support only 5 columns. Each column can be used as a key to lookup the entry

## How to setup your lookup tables
There are two ways your recipes can upload data from your lookup tables:
* By importing an existing CSV file 
* By adding new entries via a recipe

Note: Lookup tables are immutable and the existing entries cannot be modified or deleted.

### Importing an existing CSV file
The GIF below walks you through the process of creating a lookup table and loading it with data imported from a CSV file.
![Lookup1](/_uploads/_features/Lookup Tables/lookup tables 1.gif)

You can also manually enter additional rows from the UI.
![Lookup2](/_uploads/_features/Lookup Tables/lookup tables 2.png)
![Lookup3](/_uploads/_features/Lookup Tables/lookup tables 3.png)

You can select what columns you choose to view. At present we support only 5 columns.
![Lookup4](/_uploads/_features/Lookup Tables/lookup tables 4.png)

### Adding new entries via a recipe
There is a special connector called ‘Lookup table’ that allows you to work with your tables. This connectors support these actions
* Lookup entry
* Search entries
* Add entry

#### 1. Lookup entry
As the name suggests, data is typically organized like in a database table columns and rows of data. You can then lookup any row by one or more columns. You can lookup an entry within the specified lookup table by using
* Any column
* Multiple columns
In the example below, all 4 available columns are displayed. It returns the first entry based on the column value provide. 
![Lookup5](/_uploads/_features/Lookup Tables/lookup tables 5.png)

This GIF walks you through the entire flow:
![Lookup6](/_uploads/_features/Lookup Tables/lookup tables 6.gif)


#### 2. Search entries
Works similar to lookup, except that it will return all matched entries. It returns a list.

#### 3. Add entry
Add a new entry to an existing lookup table. Great for reading a data source and creating a lookup table based on it. E.g. read titles from your HR apps and create a title lookup table.
![Lookup7](/_uploads/_features/Lookup Tables/lookup tables 7.gif)


## How to use Lookup Table Formulas
Now that you have a lookup table set up, you need to configure your recipe to obtain data from one column of the table when data from another column is fed in. To do so, simply use the `lookup` formula. Simply set any field to formula mode, and enter the formula in this format: 

lookup(`table name`,`column name for search`: `data pill`)[`column name for result`]

For an example you can take a look at the gif below. 

![lookup formula](/_uploads/_features/Lookup Tables/Lookup formula.gif)

Alternatively, you can use the **Lookup table** connector and use either the **lookup entry** action to get a single entry or the **Search entries** action to get an array of results. This would allow you to use data from all the columns in your table for mapping in subsequent steps.

