/**
 * Catalogue complet des recettes pour l'application MyCulina
 * Chaines de couleurs / Identité visuelle : Vert Militaire, Vert Sauge, Doré Champagne
 * 
 * Filtres supportés :
 * - diet: 'omnivore' | 'vegetarien' | 'vegetalien' | 'pescetarien' | 'halal'
 * - allergens: 'gluten' | 'lait' | 'oeufs' | 'arachides' | 'fruits_a_coque' | 'poisson' | 'crustaces' | 'soja'
 * - avoidedFoods: 'viande' | 'poisson' | 'oignons' | 'champignons' | 'produits_laitiers' | 'epices'
 * - proteinLevel: 'eleve' | 'modere' | 'faible'
 * - caloriesType: 'moins_calorique' | 'equilibre' | 'plus_energetique'
 * - equipment: 'four' | 'air_fryer' | 'plaques' | 'micro_ondes' | 'blender' | 'robot' | 'cocotte'
 */

export const RECIPES_DATA = [
  {
    id: "recette-001",
    title: "Poulet citron & herbes rôties",
    subtitle: "Rôti tendre au four aux saveurs méditerranéennes",
    category: "Plat principal",
    imageUrl: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    prepTime: 15, // minutes
    cookTime: 40, // minutes
    totalTime: 55, // minutes
    servings: 4,
    priceTotal: 11.20,
    pricePerServing: 2.80,
    
    // Critères de filtrage nutritionnels et régimes
    diet: ["omnivore", "halal"],
    allergens: [], // Aucun allergène majeur par défaut
    proteinLevel: "eleve",
    caloriesType: "equilibre",
    
    // Équipements requis
    equipment: ["four"],
    
    // Tags d'aliments contenus pour le filtre d'évitement
    containedFoods: ["viande", "oignons"],
    
    // Détails des ingrédients
    ingredients: [
      { name: "Cuisses ou Blancs de poulet", quantity: 600, unit: "g", estimatedPrice: 5.50 },
      { name: "Citrons bio", quantity: 2, unit: "pièces", estimatedPrice: 1.20 },
      { name: "Pommes de terre", quantity: 600, unit: "g", estimatedPrice: 1.50 },
      { name: "Oignon rouge", quantity: 1, unit: "pièce", estimatedPrice: 0.40 },
      { name: "Huile d'olive extra vierge", quantity: 3, unit: "c. à soupe", estimatedPrice: 0.60 },
      { name: "Herbes de Provence / Thyme frais", quantity: 2, unit: "c. à café", estimatedPrice: 0.80 },
      { name: "Gousses d'ail", quantity: 4, unit: "gousses", estimatedPrice: 0.30 },
      { name: "Sel et Poivre", quantity: 1, unit: "pincée", estimatedPrice: 0.10 }
    ],
    
    // Étapes de préparation
    instructions: [
      "Préchauffer le four à 200°C (Th. 6-7).",
      "Laver les pommes de terre et les couper en quartiers avec la peau. Émincer l'oignon et couper un citron en rondelles.",
      "Dans un grand plat allant au four, disposer le poulet, les pommes de terre, l'oignon et les rondelles de citron.",
      "Exprimer le jus du deuxième citron par-dessus, arroser d'huile d'olive et saupoudrer d'herbes de Provence, d'ail écrasé, de sel et de poivre.",
      "Enfourner pendant 40 minutes jusqu'à ce que le poulet soit bien doré et les pommes de terre tendres.",
      "Servir chaud dès la sortie du four."
    ],

    nutritionInfo: {
      calories: 480,
      proteins: 42, // grammes
      carbs: 30, // grammes
      fat: 18 // grammes
    }
  },

  {
    id: "recette-002",
    title: "Bowl végétarien avocat & pois chiches",
    subtitle: "Riche en fibres et nutriments, prêt en quelques minutes",
    category: "Plat principal / Salade",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 2,
    priceTotal: 4.80,
    pricePerServing: 2.40,
    
    diet: ["vegetarien", "vegetalien", "omnivore", "halal", "pescetarien"],
    allergens: [],
    proteinLevel: "modere",
    caloriesType: "equilibre",
    
    equipment: ["plaques"],
    containedFoods: [],
    
    ingredients: [
      { name: "Pois chiches en conserve", quantity: 400, unit: "g", estimatedPrice: 1.10 },
      { name: "Avocat mûr", quantity: 1, unit: "pièce", estimatedPrice: 1.30 },
      { name: "Quinoa", quantity: 120, unit: "g", estimatedPrice: 0.90 },
      { name: "Jeunes pousses d'épinard", quantity: 100, unit: "g", estimatedPrice: 1.00 },
      { name: "Huile d'olive et Citron", quantity: 2, unit: "c. à soupe", estimatedPrice: 0.50 }
    ],
    
    instructions: [
      "Rincer et cuire le quinoa selon les instructions du paquet (environ 12 minutes).",
      "Égoutter les pois chiches. Faire revenir rapidement dans une poêle avec une goutte d'huile d'olive et un peu de cumin (optionnel).",
      "Découper l'avocat en lamelles.",
      "Composer le bowl : déposer une base d'épinards et de quinoa, ajouter l'avocat et les pois chiches chauds.",
      "Arroser d'un filet de jus de citron et d'huile d'olive avant de déguster."
    ],

    nutritionInfo: {
      calories: 420,
      proteins: 16,
      carbs: 52,
      fat: 18
    }
  },

  {
    id: "recette-003",
    title: "Pâtes crémeuses aux champignons",
    subtitle: "Sauce onctueuse rapide à réaliser sans viande",
    category: "Plat principal",
    imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 2,
    priceTotal: 4.40,
    pricePerServing: 2.20,
    
    diet: ["vegetarien", "omnivore", "halal"],
    allergens: ["gluten", "lait"],
    proteinLevel: "modere",
    caloriesType: "equilibre",
    
    equipment: ["plaques"],
    containedFoods: ["champignons", "produits_laitiers", "oignons"],
    
    ingredients: [
      { name: "Pâtes (Penne ou Tagliatelles)", quantity: 200, unit: "g", estimatedPrice: 0.60 },
      { name: "Champignons de Paris", quantity: 250, unit: "g", estimatedPrice: 1.50 },
      { name: "Crème fraîche liquide", quantity: 15, unit: "cl", estimatedPrice: 0.90 },
      { name: "Parmesan râpé", quantity: 40, unit: "g", estimatedPrice: 1.00 },
      { name: "Gousse d'ail / Échalote", quantity: 1, unit: "pièce", estimatedPrice: 0.40 }
    ],
    
    instructions: [
      "Faire bouillir une grande casserole d'eau salée et cuire les pâtes al dente.",
      "Nettoyer et émincer les champignons et l'échalote.",
      "Faire revenir l'échalote et les champignons dans une poêle avec du beurre ou de l'huile jusqu'à ce qu'ils soient dorés.",
      "Verser la crème fraîche, assaisonner avec du sel et du poivre, et laisser mijoter à feu doux pendant 3 minutes.",
      "Mélanger les pâtes égouttées directement dans la sauce et incorporer le parmesan.",
      "Servir chaud immédiatement."
    ],

    nutritionInfo: {
      calories: 530,
      proteins: 18,
      carbs: 68,
      fat: 20
    }
  },

  {
    id: "recette-004",
    title: "Saumon grillé Air Fryer & légumes",
    subtitle: "Cuisine saine et express sans ajout excessif de matière grasse",
    category: "Plat principal",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    servings: 2,
    priceTotal: 7.00,
    pricePerServing: 3.50,
    
    diet: ["pescetarien", "omnivore", "halal"],
    allergens: ["poisson"],
    proteinLevel: "eleve",
    caloriesType: "moins_calorique",
    
    equipment: ["air_fryer"],
    containedFoods: ["poisson"],
    
    ingredients: [
      { name: "Pavés de saumon frais", quantity: 2, unit: "pièces (300g)", estimatedPrice: 5.00 },
      { name: "Courgette", quantity: 1, unit: "pièce", estimatedPrice: 0.80 },
      { name: "Poivron rouge", quantity: 1, unit: "pièce", estimatedPrice: 0.80 },
      { name: "Huile d'olive", quantity: 1, unit: "c. à soupe", estimatedPrice: 0.20 },
      { name: "Aneth et Citron", quantity: 1, unit: "pincée", estimatedPrice: 0.20 }
    ],
    
    instructions: [
      "Couper la courgette et le poivron en dés. Les mélanger avec un filet d'huile d'olive, du sel et du poivre.",
      "Placer les légumes au fond du bac de l'Air Fryer.",
      "Déposer les pavés de saumon assaisonnés par-dessus.",
      "Programmer l'Air Fryer à 180°C pendant 12 minutes.",
      "Vérifier la cuisson du saumon et servir avec un quartier de citron."
    ],

    nutritionInfo: {
      calories: 410,
      proteins: 36,
      carbs: 12,
      fat: 24
    }
  },

  {
    id: "recette-005",
    title: "Omelette legère aux épinards et feta",
    subtitle: "Riche en protéines, prêt en 10 minutes à la poêle",
    category: "Plat rapide",
    imageUrl: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80",
    prepTime: 5,
    cookTime: 8,
    totalTime: 13,
    servings: 1,
    priceTotal: 1.90,
    pricePerServing: 1.90,
    
    diet: ["vegetarien", "omnivore", "halal"],
    allergens: ["oeufs", "lait"],
    proteinLevel: "eleve",
    caloriesType: "moins_calorique",
    
    equipment: ["plaques"],
    containedFoods: ["produits_laitiers"],
    
    ingredients: [
      { name: "Œufs frais", quantity: 3, unit: "pièces", estimatedPrice: 0.90 },
      { name: "Épinards frais", quantity: 50, unit: "g", estimatedPrice: 0.50 },
      { name: "Feta", quantity: 30, unit: "g", estimatedPrice: 0.40 },
      { name: "Beurre ou huile", quantity: 1, unit: "noisette", estimatedPrice: 0.10 }
    ],
    
    instructions: [
      "Battre les œufs dans un bol avec du sel et du poivre.",
      "Faire fondre la noisette de beurre dans une poêle à feu moyen.",
      "Ajouter les épinards et les faire tomber 1 minute.",
      "Verser les œufs battus et laisser prendre doucement.",
      "Émietter la feta sur une moitié de l'omelette, rabattre en deux et servir."
    ],

    nutritionInfo: {
      calories: 320,
      proteins: 24,
      carbs: 3,
      fat: 23
    }
  },

  {
    id: "recette-006",
    title: "Velouté de potimarron au blender",
    subtitle: "Soupe réconfortante et rapide à préparer",
    category: "Entrée / Soupe",
    imageUrl: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    priceTotal: 3.60,
    pricePerServing: 0.90,
    
    diet: ["vegetarien", "vegetalien", "omnivore", "halal", "pescetarien"],
    allergens: [],
    proteinLevel: "faible",
    caloriesType: "moins_calorique",
    
    equipment: ["plaques", "blender"],
    containedFoods: ["oignons"],
    
    ingredients: [
      { name: "Potimarron bio", quantity: 800, unit: "g", estimatedPrice: 2.00 },
      { name: "Oignon", quantity: 1, unit: "pièce", estimatedPrice: 0.30 },
      { name: "Bouillon de légumes", quantity: 60, unit: "cl", estimatedPrice: 0.30 },
      { name: "Lait de coco (optionnel)", quantity: 10, unit: "cl", estimatedPrice: 0.80 },
      { name: "Noix de muscade", quantity: 1, unit: "pincée", estimatedPrice: 0.20 }
    ],
    
    instructions: [
      "Laver le potimarron (inutile de le peler s'il est bio) et le couper en dés.",
      "Faire revenir l'oignon dans une casserole, ajouter les dés de potimarron et couvrir avec le bouillon.",
      "Laisser cuire à bouillon moyen pendant 20 minutes jusqu'à ce qu'il soit tendre.",
      "Verser le tout dans le blender, ajouter le lait de coco et la muscade, puis mixer jusqu'à obtention d'une texture veloutée.",
      "Servir bien chaud."
    ],

    nutritionInfo: {
      calories: 180,
      proteins: 4,
      carbs: 22,
      fat: 9
    }
  },

  {
    id: "recette-007",
    title: "Mug cake chocolat express micro-ondes",
    subtitle: "Un dessert gourmand prêt en 2 minutes chrono",
    category: "Dessert",
    imageUrl: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
    prepTime: 3,
    cookTime: 1.5,
    totalTime: 4.5,
    servings: 1,
    priceTotal: 0.85,
    pricePerServing: 0.85,
    
    diet: ["vegetarien", "omnivore", "halal"],
    allergens: ["gluten", "lait", "oeufs"],
    proteinLevel: "faible",
    caloriesType: "plus_energetique",
    
    equipment: ["micro_ondes"],
    containedFoods: ["produits_laitiers"],
    
    ingredients: [
      { name: "Farine de blé", quantity: 3, unit: "c. à soupe", estimatedPrice: 0.10 },
      { name: "Sucre", quantity: 2, unit: "c. à soupe", estimatedPrice: 0.05 },
      { name: "Cacao en poudre", quantity: 1, unit: "c. à soupe", estimatedPrice: 0.15 },
      { name: "Œuf", quantity: 1, unit: "pièce", estimatedPrice: 0.30 },
      { name: "Lait", quantity: 2, unit: "c. à soupe", estimatedPrice: 0.05 },
      { name: "Beurre fondu", quantity: 15, unit: "g", estimatedPrice: 0.20 }
    ],
    
    instructions: [
      "Dans une grande tasse (mug), mélanger les ingrédients secs : farine, sucre, cacao.",
      "Ajouter l'œuf, le lait et le beurre fondu. Mélanger vigoureusement à la fourchette jusqu'à consistance lisse.",
      "Cuire au micro-ondes à 800W pendant 1 minute 20 secondes.",
      "Laisser tiédir 1 minute avant de déguster à la cuillère."
    ],

    nutritionInfo: {
      calories: 340,
      proteins: 8,
      carbs: 45,
      fat: 14
    }
  },

  {
    id: "recette-008",
    title: "Chili végétalien minute en cocotte",
    subtitle: "Riche en saveurs, protéiné et économique",
    category: "Plat principal",
    imageUrl: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    priceTotal: 4.80,
    pricePerServing: 1.20,
    
    diet: ["vegetarien", "vegetalien", "omnivore", "halal", "pescetarien"],
    allergens: [],
    proteinLevel: "eleve",
    caloriesType: "equilibre",
    
    equipment: ["cocotte", "plaques"],
    containedFoods: ["oignons", "epices"],
    
    ingredients: [
      { name: "Haricots rouges en conserve", quantity: 800, unit: "g", estimatedPrice: 1.80 },
      { name: "Maïs en conserve", quantity: 200, unit: "g", estimatedPrice: 0.70 },
      { name: "Tomates concassées en boîte", quantity: 400, unit: "g", estimatedPrice: 0.90 },
      { name: "Oignon et Gousse d'ail", quantity: 2, unit: "pièces", estimatedPrice: 0.50 },
      { name: "Épices Chili / Cumin", quantity: 1, unit: "c. à soupe", estimatedPrice: 0.40 },
      { name: "Huile végétale", quantity: 1, unit: "c. à soupe", estimatedPrice: 0.10 }
    ],
    
    instructions: [
      "Dans la cocotte, faire suer l'oignon et l'ail hachés avec l'huile.",
      "Ajouter les épices et mélanger 1 minute pour libérer les arômes.",
      "Ajouter les tomates concassées, les haricots rouges rincés et le maïs.",
      "Fermer la cocotte et laisser mijoter à feu doux pendant 15 à 20 minutes.",
      "Rectifier l'assaisonnement et servir avec du riz basmati."
    ],

    nutritionInfo: {
      calories: 390,
      proteins: 19,
      carbs: 62,
      fat: 6
    }
  }
];

