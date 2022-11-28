import headerStyle from './styles.module.scss';

type IHeader = {
  className?: string;
};

export default function Header({ className }: IHeader): React.ReactElement {
  return (
    <header className={headerStyle.headerContainer}>
      <img src="public/logo.svg" alt="Anext logo" />
      <ul className={headerStyle.headerList}>
        <li className={headerStyle.listElement}>
          <a href="">Home</a>
        </li>
        <li className={headerStyle.listElement}>
          <a href="">Prescrições</a>
        </li>
        <li className={headerStyle.listElement}>
          <a href="">Teleconsulta</a>
        </li>
        <li className={headerStyle.listElement}>
          <a href="">Fale Conosco</a>
        </li>
      </ul>
    </header>
  );
}
