# 🖼️ Image Resizing App

## Overview

Thumbathon is a full-stack application designed to resize images in an efficient, scalable manner. Built with a microservices architecture using NestJS, it leverages PostgreSQL for robust data management and RabbitMQ for managing the message queue between services, ensuring seamless, scalable operations.

### Core Components

- **Frontend**: User interface to upload and manage images.
- **Backend (NestJS)**: Manages business logic, API requests, and interacts with PostgreSQL and RabbitMQ.
- **PostgreSQL**: Robust RDBMS for storing user data and image metadata.
- **RabbitMQ**: Manages the message queue, decoupling image uploading and resizing processes for scalability and efficiency.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.x or later)
- Docker and Docker Compose
- PostgreSQL
- RabbitMQ

### Local Development

1. **Clone the Repository**
   ```sh
   git clone git@github.com:morigami8/thumbathon.git 
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. Environment Variables: Set up your .env files in the backend directory based on the following example. Remember to replace placeholder values with your actual secrets and credentials for local development and likewise for production or other environments.

🔐 Example .env File
```sh
DATABASE_HOST=your_database_host
DATABASE_PORT=your_database_port
DATABASE_USERNAME=your_database_username
DATABASE_PASSWORD=your_database_password
DATABASE_NAME=your_database_name

RABBITMQ_URL=your_rabbitmq_url
```


4. **Start Services**
   ```sh
   docker-compose up
   ```
5. Access the application at [http://localhost:YOUR_PORT](http://localhost:YOUR_PORT).


## 🔍 Usage

1. **Upload Image**: Utilize the frontend to upload an image.
2. **Resize**: Specify your desired dimensions.
3. **Download**: Access resized images and download directly from the UI.

## 🛠️ Built Using

- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [React.js](https://reactjs.org/)
