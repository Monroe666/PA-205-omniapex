# Music Social Network Platform

## Introduction
This deployment guide provides technical support for initializing and running the Music Social Network Platform. It outlines the prerequisites, step-by-step instructions, and necessary installations to ensure a smooth setup.

## Prerequisites
Before setting up the Music Social Network Platform, please ensure the following prerequisites are met:

Node.js: Download and install the LTS version of Node.js from the official website: https://nodejs.org/. Verify the installation by running npm -v in your terminal.

Visual Studio Code: Download and install Visual Studio Code (VSCode) from the official website: https://code.visualstudio.com/. Customize or use it for your code projects.

XAMPP: XAMPP is used as the local server environment, including Apache web server and MySQL database capabilities. Download XAMPP from https://www.apachefriends.org based on your operating system. Install Apache, MySQL, PHP, and phpMyAdmin during the installation process.

## Step-by-Step Instructions
Follow these step-by-step instructions to set up the Music Social Network Platform:

Launch XAMPP: Start the XAMPP control panel and click the "Start" button next to Apache and MySQL modules to enable them. This will ensure the local server environment is running.

Access XAMPP Welcome Page: Open a browser and navigate to http://localhost/ to verify that the Apache server is working. You should see the XAMPP welcome page.

Access phpMyAdmin: Open a browser and go to http://localhost/phpmyadmin/. This will provide access to the MySQL database management interface.

Create Database: In phpMyAdmin, click the "New" button on the left, enter the name of the database (folowa), and click "Create" to create the database.

Create Tables: Within the created database, click the database name (folowa) on the left and then click the "New" button under the "Tables" section. Create two tables: "user" and "notice". Configure the necessary columns and relationships between the tables.

Download the Source Code: Obtain the source code of the Music Social Network Platform from the provided zip file (205-omniapex-source.zip) or GitHub repository.

Open in VSCode: Open the source code in Visual Studio Code (VSCode) for further customization and development.

Install Dependencies: Open the terminal in VSCode and run the command npm install to install the required dependencies. This may take a while as it downloads the necessary packages.

Start Front-End: In the terminal, run the command npm start to launch the React front-end of the platform. This will open the application in your default browser.

Start Back-End: In a separate terminal, navigate to the "server" directory within the project. Run the command npm start to start the back-end server and establish the connection with the MySQL database. The system will display "Running backend server" and "MySQL Connected..." if the connection is successful.

Explore the Platform: With all the steps completed, you are now free to explore and interact with the Music Social Network Platform.

## Github URL: https://github.com/Monroe666/PA-205-omniapex

## URL of the deployed project on the web: http://localhost:3000/
