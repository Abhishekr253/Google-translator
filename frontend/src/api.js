import axios from 'axios';

export const fetchTranslation = async (inputText) => {
  const options = {
    method: 'POST',
    url: 'https://free-google-translator.p.rapidapi.com/external-api/free-google-translator',
    params: {
      from: 'en',
      to: 'es',
      query: inputText, 
    },
    headers: {
      'x-rapidapi-key': '79d941f34fmshb2ae314cb22f75bp1b98ffjsn82a4ede35a19',
      'x-rapidapi-host': 'free-google-translator.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      translate: 'rapidapi',
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Translation failed. Please check your API key and settings.');
  }
};
