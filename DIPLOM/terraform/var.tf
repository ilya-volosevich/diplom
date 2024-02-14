variable "project" {
  default = "molten-catalyst-412207"
}

variable "region" {
  default = "us-central1"
}

variable "zone" {
  type    = list(string)
  default = ["us-central1-a", "us-central1-b"]
}

variable "machine_type" {
  default = "e2-medium"
}

variable "image_family" {
  default = "ubuntu-minimal-2204-lts"
}

variable "image_project" {
  default = "ubuntu-os-cloud"
}

variable "enable_public_ip" {
  description = "Whether to create a public IP for the virtual machine"
  default     = true
}

variable "credentials" {
  default = "mycred.json"
}
