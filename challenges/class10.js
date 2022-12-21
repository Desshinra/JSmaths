const inputID = document.querySelector('#ID');
const pResult = document.querySelector('#result');
const btn = document.querySelector('#btn');

const usersList = [];

usersList.push({
    id: 1895,
    user: 'adASTRA',
});
usersList.push({
    id: 1956,
    user: 'Loperoz',
});
usersList.push({
    id: 1458,
    user: 'Fuentes',
});

btn.addEventListener('click', searchUsersByID)

function searchUsersByID() {
    const userID = inputID.value;

    if(!inputID) {
        pResult.textContent = 'You have to put a user ID'
        return;
    }

    // let user;

    // function isIdInArray(idElements) { // id, user
    //     return idElements.id == userID;
    // }

    const userFound = usersList.find((user) => {
        return user.id == userID;
    });

    const result = userFound ? userFound.user : 'not found';

    // if(idInArray) {
    //     user = idInArray.user;
    // } else {
    //     return pResult.textContent = 'False'
    // }
    
    pResult.textContent = `The user is:${result}`
}