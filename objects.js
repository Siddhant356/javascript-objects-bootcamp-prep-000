var playlist={Sia:'Audio',Eminiem:'Rap God',Charli puth:'See you again'};
function updatePlaylist(obj, artist, title){
  return Object.assign({}, obj, {[artist]: title})
}