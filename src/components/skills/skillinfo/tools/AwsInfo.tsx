"use client";

import TechPage from "@/components/skills/skillinfo/TechPage";
import { Cloud } from "lucide-react";
const Icon = () => <Cloud className="w-24 h-24" style={{ color: "#FF9900" }} />;

const AWSInfo = () => (
  <TechPage
    name="AWS"
    icon={<Icon />}
    iconBg="hsl(220 25% 12%)"
    description="Amazon Web Services is the world's most comprehensive cloud computing platform. AWS offers over 200 services including compute, storage, databases, machine learning, and more."
    tags={["Cloud Computing", "EC2", "S3 Storage", "Lambda", "Global Infrastructure"]}
    steps={[
      { title: "Create an AWS account", desc: "Sign up for an AWS account with free tier access.", cmd: "# Visit https://aws.amazon.com" },
      { title: "Install AWS CLI", desc: "Install the AWS Command Line Interface.", cmd: "pip install awscli" },
      { title: "Configure credentials", desc: "Set up your AWS access keys.", cmd: "aws configure" },
      { title: "Create an S3 bucket", desc: "Create your first storage bucket.", cmd: "aws s3 mb s3://my-bucket-name" },
      { title: "Deploy a Lambda function", desc: "Create a serverless function.", cmd: "aws lambda create-function --function-name my-func --runtime nodejs18.x --handler index.handler --zip-file fileb://function.zip --role arn:aws:iam::role/lambda-role" },
    ]}
    nextHref="/skills/git"
    middleHref="/#skills" 
    backHref="/#skills" 
  />
);

export default AWSInfo;
