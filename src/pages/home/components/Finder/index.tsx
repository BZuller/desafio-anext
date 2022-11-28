import finderStyle from './styles.module.scss';
import { CiSearch } from 'react-icons/ci'

export default function Finder(): React.ReactElement {
    return (
        <section className={finderStyle.container}>
            <div className={finderStyle.finderTitleBox}>
            <h2 className={finderStyle.finderTitle}>Prescrições</h2>
            </div>
            <div className={finderStyle.search}>
            <h2>Encontre um paciente para prescrever</h2>
            <p className={finderStyle.findPacientText}>Aqui você pode buscar por E-mail ou CPF para encontrar o paciente e começar a montar a sua prescrição</p>
            <div className={finderStyle.searchBox}>
            <input type="text" className={finderStyle.searchInput} />
            <button className={finderStyle.searchButton}><CiSearch className={finderStyle.searchIcon}/></button>
            </div>
            </div>
        </section>
    )
}