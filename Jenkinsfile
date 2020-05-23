pipeline {
    agent any
    environment {
        GOOGLE_PROJECT_ID = 'callback-demons';
        GOOGLE_SERVICE_ACCOUNT_KEY = credentials('google_cloud');
    }
    tools {
        nodejs 'NodeJS 14.3.0'
    }
    stages {
        stage('init') {
            steps {
                sh 'node -v'
                echo "this is the project id environment "+GOOGLE_PROJECT_ID;
                echo "THis is the credentails:${GOOGLE_SERVICE_ACCOUNT_KEY}";
                sh 'npm install'

            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh """
					#!/bin/bash 
					echo "deploy stage";
					 gcloud config set project ${GOOGLE_PROJECT_ID};
					 gcloud auth activate-service-account --key-file ${GOOGLE_SERVICE_ACCOUNT_KEY};
                     gcloud config set gcloudignore/enabled true;
					 gcloud app deploy app.yaml;
					 gcloud config list;
                     echo "Deployed to GCP"
				"""
            }
        }
    }
}