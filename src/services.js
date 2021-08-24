import axios, { AxiosRequestConfig } from 'axios';

let config = {
  headers: {
            "Access-Control-Allow-Origin" : "*",
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
  responseType: 'json'
};


let baseUrl = 'https://pooptriviaapi.cleverapps.io';


async function _createQuiz(data) {
  let _data = JSON.stringify(data);
  return await axios.post(baseUrl+'/quizzes', _data, config);
}

async function _getQuizzes() {
  return await axios.get(baseUrl+'/quizzes', config);
}

//////////////////////////////////////////

const ApiServices = {

  // Quiz
    _createQuiz,
    _getQuizzes,

}

export default ApiServices;
