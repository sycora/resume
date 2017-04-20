#!/bin/sh

cd accessToken
gcloud beta functions deploy accessToken --stage-bucket resume-functions.sycora.com --trigger-http
cd ..
