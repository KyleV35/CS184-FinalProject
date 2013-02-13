#Compile bootstrap CSS
cd bootstrap
lessc ./less/bootstrap.less > ../public/stylesheets/bootstrap.css
lessc --compress ./less/bootstrap.less > ../public/stylesheets/bootstrap.min.css
cd ..
#Now in top level directory
lessc ./less/main.less > ./public/stylesheets/main.css
lessc --compress ./less/main.less > ./public/stylesheets/main.min.css
