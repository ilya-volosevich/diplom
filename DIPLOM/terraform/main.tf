provider "google" {
  credentials = file("mycred.json")      
  project     = "molten-catalyst-412207" 
  region      = "europe-central2"        
}

resource "google_compute_instance" "server" {
  count        = 3
  name         = "web-server-${count.index + 1}"
  machine_type = "e2-medium"
  zone         = "europe-central2-a"
  network_interface {
    network = "default"
    dynamic "access_config" {
      for_each = var.enable_public_ip == false ? [] : ["public IP"]
      content {
      }
    }
  }

  boot_disk {
    initialize_params {
      size  = "10"
      image = "ubuntu-minimal-2204-lts"
      type  = "pd-standard"
    }
  }

  metadata = {
    google-compute-default-region = "europe-central2"
    google-compute-default-zone   = "europe-central2-a"
  }
}

data "google_compute_image" "ubuntu_image" {
  family  = "ubuntu-minimal-2204-lts"
  project = "ubuntu-os-cloud"
}

resource "google_compute_firewall" "allow-all" {
  name    = "allow-all"
  network = "default"

  allow {
    protocol = "all"
  }

  source_ranges = ["0.0.0.0/0"] # 
}