/**
 * Fonction d'aide pour filtrer le catalogue selon les réponses du questionnaire MyCulina
 */
export function filterRecipes(recipes, userPreferences) {
  return recipes.filter(recipe => {
    // 1. Filtre Régime alimentaire
    if (userPreferences.diet && userPreferences.diet !== 'sans_preference') {
      if (!recipe.diet.includes(userPreferences.diet)) return false;
    }

    // 2. Filtre Allergies (Exclusion stricte)
    if (userPreferences.allergens && userPreferences.allergens.length > 0) {
      const hasAllergen = recipe.allergens.some(allergen => 
        userPreferences.allergens.includes(allergen)
      );
      if (hasAllergen) return false;
    }

    // 3. Filtre Aliments évités
    if (userPreferences.avoidedFoods && userPreferences.avoidedFoods.length > 0) {
      const hasAvoided = recipe.containedFoods.some(food => 
        userPreferences.avoidedFoods.includes(food)
      );
      if (hasAvoided) return false;
    }

    // 4. Filtre Équipements (La recette doit pouvoir être faite avec le matériel disponible)
    if (userPreferences.equipment && userPreferences.equipment.length > 0) {
      const canCook = recipe.equipment.every(eq => 
        userPreferences.equipment.includes(eq)
      );
      if (!canCook) return false;
    }

    // 5. Filtre Budget par personne
    if (userPreferences.maxBudget) {
      if (recipe.pricePerServing > userPreferences.maxBudget) return false;
    }

    // 6. Filtre Temps de préparation
    if (userPreferences.maxTime) {
      if (recipe.totalTime > userPreferences.maxTime) return false;
    }

    return true;
  });
}