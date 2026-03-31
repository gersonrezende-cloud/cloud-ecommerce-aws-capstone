# CloudCart – Cloud-Based E-Commerce Frontend

## 🌐 Live Application

http://d1cza7xn3ut6or.cloudfront.net/

---

## 📌 Project Overview

CloudCart is a cloud-based e-commerce frontend prototype designed for a food distribution platform. The application was developed using React and deployed using AWS services, demonstrating a scalable and cost-efficient cloud architecture.

This project showcases static website hosting using Amazon S3 combined with global content delivery through Amazon CloudFront.

---

## 🏗️ Architecture Overview

* **Frontend Framework:** React (Vite)
* **Hosting:** Amazon S3 (Static Website Hosting)
* **CDN:** Amazon CloudFront
* **Deployment Method:** AWS CLI
* **CI/CD Ready:** GitHub Actions (prepared)

---

## ⚙️ Key Features

* Responsive React frontend UI
* Static hosting via Amazon S3
* Global CDN delivery with CloudFront
* Secure and optimized content distribution
* Production-ready build using Vite

---

## 🚀 Deployment Process

### 1. Build the application

```bash
npm run build
```

### 2. Upload files to S3

```bash
aws s3 sync dist/ s3://capstone-gjkt-frontend-gerson
```

### 3. Invalidate CloudFront cache

```bash
aws cloudfront create-invalidation --distribution-id EJSVBZJ7AZO30 --paths "/*"
```

---

## 📸 Deployment Evidence

### 🔹 Local Development

![Local Frontend](screenshots/unit6/01-local-frontend-running.png)

### 🔹 Production Build

![Build](screenshots/unit6/02-production-build-success.png)

### 🔹 AWS CLI Authentication

![AWS CLI](screenshots/unit6/03-aws-cli-authenticated.png)

### 🔹 S3 Bucket

![S3 Bucket](screenshots/unit6/04-s3-bucket-list.png)

### 🔹 S3 Deployment Files

![S3 Contents](screenshots/unit6/05-s3-bucket-contents.png)

### 🔹 Deployment via AWS CLI

![S3 Sync](screenshots/unit6/06-s3-sync-success.png)

### 🔹 CloudFront Distribution

![CloudFront List](screenshots/unit6/07-cloudfront-distribution-list.png)

### 🔹 CloudFront Configuration

![CloudFront Details](screenshots/unit6/08-cloudfront-distribution-details.png)

### 🔹 Cache Invalidation

![Invalidation](screenshots/unit6/09-cloudfront-invalidation-success.png)

### 🔹 Live Application

![Live Site](screenshots/unit6/10-live-cloudfront-site.png)

---

## 🔐 Security Considerations

* IAM user-based authentication (no root access used)
* AWS credentials are securely managed and not exposed
* CloudFront configured with restricted S3 access
* HTTPS delivery via CloudFront

---

## 📊 Scalability & Performance

* CloudFront provides low-latency global content delivery
* Edge caching improves load times
* S3 ensures high durability and availability
* Architecture supports scaling for increased traffic

---

## ✅ CI/CD Pipeline Verified

A change pushed to the application code automatically:

- Triggered a GitHub Actions workflow
- Built the React application
- Deployed updated files to Amazon S3
- Invalidated CloudFront cache

The update was reflected live without manual deployment, demonstrating a fully functional CI/CD pipeline.

## 💡 Future Enhancements

* Backend integration (API Gateway + Lambda or ECS)
* Database integration (RDS or DynamoDB)
* User authentication (Amazon Cognito)
* CI/CD pipeline improvements (multi-environment deployments, testing stages)

---

## 👨‍💻 Author

**Gerson Rezende**
Bachelor of Science in Cloud Computing and Solutions
Purdue University Global

---

## 📎 Notes

This project was developed as part of a capstone assignment to demonstrate cloud architecture, deployment automation, and frontend hosting using AWS services.

