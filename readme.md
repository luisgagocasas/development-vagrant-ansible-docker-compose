# Development environment with vagrant + ansible + docker

Use this repository in development environment.

## Vagrant + Nginx balancer + docker + docker-compose

The purpose of this repository is to establish a development environment incorporating with some docker.

The idea is to emulate a production environment with docker and docker-compose of an application.

## Technologies

- Vagrant + (VirtualBox)
- Ansible
- Docker
- Docker-compose

## Command

- vagrant validate
- vagrant up
- vagrant destroy -f
- vagrant status
- vagrant ssh master
- vagrant ssh -c "ls -ls" 2>/dev/null

## Variable important (Vagrantfile)
- VM_IP (IP base)

## Folder 
- /docker-basic/ - docker-compose with nginx
- /docker-node/ - docker-compose with node
- /nginx-static/ - nginx site

## Document
- Ansible with nginx hhttps://joachim8675309.medium.com/vagrant-provisioning-with-ansible-6dba6bca6290


## By

- Luis Gago Casas (https://luisgagocasas.com)