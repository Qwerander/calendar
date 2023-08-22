import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { addRecord } from '../../../store/reducers/calendarSlice';
import { v4 as uuid } from 'uuid';

export const useAddRecord = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name) {
      alert('Пожалуйста, заполните все поля формы');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Пожалуйста, введите корректный номер телефона');
      return;
    }

    const data = {
      id: uuid(),
      name,
      phone,
    };
    dispatch(addRecord(data));

    setName('');
    setPhone('');
  };

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/[^\d]/g, '');
    return digitsOnly.length > 10;
  };

  return { name, setName, phone, setPhone, handleSubmit };
};
