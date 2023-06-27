let btn_search = document.querySelector('.btn');
let recipesection = document.querySelector('.recipe-section');
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
    // console.log(recipeData, '==> ye obj s nikala tha');
    recipeData.map(recipe => {
            // console.log(recipe);
            let li = document.createElement('li');
            recipesection.appendChild(li);
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
            li.innerHTML = uiset

        })
        // console.log(filtered, '==> ye map  ho kr aya hen')

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

function aPI2(id) {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`).then(response2 => {
        // if (!response2 == "ok") {
        //     alert('api sahi nh hen')
        // }
        return response2.json();
    }).then(singleData => {
        console.log(singleData);
        detailSingleItem(singleData)
    })
};

function detailSingleItem(singleitem) {
    // console.log('hi');
    // console.log(singleitem);
    let single = singleitem.data.recipe;
    console.log(single);
    console.log(single.image_url, '==>> img');
    let detailsmenu = document.querySelector('.detailsmenu');
    let li2 = document.createElement('li');
    detailsmenu.appendChild(li2);
    let singleProdect = ` <img src="${single.image_url}" alt="Description of the image" style="border-radius: 10px; width: 600px; height: 400px;">`
    li2.innerHTML = singleProdect;
    // console.log(div2);
    // console.log(detailsmenu)
}