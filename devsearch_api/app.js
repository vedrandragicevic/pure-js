const resultsDiv = document.getElementById('test');
resultsDiv.style.display = 'none';
const fetchBtn = document.getElementById('fetch-data');

fetchBtn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('clicked');
        
        let formData = {
            // DJANGO APP ACCOUNT USERNAME AND PASS
        'username': 'USERNAME',
        'password': 'PW'
    }

 

    fetch('https://devsearchvex.herokuapp.com/api/users/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {

        const accessToken = data.access;

        fetch('https://devsearchvex.herokuapp.com/api/projects/', {

            headers: {
                Authorization: `Bearer ` + accessToken
            }
                
        
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)

                resultsDiv.style.display = 'block';
                fetchBtn.style.display = 'none';
                document.querySelector('.card-text').textContent = data[0].description;
                document.querySelector('.card-img-top').src = data[0].featured_image;

            })

        
       
    })


})

