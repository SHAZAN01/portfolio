export type ProjectCategory = "NLP" | "Data Engineering" | "MLOps" | "RAG & LLM" | "Analytics" | "Cloud" | "Real-Time Systems"

export type Project = {
  id: string
  name: string
  desc: string
  cat: ProjectCategory
  stack: string[]
  metric?: string
  github?: string
}

export const projects: Project[] = [
  { id:"p1", name:"Real-Time Data Lakehouse for Analytics & ML", desc:"Medallion-style lakehouse enabling near real-time processing and reducing data latency.", cat:"Data Engineering", stack:["Apache Spark","Delta Lake","AWS S3","Airflow","Python"], metric:"40% latency reduction" },
  { id:"p2", name:"LLM-Powered Analytics Assistant", desc:"RAG pipeline for accurate analytics Q&A with automated evaluation and cost optimization.", cat:"RAG & LLM", stack:["LangChain","OpenAI","Vector DB","AWS","Python"], metric:"35% latency reduction" },
  { id:"p3", name:"End-to-End ML Experimentation Framework", desc:"Reproducible ML framework with data versioning, config management, and metric tracking.", cat:"MLOps", stack:["MLflow","PyTorch","Docker","AWS","Python"] },
  { id:"p4", name:"RAG System for Domain Knowledge", desc:"Production-grade RAG pipeline combining fine-tuned LLMs with vector-based retrieval.", cat:"RAG & LLM", stack:["Python","FAISS","HuggingFace","FastAPI"], metric:"30% answer precision" },
  { id:"p5", name:"Multilingual LLM Fine-Tuning & Evaluation Platform", desc:"Scalable fine-tuning pipelines for multilingual transformers with automated evaluation.", cat:"NLP", stack:["PyTorch","mBART","NLLB-200","HuggingFace","AWS"], metric:"32% BLEU improvement" },
  { id:"p6", name:"LLM Monitoring, Reliability & Cost Optimization", desc:"Monitoring pipelines for latency, token usage, failure rates across LLM workloads.", cat:"MLOps", stack:["AWS CloudWatch","Python","Grafana","Docker"], metric:"45% faster detection" },
  { id:"p7", name:"Secure Enterprise LLM API & Guardrails", desc:"LLM inference API with auth, rate limiting, and policy-based output guardrails.", cat:"RAG & LLM", stack:["FastAPI","Python","Docker","AWS Lambda"] },
  { id:"p8", name:"Automated Model Retraining & Drift Pipeline", desc:"MLOps pipeline detecting data drift and triggering controlled model retraining.", cat:"MLOps", stack:["Airflow","Python","Docker","AWS","scikit-learn"], metric:"40% fewer degradations" },
  { id:"p9", name:"End-to-End ML Pipeline for Multilingual NLP", desc:"Full pipeline from data ingestion through training, evaluation, and error analysis.", cat:"NLP", stack:["PyTorch","Python","AWS","HuggingFace"], metric:"40% faster iterations" },
  { id:"p10", name:"Streaming Feature Engineering Platform", desc:"Real-time feature pipelines with versioning and validation for ML inference.", cat:"Real-Time Systems", stack:["Kafka","Apache Spark","Python","AWS S3"], metric:"35% fewer drift incidents" },
  { id:"p11", name:"ML Monitoring, Cost & Reliability Framework", desc:"Dashboards for ML pipeline health, model performance, and compute cost.", cat:"MLOps", stack:["Python","AWS CloudWatch","Tableau","Grafana"], metric:"20% cost savings" },
  { id:"p12", name:"Enterprise Feature Engineering & Analytics Platform", desc:"ETL/ELT pipelines transforming raw operational data into ML-ready feature tables.", cat:"Data Engineering", stack:["Apache Spark","PySpark","Airflow","AWS S3","SQL"], metric:"25% cost reduction" },
  { id:"p13", name:"Cloud-Native Cost & Observability Pipeline", desc:"Pipelines aggregating cloud usage metrics for centralized cost and reliability visibility.", cat:"Cloud", stack:["AWS","Spark","Python","CloudWatch"], metric:"50% faster MTTD" },
  { id:"p14", name:"Enterprise Medallion Data Lake", desc:"Bronze/Silver/Gold architecture on S3 for analytics and ML workloads at scale.", cat:"Data Engineering", stack:["AWS S3","Apache Spark","Delta Lake","Airflow","SQL"], metric:"35% faster analytics" },
  { id:"p15", name:"Experimentation Framework for NLP Model Selection", desc:"Statistically rigorous framework for comparing NLP model variants reproducibly.", cat:"Analytics", stack:["Python","SQL","scipy","MLflow"], metric:"35% fewer false promotions" },
  { id:"p16", name:"SHAP-Based Feature Impact Analysis", desc:"Feature impact analysis to quantify and validate ML feature contributions.", cat:"Analytics", stack:["Python","SHAP","scikit-learn","Pandas"], metric:"20% accuracy improvement" },
  { id:"p17", name:"Data Quality, Bias & Reliability Platform", desc:"Pipelines monitoring quality, schema changes, and subgroup fairness across ML datasets.", cat:"MLOps", stack:["Python","Great Expectations","SQL","Airflow"], metric:"40% faster detection" },
  { id:"p18", name:"KPI-Driven Decision Analytics for NLP", desc:"Business-aligned KPIs bridging offline ML metrics with real-world operational impact.", cat:"Analytics", stack:["Python","Tableau","SQL"] },
  // AWS / Nextwork Projects
  { id:"nw1", name:"AWS VPC Multi-Tier Network Architecture", desc:"Complete VPC with public/private subnets, NAT gateways, route tables, and security groups.", cat:"Cloud", stack:["VPC","Subnets","NAT Gateway","Security Groups","Route Tables"] },
  { id:"nw2", name:"EC2 Production Web Server Deployment", desc:"Launched and configured EC2 with Apache, SSH key pair, and Elastic IP.", cat:"Cloud", stack:["EC2","Apache","SSH","Elastic IP","IAM"] },
  { id:"nw3", name:"S3 Static Site with CloudFront CDN", desc:"Static site deployed to S3 with CloudFront distribution, custom domain, and HTTPS via ACM.", cat:"Cloud", stack:["S3","CloudFront","ACM","Route 53"] },
  { id:"nw4", name:"IAM Least Privilege Security Setup", desc:"IAM users, groups, roles, and policies following AWS least-privilege best practices.", cat:"Cloud", stack:["IAM","AWS CLI","MFA","SCP"] },
  { id:"nw5", name:"Aurora MySQL Multi-AZ Database", desc:"Aurora MySQL with read replicas, multi-AZ failover, and automated snapshots.", cat:"Cloud", stack:["Aurora MySQL","RDS","Multi-AZ","VPC"] },
  { id:"nw6", name:"DynamoDB NoSQL Schema Design & Queries", desc:"DynamoDB tables with partition/sort keys, GSIs, and optimized query patterns.", cat:"Cloud", stack:["DynamoDB","GSI","PartiQL","Lambda","SDK"] },
  { id:"nw7", name:"AWS Lambda Serverless Functions", desc:"Event-driven Lambda functions with S3 triggers, API Gateway, and CloudWatch logging.", cat:"Cloud", stack:["Lambda","API Gateway","S3","CloudWatch","Python"] },
  { id:"nw8", name:"Auto Scaling Groups & Load Balancer", desc:"ALB with target groups, health checks, and ASG policies for elastic compute scaling.", cat:"Cloud", stack:["ALB","Auto Scaling","Launch Templates","EC2"] },
  { id:"nw9", name:"CloudFormation Infrastructure as Code", desc:"Complete AWS stack templated with CloudFormation including nested stacks.", cat:"Cloud", stack:["CloudFormation","YAML","Nested Stacks","Parameters"] },
  { id:"nw10", name:"CI/CD Pipeline with CodePipeline & CodeBuild", desc:"End-to-end CI/CD from GitHub to EC2/ECS using AWS native DevOps tools.", cat:"Cloud", stack:["CodePipeline","CodeBuild","CodeDeploy","GitHub"] },
  { id:"nw11", name:"Containerized App on ECS Fargate", desc:"Dockerized web app deployed to ECS Fargate with ECR and service discovery.", cat:"Cloud", stack:["ECS Fargate","ECR","Docker","ALB"] },
  { id:"nw12", name:"VPC Peering & Transit Gateway", desc:"Connected multiple VPCs across accounts with Transit Gateway for centralized routing.", cat:"Cloud", stack:["VPC Peering","Transit Gateway","CIDR","Route Tables"] },
  { id:"nw13", name:"SNS & SQS Event-Driven Architecture", desc:"Decoupled microservices using SNS fan-out and SQS queues with dead-letter queue handling.", cat:"Cloud", stack:["SNS","SQS","DLQ","Lambda","EventBridge"] },
  { id:"nw14", name:"CloudWatch Dashboards & Alarms", desc:"Custom dashboards, metric alarms, Log Insights queries, and SNS notifications.", cat:"Cloud", stack:["CloudWatch","Metrics","Log Insights","SNS"] },
  { id:"nw15", name:"AWS Glue ETL Data Pipeline", desc:"Serverless ETL with Glue crawlers, Data Catalog, and Spark jobs writing to S3.", cat:"Data Engineering", stack:["AWS Glue","Spark","S3","Athena","Data Catalog"] },
  { id:"nw16", name:"Kinesis Real-Time Data Ingestion", desc:"Real-time clickstream ingestion with Kinesis Streams, Firehose, and Lambda processing.", cat:"Real-Time Systems", stack:["Kinesis","Firehose","Lambda","S3","Athena"] },
  { id:"nw17", name:"Athena + S3 Serverless Analytics", desc:"Queried partitioned S3 data lake with Athena and cost-optimized columnar formats.", cat:"Analytics", stack:["Athena","S3","Parquet","Glue Catalog","SQL"] },
  { id:"nw18", name:"QuickSight Business Intelligence Dashboard", desc:"Interactive QuickSight dashboards from RDS/S3 with SPICE for sub-second querying.", cat:"Analytics", stack:["QuickSight","SPICE","RDS","S3"] },
  { id:"nw19", name:"AWS WAF & Shield Security Hardening", desc:"WAF rules, managed rule groups, Shield Standard, and IP reputation filtering.", cat:"Cloud", stack:["WAF","Shield","CloudFront","ALB"] },
  { id:"nw20", name:"Secrets Manager & Parameter Store Integration", desc:"Rotated RDS credentials and injected config via Parameter Store into Lambda.", cat:"Cloud", stack:["Secrets Manager","Parameter Store","Lambda","IAM"] },
  { id:"nw21", name:"Step Functions Workflow Orchestration", desc:"Multi-step ML data prep workflow with error handling, retries, and parallel states.", cat:"MLOps", stack:["Step Functions","Lambda","S3","DynamoDB"] },
  { id:"nw22", name:"SageMaker Model Training & Endpoint", desc:"Trained and deployed an ML model using SageMaker with hyperparameter tuning.", cat:"MLOps", stack:["SageMaker","S3","IAM","Boto3","Python"] },
]