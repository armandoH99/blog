<h1> Barra de pesquisa utilizando React </h1>

![image](https://user-images.githubusercontent.com/83254726/175394998-f4f3fd83-433e-4c24-93bd-fa92307df859.png)

<h2> Construir o projeto inicial </h2>

1. Criar [um projeto React](https://create-react-app.dev/)
 create-react-app my-app
 ```bash
 create-react-app my-app
```

1. Criar [o archivo JSON ](https://www.mockaroo.com/) com os dados a ser procurados, descargar o archivo e colocar na pasta do projeto.

   1. importar o archivo JSON no nosso projeto.
   
    ```bash
    import JSONDATA from "./MOCK_DATA.json";
    ```

1. Criar o componente UI a ser renderizado, para o usuario interagir.

App.js
 ```bash
 <div>
   <input
      type="text"
      placeholder="Search..."}}/>
   </div>
```

<h4> Importar o 'useState' no projeto </h4>

```bash
import { useState } from "react";
```
<h4> Depois de importado criamos a constante para guardar o termo de pesquisa dentro de nossa função.</h4>

```bash
const [searchTerm, setSearchTerm] = useState("");
```
  
  
  
<h4>Configuramos o elemento input para guardar a informação pesquisada.</h4>
 

```bash
      <input
         type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
           }}
    />

```
<h4> Popular com os dados do JSON</h4>

```bash
      {JSONDATA.map((val, key) => {
          return (
            <div className="names">
              <p key={key}>
                {val.first_name}
              </p>
            </div>
          );
        })}

```

<h4> Até esse ponto nosso codigo deve esta de seguinte forma </h4>

```bash
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        {JSONDATA.map((val, key) => {
          return (
            <div className="names">
              <p key={key}>
                {val.first_name}
              </p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;

```
<h4>Filtrar a informaçao para ter retorno segundo os dados pesquisados<h4>

```bash
      {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.first_name |
            val.last_name
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="names">
              <p key={key}>
                {val.first_name} 
              </p>
            </div>
          );
        })}

```
  [Repositorio no GitHub](https://github.com/armandoH99/search2)  
