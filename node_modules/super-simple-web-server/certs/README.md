# Self-generated SSL cert generator
For dev servers only. 

## To generate:

Make sure you have an openssl package installed on your machine -- then run...

    ./generate <your.fqdn.com | localhost | ip address>


## On MacOS: To avoid those pesky _"unauthorized cert"_ warnings...

  - double-click ca.cert.pem to add to keychain
  - drag it to the System keychain
  - double-click it and set it to trusted
