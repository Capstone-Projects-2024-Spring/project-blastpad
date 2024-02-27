SDX=$1

(
  echo o
  echo p
  echo n
  echo p
  echo 1
  echo ""
  echo +200M 
  echo t
  echo c
  echo n
  echo p
  echo 2
  echo ""
  echo ""
  echo w
) | sudo fdisk $SDX

mkfs.vfat "/dev/$SDX1"
rmdir boot
mkdir boot
mount "/dev/$SDX1" boot

mkfs.ext4 "/dev/$SDX2"
rmdir boot
mkdir root
mount "/dev/$SDX2" root

wget http://os.archlinuxarm.org/os/ArchLinuxARM-rpi-armv7-latest.tar.gz
bsdtar -xpf ArchLinuxARM-rpi-armv7-latest.tar.gz -C root
sync

mv root/boot/* boot

umount boot root