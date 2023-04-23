rm -R -f ./migrations &&
pipenv run init &&
psql -U lescampos -c 'DROP DATABASE example;' || true &&
psql -U lescampos -c 'CREATE DATABASE example;' &&
psql -U lescampos -c 'CREATE EXTENSION unaccent;' -d example &&
pipenv run migrate &&
pipenv run upgrade