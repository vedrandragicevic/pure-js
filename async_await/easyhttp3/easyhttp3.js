
class EasyHttp{
    // Make HTTP Get Request
  async  get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData; 
    }

    // Post request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();
        return resData;
    }


    // Put request
    async put(url, data) {
      const response = await  fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }


    // Delete request
    async delete(url) {
       const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const resData = await response.json();
        return resData;
        
    }

}