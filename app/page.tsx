'use client'

import { useState } from 'react'
import recipesData from '../data/recipes.json'
import RecipeList from '../components/RecipeList/RecipeList'
import styles from './page.module.css'

type Recipe = {
  id: string
  name: string
  category: string
  ingredients: string[]
  steps: string[]
  duration: number
  image: string
}

export default function Home() {
  const [orderedRecipes, setOrderedRecipes] = useState<Recipe[]>(recipesData)

  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse())
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>
          <button
            type="button"
            className={styles.toggle}
            onClick={handleToggleOrder}
          >
            Inverser l'ordre
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <RecipeList recipes={orderedRecipes} />
      </main>
    </div>
  )
}