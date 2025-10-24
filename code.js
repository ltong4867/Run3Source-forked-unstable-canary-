const query = (selector) => localStorage["/tn6pS9dCf37xAhkJv/:Run3"].match(selector);

const getInt = (selector) => parseInt(query(selector)[1]);

const getCellsEarned = () => getInt(/softEarned\w(\d*)/);
const getCellsSpent = () => getInt(/softSpent\w(\d*)/);
const getCellCount = () => getCellsEarned() - getCellsSpent();

function configSet(key,keyRgx,val){
var config = localStorage['/tn6pS9dCf37xAhkJv/:Run3'];
localStorage.setItem("/tn6pS9dCf37xAhkJv/:Run3", config.replace(keyRgx, key + val.toString()));
}

const setCellCount = (count) => configSet("softEarnedi", /softEarnedi(\d*)/, count + getCellsSpent());