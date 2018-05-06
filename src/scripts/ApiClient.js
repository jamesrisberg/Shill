
export default {
    
    getExt(route) {

        return (
            fetch(route, {
                method: 'GET',
                crossDomain: true,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(res => 
                res.json()
                
            )
            .then(res => {
                return res;
            })
            .catch(err => console.error(err))
        )
    },
    postExt(route, postData) {
        console.log(postData)
        return (
            fetch(route, {
                method: 'POST',
                crossDomain: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            })
            .then(res => {
                return res.json();
            })
            .catch(err => console.error(err))
        )
    }
}