async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise(resolve => setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000));
    }
  }
  const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);
async function awaitCall() {
    try {
      const response = await fetch('https://api.favour.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Example usage
  awaitCall();
  async function awaitCall() {
    try {
      const response = await fetch('https://api.favour.com/data');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
  
  // Example usage
  awaitCall();
  async function asyncFunction1() {
    await new Promise(resolve => setTimeout(() => {
      console.log('Async Function 1');
      resolve();
    }, 1000));
  }
  
  async function asyncFunction2() {
    await new Promise(resolve => setTimeout(() => {
      console.log('Async Function 2');
      resolve();
    }, 1000));
  }
  
  async function asyncFunction3() {
    await new Promise(resolve => setTimeout(() => {
      console.log('Async Function 3');
      resolve();
    }, 1000));
  }
  
  async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
  }
  
  // Example usage
  chainedAsyncFunctions();
  async function fetchAPI(url) {
    const response = await fetch(url);
    return response.json();
  }
  
  async function concurrentRequests() {
    try {
      const [data1, data2] = await Promise.all([
        fetchAPI('https://api.example.com/data1'),
        fetchAPI('https://api.example.com/data2')
      ]);
  
      console.log('Combined Results:');
      console.log('Data from API 1:', data1);
      console.log('Data from API 2:', data2);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Example usage
  concurrentRequests();
  async function fetchAPI(url) {
    const response = await fetch(url);
    return response.json();
  }
  
  async function parallelCalls(urls) {
    try {
      const requests = urls.map(url => fetchAPI(url));
      const responses = await Promise.all(requests);
  
      console.log('Responses from parallel calls:');
      responses.forEach((data, index) => {
        console.log(`Data from URL ${index + 1}:`, data);
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Example usage
  const urls = ['https://api.favour.com/data1', 'https://api.favour.com/data2', 'https://api.favour.com/data3'];
  parallelCalls(urls);