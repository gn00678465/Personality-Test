const URL = 'https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json';
const traits = {};
const allProblems = [];
const allDescription = {};

const traitsHandler = (data) => {
  Object.keys(data).forEach((key) => {
    traits[key] = data[key];
  });
};
const dataHandler = (data) => {
  traitsHandler(data.traits);
  //
  traits.en.forEach((trait) => data.problemList[trait].problems
    .forEach((problem) => allProblems.push(problem)));
  //
  traits.en.forEach((trait) => {
    const { description } = data.problemList[trait];
    allDescription[trait] = description;
  });
};

export {
  URL,
  traits,
  dataHandler,
  allProblems,
  allDescription,
};
