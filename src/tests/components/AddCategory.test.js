import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe de mostrarse correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {target: {value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar las cajas de texto', () => {
        const value = 'Hola mundo';

        //1. Simular el Input Change
        wrapper.find('input').simulate('change', {target: {value}});

        //2. Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        //3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //4. El valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
})
