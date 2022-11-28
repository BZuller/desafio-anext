import { useState } from 'react';
import Input from '../../../../components/Inputs';
import Modal from '../../../../components/Modal';
import IRegister from '../../../../interfaces/IRegister';
import { isValidEmail, isValidMobilePhone } from '@brazilian-utils/brazilian-utils';
import modalStyle from './styles.module.scss';
import { Dayjs } from 'dayjs';
import SelectGender from '../Select';
import Tooltip from '../../../../components/Tooltip';
import { DatePicker, DatePickerProps } from 'antd';
import locale from 'antd/es/date-picker/locale/en_US';

type props = {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  openModal: boolean;
};

export default function InviteModal({ openModal, handleOpenModal, handleCloseModal }: props): React.ReactElement {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState<string | Dayjs>();

  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorPhone, setErrorPhone] = useState<boolean>(false);
  const [errorGender, setErrorGender] = useState<boolean>(false);
  const [errorDate, setErrorDate] = useState<boolean>(false);

  const options = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Feminino', label: 'Feminino' },
    { value: 'Prefiro não dizer', label: 'Prefiro não dizer' },
    { value: 'Outro', label: 'Outro' },
  ];

  const validateFields = (): boolean => {
    let validate = true;

    if (!name) {
      validate = false;
      setErrorName(true);
    }
    if (!email || !isValidEmail(email)) {
      validate = false;
      setErrorEmail(true);
    }
    if (!phone || !isValidMobilePhone(phone)) {
      validate = false;
      setErrorPhone(true);
    }
    if (!gender) {
      validate = false;
      setErrorGender(true);
    }
    if (!date) {
      validate = false;
      setErrorDate(true);
    }
    return validate;
  };

  const handleChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDate(dateString);
  };

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (validateFields()) {
      handleOpenModal();
    }
  };

  return (
    <section className={modalStyle.modalContainer}>
      <div className={modalStyle.title}>
        <h3>CONVIDAR UM NOVO PACIENTE</h3>
        <p className={modalStyle.modalText}>
          Ao enviar um convite para o paciente se cadastrar, você pode montar uma prescrição que ele vai receber no
          momento que se cadastrar
        </p>
      </div>
      <form onSubmit={onSubmit} className={modalStyle.formBox}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => {
            setErrorName(false);
            setName(e.target.value);
          }}
          onClick={() => setErrorName(false)}
          errorMessage="Preencha seu nome!"
          error={errorName}
          className={modalStyle.formInput}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={errorEmail}
          errorMessage="Preencha o email"
          className={modalStyle.formInput}
        />
        <Input
          type="text"
          placeholder="Celular"
          value={phone}
          onChange={(e) => {
            setErrorPhone(false);
            setPhone(e.target.value);
          }}
          error={errorPhone}
          errorMessage="Insira um telefone válido"
          className={modalStyle.formInput}
        />
        <div className={modalStyle.selectBox}>
          <Tooltip show={errorGender} message={'Escolha uma opção.'}>
            <SelectGender
              options={options}
              placeholder="Gênero"
              onChange={(option) => {
                setGender(option.value);
                setErrorGender(false);
              }}
            />
          </Tooltip>
          <Tooltip show={errorDate} message={'Preencha uma data.'}>
            <DatePicker
              locale={locale}
              format="DD/MM/YYYY"
              onClick={() => setErrorDate(false)}
              onChange={handleChange}
              className={modalStyle.formInputSelect}
            />
          </Tooltip>
        </div>

        <button type="submit" className={modalStyle.submitButton}>
          ENVIAR CONVITE
        </button>
      </form>
      {openModal && (
        <Modal
          messageTitle="Voce está convidando:"
          footerMessage="Confirma o envio do convite?"
          handleCloseModal={() => handleCloseModal()}
        >
          <div className={modalStyle.modalInfo}>
            <h1 className={modalStyle.modalName}>{name}</h1>
            <p className={modalStyle.modalContact}>{email}</p>
            <p className={modalStyle.modalContact}>{phone}</p>
          </div>
        </Modal>
      )}
    </section>
  );
}
