const axios = require('axios');

axios.get('http://localhost:3000/data').then(res => {
    let data = res.data;
    let num_words = 0;
    let num_mamani = 0;
    let num_items = data.length;
    for (item of data) {
        for (thing of item) {
            num_words++;
            if (thing.toLowerCase().includes('mamani')) {
                num_mamani++;
            }
        }
    }
    console.log(`Your data contains ${num_words} words and ${num_items} things.`);
    console.log(`Your data only includes ${num_mamani} instances of Mamani.`)
}).catch(err => {
    console.log("Could not find any mamani data!")
})