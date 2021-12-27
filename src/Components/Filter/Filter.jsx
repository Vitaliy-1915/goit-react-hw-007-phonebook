// import React from 'react';
// // import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { changeFilter } from '../../redux/contacts/contacts-actions';
// import s from '../Filter/Filter.module.css';

// // function Filter(props) {
// // const { onChange, value } = props;

// export default function Filter() {
//   const value = useSelector(state => state.contacts.Filter);
//   const dispatch = useDispatch();

//   const onChange = e => dispatch(changeFilter(e.currentTarget.value));

//   return (
//     <label className={s.label}>
//       Find contacts by name
//       <input
//         className={s.input}
//         type="text"
//         name="name"
//         value={value}
//         onChange={onChange}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//         required
//       />
//     </label>
//   );
// }

// const mapStateToProps = state => ({
//   value: state.contacts.Filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
