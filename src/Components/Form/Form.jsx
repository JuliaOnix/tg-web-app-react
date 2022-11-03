import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css'

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
          text: 'Send data'
        })
    }, [])

    useEffect(() => {
        if (!street || !country) {
          tg.MainButton.hide()
        } else {
          tg.MainButton.show()
        }
    }, [country, street])
    

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

  return (
    <div className={'form'}>
        <h3>Enter your data</h3>
        <input 
        className={'input'} 
        type="text" 
        placeholder={'Country'}
        value={country}
        onChange={onChangeCountry} 
        />

        <input 
        className={'input'} 
        type="text" 
        placeholder={'Distrit'} 
        value={street}
        onChange={onChangeStreet}
        />

        <select value={subject} onChange={onChangeSubject} className={'select'}>
            <option value={'physical'}>Phys Face</option>
            <option value={'legal'}>Ur Face</option>
        </select>
    </div>
  )
}

export default Form