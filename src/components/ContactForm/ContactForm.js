import { useState } from 'react';
import PropTypes from 'prop-types';
//import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeInputName = event => {
    setName(event.currentTarget.value);
  };

  const changeInputNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const data = { name, number };
    onSubmit(data);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={hendleSubmit} className={css.formWrap}>
      <div className={css.inputWrap}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          value={name}
          onChange={changeInputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.inputWrap}>
        <label className={css.label}>Number</label>
        <input
          className={css.input}
          value={number}
          onChange={changeInputNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
/* class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    hendleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({[name] : value, id: nanoid(),});
    }

    hendleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name:'', number:'' });
    };


    render() {
        return (
            <form onSubmit={this.hendleSubmit} className={css.formWrap}>
                <div className={css.inputWrap}>
                    <label className={css.label}>Name</label>
                    <input
                        className={css.input}
                        value={this.state.name}
                        onChange={this.hendleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />  
                </div>
                <div className={css.inputWrap}>
                    <label className={css.label}>Number</label>
                    <input
                        className={css.input}
                        value={this.state.number}
                        onChange={this.hendleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>   
                <button className={css.button} type='submit'>
                    Add contact
                </button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm; */
