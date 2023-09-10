//callbacks

// synchronous callback
function halo(names) {
  alert(`Hi ${names}`);
}

function user(callback) {
  const users = prompt("Name your name");
  callback(users);
}
user(halo);
