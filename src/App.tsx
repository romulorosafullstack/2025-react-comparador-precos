import "./index.css"
import "../App.css"
import logoImg from "./assets/logo.png"

import React, { useState, type FormEvent } from "react"


export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState<number>(1)
  const [precoGasolina, setPrecoGasolina] = useState<number>(1)

  function calcular(event: FormEvent) {
    event.preventDefault()
    const calculo = precoAlcool / precoGasolina;
    
    const calcresposta = calculo <= 0.7 ? "Compensa usar alcool!" : "Compensa usar gasolina!";
    alert(calcresposta)
  }

  return (
    <>
      <main className="main__wrapper">
        <div className="main__container">
          <img
            src={logoImg}
            alt="logo do comparador de preços"
            className="logo"
          />

          <h1 className="title">Comparador de Preços</h1>

          <form action="" className="form__wrapper" onSubmit={calcular}>
            <div className="form__container">
              <div className="form__field">
                <label
                  htmlFor="alcool"
                  className="form__label"
                >
                  Álcool (preço por litro):
                </label>
                <input
                  type="number"
                  id="alcool"
                  name="alcool"
                  required
                  className="form__input"
                  placeholder="Informe o preço do álcool"
                  min="0.00"
                  step="0.01"
                  value={precoAlcool}
                  onChange={(e) => setPrecoAlcool(Number(e.target.value))}
                />
              </div>

              <div className="form__field">
                <label
                  htmlFor="gasolina"
                  className="form__label"
                >
                  Gasolina (preço por litro):
                </label>
                <input
                  type="number"
                  id="gasolina"
                  name="gasolina"
                  required
                  className="form__input"
                  placeholder="Informe o preço da gasolina"
                  min="0.00"
                  step="0.01"
                  value={precoGasolina}
                  onChange={(e) => setPrecoGasolina(Number(e.target.value))}
                />
              </div>

              <input
                type="submit"
                value="Comparar"
                className="form__submit"
              />
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
