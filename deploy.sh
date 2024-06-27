#!/bin/bash

rsync -av --delete /Users/username/path/to/repo/dist/ ssh-alias:/var/www/path/to/build
