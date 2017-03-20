---
title: Workato connectors - Amazon S3
date: 2017-02-16 06:15:00 Z
---

# Amazon S3

## Connector information

### API version
The S3 connector uses [Amazon S3 REST API, version 2006-03-01](http://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html).

## How to connect to Amazon S3 on Workato

### Amazon S3 connection
The S3 connector uses the [AWS Signature Version 4](http://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) to authenticate to Amazon S3.

### Roles and permissions required to connect
To enable programmatic access to S3 via Workato, the authenticated user needs to have an access key (an access key ID and a secret access key) in S3. Best practices for creating an integration user with the correct set of permissions can be found in the [Amazon documentation on creating an IAM user](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).

## Working with the S3 connector

### [S3 Terminology](http://docs.aws.amazon.com/AmazonS3/latest/gsg/AmazonS3Basics.html)

* **Buckets**

  Buckets are containers that hold objects. The geographical region where this bucket and its contents will be stored can be defined by the user.

* **Objects**

  An object consists of a file, and optionally any metadata describing that file.


### Using the new file trigger
The new file trigger listens to new files uploaded into a specific S3 bucket. The trigger event contains only metadata about the file, however, such as file name and size. To retreieve content of the file, use the **Download file** action.

## Troubleshooting

### Exact, case sensitive names
When defining bucket and object by names in S3, take note that names should be exact and are case sensitive.