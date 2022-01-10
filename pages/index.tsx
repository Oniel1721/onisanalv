import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const today = new Date()
const febraryDays = today.getFullYear() % 4 ? 29 : 28
const daysPerMonth = [31, febraryDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const names = ['JOHAN', 'ARGENIS', 'ONIEL']

const Home: NextPage = () => {
  const [name, setName] = useState('')
  const [weeks, setWeeks] = useState(0)

  useEffect(() => {
    let daysOfTheYear = 0
    for (let month = 0; month < today.getMonth(); month++) {
      daysOfTheYear += daysPerMonth[month]
    }
    daysOfTheYear += today.getDate()
    daysOfTheYear -= 3
    const weeksOfTheYear = parseInt((daysOfTheYear / 7).toPrecision())
    setWeeks(weeksOfTheYear)
    setName(names[weeksOfTheYear % 3])
  }, [])
  return (
    <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <h1 style={{ fontSize: '5rem' }}>Semana #{weeks} del {today.getFullYear()}</h1>
      <h2 style={{ fontSize: '5rem' }}>La frase le toca a {name}</h2>
    </section>
  )
}

export default Home
