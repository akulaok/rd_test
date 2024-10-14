import axios from 'axios';

export default class Loader {
  baseUrl = 'https://skypro-reviewer.onrender.com/';

  constructor(address: string) {
    this.baseUrl = `${this.baseUrl}${address}`;
  }

  async post(data: any) { 
    try {
      const response = await axios.post(this.baseUrl, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.body;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }
}
