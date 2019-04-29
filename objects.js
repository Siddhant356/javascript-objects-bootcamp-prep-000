var playlist={Sia:'Audio',Eminiem:'Rap God',CharliPuth:'See you again'};
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
function removeFromPlaylist()