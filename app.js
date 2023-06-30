let btn_search = document.querySelector('.btn');
// console.log(btn_search);

function aPI(search) {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
        .then(response => {
            return response.json()
        }).then(getdata => {
            // console.log(getdata, '===>> ye data API ka heen');
            filterData(getdata);
        });
    // console.log(search, '===> search ji input s mili hen ');
}

function filterData(apidata) {
    // console.log(apidata, '==>> ye api k function s aya hen');
    let recipeData = apidata.data.recipes;
    console.log(recipeData, '==> ye obj s nikala tha');
    recipeData.forEach(ele => {
        console.log(ele, ' ==>>forEach');
        let recipesection = document.querySelector('.recipe-section');

        let uiset =
            `
                <div style="display: flex; align-items: center;" onclick="aPI2('${ele.id}')">
                <img src="${ele.image_url}" alt="" style="border-radius: 50%; width: 100px; height: 100px;">
                <div style="margin-left: 10px; margin: 10px;">
                <div>${ele.title}</div>
                <div>${ele.publisher}</div>
                </div>
                </div>
                `
        let li = document.createElement('li');
        recipesection.appendChild(li);
        li.innerHTML = uiset
            // recipesection.innerHTML = uiset
        console.log(uiset, ' ==>>forEach UI');

    });

    // recipeData.map(recipe => {
    //     console.log(recipe, '==> map s aya hwa data');
    //     let uiset =
    //         `
    //     <div style="display: flex; align-items: center;" onclick="aPI2('${recipe.id}')">
    //     <img src="${recipe.image_url}" alt="" style="border-radius: 50%; width: 100px; height: 100px;">
    //     <div style="margin-left: 10px; margin: 10px;">
    //     <div>${recipe.title}</div>
    //     <div>${recipe.publisher}</div>
    //     </div>
    //     </div>
    //     `
    //    

    //     console.log(uiset, '==> ye map  ho kr aya hen');
    // })
}
btn_search.addEventListener('click', search)

function search() {
    let form_control = document.querySelector('.form-control');
    let searchValue = form_control.value;
    console.log(searchValue);
    aPI(searchValue)
    form_control.value = ''
};


// after clicking on any single food item - 2;

// function aPI2(id) {
//     fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`).then(response2 => {
//         // if (!response2 == "ok") {
//         //     alert('api sahi nh hen')
//         // }
//         return response2.json();
//     }).then(singleData => {
//         // console.log(singleData);
//         detailSingleItem(singleData);
//         // console.log(ingredients(single.ingredients))
//     })
// };

// function detailSingleItem(singleitem) {
//     // console.log('hi');
//     // console.log(singleitem);\

//     let single = singleitem.data.recipe;
//     // console.log(single);
//     // console.log(single.image_url, '==>> img');
//     let ingrediented = single.ingredients.map((ele) => {
//         // console.log(ele, '==>>> ingredients');
//         let ingredientedObg = `<li>${ele.quantity}</li>  <li>${ele.unit}</li> <li>${ele.description}</li>`
//             // console.log(ingredientedObg);
//         return ingredientedObg

//     });
//     ingrediented.join(', ');
//     // console.log(ingrediented.join(', '));
//     let detailsmenu = document.querySelector('.detailsmenu');
//     let div2 = document.createElement('div');
//     detailsmenu.appendChild(div2);
//     let singleProdect = `
//         <img src=${single.image_url}
//         <h1>${single.title}<h1>
//         <p></i>${single.cooking_time} minutes</p>
//         <p></i>${single.servings} servings</p> <h4 class="card-title text-center my-4 recipeIng">Recipe Ingredients</h4>
//         <div id="ingredientsList" class="d-flex flex-column flex-wrap">${ingrediented}</div>
//         <a href=${single.source_url}>${single.source_url}</a>.
// `
//     div2.innerHTML = singleProdect;

//     // console.log(div2);
//     console.log(singleProdect);
// }