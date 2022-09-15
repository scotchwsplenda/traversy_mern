$SSH_KEY_LOCATION = "C:\Users\cjber\keypairs\cjberger215-personal.pem"
$INSTANCE_URI = "ec2-54-184-143-212.us-west-2.compute.amazonaws.com"
$LOGIN_USER = "ubuntu"

$root = "$PSScriptRoot/.."

rm -Recurse -Force "$root/node_modules"
rm -Recurse -Force "$root/client/node_modules"

scp -r -i "$SSH_KEY_LOCATION" $PSScriptRoot/../* "${LOGIN_USER}@${INSTANCE_URI}:/home/ubuntu/deployment/"

ssh -i "$SSH_KEY_LOCATION" ubuntu@ec2-54-184-143-212.us-west-2.compute.amazonaws.com 'cd deployment && npm install && npm run build && nohup npm run start &'