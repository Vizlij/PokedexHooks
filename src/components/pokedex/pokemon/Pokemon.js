import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container } from 'react-bootstrap'
import Header from '../../header/Header'
import './pokemonStyle.css'
import PokemonHeader from './pokemonHeader/PokemonHeader'
import PokemonMainStats from './pokemonMainStats/PokemonMainStats'
import PokemonProfile from './pokemonProfile/PokemonProfile'
import PokemonDescription from './pokemonDescription/PokemonDescription'
import PokemonTitle from './pokemonTitle/PokemonTitle'

const Pokemon = (props) => {
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [types, setTypes] = useState([])
  const [description, setDescription] = useState('')
  const [stats, setStats] = useState({})
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [eggGroup, setEggGroup] = useState('')
  const [abilities, setAbilities] = useState('')
  const [genderRatioMale, setGenderRatioMale] = useState('')
  const [genderRatioFemale, setGenderRatioFemale] = useState('')
  const [evs, setEvs] = useState('')
  const [catchRate, setCatchRate] = useState('')
  const [hatchSteps, setHatchSteps] = useState('')

  const { pokemonIndex } = props.match.params

  const myRequest = async () => {
    const pokemonUrl = (`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`)
    const pokemonSpeciesUrl = (`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`)
    const pokemonRes = await axios.get(pokemonUrl)

    setName(pokemonRes.data.name)
    setImageUrl(pokemonRes.data.sprites.front_default)

    setStats(stats,
      pokemonRes.data.stats.forEach(stat => {
        switch (stat.stat.name) {
          case 'hp':
            stats.hp = stat['base_stat']
            break
          case 'attack':
            stats.attack = stat['base_stat']
            break
          case 'defense':
            stats.defense = stat['base_stat']
            break
          case 'speed':
            stats.speed = stat['base_stat']
            break
          case 'special-attack':
            stats.specialAttack = stat['base_stat']
            break
          case 'special-defense':
            stats.specialDefense = stat['base_stat']
            break
        }
      })
    )

    setHeight(Math.round((pokemonRes.data.height * 0.328084 + 0.0001) * 100) / 100)

    setWeight(Math.round((pokemonRes.data.weight * 0.220462 + 0.0001) * 100) / 100)

    setTypes(pokemonRes.data.types.map(type => type.type.name))

    setAbilities(pokemonRes.data.abilities.map(ability => {
      return ability.ability.name.toLowerCase()
    }).join(', '))

    setEvs(pokemonRes.data.stats.filter(stat => stat.effort > 0)
      .map(stat => `${stat.effort} ${stat.stat.name}`.toLowerCase()).join(', '))

    await axios.get(pokemonSpeciesUrl).then(res => {
      const femaleRate = res.data[`gender_rate`]
      setGenderRatioMale(12.5 * (8 - femaleRate))
      setGenderRatioFemale(12.5 * femaleRate)
      setDescription(() => res.data.flavor_text_entries.find(flavor => flavor.language.name === 'en').flavor_text)
      setCatchRate(Math.round((100 / 255) * res.data[`capture_rate`]))
      setEggGroup(() => res.data[`egg_groups`].map(group => group.name.toLowerCase()).join(', '))
      setHatchSteps(255 * (res.data[`hatch_counter`] * 1))
    })
  }

  useEffect(() => {
    myRequest()
  })

  return (
    <div>
      <Header />
      <Container className='col-9 mt-5'>
        <Card>
          <PokemonHeader
            pokemonIndex={pokemonIndex}
            types={types}
          />
          <Card.Body>
            <PokemonTitle name={name} />
            <Card.Text>
              <PokemonMainStats
                imageUrl={imageUrl}
                stats={stats}
              />
              <PokemonDescription description={description} />
              <PokemonProfile
                height={height}
                weight={weight}
                catchRate={catchRate}
                genderRatioMale={genderRatioMale}
                genderRatioFemale={genderRatioFemale}
                eggGroup={eggGroup}
                hatchSteps={hatchSteps}
                abilities={abilities}
                evs={evs}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Pokemon
