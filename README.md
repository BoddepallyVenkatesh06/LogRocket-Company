# LogRocket

LogRocket is a web application designed to enhance the logging and monitoring of web applications. It provides detailed insights into user interactions, performance metrics, and errors, enabling developers to diagnose and fix issues efficiently.

## Table of Contents 📚

- [Introduction🚀](#introduction)
- [Features🛠️](#features)
- [Screenshot📷](#screenshot)
- [Technologies Used🖥️](#technologies-used)
- [Getting Started🎯](#getting-started)
- [Prerequisites📋](#prerequisites)
- [Installation⚙️](#installation)
- [Usage📈](#usage)
- [Contributing❤️](#contributing)
- [License📝](#license)

## Introduction🚀

LogRocket is designed to capture and replay user interactions in your web application, along with providing powerful analytics tools to monitor performance and track errors. This helps developers understand how users are interacting with their application and identify any issues that may arise.

## Features🛠️

- **Session Recording**: Capture and replay user sessions to see exactly what happened.
- **Error Tracking**: Automatically log errors and exceptions with detailed stack traces.
- **Performance Monitoring**: Track application performance metrics and identify bottlenecks.
- **User Insights**: Gain insights into user behavior and interactions with your application.
- **Network Logging**: Monitor network requests and responses for debugging purposes.
- **Console Logs**: Capture console logs to help diagnose issues.

## Screenshot📷

![LogRocket Dashboard](https://github.com/BoddepallyVenkatesh06/LogRocket-Company/blob/main/Screenshot_1.png)
![LogRocket Dashboard](https://github.com/BoddepallyVenkatesh06/LogRocket-Company/blob/main/Screenshot_2.png)
![LogRocket Dashboard]([path-to-screenshot](https://github.com/BoddepallyVenkatesh06/LogRocket-Company/blob/main/Screenshot_3.png))

## Technologies Used🖥️

- **Frontend**: React.js, Redux, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Redis
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Docker, Kubernetes

## Getting Started🎯

### Prerequisites📋

Before you begin, ensure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)
- PostgreSQL
- Redis
- Docker (optional, for containerization)
- Kubernetes (optional, for orchestration)

### Installation⚙️

1. Clone the repository:

```bash
git clone https://github.com/BoddepallyVenkatesh06/LogRocket-Company.git
cd logrocket
```

2. Install frontend dependencies:

```bash
cd client
npm install
```

3. Install backend dependencies:

```bash
cd ../server
npm install
```

4. Set up the database:
   
```bash
# Ensure PostgreSQL and Redis are running
# Create a new PostgreSQL database
createdb logrocket

# Run the database migrations
cd server
npm run migrate
```

5. Set up environment variables:
   
Create a `.env` file in the root directory and add your environment variables:

```env
# PostgreSQL
DATABASE_URL=postgres://username:password@localhost:5000/logrocket

# Redis
REDIS_URL=redis://localhost:6379

# JWT Secret
JWT_SECRET=your_jwt_secret
```

## Usage📈

### Running the Application

1. Start the PostgreSQL and Redis servers (if not using Docker).

2. Start the backend server:

```bash
cd server
npm start
```

3. Start the frontend development server:

```bash
cd ../client
npm start
```

### Building for Production

1. Build the frontend for production:

```bash
cd client
npm run build
```

2. Start the backend server in production mode:

```bash
cd ../server
NODE_ENV=production npm start
```

### Docker Deployment

1. Build and run the Docker containers:

```bash
docker-compose up --build
```

## Contributing❤️

Contributions are welcome! If you'd like to contribute to LogRocket, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License📝

```
MIT License

© 2024 Venky Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
