#Compile bootstrap CSS
cd bootstrap
lessc ./less/bootstrap.less > ../public/stylesheets/bootstrap.css
lessc --compress ./less/bootstrap.less > ../public/stylesheets/bootstrap.min.css
cd ..
cd less
./build.sh
cd ..
