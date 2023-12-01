import React from 'react';
import './main.scss'

function Main() {

  return (
    <div className='main-section'>
      <section className='first-section'>
        <div className='text-block'>
          <h1>Sobre</h1>
          <p>Ex-enfermeira que se apaixonou pelo mundo da tecnologia e desenvolvimento de sistemas.</p>
        </div>
        <img alt='gif do bob esponja' src='https://i.giphy.com/media/SKGo6OYe24EBG/giphy.webp' />
      </section>

      <section className='second-section'>
        <div className='text-block'>
          <h1>Projetos</h1>
          <div className=''>
            <p>Cozinhe o macarrão instantâneo normalmente.Em uma panela, coloque a manteiga, o tomate, a cebola e o tempero em pó do macarrão instantâneo para fritar, sempre mexendo bem para não empelotar.Depois despeje o creme de leite e misture o molho ao macarrão instantâneo.</p>
          </div>
        </div>
        <img alt='gif do bob esponja' src='https://i.giphy.com/media/WoWm8YzFQJg5i/200.webp' />


      </section>

    </div>
  )

}

export { Main }