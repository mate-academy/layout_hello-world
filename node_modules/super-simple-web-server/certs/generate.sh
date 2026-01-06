#!/bin/bash
FQDN=$1

# Create your very own Root Certificate Authority
openssl genrsa \
  -out ca.key.pem \
  2048

# Self-sign your Root Certificate Authority
# Since this is private, the details can be as bogus as you like
openssl req \
  -x509 \
  -sha256 \
  -new \
  -nodes \
  -key ca.key.pem \
  -days 3650 \
  -out ca.cert.pem \
  -subj "/C=US/ST=California/L=Berkeley/O=CatVideos4U/CN=${FQDN}"

# Create a Device Certificate for each domain,
# such as example.com, *.example.com, awesome.example.com
# NOTE: You MUST match CN to the domain name or ip address you want to use
openssl genrsa \
  -out key.pem \
  2048

# Create a request from your Device, which your Root CA will sign
openssl req -new \
  -key key.pem \
  -out csr.pem \
  -subj "/C=US/ST=California/L=Mountain View/O=CatVideos4U/CN=${FQDN}"

# Sign the request from Device with your Root CA
# -CAserial ca.srl
openssl x509 \
  -sha256 \
  -req -in csr.pem \
  -CA ca.cert.pem \
  -CAkey ca.key.pem \
  -CAcreateserial \
  -out cert.pem \
  -days 3650

rm ca.key.pem csr.pem ca.srl
