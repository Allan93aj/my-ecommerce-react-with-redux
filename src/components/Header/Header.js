import styles from './Header.module.scss';
import TituloCommImagem from './TituloComImagem/TituloComImagem';
import TituloSemImagem from './TituloSemImagem/TituloSemImagem';

export default function Header({ titulo, descricao, className = '', imagem}) {
  return (
    <header className={`${styles.header} ${className}`}>
      {titulo && !imagem &&
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        />
      }
      {titulo && imagem &&
        <TituloCommImagem
        titulo={titulo}
        descricao={descricao}
        imagem={imagem}
        className={className}
        />
      }
    </header>
  )
}