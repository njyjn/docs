# Job Details

## How do I check the job details? 

From the recipe, navigate to the 'Jobs' tab and click on the job you wish to see a detailed report of. 

![jobs](/_uploads/job-details/jobs.JPG)

Each line of the report gives the details of 1 job. A job is shown in this report every time the recipe is triggered, whether complete, pending or with error. Each **completed** job is counted as 1 transaction. 

## Configuring the Job Report

Configure the job report to see the most relevant information to you at a glance. Click on 'Customize Report' next to the Rerun and Refresh buttons.

![customize report](/_uploads/job-details/customize report.JPG)

You can use the pills in any step of your recipe for the column values. In the example below, the most important information are the Invoice IDs in both apps, Xero and Infusionsoft, the Payment and Contact information. It is a good practice to customize the job report to be able to identify the job you are looking for easily.

![customize report2](/_uploads/job-details/customize report2.JPG)

## When do I need to check the job details? 

  1. When there are errors 

  2. When there are completed jobs but the results you see in your applications are not what is expected

  Even though the jobs are completed successfully, a second look may be needed to see what data is being passed from one app to the other. There may be errors in the mapping of the data pills or incomplete data from your applications.

## How to read the job report
 
The general details of the job are displayed on the top of the job report. This includes the Status of the job, it's Description, the date and time this job Started at and was Completed, and the recipe version with which this job ran. 

![report1](/_uploads/job-details/report1.JPG)

Below these details, you should see the recipe's steps that were run in this job. Click on each line to see what data was used in the step. 

### Input

The input is the data used as specified on the action in the recipe. 

For example, in this search step, which uses the specific string **"Xero Invoice + `Invoice Number`** to search for an order title, the input contains the string and the number of the invoice used in this job.  

![recipevsreport](/_uploads/job-details/recipevsreport.png)

### Output

The output is the information is found from the specific input. In this case, the invoice number used yielded the following information: 

![reportoutput](/_uploads/job-details/reportoutput.JPG)

Looking at the output in the steps can tell you vital information about why a job has failed. Often, the output used in a specific step may be empty, thus using the data pills from that step in a later part of the recipe will not yield anything. 

### Errors

When the job throws an error, view which step this occurs at and the error details on this page. The step with the error is indicated with a red line. 

![report5](/_uploads/job-details/report5.JPG)

### For-each Loops

### Conditional Actions

In conditional actions, there is only an "Output" tab. The output will have one of two values: "True" or "False" which determines whether the nested actions will take place. 

When the value is "False", the nested actions will be skipped and the recipe proceeds to the next possible action.

![report3](/_uploads/job-details/report3.JPG)

When the value is "True", the nested actions will be completed.

![report4](/_uploads/job-details/report4.JPG)

