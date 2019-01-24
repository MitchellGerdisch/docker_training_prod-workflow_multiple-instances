Notes about set up in the cloud account to support the app.

Google Cloud Focused but similar steps would be needed in other clouds.

* Set up pgpassword secret
In GCP, this was done by running the console shell from the UI and running this command:
kubectl create secret generic pgpassword --from-literal PGPASSWORD=XXXPASSWORD_GOES_HEREXXX

* Set up ingress-nginx stuff in your K8s cluster.
This is done using helm.
Go to github/kubernetes/ingress-nginx and go to documenation link at top (https://kubernetes.github.io/ingress-nginx/)
Then click on the Deployment link.
Look at the Helm link on that page. (Helm is like apt-get or yum for K8s third party solutions.)
Go to github.com/helm/helm
Look at README for the quick start guide link: https://docs.helm.sh/using_helm/#quickstart-guide
Go to quick start guide and scroll way down to the "FROM SCRIPT" section: https://docs.helm.sh/using_helm/#from-script

Then run those commands in the GCP cluster console shell to download and run the helm install script.
DO NOT do the helm init step yet since you need to do some GKE-specific stuff first.

Need to set up a service account and a cluster role binding for tiller to be able to modify the K8s cluster.
  * kubectl create serviceaccount --namespace kube-system tiller
  * kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller

NOW do helm init:
  * helm init --service-account tiller --upgrade

NOW we can use helm to install nginx-ingress, etc.
  * Use the RBAC command: helm install stable/nginx-ingress --name my-nginx --set rbac.create=true



