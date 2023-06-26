let api1 = fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza').then(response => {
    return response.json()
}).then(data => {
    // console.log(data);
    
    console.log(data);
});


let searchmenu = document.querySelector('.searchmenu');
let completemenu = document.querySelector('.completemenu');
var inputElem = document.getElementById('inputElem');
let btn_search = document.getElementById('btn_search');
btn_search.addEventListener('click', () => {
    let searchval = inputElem;
    console.log(searchval.value.toLowerCase());
    searchval.value = ''
});














// function search() {
    //     const query = inputElem.value.toLowerCase();
    //     const results = recipes.filter(function (recipe) {
        //         return (recipe.title.toLowerCase().includes(query) ||
        //             recipe.ingredients.join(" ").toLowerCase().includes(query))
        //     });
        // }
        
        
        
        // let api2 = fetch('https://forkify-api.herokuapp.com/api/v2/recipes/:id').then(response => {
        //     return response.json()
        // }).then(data => {
        //     console.log(data)
        // });
        // let api3 = fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886').then(response => {
        //     return response.json()
        // }).then(data => {
        //     console.log(data)
        // });