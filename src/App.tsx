import "./index.css"
import "../App.css"
import logoImg from "./assets/logo.png"


export default function App() {
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

          <form action="" className="form__wrapper">
            <div className="form__container">
              <div className="form__field">
                <label
                  htmlFor="gasolina"
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
