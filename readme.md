# Development environment with vagrant + ansible + docker

Use this repository in development environment.

## Vagrant + docker + docker-compose

The purpose of this repository is to establish a development environment incorporating with some docker.

The idea is to emulate a production environment with docker and docker-compose of an application.

## Requirements

- Vagrant ([Install](https://www.vagrantup.com/downloads))
- VirtualBox ([Install](https://www.virtualbox.org/wiki/Downloads))

## Technologies

- Ansible
- Docker
- Docker-compose

## Command frequent

- vagrant validate
- vagrant up
- vagrant status
- vagrant suspend NAME
- vagrant resume NAME

## Command optional

- vagrant destroy -f
- vagrant box list
- vagrant box remove NAME
- vagrant ssh master
- vagrant ssh -c "ls -ls" 2>/dev/null

## Variable important (Vagrantfile)

- VM_IP (IP base)

## Folder 

- /docker-basic/ - docker-compose with nginx
- /docker-node/ - docker-compose with node
- /nginx-static/ - nginx site

## Document

- Ansible with nginx https://joachim8675309.medium.com/vagrant-provisioning-with-ansible-6dba6bca6290
- Vagrant cli - https://www.vagrantup.com/docs/cli


## By

- Luis Gago Casas (https://luisgagocasas.com)