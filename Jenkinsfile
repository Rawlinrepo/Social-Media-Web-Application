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

                        sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                        
                        dir('client'){
                        sh '''
                        #docker buildx build --platform linux/amd64 -t $USERNAME/social-media-web-application:frontend --push .
                        docker build -t $USERNAME/social-media-web-application:frontend .
                        docker push $USERNAME/social-media-web-application:frontend
                        '''
                        }

                        dir('server'){
                        sh '''
                        #docker buildx build --platform linux/amd64 -t $USERNAME/social-media-web-application:backend --push .
                        build -t $USERNAME/social-media-web-application:backend .
                        docker push $USERNAME/social-media-web-application:backend
                        '''
                        }
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