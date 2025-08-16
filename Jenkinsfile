pipeline{
    agent any
    
    stages{
        stage('Code'){
            steps{
                checkout scm
             }
        }
        stage('Build'){
            steps{
                withCredentials([usernamePassword(
                    credentialsId: 'DOCKER_CREDENTIALS', 
                    usernameVariable: 'USERNAME', 
                    passwordVariable: 'PASSWORD')]) {
                sh 'docker login -u $USERNAME -p $PASSWORD'
                dir('client') {
                sh 'docker buildx build --tag $USERNAME/social-media-web-application:frontend --push .'
                }
                dir('server') {
                sh 'docker buildx build --tag $USERNAME/social-media-web-application:backend --push .'
                }
                }
            }
        }
        stage('Deploy'){
            steps{
                sh 'docker compose up --build -d'
            }
        }
    }
}