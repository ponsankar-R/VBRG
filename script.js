function selected() {
  // Get the value of the selected radio button.
  const valu = document.querySelector('input[name="option"]:checked').value;


  
  if (valu == "onion") {
    const recipi = document.getElementById('recipi');
    recipi.innerHTML = `
      <h1>Onion Uttapam</h1>
      <h2>Ingredients:</h2>
      <ul>
        <li><h3>1 cup dosa batter (fermented rice and lentil batter)</h3></li>
        <li><h3>1 onion, finely chopped</h3></li>
        <li><h3>2-3 green chilies, finely chopped</h3></li>
        <li><h3>Salt to taste</h3></li>
        <li><h3>Oil or ghee for cooking</h3></li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
        <li><h3>Heat a non-stick griddle or tava over medium heat.</h3></li>
        <li><h3>Pour a ladleful of dosa batter onto the griddle and spread it in a circular motion to form a thick pancake.</h3></li>
        <li><h3>Sprinkle a handful of finely chopped onions and green chilies over the top.</h3></li>
        <li><h3>Drizzle a little oil or ghee around the edges and on top of the uttapam.</h3></li>
        <li><h3>Cook until the bottom is golden brown and the top is set.</h3></li>
        <li><h3>Flip the uttapam and cook the other side until it's golden brown and crispy.</h3></li>
        <li><h3>Serve hot with coconut chutney or sambar.</h3></li>
      </ol>

      <h1>Onion Bhaji</h1>
      <h2>Ingredients:</h2>
      <ul>
        <li><h3>2 onions, thinly sliced</h3></li>
        <li><h3>1 cup gram flour (besan)</h3></li>
        <li><h3>1/2 teaspoon red chili powder</h3></li>
        <li><h3>1/2 teaspoon turmeric powder</h3></li>
        <li><h3>1/2 teaspoon cumin seeds</h3></li>
        <li><h3>Salt to taste</h3></li>
        <li><h3>Oil for deep frying</h3></li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
        <li><h3>In a mixing bowl, combine the gram flour, red chili powder, turmeric powder, cumin seeds, and salt.</h3></li>
        <li><h3>Gradually add water and whisk until you have a thick batter.</h3></li>
        <li><h3>Add the thinly sliced onions to the batter and mix well until the onions are coated evenly.</h3></li>
        <li><h3>Heat oil in a deep frying pan over medium-high heat.</h3></li>
        <li><h3>Drop spoonfuls of the onion batter into the hot oil and fry until they turn golden brown and crispy.</h3></li>
        <li><h3>Drain the bhajis on paper towels to remove excess oil.</h3></li>
        <li><h3>Serve hot with mint chutney or tamarind chutney.</h3></li>
      </ol> 
      
      <h1>Onion Rice (Pyaz Pulao)</h1>
      <h2>Ingredients:</h2>
      <ul>
        <li><h3>1 cup basmati rice</h3></li>
        <li><h3>2 onions, thinly sliced</h3></li>
        <li><h3>1 tomato, chopped</h3></li>
        <li><h3>1/2 teaspoon cumin seeds</h3></li>
        <li><h3>1/2 teaspoon garam masala</h3></li>
        <li><h3>1/2 teaspoon turmeric powder</h3></li>
        <li><h3>Salt to taste</h3></li>
        <li><h3>Oil or ghee for cooking</h3></li>
      </ul>
      
      <h2>Instructions:</h2>
      <ol>
        <li><h3>Wash and soak the rice for 30 minutes. Drain and set aside.</h3></li>
        <li><h3>Heat oil or ghee in a pan. Add cumin seeds and let them splutter.</h3></li>
        <li><h3>Add the thinly sliced onions and sauté until they turn golden brown.</h3></li>
        <li><h3>Add the chopped tomato and cook until it becomes soft and pulpy.</h3></li>
        <li><h3>Stir in the turmeric powder, garam masala, and salt. Cook for a couple of minutes.</h3></li>
        <li><h3>Add the drained rice and sauté for a few minutes until the rice is well-coated with the onion-tomato mixture.</h3></li>
        <li><h3>Add 2 cups of water, cover, and cook on low heat until the rice is cooked and the water is absorbed.</h3></li>
        <li><h3>Fluff the rice with a fork and serve hot.</h3></li>
      </ol>
      
      <h1>Onion Raita</h1>
      <h2>Ingredients:</h2>
      <ul>
        <li><h3>1 cup yogurt</h3></li>
        <li><h3>1 onion, finely chopped</h3></li>
        <li><h3>1/2 teaspoon cumin powder</h3></li>
        <li><h3>1/2 teaspoon red chili powder</h3></li>
        <li><h3>Salt to taste</h3></li>
        <li><h3>Fresh coriander leaves for garnish</h3></li>
      </ul>
      
      <h2>Instructions:</h2>
      <ol>
        <li><h3>Whisk the yogurt until smooth.</h3></li>
        <li><h3>Add the finely chopped onions, cumin powder, red chili powder, and salt. Mix well.</h3></li>
        <li><h3>Garnish with fresh coriander leaves.</h3></li>
        <li><h3>Chill in the refrigerator for a while before serving. It pairs well with biryani, pulao, or any Indian meal.</h3></li>
      </ol>
      
      `
   ;
  }
  if (valu == "tomatoes") {
    const recipi = document.getElementById('recipi');
    recipi.innerHTML = `
        <h1>Tomato Soup</h1>
        <h2>Instructions:</h2>
        <ol>
            <li>Heat olive oil in a pot.</li>
            <li>Add chopped onions and sauté until translucent.</li>
            <li>Add diced tomatoes, vegetable broth, and season with salt and pepper.</li>
            <li>Simmer for 20 minutes, then blend until smooth.</li>
            <li>Serve hot with a garnish of fresh basil.</li>
        </ol>

        <h1>Tomato Curry</h1>
        <h2>Ingredients:</h2>
        <ul>
            <li>4 ripe tomatoes, chopped</li>
            <li>1 onion, finely chopped</li>
            <li>2 cloves garlic, minced</li>
            <li>1-inch piece of ginger, grated</li>
            <li>1 teaspoon cumin seeds</li>
            <li>1/2 teaspoon turmeric powder</li>
            <li>1 teaspoon chili powder</li>
            <li>1/2 teaspoon garam masala</li>
            <li>Salt to taste</li>
            <li>2 tablespoons cooking oil</li>
        </ul>

        <h2>Instructions:</h2>
        <ol>
            <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
            <li>Add onions, garlic, and ginger. Sauté until onions turn golden brown.</li>
            <li>Add turmeric, chili powder, and chopped tomatoes. Cook until tomatoes are soft.</li>
            <li>Add garam masala and salt. Cook for a few more minutes.</li>
            <li>Serve with rice or roti.</li>
        </ol>

        <h1>Tomato Rice (Tomato Pulao)</h1>
        <h2>Ingredients:</h2>
        <ul>
            <li>1 cup basmati rice</li>
            <li>3 ripe tomatoes, pureed</li>
            <li>1 onion, thinly sliced</li>
            <li>2 cloves garlic, minced</li>
            <li>1-inch piece of ginger, grated</li>
            <li>1 teaspoon cumin seeds</li>
            <li>1/2 teaspoon turmeric powder</li>
            <li>1 teaspoon chili powder</li>
            <li>Salt to taste</li>
            <li>2 tablespoons cooking oil</li>
        </ul>

        <h2>Instructions:</h2>
        <ol>
            <li>Wash and soak rice for 30 minutes. Drain and set aside.</li>
            <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
            <li>Add sliced onions, garlic, and ginger. Sauté until onions are translucent.</li>
            <li>Add tomato puree, turmeric, chili powder, and salt. Cook until the oil separates.</li>
            <li>Add rice and sauté for a few minutes. Add 2 cups of water and cook until rice is done.</li>
            <li>Serve hot.</li>
        </ol>

        <h1>Tomato Chutney</h1>
        <h2>Ingredients:</h2>
        <ul>
            <li>4 ripe tomatoes, chopped</li>
            <li>1 onion, chopped</li>
            <li>2-3 green chilies, chopped</li>
            <li>1/2 teaspoon mustard seeds</li>
            <li>1/2 teaspoon urad dal (black gram)</li>
            <li>1/2 teaspoon chana dal (split chickpeas)</li>
            <li>A pinch of asafoetida (hing)</li>
            <li>1 sprig curry leaves</li>
            <li>1/2 teaspoon turmeric powder</li>
            <li>Salt to taste</li>
            <li>2 tablespoons cooking oil</li>
        </ul>

        <h2>Instructions:</h2>
        <ol>
            <li>Heat oil in a pan, add mustard seeds, urad dal, chana dal, asafoetida, and curry leaves.</li>
            <li>Add chopped onions and green chilies. Sauté until onions turn golden brown.</li>
            <li>Add chopped tomatoes, turmeric powder, and salt. Cook until tomatoes are soft and the chutney thickens.</li>
            <li>Serve with dosa or idli.</li>
        </ol>
        
        <h1>Tomato and Onion Paratha</h1>
        <h2>Ingredients:</h2>
        <ul>
            <li>2 cups whole wheat flour</li>
            <li>2 ripe tomatoes, finely chopped</li>
            <li>1 onion, finely chopped</li>
            <li>1/2 teaspoon cumin seeds</li>
            <li>1/2 teaspoon red chili powder</li>
            <li>1/2 teaspoon garam masala</li>
            <li>Salt to taste</li>
            <li>Ghee or oil for cooking</li>
        </ul>

        <h2>Instructions:</h2>
        <ol>
            <li>In a mixing bowl, combine whole wheat flour, chopped tomatoes, chopped onion, cumin seeds, red chili powder, garam masala, and salt.</li>
            <li>Gradually add water and knead into a smooth dough.</li>
            <li>Divide the dough into small portions and roll them into thin circles (parathas).</li>
            <li>Heat a griddle or tava, cook the parathas until they are golden brown, applying ghee or oil as needed.</li>
            <li>Serve hot with yogurt or pickle.</li>
        </ol>
    `;
}
if (valu == "potatoes") {
  const recipi = document.getElementById('recipi');
  recipi.innerHTML = `
      <h1>Classic Mashed Potatoes</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>4 large potatoes, peeled and cubed</li>
          <li>1/2 cup milk</li>
          <li>4 tablespoons butter</li>
          <li>Salt and pepper to taste</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Boil the potatoes until they are tender.</li>
          <li>Drain and mash the potatoes.</li>
          <li>Heat the milk and butter together until the butter melts.</li>
          <li>Add the milk mixture to the mashed potatoes and mix well.</li>
          <li>Season with salt and pepper.</li>
          <li>Serve hot.</li>
      </ol>

      <h1>Aloo Gobi (Potato and Cauliflower Curry)</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>2 potatoes, peeled and cubed</li>
          <li>1 cauliflower, cut into florets</li>
          <li>1 onion, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1 teaspoon turmeric powder</li>
          <li>1 teaspoon chili powder</li>
          <li>Salt to taste</li>
          <li>2 tablespoons cooking oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
          <li>Add chopped onions, garlic, and ginger. Sauté until onions are translucent.</li>
          <li>Add turmeric, chili powder, and chopped tomatoes. Cook until tomatoes are soft.</li>
          <li>Add potato cubes and cauliflower florets. Cook until they are tender.</li>
          <li>Season with salt and serve with rice or roti.</li>
      </ol>

      <h1>Potato Salad</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>4 potatoes, boiled and diced</li>
          <li>1/2 cup mayonnaise</li>
          <li>2 tablespoons mustard</li>
          <li>1/2 cup chopped celery</li>
          <li>1/2 cup chopped onion</li>
          <li>Salt and pepper to taste</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>In a large bowl, mix mayonnaise and mustard.</li>
          <li>Add diced potatoes, celery, and onion. Mix well.</li>
          <li>Season with salt and pepper.</li>
          <li>Refrigerate before serving.</li>
      </ol>

      <h1>Spicy Potato Wedges</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>4 potatoes, cut into wedges</li>
          <li>2 tablespoons olive oil</li>
          <li>1 teaspoon paprika</li>
          <li>1/2 teaspoon garlic powder</li>
          <li>1/2 teaspoon onion powder</li>
          <li>1/2 teaspoon chili powder</li>
          <li>Salt and pepper to taste</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Preheat oven to 425°F (220°C).</li>
          <li>In a large bowl, toss potato wedges with olive oil and spices.</li>
          <li>Spread them on a baking sheet and bake for 25-30 minutes, or until crispy.</li>
          <li>Serve hot with ketchup or your favorite dipping sauce.</li>
      </ol>

      <h1>Potato Leek Soup</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>4 potatoes, peeled and diced</li>
          <li>2 leeks, sliced</li>
          <li>4 cups vegetable broth</li>
          <li>1 cup heavy cream</li>
          <li>2 tablespoons butter</li>
          <li>Salt and pepper to taste</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>In a large pot, melt butter and sauté leeks until soft.</li>
          <li>Add diced potatoes and vegetable broth. Simmer until potatoes are tender.</li>
          <li>Blend the soup until smooth.</li>
          <li>Return to the pot, add heavy cream, and heat through.</li>
          <li>Season with salt and pepper.</li>
          <li>Serve hot.</li>
      </ol>
  `;
}
if (valu == "brinjal") {
  const recipi = document.getElementById('recipi');
  recipi.innerHTML = `
      <h1>Stuffed Brinjal (Bharwa Baingan)</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>6 small brinjals (eggplants)</li>
          <li>2 tablespoons ground peanut powder</li>
          <li>2 tablespoons desiccated coconut</li>
          <li>1 tablespoon sesame seeds</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon red chili powder</li>
          <li>1 teaspoon garam masala</li>
          <li>Salt to taste</li>
          <li>2 tablespoons oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Wash and slit the brinjals vertically without separating them into two parts.</li>
          <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
          <li>Add ground peanut powder, desiccated coconut, sesame seeds, turmeric powder, red chili powder, garam masala, and salt. Cook for a few minutes.</li>
          <li>Stuff this mixture into the slit brinjals.</li>
          <li>Heat oil in a pan, add stuffed brinjals, and cook until they are tender and cooked through.</li>
          <li>Serve hot with roti or rice.</li>
      </ol>

      <h1>Baingan Bharta (Roasted Eggplant Curry)</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>2 large brinjals (eggplants)</li>
          <li>1 onion, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon chili powder</li>
          <li>1 teaspoon garam masala</li>
          <li>Salt to taste</li>
          <li>2 tablespoons oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Roast the brinjals over an open flame until the skin is charred and the flesh is soft.</li>
          <li>Peel the skin and mash the roasted brinjals.</li>
          <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
          <li>Add chopped onions, garlic, ginger, and sauté until onions are translucent.</li>
          <li>Add turmeric, chili powder, and chopped tomatoes. Cook until tomatoes are soft.</li>
          <li>Add mashed brinjals, garam masala, and salt. Cook for a few more minutes.</li>
          <li>Serve hot with roti or naan.</li>
      </ol>

      <h1>Brinjal Curry (Kathirikai Kuzhambu)</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>8 small brinjals (eggplants)</li>
          <li>1 onion, finely chopped</li>
          <li>1 tomato, chopped</li>
          <li>1/2 cup tamarind extract</li>
          <li>2 tablespoons sambar powder</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>Salt to taste</li>
          <li>2 tablespoons oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat oil in a pan, add chopped onions, and sauté until they turn golden brown.</li>
          <li>Add chopped tomatoes, sambar powder, turmeric powder, and cook until tomatoes are soft.</li>
          <li>Add tamarind extract, salt, and brinjals. Cook until brinjals are tender.</li>
          <li>Serve hot with steamed rice.</li>
      </ol>

      <h1>Eggplant Parmesan</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>2 large brinjals (eggplants)</li>
          <li>1 cup breadcrumbs</li>
          <li>1/2 cup grated Parmesan cheese</li>
          <li>2 cups marinara sauce</li>
          <li>2 cups shredded mozzarella cheese</li>
          <li>2 eggs, beaten</li>
          <li>2 tablespoons olive oil</li>
          <li>Fresh basil leaves for garnish</li>
          <li>Salt and pepper to taste</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Preheat oven to 375°F (190°C).</li>
          <li>Cut the brinjals into slices, dip in beaten eggs, and coat with breadcrumbs.</li>
          <li>Heat olive oil in a pan and fry the eggplant slices until golden brown.</li>
          <li>In a baking dish, layer marinara sauce, fried eggplant slices, Parmesan cheese, and mozzarella cheese. Repeat the layers.</li>
          <li>Bake for 25-30 minutes until the cheese is bubbly and golden.</li>
          <li>Garnish with fresh basil leaves before serving.</li>
      </ol>

      <h1>Baingan Bhurta (Smoked Eggplant Mash)</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>2 large brinjals (eggplants)</li>
          <li>1 onion, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon chili powder</li>
          <li>1 teaspoon garam masala</li>
          <li>Salt to taste</li>
          <li>2 tablespoons oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Roast the brinjals over an open flame until the skin is charred and the flesh is soft.</li>
          <li>Peel the skin and mash the roasted brinjals.</li>
          <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
          <li>Add chopped onions, garlic, ginger, and sauté until onions are translucent.</li>
          <li>Add turmeric, chili powder, and chopped tomatoes. Cook until tomatoes are soft.</li>
          <li>Add mashed brinjals, garam masala, and salt. Cook for a few more minutes.</li>
          <li>Serve hot with roti or naan.</li>
      </ol>
  `;
}
if (valu == "drumstick") {
  const recipi = document.getElementById('recipi');
  recipi.innerHTML = `
      <h1>Drumstick Curry</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>10 drumsticks, cut into pieces</li>
          <li>1 onion, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon chili powder</li>
          <li>1 teaspoon coriander powder</li>
          <li>1/2 teaspoon garam masala</li>
          <li>Salt to taste</li>
          <li>2 tablespoons cooking oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
          <li>Add chopped onions, garlic, ginger, and sauté until onions are translucent.</li>
          <li>Add turmeric, chili powder, coriander powder, and chopped tomatoes. Cook until tomatoes are soft.</li>
          <li>Add drumstick pieces and garam masala. Cook until drumsticks are tender.</li>
          <li>Season with salt and serve with rice or roti.</li>
      </ol>

      <h1>Drumstick Sambar</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>10 drumsticks, cut into pieces</li>
          <li>1/2 cup toor dal (split pigeon peas)</li>
          <li>1 onion, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>2 tablespoons sambar powder</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>Tamarind pulp extracted from a small lemon-sized tamarind</li>
          <li>Salt to taste</li>
          <li>2 tablespoons cooking oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Cook toor dal until soft and set aside.</li>
          <li>Heat oil in a pan, add chopped onions, and sauté until they turn golden brown.</li>
          <li>Add chopped tomatoes, sambar powder, and turmeric powder. Cook until tomatoes are soft.</li>
          <li>Add drumstick pieces, tamarind pulp, and cooked toor dal. Cook until drumsticks are tender.</li>
          <li>Season with salt and serve with rice and idli or dosa.</li>
      </ol>

      <h1>Drumstick Curry with Coconut</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>10 drumsticks, cut into pieces</li>
          <li>1/2 cup grated coconut</li>
          <li>1 onion, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon chili powder</li>
          <li>1/2 teaspoon garam masala</li>
          <li>Salt to taste</li>
          <li>2 tablespoons cooking oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
          <li>Add chopped onions, garlic, ginger, and sauté until onions are translucent.</li>
          <li>Add turmeric, chili powder, and chopped tomatoes. Cook until tomatoes are soft.</li>
          <li>Add drumstick pieces, grated coconut, and garam masala. Cook until drumsticks are tender.</li>
          <li>Season with salt and serve with rice or roti.</li>
      </ol>

      <h1>Drumstick Soup</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>5 drumsticks, cut into pieces</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>1/2 cup toor dal (split pigeon peas)</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>Salt to taste</li>
          <li>1 tablespoon cooking oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Cook toor dal until soft and set aside.</li>
          <li>Heat oil in a pan, add chopped onions, garlic, ginger, and sauté until onions are translucent.</li>
          <li>Add drumstick pieces, turmeric powder, and salt. Cook for a few minutes.</li>
          <li>Add cooked toor dal and enough water to make a soup. Simmer until drumsticks are tender.</li>
          <li>Serve hot as a nutritious soup.</li>
      </ol>

      <h1>Drumstick Pickle</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>15 drumsticks, cut into small pieces</li>
          <li>1/2 cup mustard seeds</li>
          <li>1/4 cup fenugreek seeds</li>
          <li>1/4 cup red chili powder</li>
          <li>1/2 teaspoon asafoetida (hing)</li>
          <li>Salt to taste</li>
          <li>2 tablespoons sesame oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Steam drumstick pieces until they are tender and set aside to cool.</li>
          <li>Grind mustard seeds and fenugreek seeds to a fine powder.</li>
          <li>Mix the mustard-fenugreek powder with red chili powder, asafoetida, and salt.</li>
          <li>Heat sesame oil in a pan, add drumstick pieces, and sauté for a few minutes.</li>
          <li>Add the spice mixture and mix well. Cook for a few more minutes.</li>
          <li>Allow it to cool and store in an airtight container.</li>
          <li>Enjoy this spicy drumstick pickle with rice or roti.</li>
      </ol>
  `;
}
if (valu == "bittergourd") {
  const recipi = document.getElementById('recipi');
  recipi.innerHTML = `
      <h1>Stuffed Bitter Gourd (Bharwan Karela)</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>4 bitter gourds</li>
          <li>1 cup gram flour (besan)</li>
          <li>2 tablespoons coriander powder</li>
          <li>1 tablespoon cumin powder</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1/2 teaspoon red chili powder</li>
          <li>1/2 teaspoon garam masala</li>
          <li>1/2 teaspoon amchur (dried mango powder)</li>
          <li>Salt to taste</li>
          <li>2 tablespoons oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Scrape the outer skin of the bitter gourds and slit them vertically without separating them into two parts.</li>
          <li>Remove the seeds and stuff them with a mixture of gram flour, coriander powder, cumin powder, turmeric powder, red chili powder, garam masala, amchur, salt, and a little oil.</li>
          <li>Heat oil in a pan, add stuffed bitter gourds, and cook until they are tender and golden brown.</li>
          <li>Serve hot with roti or rice.</li>
      </ol>

      <h1>Bitter Gourd Stir-Fry (Karela Sabzi)</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>4 bitter gourds, thinly sliced</li>
          <li>1 onion, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon chili powder</li>
          <li>1 teaspoon coriander powder</li>
          <li>Salt to taste</li>
          <li>2 tablespoons oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
          <li>Add chopped onions, garlic, ginger, and sauté until onions are translucent.</li>
          <li>Add turmeric, chili powder, coriander powder, and chopped tomatoes. Cook until tomatoes are soft.</li>
          <li>Add sliced bitter gourds and sauté until they are tender and cooked through.</li>
          <li>Season with salt and serve with rice or roti.</li>
      </ol>

      <h1>Bitter Gourd Chips</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>2 bitter gourds, thinly sliced</li>
          <li>1/2 cup rice flour</li>
          <li>1/4 cup gram flour (besan)</li>
          <li>1/2 teaspoon red chili powder</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1/2 teaspoon cumin powder</li>
          <li>Salt to taste</li>
          <li>Oil for deep frying</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>In a mixing bowl, combine rice flour, gram flour, red chili powder, turmeric powder, cumin powder, and salt.</li>
          <li>Add sliced bitter gourds and toss to coat them evenly with the flour mixture.</li>
          <li>Heat oil in a deep frying pan over medium-high heat.</li>
          <li>Deep fry the coated bitter gourd slices until they are crispy and golden brown.</li>
          <li>Drain on paper towels to remove excess oil.</li>
          <li>Serve as a crunchy snack.</li>
      </ol>

      <h1>Bitter Gourd Juice</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>2 bitter gourds, deseeded and chopped</li>
          <li>1 lemon</li>
          <li>1 teaspoon honey (optional)</li>
          <li>Water</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Blend the chopped bitter gourd with water until smooth.</li>
          <li>Squeeze the lemon juice into the mixture and add honey if desired.</li>
          <li>Stir well and serve as a healthy juice.</li>
      </ol>

      <h1>Bitter Gourd Salad</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>2 bitter gourds, thinly sliced</li>
          <li>1 cucumber, thinly sliced</li>
          <li>1 onion, thinly sliced</li>
          <li>1/2 cup yogurt</li>
          <li>1 teaspoon roasted cumin powder</li>
          <li>1/2 teaspoon black salt</li>
          <li>Chopped fresh cilantro for garnish</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>In a large bowl, combine sliced bitter gourd, cucumber, and onion.</li>
          <li>In a separate bowl, mix yogurt, roasted cumin powder, and black salt.</li>
          <li>Pour the yogurt mixture over the vegetables and toss well to coat.</li>
          <li>Garnish with chopped cilantro and serve as a refreshing salad.</li>
      </ol>
  `;
}
if (valu == "carrot") {
  const recipi = document.getElementById('recipi');
  recipi.innerHTML = `
      <h1>Carrot Cake</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>2 cups grated carrots</li>
          <li>1 1/2 cups all-purpose flour</li>
          <li>1 1/2 cups granulated sugar</li>
          <li>1/2 cup vegetable oil</li>
          <li>3 large eggs</li>
          <li>1 teaspoon baking powder</li>
          <li>1/2 teaspoon baking soda</li>
          <li>1/2 teaspoon ground cinnamon</li>
          <li>1/4 teaspoon ground nutmeg</li>
          <li>1/4 teaspoon salt</li>
          <li>1/2 cup chopped nuts (optional)</li>
          <li>1/2 cup raisins (optional)</li>
          <li>Cream cheese frosting (store-bought or homemade)</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Preheat oven to 350°F (175°C). Grease and flour a cake pan.</li>
          <li>In a mixing bowl, whisk together flour, sugar, baking powder, baking soda, cinnamon, nutmeg, and salt.</li>
          <li>In a separate bowl, beat together oil, eggs, and grated carrots.</li>
          <li>Add the wet ingredients to the dry ingredients and mix until well combined.</li>
          <li>Stir in nuts and raisins if using.</li>
          <li>Pour the batter into the prepared cake pan and bake for 30-40 minutes or until a toothpick comes out clean.</li>
          <li>Allow the cake to cool completely, then frost with cream cheese frosting.</li>
          <li>Slice and serve.</li>
      </ol>

      <h1>Carrot Soup</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>4 cups peeled and chopped carrots</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>4 cups vegetable broth</li>
          <li>1/2 teaspoon ground cumin</li>
          <li>1/2 teaspoon ground coriander</li>
          <li>Salt and pepper to taste</li>
          <li>2 tablespoons olive oil</li>
          <li>Fresh parsley for garnish</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat olive oil in a large pot over medium heat. Add onions and garlic and sauté until onions are translucent.</li>
          <li>Add chopped carrots and sauté for a few more minutes.</li>
          <li>Stir in ground cumin and coriander.</li>
          <li>Pour in vegetable broth and bring to a boil. Reduce heat, cover, and simmer until carrots are tender.</li>
          <li>Use an immersion blender to puree the soup until smooth. Alternatively, transfer to a blender and blend in batches.</li>
          <li>Season with salt and pepper to taste.</li>
          <li>Serve hot, garnished with fresh parsley.</li>
      </ol>

      <h1>Carrot and Raisin Salad</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>3 cups grated carrots</li>
          <li>1/2 cup raisins</li>
          <li>1/4 cup mayonnaise</li>
          <li>1 tablespoon honey</li>
          <li>1 tablespoon lemon juice</li>
          <li>1/4 teaspoon ground cinnamon</li>
          <li>Salt and pepper to taste</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>In a bowl, combine grated carrots and raisins.</li>
          <li>In a separate bowl, whisk together mayonnaise, honey, lemon juice, cinnamon, salt, and pepper.</li>
          <li>Pour the dressing over the carrot mixture and toss until well coated.</li>
          <li>Chill in the refrigerator for at least 30 minutes before serving.</li>
          <li>Stir and serve as a refreshing salad.</li>
      </ol>

      <h1>Carrot and Ginger Soup</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>4 cups peeled and chopped carrots</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>4 cups vegetable broth</li>
          <li>1/2 cup coconut milk</li>
          <li>2 tablespoons olive oil</li>
          <li>Salt and pepper to taste</li>
          <li>Fresh cilantro for garnish</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat olive oil in a large pot over medium heat. Add onions and garlic and sauté until onions are translucent.</li>
          <li>Add chopped carrots and grated ginger and sauté for a few more minutes.</li>
          <li>Pour in vegetable broth and bring to a boil. Reduce heat, cover, and simmer until carrots are tender.</li>
          <li>Use an immersion blender to puree the soup until smooth. Alternatively, transfer to a blender and blend in batches.</li>
          <li>Stir in coconut milk and season with salt and pepper.</li>
          <li>Serve hot, garnished with fresh cilantro.</li>
      </ol>

      <h1>Honey Glazed Carrots</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>4 cups sliced carrots</li>
          <li>2 tablespoons butter</li>
          <li>2 tablespoons honey</li>
          <li>1/2 teaspoon ground cinnamon</li>
          <li>Salt and pepper to taste</li>
          <li>Fresh parsley for garnish</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Steam or boil sliced carrots until tender, then drain.</li>
          <li>In a skillet, melt butter over medium heat. Stir in honey, ground cinnamon, salt, and pepper.</li>
          <li>Add the cooked carrots and cook, stirring occasionally, until they are glazed and heated through.</li>
          <li>Garnish with fresh parsley and serve as a sweet and savory side dish.</li>
      </ol>
  `;
}
if (valu == "cauliflower") {
  const recipi = document.getElementById('recipi');
  recipi.innerHTML = `
      <h1>Cauliflower Curry</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>1 medium cauliflower, cut into florets</li>
          <li>1 onion, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon chili powder</li>
          <li>1 teaspoon coriander powder</li>
          <li>1/2 teaspoon garam masala</li>
          <li>Salt to taste</li>
          <li>2 tablespoons cooking oil</li>
          <li>Fresh cilantro for garnish</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
          <li>Add chopped onions, garlic, ginger, and sauté until onions are translucent.</li>
          <li>Add turmeric, chili powder, coriander powder, and chopped tomatoes. Cook until tomatoes are soft.</li>
          <li>Add cauliflower florets and sauté for a few minutes.</li>
          <li>Season with salt, cover, and simmer until cauliflower is tender.</li>
          <li>Stir in garam masala and garnish with fresh cilantro.</li>
          <li>Serve hot with rice or roti.</li>
      </ol>

      <h1>Cauliflower Rice</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>1 medium cauliflower, grated into rice-sized pieces</li>
          <li>1 tablespoon olive oil</li>
          <li>1/2 onion, finely chopped</li>
          <li>1/2 bell pepper, finely chopped</li>
          <li>1/2 cup frozen peas</li>
          <li>1/2 teaspoon garlic powder</li>
          <li>1/2 teaspoon onion powder</li>
          <li>Salt and pepper to taste</li>
          <li>Fresh parsley for garnish</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat olive oil in a skillet over medium heat. Add chopped onions and bell peppers and sauté until they are soft.</li>
          <li>Add frozen peas and sauté for a few more minutes.</li>
          <li>Add grated cauliflower, garlic powder, onion powder, salt, and pepper. Stir-fry until the cauliflower is cooked and resembles rice.</li>
          <li>Garnish with fresh parsley and serve as a low-carb alternative to rice.</li>
      </ol>

      <h1>Cauliflower Pizza Crust</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>1 medium cauliflower, grated</li>
          <li>1 egg</li>
          <li>1 cup shredded mozzarella cheese</li>
          <li>1/2 teaspoon dried oregano</li>
          <li>1/2 teaspoon garlic powder</li>
          <li>Salt and pepper to taste</li>
          <li>Pizza toppings of your choice</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Preheat your oven to 450°F (230°C).</li>
          <li>Place the grated cauliflower in a microwave-safe bowl and microwave for 4-5 minutes until it's soft.</li>
          <li>Let the cauliflower cool, then squeeze out as much moisture as possible using a clean kitchen towel.</li>
          <li>In a bowl, combine the cauliflower, egg, mozzarella cheese, oregano, garlic powder, salt, and pepper.</li>
          <li>Spread the mixture onto a baking sheet lined with parchment paper, forming a pizza crust shape.</li>
          <li>Bake the crust for 15-20 minutes or until it's golden brown.</li>
          <li>Add your favorite pizza toppings and bake for an additional 10-15 minutes until the cheese is melted and bubbly.</li>
          <li>Slice and enjoy your cauliflower pizza!</li>
      </ol>

      <h1>Cauliflower Soup</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>1 medium cauliflower, cut into florets</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>4 cups vegetable broth</li>
          <li>1/2 cup heavy cream</li>
          <li>2 tablespoons butter</li>
          <li>1/2 teaspoon dried thyme</li>
          <li>Salt and pepper to taste</li>
          <li>Fresh chives for garnish</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Melt butter in a large pot over medium heat. Add chopped onions and garlic and sauté until onions are translucent.</li>
          <li>Add cauliflower florets, dried thyme, salt, and pepper. Cook for a few minutes.</li>
          <li>Pour in vegetable broth and bring to a boil. Reduce heat, cover, and simmer until cauliflower is tender.</li>
          <li>Use an immersion blender to puree the soup until smooth. Alternatively, transfer to a blender and blend in batches.</li>
          <li>Stir in heavy cream and heat through.</li>
          <li>Garnish with fresh chives and serve hot.</li>
      </ol>

      <h1>Roasted Cauliflower</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>1 medium cauliflower, cut into florets</li>
          <li>2 tablespoons olive oil</li>
          <li>1 teaspoon paprika</li>
          <li>1/2 teaspoon garlic powder</li>
          <li>1/2 teaspoon onion powder</li>
          <li>1/2 teaspoon cumin</li>
          <li>Salt and pepper to taste</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Preheat your oven to 425°F (220°C).</li>
          <li>In a bowl, combine cauliflower florets, olive oil, paprika, garlic powder, onion powder, cumin, salt, and pepper. Toss until cauliflower is evenly coated.</li>
          <li>Spread the cauliflower on a baking sheet in a single layer.</li>
          <li>Roast in the preheated oven for 25-30 minutes or until the cauliflower is tender and slightly browned.</li>
          <li>Remove from the oven and serve as a delicious and healthy side dish.</li>
      </ol>
  `;
}
if (valu == "ladyfingers") {
  const recipi = document.getElementById('recipi');
  recipi.innerHTML = `
      <h1>Stuffed Ladyfingers (Bharwan Bhindi)</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>250 grams ladyfingers (okra)</li>
          <li>2 tablespoons gram flour (besan)</li>
          <li>1 tablespoon coriander powder</li>
          <li>1/2 tablespoon cumin powder</li>
          <li>1/2 tablespoon red chili powder</li>
          <li>1/2 tablespoon turmeric powder</li>
          <li>1/2 tablespoon amchur (dried mango powder)</li>
          <li>Salt to taste</li>
          <li>2 tablespoons oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Wash and dry ladyfingers. Trim the ends and slit them vertically without separating them into two parts.</li>
          <li>Mix gram flour, coriander powder, cumin powder, red chili powder, turmeric powder, amchur, salt, and a little oil.</li>
          <li>Stuff the ladyfingers with the spice mixture.</li>
          <li>Heat oil in a pan, add stuffed ladyfingers, and cook until they are tender and crispy.</li>
          <li>Serve hot with roti or rice.</li>
      </ol>

      <h1>Ladyfinger Curry</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>250 grams ladyfingers (okra), chopped</li>
          <li>1 onion, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon chili powder</li>
          <li>1 teaspoon coriander powder</li>
          <li>Salt to taste</li>
          <li>2 tablespoons oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
          <li>Add chopped onions, garlic, ginger, and sauté until onions are translucent.</li>
          <li>Add turmeric, chili powder, coriander powder, and chopped tomatoes. Cook until tomatoes are soft.</li>
          <li>Add chopped ladyfingers and sauté for a few minutes.</li>
          <li>Season with salt, cover, and simmer until ladyfingers are tender.</li>
          <li>Serve hot with rice or roti.</li>
      </ol>

      <h1>Crispy Ladyfinger Fries</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>250 grams ladyfingers (okra), thinly sliced</li>
          <li>1/2 cup chickpea flour (besan)</li>
          <li>1/2 teaspoon red chili powder</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1/2 teaspoon cumin powder</li>
          <li>Salt to taste</li>
          <li>Oil for deep frying</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>In a mixing bowl, combine chickpea flour, red chili powder, turmeric powder, cumin powder, and salt.</li>
          <li>Add thinly sliced ladyfingers to the flour mixture and toss to coat them evenly.</li>
          <li>Heat oil in a deep frying pan over medium-high heat.</li>
          <li>Deep fry the coated ladyfinger slices until they are crispy and golden brown.</li>
          <li>Drain on paper towels to remove excess oil.</li>
          <li>Serve as a crunchy snack.</li>
      </ol>

      <h1>Ladyfinger and Potato Curry</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>250 grams ladyfingers (okra), chopped</li>
          <li>2 potatoes, peeled and diced</li>
          <li>1 onion, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1-inch piece of ginger, grated</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon chili powder</li>
          <li>1 teaspoon coriander powder</li>
          <li>Salt to taste</li>
          <li>2 tablespoons oil</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat oil in a pan, add cumin seeds, and let them splutter.</li>
          <li>Add chopped onions, garlic, ginger, and sauté until onions are translucent.</li>
          <li>Add turmeric, chili powder, coriander powder, and chopped tomatoes. Cook until tomatoes are soft.</li>
          <li>Add diced potatoes and chopped ladyfingers. Sauté for a few minutes.</li>
          <li>Season with salt, cover, and simmer until vegetables are tender.</li>
          <li>Serve hot with rice or roti.</li>
      </ol>

      <h1>Ladyfinger and Tomato Salad</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>250 grams ladyfingers (okra), thinly sliced</li>
          <li>2 tomatoes, chopped</li>
          <li>1 onion, finely chopped</li>
          <li>1/2 teaspoon chaat masala</li>
          <li>1/2 teaspoon roasted cumin powder</li>
          <li>1/2 teaspoon red chili powder</li>
          <li>1/2 teaspoon lemon juice</li>
          <li>Salt to taste</li>
          <li>Fresh cilantro for garnish</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>In a bowl, combine sliced ladyfingers, chopped tomatoes, and finely chopped onions.</li>
          <li>Add chaat masala, roasted cumin powder, red chili powder, lemon juice, and salt. Toss to combine.</li>
          <li>Garnish with fresh cilantro and serve as a refreshing salad.</li>
      </ol>
  `;
}
if (valu == "pumpkin") {
  const recipi = document.getElementById('recipi');
  recipi.innerHTML = `
      <h1>Pumpkin Soup</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>2 cups pumpkin puree</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>4 cups vegetable broth</li>
          <li>1/2 teaspoon ground nutmeg</li>
          <li>1/2 teaspoon ground cinnamon</li>
          <li>Salt and pepper to taste</li>
          <li>2 tablespoons olive oil</li>
          <li>2 tablespoons heavy cream (optional)</li>
          <li>Fresh parsley for garnish</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat olive oil in a pot over medium heat. Add chopped onions and garlic and sauté until they are soft.</li>
          <li>Add pumpkin puree, vegetable broth, nutmeg, cinnamon, salt, and pepper. Stir well.</li>
          <li>Simmer for about 15-20 minutes, stirring occasionally.</li>
          <li>If desired, add heavy cream for extra creaminess and stir.</li>
          <li>Use an immersion blender to puree the soup until smooth. Alternatively, transfer to a blender and blend in batches.</li>
          <li>Reheat if necessary, garnish with fresh parsley, and serve hot.</li>
      </ol>

      <h1>Pumpkin Pie</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>1 1/2 cups pumpkin puree</li>
          <li>1 can (14 ounces) sweetened condensed milk</li>
          <li>2 large eggs</li>
          <li>1 teaspoon ground cinnamon</li>
          <li>1/2 teaspoon ground nutmeg</li>
          <li>1/2 teaspoon ground ginger</li>
          <li>1/2 teaspoon salt</li>
          <li>1 unbaked pie crust</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Preheat your oven to 425°F (220°C).</li>
          <li>In a bowl, whisk together pumpkin puree, sweetened condensed milk, eggs, cinnamon, nutmeg, ginger, and salt.</li>
          <li>Pour the mixture into the unbaked pie crust.</li>
          <li>Bake in the preheated oven for 15 minutes, then reduce the oven temperature to 350°F (175°C) and bake for an additional 40-50 minutes or until a toothpick inserted into the center comes out clean.</li>
          <li>Let the pie cool before serving. Refrigerate any leftovers.</li>
      </ol>

      <h1>Pumpkin Risotto</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>1 1/2 cups Arborio rice</li>
          <li>1 cup pumpkin puree</li>
          <li>4 cups vegetable broth</li>
          <li>1 onion, finely chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>1/2 cup dry white wine</li>
          <li>1/2 cup grated Parmesan cheese</li>
          <li>2 tablespoons butter</li>
          <li>2 tablespoons olive oil</li>
          <li>Salt and pepper to taste</li>
          <li>Fresh sage leaves for garnish</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Heat olive oil and butter in a large skillet over medium heat. Add chopped onions and garlic and sauté until they are soft.</li>
          <li>Add Arborio rice and cook for a few minutes until the rice is translucent.</li>
          <li>Stir in dry white wine and cook until it's mostly absorbed by the rice.</li>
          <li>Add pumpkin puree and a ladleful of vegetable broth. Stir continuously until the liquid is absorbed.</li>
          <li>Continue adding vegetable broth, one ladleful at a time, stirring constantly, until the rice is creamy and cooked al dente.</li>
          <li>Stir in grated Parmesan cheese, salt, and pepper.</li>
          <li>Garnish with fresh sage leaves and serve hot.</li>
      </ol>

      <h1>Roasted Pumpkin Seeds</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>Pumpkin seeds (seeds from the pumpkin)</li>
          <li>Olive oil</li>
          <li>Salt and seasoning of your choice (e.g., paprika, garlic powder, chili powder)</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>Preheat your oven to 300°F (150°C).</li>
          <li>Remove the pumpkin seeds from the pumpkin and rinse them thoroughly to remove any pumpkin flesh.</li>
          <li>Pat the seeds dry with a paper towel.</li>
          <li>In a bowl, toss the pumpkin seeds with a little olive oil, salt, and your choice of seasoning.</li>
          <li>Spread the seeds in a single layer on a baking sheet.</li>
          <li>Bake in the preheated oven for about 45 minutes or until the seeds are golden brown and crispy.</li>
          <li>Let them cool before enjoying as a crunchy snack.</li>
      </ol>

      <h1>Pumpkin Pancakes</h1>
      <h2>Ingredients:</h2>
      <ul>
          <li>1 cup pumpkin puree</li>
          <li>1 1/4 cups all-purpose flour</li>
          <li>2 tablespoons sugar</li>
          <li>1 1/2 teaspoons baking powder</li>
          <li>1/2 teaspoon baking soda</li>
          <li>1/2 teaspoon ground cinnamon</li>
          <li>1/4 teaspoon ground nutmeg</li>
          <li>1/4 teaspoon salt</li>
          <li>1 cup buttermilk</li>
          <li>1 egg</li>
          <li>2 tablespoons melted butter</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
          <li>In a bowl, whisk together flour, sugar, baking powder, baking soda, cinnamon, nutmeg, and salt.</li>
          <li>In another bowl, mix pumpkin puree, buttermilk, egg, and melted butter.</li>
          <li>Pour the wet ingredients into the dry ingredients and stir until just combined.</li>
          <li>Heat a griddle or skillet over medium-high heat and lightly grease it.</li>
          <li>Pour 1/4 cup portions of the batter onto the griddle and cook until bubbles form on the surface. Flip and cook until golden brown on both sides.</li>
          <li>Serve the pumpkin pancakes with your favorite toppings, such as maple syrup or whipped cream.</li>
      </ol>
  `;
}
if (valu == "sweetpotatoes") {
    const recipi = document.getElementById('recipi');
    recipi.innerHTML = `
        <h1>Sweet Potato Casserole</h1>
        <h2>Ingredients:</h2>
        <ul>
            <li>4 cups mashed sweet potatoes</li>
            <li>1 cup granulated sugar</li>
            <li>2 eggs, beaten</li>
            <li>1/2 cup milk</li>
            <li>1/2 cup unsalted butter, melted</li>
            <li>1 teaspoon vanilla extract</li>
            <li>1/2 cup all-purpose flour</li>
            <li>1/2 cup brown sugar</li>
            <li>1/4 cup unsalted butter, softened</li>
            <li>1/2 cup chopped pecans</li>
        </ul>

        <h2>Instructions:</h2>
        <ol>
            <li>Preheat your oven to 350°F (175°C).</li>
            <li>In a mixing bowl, combine mashed sweet potatoes, granulated sugar, beaten eggs, milk, melted butter, and vanilla extract. Mix well and transfer to a baking dish.</li>
            <li>In a separate bowl, combine flour, brown sugar, softened butter, and chopped pecans. Sprinkle this mixture evenly over the sweet potato mixture.</li>
            <li>Bake in the preheated oven for 30-40 minutes or until the topping is golden brown.</li>
            <li>Serve as a delicious side dish for holidays or special occasions.</li>
        </ol>

        <h1>Sweet Potato Fries</h1>
        <h2>Ingredients:</h2>
        <ul>
            <li>2 large sweet potatoes, peeled and cut into fries</li>
            <li>2 tablespoons olive oil</li>
            <li>1/2 teaspoon paprika</li>
            <li>1/2 teaspoon garlic powder</li>
            <li>1/2 teaspoon onion powder</li>
            <li>Salt and pepper to taste</li>
        </ul>

        <h2>Instructions:</h2>
        <ol>
            <li>Preheat your oven to 425°F (220°C).</li>
            <li>In a bowl, toss sweet potato fries with olive oil, paprika, garlic powder, onion powder, salt, and pepper until they are evenly coated.</li>
            <li>Spread the fries in a single layer on a baking sheet.</li>
            <li>Bake in the preheated oven for about 20-25 minutes or until the fries are crispy and golden brown, turning them halfway through.</li>
            <li>Serve hot with your favorite dipping sauce.</li>
        </ol>

        <h1>Sweet Potato and Black Bean Burritos</h1>
        <h2>Ingredients:</h2>
        <ul>
            <li>2 large sweet potatoes, peeled and diced</li>
            <li>1 can (15 ounces) black beans, drained and rinsed</li>
            <li>1 red bell pepper, chopped</li>
            <li>1/2 red onion, finely chopped</li>
            <li>2 cloves garlic, minced</li>
            <li>1 teaspoon cumin</li>
            <li>1/2 teaspoon chili powder</li>
            <li>Salt and pepper to taste</li>
            <li>4 large flour tortillas</li>
            <li>1 cup shredded cheddar cheese</li>
        </ul>

        <h2>Instructions:</h2>
        <ol>
            <li>Preheat your oven to 400°F (200°C).</li>
            <li>Toss sweet potato dice with olive oil, cumin, chili powder, salt, and pepper. Roast in the oven for 20-25 minutes or until tender.</li>
            <li>In a pan, sauté red bell pepper, red onion, and garlic until softened.</li>
            <li>Add black beans and roasted sweet potatoes to the pan. Cook until everything is heated through.</li>
            <li>Warm the flour tortillas in the oven for a few minutes.</li>
            <li>Fill each tortilla with the sweet potato and black bean mixture, sprinkle with shredded cheddar cheese, and roll up into burritos.</li>
            <li>Serve hot with salsa and sour cream.</li>
        </ol>

        <h1>Sweet Potato and Kale Salad</h1>
        <h2>Ingredients:</h2>
        <ul>
            <li>2 large sweet potatoes, peeled and diced</li>
            <li>2 cups kale leaves, chopped</li>
            <li>1/4 cup dried cranberries</li>
            <li>1/4 cup feta cheese, crumbled</li>
            <li>1/4 cup chopped pecans</li>
            <li>2 tablespoons olive oil</li>
            <li>1 tablespoon balsamic vinegar</li>
            <li>Salt and pepper to taste</li>
        </ul>

        <h2>Instructions:</h2>
        <ol>
            <li>Preheat your oven to 425°F (220°C).</li>
            <li>Toss sweet potato dice with olive oil, salt, and pepper. Roast in the oven for 20-25 minutes or until tender and slightly crispy.</li>
            <li>In a large bowl, combine roasted sweet potatoes, chopped kale, dried cranberries, crumbled feta cheese, and chopped pecans.</li>
            <li>Drizzle with balsamic vinegar and toss to coat everything evenly.</li>
            <li>Serve as a nutritious and flavorful salad.</li>
        </ol>

        <h1>Sweet Potato and Chickpea Curry</h1>
        <h2>Ingredients:</h2>
        <ul>
            <li>2 large sweet potatoes, peeled and diced</li>
            <li>1 can (15 ounces) chickpeas, drained and rinsed</li>
            <li>1 onion, finely chopped</li>
            <li>2 cloves garlic, minced</li>
            <li>1-inch piece of ginger, grated</li>
            <li>1 can (15 ounces) diced tomatoes</li>
            <li>1 can (15 ounces) coconut milk</li>
            <li>2 tablespoons curry powder</li>
            <li>1 teaspoon ground cumin</li>
            <li>1 teaspoon ground coriander</li>
            <li>1/2 teaspoon turmeric</li>
            <li>Salt and pepper to taste</li>
            <li>2 tablespoons vegetable oil</li>
        </ul>

        <h2>Instructions:</h2>
        <ol>
            <li>Heat vegetable oil in a large pan over medium heat. Add chopped onions, garlic, and grated ginger. Sauté until onions are translucent.</li>
            <li>Add curry powder, ground cumin, ground coriander, turmeric, salt, and pepper. Cook for a couple of minutes until fragrant.</li>
            <li>Add diced sweet potatoes, chickpeas, diced tomatoes, and coconut milk. Stir well.</li>
            <li>Simmer for about 20-25 minutes or until sweet potatoes are tender.</li>
            <li>Serve hot with rice or naan bread.</li>
        </ol>
    `;
}





}


    // Get the current hour
    const currentHour = new Date().getHours();

    // Get the greeting based on the time
    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    // Display the greeting in the "greeting" div
    const greetingDiv = document.getElementById("greeting");
    greetingDiv.textContent = greeting;

