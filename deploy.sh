echo "Il fra sta a fa cose"
git checkout master

echo "il fra sta buildando come su fortinite..."
npm run build

echo "il fra sta caricando i file"
scp -r build/* root@142.132.222.162:/var/www/novasurvival.it

echo "il fra ha finito ed è stanco af"