# Variables
VM_IP = "192.168.2.200"

Vagrant.configure("2") do |config|
  config.vm.define "master" do |master|
    master.vm.hostname = "master"
    master.vm.box = "ubuntu/focal64"
    master.vm.box_version = "20211026.0.0"
    master.vm.box_check_update = false
    master.vm.provision:shell, inline: <<-SHELL
      echo "root:rootroot" | sudo chpasswd
      sudo timedatectl set-timezone America/Lima
    SHELL
    master.vm.network "private_network", ip: "#{VM_IP}"
  end

  config.vm.provider "virtualbox" do |v|
    v.memory = 2024
    v.cpus = 2
  end

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "playbook-docker.yml"
  end

  config.trigger.after :up do |trigger|
    trigger.info = "Finish run process!!"
    trigger.run_remote = { path: "summary.sh", args: [VM_IP] }
  end
end