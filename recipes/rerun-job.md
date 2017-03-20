# Rerunning Jobs

## When do I need to rerun a job? 

Re-running a job will cause the trigger event to be passed through the recipe again, and this feature is useful in the cases below:

  * Testing a new recipe
  * When there are errors encountered

**Note:** Duplicates may occur when jobs are rerun, so be sure to check and remove duplicates (if present) before re-running the job.

### Testing a new recipe

Many times, during testing, people incrementally build and test a recipe with the same job. During the testing phase, rerunning jobs is commonly used to fix the errors encountered in recipes. 

Rather than creating new trigger events, rerunning the same job will allow you to fix the errors 1 step at a time with the same event.

### Errors

When an error is detected in your recipes, an email will be sent to the Notifications email address specified in the Account Settings. The job will be incomplete and data may be missing from the application as certain steps in the recipe were not completed. 

Thus, rerunning the job is necessary to ensure the job runs to completion as specified in the recipe.

You can view all the errors in the 'Jobs' tab and filtering the report. 
![actionerror2](/_uploads/_recipes/_actionerror/actionerror-2.gif)


#### No fixing of the recipe is required
 
 If you face the following errors, rerun your job and the job should complete: 

  * Connection errors: These are intermittent issues that result from connection issues with the applications connected to the recipe. 

#### Errors that need fixing

When the error is different from the ones listed above, or if rerunning the jobs do not work, the recipe or data from the application needs to be fixed.

In the job report, look at the error code provided and make the changes accordingly. 

## What does rerunning a job do? 

Essentially, rerunning a job uses the same trigger event and runs the job from start to finish. 

**Note:** As a previously run job may have run through steps that have created objects in the applications, rerunning the job may cause errors as these objects already exist. Thus, ensure that objects created by previously run jobs have been deleted before rerunning.

## How to rerun a job

### Jobs Tab
Navigate to the 'Jobs' tab and to see a list of jobs that have been run. You can filter the jobs by 'Completed', 'Pending' and 'Failed'. 

Completed jobs are those that have successfully run through the recipe while failed jobs met with errors that stopped the job before it could be completed. 

Check the boxes on the left of each line and click 'Rerun'. You can rerun 10 jobs (1 page of jobs) at a time. 

![Rerunjobs](/_uploads/rerun-jobs/Rerunjobs.JPG)


### Job Report

The rerun job button is located on the top right hand corner of the job report page. Click on this to rerun the job and you will be re-directed to the 'Jobs' tab.

![rerunjobbutton](/_uploads/rerun-jobs/rerunjobbutton.JPG)

#### Rerun History
All rerun jobs have a history log at the bottom of the job details page. Click on each line to view the previously run jobs. 

![rerunhistory](/_uploads/rerun-jobs/rerunhistory.JPG)
