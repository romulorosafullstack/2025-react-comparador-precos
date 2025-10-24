import "./index.css"
import "../App.css"
import logoImg from "./assets/logo.png"

import React, { useState, type FormEvent } from "react"

interface InfoProps{
  title: string;
  gasolina: number | string;
  alcool: number | string;
}

export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState<number>(0)
  const [precoGasolina, setPrecoGasolina] = useState<number>(0)
  const [info, setInfo] = useState<InfoProps>()


  function calcular(event: FormEvent) {
    event.preventDefault()
    const calculo = precoAlcool / precoGasolina;

    if (precoAlcool === 0 || precoGasolina === 0) {
      return
    } else {
      if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar alcool",
        gasolina: precoGasolina,
        alcool: precoAlcool,
      })
    } else {
      setInfo({
        title: "Compensa usar gasolina",
        gasolina: precoGasolina,
        alcool: precoAlcool,
      })
    }
  } 
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
                  value={precoAlcool.toFixed(2)}
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
                  value={precoGasolina.toFixed(2)}
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

          {info && Object.keys(info).length > 0 && (
            <section className="status__wrapper">
              <h1 className="status__message1">{info.title}</h1>
              <p className="status__message2">Você economizará <span>{precoAlcool / precoGasolina * 100 - 100}%</span><br /> do que a gasolina custaria.</p>
              <p className="status__message3">Alcool: {info.alcool}</p>
              <p className="status__message3">Gasolina:  {info.gasolina}</p>
            </section>
          )}

        </div>
      </main>
    </>
  )
}