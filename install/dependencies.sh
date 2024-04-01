echo "🚀 🎮 BlastPad Installer V0.1"

echo "##### 🚀 🐍 Python Packages Incoming... #####"
sudo apt-get update
sudo apt-get install python3-pip python3-dev python3-flask python3-pillow python3-pil.imagetk -y
pip3 install flask-cors --break-system-packages
pip3 install pillow --break-system-packages
pip3 install tk --break-system-packages
pip3 install customtkinter --break-system-packages

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
source ~/.bashrc
pwd
cd ../blockly/
pwd
npm ci
echo "##### 🚀 🎮 Building Editor.. #####"
npm run build

echo "##### 🚀 🎮 Cleaning up unnecessary stuff... #####"
cd ..
pwd

rm -rf documentation
rm -rf examples
rm -rf classroom-server
rm -rf *.png
rm -rf source

echo "##### 🚀 🎮 All Done! #####"
