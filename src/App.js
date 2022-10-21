import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CardsContainer>
        <PokemonCard
          cardColor={getColors(pokemons[0].type[0])}
          key={pokemons[0].id}
          pokemon={pokemons[0]}
        />
      </CardsContainer>
    </>
  );
}

export default App;
