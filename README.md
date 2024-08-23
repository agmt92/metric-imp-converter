# Metric-Imperial Converter

This project is the first exam of the freeCodeCamp Quality Assurance curriculum. It is a Metric-Imperial Unit Converter built using Node.js, Express, and MongoDB. The application allows users to convert between metric and imperial units.

You can view the live demo of the project [here](https://metricimp-converter-f60d333613cf.herokuapp.com/).

## Table of Contents

- Introduction
- Features
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- Usage
- [Project Structure](#project-structure)
- Troubleshooting
- Contributing
- License

## Introduction

The Metric-Imperial Converter is a web application that provides a simple interface for converting between metric and imperial units. It is built using Node.js for the backend and Express for the web framework. This project is part of the freeCodeCamp Quality Assurance curriculum.

## Features

- **Convert Units**: Convert between metric and imperial units.
- **Error Handling**: Provides appropriate error messages for invalid inputs.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling tool.
- **Chai**: Assertion library for Node.js.
- **Chai-HTTP**: HTTP integration testing with Chai assertions.
- **Mocha**: Test framework for Node.js.
- **Nodemon**: Utility that monitors for any changes in your source and automatically restarts your server.
- **dotenv**: Module to load environment variables from a `.env` file.

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter.git
    cd boilerplate-project-metricimpconverter
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Copy the `sample.env` file to `.env`:
        ```bash
        cp sample.env .env
        ```
    - Set the variables in the `.env` file appropriately.

4. **Run the application**:
    ```bash
    npm start
    ```

5. **Run the tests**:
    - To run the tests automatically, add `NODE_ENV=test` in your `.env` file.
    - To run the tests in the console, use the command:
        ```bash
        npm run test
        ```

## Usage

- **Convert Units**: Use the `/api/convert` endpoint to convert between metric and imperial units. For example:
    ```bash
    GET /api/convert?input=10L
    ```

## Project Structure

```
metric-imperial-converter/
│
├── routes/                 # API routes
│   ├── api.js              # API route handlers
│   └── ...
│
├── tests/                  # Test files
│   ├── 1_unit-tests.js     # Unit tests
│   ├── 2_functional-tests.js # Functional tests
│   └── ...
│
├── server.js               # Entry point of the application
├── mongoose-connect.js     # MongoDB connection setup
├── models.js               # Mongoose schemas and models
├── package.json            # Project dependencies and scripts
├── .env                    # Environment variables
└── README.md               # Project documentation
```


## Contributing

Contributions are welcome! If you have any suggestions or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the fcc test [page](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter) for details.

---
