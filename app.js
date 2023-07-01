let btn_search = document.querySelector('.btn');
// console.log(btn_search);

function aPI(search) {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
        .then(response => {
            return response.json()
        }).then(getdata => {
            // console.log(getdata, '===>> ye data API ka heen');
            filterData(getdata);
        })
        // console.log(search, '===> search ji input s mili hen ');
}

function filterData(apidata) {
    // console.log(apidata, '==>> ye api k function s aya hen');
    let recipeData = apidata.data.recipes;
    let recipesection = document.querySelector('.recipe-section');
    let a = recipeData.map(recipe => {
            // console.log(recipe, '==> map s aya hwa data');
            let uiset =
                `
        <div style="display: flex; align-items: center;" onclick="aPI2('${recipe.id}')">
        <img src="${recipe.image_url}" alt="" style="border-radius: 50%; width: 100px; height: 100px;">
        <div style="margin-left: 10px; margin: 10px;">
        <div>${recipe.title}</div>
        <div>${recipe.publisher}</div>
        </div>
        </div>
        `
            return uiset
                // console.log(uiset, '==> ye map  ho kr aya hen');
        })
        // console.log(a, '==> ye map  ho kr aya hen');
    let aJoinn = a.join(' ')
    console.log(a, '==> ye map join  ho kr aya hen');

    recipesection.innerHTML = aJoinn

}
btn_search.addEventListener('click', search)

function search() {
    let form_control = document.querySelector('.form-control');
    let searchValue = form_control.value;
    // console.log(searchValue);
    aPI(searchValue)
    form_control.value = ''
};


// after clicking on any single food item - 2;

function aPI2(id) {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`).then(response2 => {
        // if (!response2 == "ok") {
        //     alert('api sahi nh hen')
        // }
        return response2.json();
    }).then(singleData => {
        console.log(singleData);
        detailSingleItem(singleData);
    })
};

function detailSingleItem(singleitem) {
    // console.log('hi');
    // console.log(singleitem);

    let single = singleitem.data.recipe;
    // console.log(single);
    // console.log(single.image_url, '==>> img');
    let ingrediented = single.ingredients.map((ele) => {
        // console.log(ele, '==>>> ingredients');
        let ingredientedObg = `<li>${ele.quantity}</li>  <li>${ele.unit}</li> <li>${ele.description}</li>`
            // console.log(ingredientedObg);
        return ingredientedObg

    });
    ingrediented.join(', ');
    // console.log(ingrediented.join(', '));
    let singleProdect =
        `<div class="card mb-3" style="background-color: beige; border: none;">
    <div class="img">
        <img src=${single.image_url}
            class="card-img-top image-fit" alt="Recipe Image">
    </div>
    <div class="card-body d-flex flex-column align-items-center">
        <h1 class="card-title text-center recipeName">${single.title}</h1>
        <div class="container d-flex justify-content-center info">
            <div class="d-flex me-auto justify-content-center align-items-center">
                <p id="timeToCook"><i class="fa-regular fa-clock me-2"></i>${single.cooking_time} minutes</p>
                <p id="servings"><i class="fa-solid fa-user-group me-2"></i>${single.servings} servings</p>
            </div>
            <p id="bookmark"><i class="fa-solid fa-bookmark rounded-circle p-3 fs-5" style="color: #ffffff;"></i></p>
        </div>
    </div>
</div>

<div class="card ingredientCard mb-3" style="width: 100%; height: 400px; background-color: beige; border: none;">
                    <div class="card-body d-flex flex-column flex-wrap">
                        <h4 class="card-title text-center my-4 recipeIng">Recipe Ingredients</h4>
                        <div id="ingredientsList" class="d-flex flex-column flex-wrap">
                            ${ingrediented}
                        </div>
                    </div>
                </div>

<div class="card mb-3" style="background-color: beige; border: none;">
    <div class="card-body">
        <h4 class="card-title text-center my-4 howToCook">How To Cook It</h4>
        <p class="card-text text-center">
            The source URL for the recipe is: 
            
            <a href=${single.source_url}>${single.source_url}</a>.
        </p>
        
    </div>
</div>`

    let detailsmenu = document.querySelector('.detailsmenu');
    detailsmenu.innerHTML = singleProdect;
};