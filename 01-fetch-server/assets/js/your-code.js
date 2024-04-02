export function getAllDogs() {
    return fetch('/dogs');
}
export function getDogNumberTwo() {
    return fetch('/dogs/2');
}
export function postNewDog() {
    let dog = new URLSearchParams({name:'dave', age:14});

    return fetch('/dogs', {
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: dog
    });
}
export function postNewDogV2(name, age) {
    let dog = new URLSearchParams({name, age});

    return fetch('/dogs', {
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: dog
    });
}
export function deleteDog(id) {
    return fetch(`/dogs/${id}/delete`, {
        method: 'POST',
        headers: {
            "AUTH": "ckyut5wau0000jyv5bsrud90y"
        }
    }) 
}