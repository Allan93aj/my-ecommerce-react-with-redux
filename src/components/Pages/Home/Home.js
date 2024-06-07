
import Header from 'components/Header/Header';
import styles from './Home.module.scss';
import relogio from 'assets/inicial.png';
import eletronicosThumb from 'assets/categorias/thumbnail/eletronicos.png'
import eletronicosHeader from 'assets/categorias/thumbnail/eletronicos.png'
import automotivoThumb from 'assets/categorias/thumbnail/automotivo.png'
import automotivoHeader from 'assets/categorias/thumbnail/automotivo.png'
import escritorioThumb from 'assets/categorias/thumbnail/escritorio.png'
import escritorioHeader from 'assets/categorias/thumbnail/escritorio.png'
import jogosThumb from 'assets/categorias/thumbnail/jogos.png'
import jogosHeader from 'assets/categorias/thumbnail/jogos.png'
import somThumb from 'assets/categorias/thumbnail/som.png'
import somHeader from 'assets/categorias/thumbnail/som.png'
import { useNavigate } from 'react-router-dom';



const categorias = [{
  nome: 'Eletrônicos',
  thumbnail: eletronicosThumb,
  header: eletronicosHeader,
  id: 'eletronicos',
  descricao: "os melhores e amis atuais dispositivos"
},{
  nome: 'Automotivos',
  thumbnail: automotivoThumb,
  header: automotivoHeader,
  id: 'automotivos',
  descricao: "os melhores e amis atuais dispositivos"
},{
  nome: 'Jogos',
  thumbnail: jogosThumb,
  header: jogosHeader,
  id: 'jogos',
  descricao: "os melhores e amis atuais dispositivos"
},
{
  nome: 'Escritorio',
  thumbnail: escritorioThumb,
  header: escritorioHeader,
  id: 'escritorio',
  descricao: "os melhores e amis atuais dispositivos"
},
{
  nome: 'Som e imagem',
  thumbnail: somThumb,
  header: somHeader,
  id: 'som',
  descricao: "os melhores e amis atuais dispositivos"

}]

export default function Home() {
const navigate = useNavigate()

  return (
    <div>
      <Header
         titulo='Classificados Tech'
         descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
         imagem={relogio}
         className={styles.header}
      />

      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>
            Categorias
          </h1>
        </div>

        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome}/>
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}