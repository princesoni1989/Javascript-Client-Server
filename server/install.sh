sudo apt-get update -y
sudo apt-get install docker -y
sudo apt install docker.io -y
sudo service docker restart
sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
sleep 5
source ~/.nvm/nvm.sh
nvm install node
sudo apt-get install git -y
git clone https://princesoni1989:@github.com/princesoni1989/Javascript-Client-Server.git
cd Javascript-Client-Server/server
npm i
npm run build-server
sudo docker-compose up