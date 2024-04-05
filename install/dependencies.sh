echo "🚀 🎮 BlastPad Installer V0.1"

if which node > /dev/null
  then
    echo "##### 🚀 🎮 Node is already installed. #####"
    node -v
    npm -v
  else
    echo "##### 🚀 🎮 Node Incoming... #####"
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.39.7/install.sh | bash
    source ~/.nvm/nvm.sh
    nvm install 20
    nvm alias default 20
    nvm use 20
    node -v
    npm -v
  fi

echo "##### 🚀 🎮 Node Packages Incoming... #####"
# source ~/.bashrc
pwd
cd ../blockly/
pwd
npm ci
echo "##### 🚀 🎮 Building Editor.. #####"
npm run build

echo "##### 🚀 🎮 Cleaning up unnecessary stuff... #####"
cd ..
pwd

echo "Removing Documentation"
rm -rf documentation
echo "Removing Examples"
rm -rf examples
echo "Removing Classroom Server"
rm -rf classroom-server
rm -rf *.png
echo "Removing Sphinx Stuff"
rm -rf source

echo "##### 🚀 🎮 All Done! #####"
