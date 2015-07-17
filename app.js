
group = {charlie: 45, Jamal: 62, Sharene: 23, Omar: 5};

function oldestPerson(obj) {
  var oldest = 0;
  var name = "";
  for(key in obj) {
    if(obj[key] > oldest){
      oldest = obj[key];
      name = key;
    }
  }
  return name;
};

console.log(oldestPerson(group));
