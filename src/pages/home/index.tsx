import { useState } from 'react';
import Finder from './components/Finder';
import Header from './components/Header';
import InviteModal from './components/InviteModal';
import homeStyle from './styles.module.scss';

export default function Home(): React.ReactElement {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (): void => setOpenModal(true);
  const handleCloseModal = (): void => setOpenModal(false);

  return (
    <main>
      <Header />
      <Finder />
      <section className={homeStyle.modalContainer}>
        <div className={homeStyle.result}>
          <p>Nenhum paciente foi encontrado</p>
        </div>
        <InviteModal openModal={openModal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} />
      </section>
    </main>
  );
}
