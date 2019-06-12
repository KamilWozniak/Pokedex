import axios from 'axios';

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

export const getSinglePokemon = (number, HOST, PORT) => new Promise((resolve, reject) => {
  axios.get(`http://${HOST}${PORT}/pokemon/?num=${number}`).then((result) => {
    resolve(result.data[0]);
  }).catch(() => {
    reject(new Error('Failed to download single pokemon'));
  });
});
