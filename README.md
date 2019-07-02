how to set this up in a Cloud 9 environment 

1. create new Cloud 9 server 

2. Choose 'Ubuntu' environment when setting up a new Cloud 9 Instance

3. From the command line, run: \curl -sSL https://raw.githubusercontent.com/LEARNAcademy/cloud9-config/master/setup.sh | bash -s

4. git clone https://github.com/the-klap/bartab.git
5. cd bartab/
6. bundle install
7. if you have an error that says anything other than to run step 9, run the curl command again.
8. yarn install --check-files
9. rails db:setup
