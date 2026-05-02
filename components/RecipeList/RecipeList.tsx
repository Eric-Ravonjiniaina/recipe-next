import RecipeCard from '../RecipeCard/RecipeCard'
import styles from './RecipeList.module.css'

type Recipe = {
  id: string
  name: string
  category: string
  ingredients: string[]
  steps: string[]
  duration: number
  image: string
}

type Props = {
  recipes: Recipe[]
}

export default function RecipeList({ recipes }: Props) {
  return (
    <ul className={styles.list}>
      {recipes.map((recipe) => (
        <li key={recipe.id} className={styles.item}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  )
}