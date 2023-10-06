//exports
var fatherName = "Radha Adhikari";
// module.exports = fatherName;

export default fatherName;

//function
export const generateLovePercent = () => {
  return `${Math.floor(Math.random() * 100)}%`;
};
