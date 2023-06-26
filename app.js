let btn_search = document.querySelector('.btn');
let recipesection = document.querySelector('.recipe-section');
let detailsmenu = document.querySelector('detailsmenu');
console.log(btn_search);


fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
    .then(response => {
        return response.json()
    }).then(getdata => {
        console.log(getdata);
        btn_search.addEventListener("click", search)

        function search() {
            let form_control = document.querySelector('.form-control').value;
            // console.log(getdata.data.recipes);
            let recipesObj = getdata.data.recipes
                // console.log(recipesObj);
            let filtrData = recipesObj.filter((ele) => {
                // console.log(ele.title)
                return ele.title == 'Pizza'

            })
            console.log(filtrData)






        }
    })