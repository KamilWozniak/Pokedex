export const handlePrevEvo = (data, array) => {
  if (data) {
    data.map(item => array.push(item.num));
  }
};

export const handleNextEvo = (data, array) => {
  if (data) {
    data.map(item => array.push(item.num));
  }
};


// export const makePromiseArray = (evo, promisses, HOST, PORT) => {
//   evo.map(item => promisses.push(fetch(`http://${HOST}${PORT}/pokemon/?num=${item}`)));
//   //console.log(promisses);
// };
