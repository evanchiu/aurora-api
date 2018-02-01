# aurora-api
Provide an structured data API on top of NOAA's Aurora Forecast

## Deploy with CloudFormation

Prerequisites: [Node.js](https://nodejs.org/en/) and [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) installed

* Create an [AWS](https://aws.amazon.com/) Account and [IAM User](https://aws.amazon.com/iam/) with the `AdministratorAccess` AWS [Managed Policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html)
* Run `aws configure` to put store that user's credentials in `~/.aws/credentials`
* Create an S3 bucket for storing the Lambda code and store its name in a shell variable with:
  * `export CODE_BUCKET=bucket`
* Npm install:
  * `npm install`
* Build:
  * `npm run build`
* Upload package to S3, transform the CloudFormation template:
  * `npm run package`
* Deploy to CloudFormation:
  * `npm run deploy`

## Deploy from the AWS Serverless Application Repository
* Hit "Deploy" from the [application](https://serverlessrepo.aws.amazon.com/#/applications/arn:aws:serverlessrepo:us-east-1:233054207705:applications~aurora-api) page

## Use
* Go to [API Gateway](https://console.aws.amazon.com/apigateway/home) in the AWS Console to find the invoke URL and     open it in your browser.
* Sample Data
```
{
  "issued": "2018-02-01T00:30:00.000Z",
  "breakdown": [
    {
      "start": "2018-02-01T00:00:00.000Z",
      "kp": "3"
    },
    {
      "start": "2018-02-02T00:00:00.000Z",
      "kp": "2"
    },
    ...
  ]
}
```

## Links
* [aurora-api](https://github.com/evanchiu/aurora-api) on Github
* [aurora-api](https://serverlessrepo.aws.amazon.com/#/applications/arn:aws:serverlessrepo:us-east-1:233054207705:applications~aurora-api) on the AWS Serverless Application Repository
* [NOAA Space Weather Scales](http://www.swpc.noaa.gov/noaa-scales-explanation)
* [3-Day Forecast](http://services.swpc.noaa.gov/text/3-day-forecast.txt)
* [UAF Aurora Forecast](http://www.gi.alaska.edu/AuroraForecast/NorthAmerica/20180101)

## License
&copy; 2017-2018 [Evan Chiu](https://evanchiu.com). This project is available under the terms of the MIT license.
