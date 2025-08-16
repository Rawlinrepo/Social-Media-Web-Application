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
                sh '''
                docker login -u $USERNAME -p $PASSWORD
                cd client
                DOCKER_BUILDKIT=1 docker build -t $USERNAME/social-media-web-application:frontend .
                cd ..
                cd server
                docker buildx build --platform linux/amd64,linux/arm64 -t $USERNAME/social-media-web-application:backend --load .
                cd ..
                '''
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