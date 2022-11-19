const getComputerChoice = () => {
    let arrays = ["rock","paper","scissors"];
    return arrays[Math.floor(Math.random() * arrays.length)];
};
console.log(getComputerChoice());