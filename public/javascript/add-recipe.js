async function newRecipeHandler(event) {
    event.preventDefault();

    const recipe_name = document.querySelector('input[name="recipe_name"]').value.trim();
    const ingredients = document.querySelector('textarea[name="ingredients"]').value.trim();
    const method = document.querySelector('textarea[name="method"]').value.trim();

    const response = await fetch(`/api/recipes`, {
        method: 'post',
        body: JSON.stringify({ recipe_name, ingredients, method }),
        headers: { 'Content-Type': 'application/json' }
    });
    //console.log('does this work');

    if (response.ok) {
        document.location.replace('/recipes');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#new-recipe').addEventListener('submit', newRecipeHandler);
