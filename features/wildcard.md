# Using wildcards in search/filter
In some triggers and actions, you can use wildcards to search or filter for items based on naming patterns. For example, you can use a wildcard to retrieve all files that contains the specific text `report`.

Wildcards are characters such as asterisks (\*) or question marks (?), that can be used to substitute any other character in a search.

## Asterisk (\*)
Use the asterisk (\*) as a substitute for zero or more characters. For example, if you are looking for files with filenames containing the text “report”, use the following:

**\*report\***

The asterisk (\*) substitutes all characters before and after “report”. So this search will return files such as “Sales_report.docx”, “report 2018.csv”, “peer reporting.txt”. To narrow the search further, use:

**report\*.csv**

This will return files that begin with “report” and end with “.csv”, such as “report 2018.csv”.

Whether the search key is case-insensitive or not (i.e. returns both “report 2018.csv” and “Report 2018.csv”) depends on the application you are searching in.

## Question mark (?)
The questions mark (?) works similarly to the asterisk, except that it only substitutes **one** character. 

For example, if you type **report?.csv**, you will get files “report2.csv”, “reportA.csv”, but not “report 2018.csv”. 

Whether the search key is case-insensitive or not (i.e. returns both “report2.csv” and “Report2.csv”) depends on the application you are searching in.

## Currently supported triggers & actions
Wildcards are currently supported in the following triggers and actions. The list will be updated as we add more support in the future: 

* On-prem file's action "List files in folder"
