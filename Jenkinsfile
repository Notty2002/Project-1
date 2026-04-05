pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
             sh 'docker build -t nileshproject1 .'
            }
        }

        stage('Run Container') {
            steps {
             sh 'docker run -d -p 3000:3000 --name project1 nileshproject1'
            }
        }
    }
}
