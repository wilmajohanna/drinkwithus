"use strict";

const DRINKS_DATA = [
    //BUBBLES
    {
        name: "Watermelon Sangria",
        id: "",
        image: "../images/watermelon_sangria.jpg",
        theme: "bubbles",
        alcohol: "liquor",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, eveniet possimus, molestiae sit obcaecati optio voluptas dolore fuga minima corporis numquam veniam harum velit excepturi aspernatur laudantium ullam quasi.  ",

        ingredients: {
            key1: "1 bottle Rosé",
            key2: "120 ml St. Germain (elderflower liquor)",
            key3: "240 ml fresh watermelon juice",
            key4: "Zest of 2 limes",
            key4: "a bottle of Rose champagne or your desired choice of bubbles ",
            key6: "Fresh mint, lime wheels, and sliced watermelon for garnish",
        },
        instructions: {
            inst1:
                "To make watermelon juice, blend two cups of cubed watermelon in a blender until smooth. Strain through a fine mesh sieve into a pitcher.",
            inst2:
                "Combine bottle of Rosé, St. Germain, watermelon juice, and zest into a large pitcher, chill until ready to serve. When ready to serve, add bottle of Champagne to the pitcher and stir. Fill highball glasses with ice and pour sangria. Garnish with mint, limes, and watermelon slices.",
        },
    },

    {
        name: "Grapefruit Swirl",
        id: "",
        image: "../images/Grapefruit_swirl.jpg",
        theme: "Punches",
        alcohol: "gin",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, eveniet possimus, molestiae sit obcaecati optio voluptas dolore fuga minima corporis numquam veniam harum velit excepturi aspernatur laudantium ullam quasi.  ",

        ingredients: {
            key1: "60 ml rosemary syrup",
            key2: "80 ml cardamom infused gin",
            key3: "120 ml grapefruit juice",
            key4: "a bottle of champagne or your desired choice of bubbles ",
            key5: "Rosemary sprigs",
            key6: "Grapefruit peel, for garnish",
        },

        instructions: {
            inst1:
                "In a small jar with an airtight lid add gin and cardamom pods. Seal and store for 24 hours.",
            inst2:
                "To make the rosemary simple syrup, bring sugar, water and 2 rosemary sprigs to a simmer in a small saucepan until sugar is dissolved. Remove from heat and allow to cool completely. Remove the rosemary and use right away, or store in an airtight container in the refrigerator for up to a week.",
            inst3:
                "To make the cocktail pour rosemary syrup, infused gin and grapefruit juice over ice in a cocktail mixer and shake to combine.",
            inst4:
                "Using a strainer, divide the mixture in two glasses filled with fresh ice.",
            inst5:
                "Top with prosecco and garnish with a sprig of rosemary and a grapefruit peel. Cheers!",
        },
    },

    //SUMMER
    {
        name: "Summer Cobbler",
        id: "",
        image: "../images/summer_cobbler.jpg",
        theme: "summer",
        alcohol: "whiskey",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, eveniet possimus, molestiae sit obcaecati optio voluptas dolore fuga minima corporis numquam veniam harum velit excepturi aspernatur laudantium ullam quasi.  ",

        ingredients: {
            key1: "45 ml Buffalo Trace White Dog Mash No. 1, (white wiskey)",
            key2: "15 ml Grand Marnier or other orange-flavored liqueur",
            key3: "10 ml freshly pressed lime juice",
            key4: "45 ml Farm Blackberry Preserves",
            key5: "45 ml fresh blackberries",
            key6: "Fresh blackberries and lime peel twist for garnish",
        },


        instructions: {
            inst1:
                "Combine 45 ml white whiskey, 15 ml Grand Marnier or other orange-flavored liqueur, 10 ml fresh lime juice, 45 ml Blackberry Farm Blackberry Preserves, and 3 fresh blackberries in an ice-filled cocktail shaker.",
            inst2:
                "Cover with lid, and shake until mixed and thoroughly chilled, about 45 seconds. Strain whiskey mixture into an old-fashioned glass filled with crushed ice. Garnish with fresh blackberries and lime peel twists.",
        },
    },

    {
        name: "Bee's Knees",
        id: "",
        image: "../images/B_knees.jpg",
        theme: "summer",
        alcohol: "gin",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, eveniet possimus, molestiae sit obcaecati optio voluptas dolore fuga minima corporis numquam veniam harum velit excepturi aspernatur laudantium ullam quasi.  ",

        ingredients: {
            key1: "45 ml Tanqueray London Dry Gin",
            key2: "15 ml Freshly pressed lemon juice",
            key3: "15 ml Honey syrup",
            key4: "1 dash of Orange bitters",
            key5: "Lemon peel",
        },

        instructions: {
            inst1:
                "To make the cocktail, fill a cocktail shaker with ice. Pour in the honey syrup (1:2 Ratio between honey and water), lemon juice and gin and a dash of orange bitters. ",
            inst2:
                "fasten the lid and shake until the mixture is very cold, about 30 seconds.",
            inst3:
                "Strain the drink into a rocks glass, fill the glass up with fresh ice cubes.",
            inst4:
                "Twist the lemon peel over the cocktail to release some of its oils, then drop it in.",

        },
    },

    //PUNCHES
    {

        name: "Pimms and Gingerbeer",
        id: "",
        image: "../images/Pimms.jpg",
        theme: "Punches",
        alcohol: "liquor",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, eveniet possimus, molestiae sit obcaecati optio voluptas dolore fuga minima corporis numquam veniam harum velit excepturi aspernatur laudantium ullam quasi.  ",

        ingredients: {
            key1: "200 ml Pimm's no 1",
            key2: "600 ml Ginger beer",
            key3: "100ml freshly pressed lemon juice",
            key4: "Orange Peel",
            key5: "1 sprig fresh mint",
            key6: "1 small cucumber, sliced (peel left on)",
            key7: "1 medium orange, sliced ",
            key8: "6-8 strawberries, hulled and halved",
        },

        instructions: {
            inst1:
                "Fill a glass pitcher with ice.",
            inst2:
                "Mix the Pimm's with lemon juice and gingerbeer in the pitcher with the ice.",
            inst3:
                "Lightly crush the mint in your hand to release the scent and oils, and add it to the pitcher along with the cucumber slices, orange slices, and strawberries. ",
            inst4:
                "Stir with a long-handled spoon and serve in tall glasses with ice.",
        },

    },

    {

        name: "Packers Punch",
        id: "",
        image: "../images/packers.jpg",
        theme: "Punches",
        alcohol: "Whiskey",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, eveniet possimus, molestiae sit obcaecati optio voluptas dolore fuga minima corporis numquam veniam harum velit excepturi aspernatur laudantium ullam quasi.  ",

        ingredients: {
            key1: "300 ml Maker's Mark bourbon",
            key2: "100 ml triple sec",
            key3: "900 ml homemade lemonade",
            key4: "400 ml lemon-lime soda (Sprite for example)",
            key5: "1 apple (sliced thinly)",
        },


        instructions: {
            inst1:
                "Fill a glass pitcher with ice.",
            inst2:
                "Mix the bourbon and triple sec with the homemade lemonade in the pitcher with the ice.",
            inst3:
                " Add the sliced apples and stir to incorporate ingredients. ",
            inst4:
                "Serve over ice in a tall glass.",
        },

    },

    //RETRO
    {
        name: "Cucumber Mint Gimlet",
        id: "",
        image: "../images/Cucumber_gimlet.jpg",
        theme: "Retro",
        alcohol: "gin",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, eveniet possimus, molestiae sit obcaecati optio voluptas dolore fuga minima corporis numquam veniam harum velit excepturi aspernatur laudantium ullam quasi.  ",

        ingredients: {
            key1: "2-inch slice of peeled cucumber, halved and then quartered",
            key2: "10 mint leaves",
            key3: "10 ml light agave nectar or simple syrup",
            key4: "30 ml lime juice",
            key5: "45 ml gin, preferably Hendrick’s",
        },


        instructions: {
            inst1:
                "In a cocktail shaker, muddle the cucumber, mint and agave nectar until the cucumber offers no more resistance.",
            inst2:
                "Fill the shaker with ice, then pour in the lime juice and gin. Put the lid on your shaker and shake until the cocktail is thoroughly chilled, about 20 seconds.",
            inst3:
                "Strain the mixture into a martini glass. Garnish with a tiny sprig of mint, if you’d like.",
        },
    },

    {
        name: "Old Fashioned",
        id: "",
        image: "../images/OldFashioned.jpg",
        theme: "Retro",
        alcohol: "whiskey",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, eveniet possimus, molestiae sit obcaecati optio voluptas dolore fuga minima corporis numquam veniam harum velit excepturi aspernatur laudantium ullam quasi.  ",

        ingredients: {
            key1: "60 ml Woodford Reserve Bourbon",
            key2: "1 teaspoon Sugar",
            key3: "2 dashes of Angostura Bitters",
            key4: "Orange Peel",
        },


        instructions: {
            inst1:
                "Add the sugar and bitters into a mixing glass, then add about 10 ml of bourbon, and stir until the sugar is nearly dissolved.",
            inst2:
                "Fill the mixing glass with ice, add the rest of bourbon, and stir until well-chilled.",
            inst3:
                "Strain into a rocks glass over fresh ice cubes.",
            inst4:
                "Express the oil of an orange twist over the glass, then drop into the glass to garnish.",
        },

    },


    //LESS IS MORE

    {
        name: "Paloma",
        id: "",
        image: "../images/paloma.jpg",
        theme: "less is more",
        alcohol: "tequila",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, eveniet possimus, molestiae sit obcaecati optio voluptas dolore fuga minima corporis numquam veniam harum velit excepturi aspernatur laudantium ullam quasi.  ",

        ingredients: {
            key1: "50 ml Don Julio Blanco",
            key2: "10 ml freshly pressed lime juice",
            key3: "5 ml Agave nectar syrup",
            key4: "Pink Grapefruit Soda",
            key5: "Pinch of salt",
            key6: "Pink Grapefruit wedge",
        },

        instructions: {
            inst1:
                "Salt the rim of the glass by rubbing a grapefruit wedge around the edge and dipping it onto a small plate of salt. Fill the glass with ice",
            inst2:
                "Mix the tequila, lime juice and agave nectar syrup into the glass.",
            inst3:
                "top it of with Pink Grapefruit Soda. Adjust sweetness to taste with agave nectar syrup.",
            inst4:
                "Garnish with grapefruit wedge.",
        },

    },
    {
        name: "Spill the Tea",
        id: "",
        image: "../images/spill_my_tea.jpg",
        theme: "less is more",
        alcohol: "gin",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, eveniet possimus, molestiae sit obcaecati optio voluptas dolore fuga minima corporis numquam veniam harum velit excepturi aspernatur laudantium ullam quasi.  ",

        ingredients: {
            key1: "50 ml Tanqueray London Dry Gin",
            key2: "1 teaspoon Orange marmelade",
            key3: "1 teabag of Earl Grey",
            key4: "Tonic Water",
            key5: "Lemon wedge",
        },


        instructions: {
            inst1:
                "For this drink it's preferably to use a bigger glas, such as a wine glass. Add a teaspoon Orange Marmelade in the glass and fill it up with ice ",
            inst2:
                "Pour the gin over the ice and top it of with Tonic water. Add more ice if ness... ",
            inst3:
                "Drop the teabag into the drink and leave it",
            inst4:
                "Garnish with Lemon wedge.",
        },
    },

];



