var playlist={Sia:'Audio',Eminiem:'Rap God',CharliPuth:'See you again'};
function updatePlaylist(obj, artist, title){
  return Object.assign({}, obj, {[artist]: title})
}
function update