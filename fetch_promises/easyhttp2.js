
class EasyHttp{
    // Make HTTP Get Request
    get(url) {
        return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
        })  
    }

    // Post request
    post(url, data) {
        return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
        });  
    }


    // Put request
    put(url, data) {
        return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
        });  
    }


    // Delete request
    delete(url) {
        return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(() => resolve('Resource deleted'))
        .catch(error => reject(error))
        });  
    }

}