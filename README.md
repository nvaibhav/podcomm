# podcomm
Communication between 2 pods - https://github.com/nvaibhav/podcomm.git
This repo has contents developed and deployed on minikube for 2 pods communication.
First pod is frontend with a reactjs app with nginx.
Second pod is Backend with java RestAPI with tomcat.

Below are the details of the contents of the repo -
back-end/ - Folder containing artifacts to create a image for backend pod
front-end/ - Folder containing artifacts to create a image for frontend pod.
reactapphello/ - Folder containing a react project in VSC IDE.
restapphello/ - Folder containing a java project in STS.

Steps to deploy in minikube (Windows):
Set the ENV vars -  
minikube docker-env gives below cmds, execute one by one in cmd  
  SET DOCKER_TLS_VERIFY=1  
  SET DOCKER_HOST=tcp://127.0.0.1:62194  
  SET DOCKER_CERT_PATH=C:\Users\[user]\.minikube\certs  
  SET MINIKUBE_ACTIVE_DOCKERD=minikube  
  REM To point your shell to minikube's docker-daemon, run:  
  REM @FOR /f "tokens=*" %i IN ('minikube -p minikube docker-env --shell cmd') DO @%i  

Frontend  
------------  
Build the project to create /build in VSC  
  npm run build  
Copy the build to image artifacts -  
  C:\mycode\front-end>XCOPY C:\Users\[user]\Documents\personal\training\reactapphello\reactapphello\build .\frontend-build\ /E  
Create the image  
  C:\mycode\front-end>minikube image build -t hellofrontend:2.0 .  
  C:\mycode\back-end>kubectl apply -f .\hellofrontenddeployment.yaml  
  C:\mycode\back-end>kubectl apply -f .\hellofrontendservice.yaml  

Backend  
------------  
Build the project to create the jar from STS  
  mvn package  
Copy the build to image artifacts -  
  XCOPY C:\Users\[user]\Documents\personal\training\restapphello\target\*.jar .\back-end\backend-build  
Create the image  
  minikube image build -t restapphello:2.0 .  
Redeploy  
  C:\mycode\back-end>kubectl apply -f .\hellobackenddeployment.yaml  
  C:\mycode\back-end>kubectl apply -f .\hellobackendservice.yaml  

Troubleshooting  
  kubectl exec -i -t hellofrontenddeployment-6fd87c7f69-76sxs – sh  
  kubectl cp hellofrontenddeployment-85c5cb4999-r4vlw:/etc/nginx/conf.d/mynginx.conf .\nginx.conf  
  
