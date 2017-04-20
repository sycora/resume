#!/bin/sh

cd accessToken
gcloud beta functions deploy accessToken \
  --memory 128MB \
  --stage-bucket resume-functions.sycora.com \
  --trigger-http
cd ..
