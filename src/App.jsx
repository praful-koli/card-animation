import React from 'react'
import ProductCard from './components/productCard/ProductCard';
import './App.css'
function App() {
  const products = [
  {
    id: 1,
    name: "Pikachu",
    price: "₹1999",
    category: "Electric",
    hp: 60,
    type: "⚡",
    rarity: "Rare",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    attack: "Thunder Bolt",
    description: "When several of these Pokémon gather, their electricity can build and cause lightning storms."
  },
  {
    id: 2,
    name: "Charizard",
    price: "₹4999",
    category: "Fire / Flying",
    hp: 150,
    type: "🔥",
    rarity: "Holo Rare",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    attack: "Fire Spin",
    description: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
  },
  {
    id: 3,
    name: "Mewtwo",
    price: "₹8999",
    category: "Psychic",
    hp: 250,
    type: "🔮",
    rarity: "Ultra Rare",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    attack: "Psystrike",
    description: "A Pokémon that was created by genetic manipulation. However, even science cannot explain this Pokémon's vicious heart."
  }
];
  return (
    <div className="app">
   
      <header className="header">
        <h1 className="title">Our Products</h1>
        <p className="subtitle">Collect the rarest Pokémon cards in the world</p>
      </header>

      <div className="cards-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  )
}

export default App
