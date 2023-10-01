import { useState } from 'react'
import './CostForm.css'
function CostForm(props) {
	const [inputName, setInputName] = useState('')
	const [inputAmount, setInputAmount] = useState('')
	const [inputDate, setInputDate] = useState('')
	const changeNameHandler = event => {
		setInputName(event.target.value)
	}
	const changeAmountHandler = event => {
		setInputAmount(event.target.value)
	}
	const changeDateHandler = event => {
		setInputDate(event.target.value)
	}
	const formRender = () => {
		props.onChangeFormRender(!props.formRenderState)
	}
	const submitHandler = event => {
		event.preventDefault()
		const costData = {
			name: inputName,
			amount: inputAmount,
			date: new Date(inputDate),
		}
		props.onSaveCostData(costData)
		setInputName('')
		setInputAmount('')
		setInputDate('')
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='new-cost__controls'>
				<div className='new-cost__control'>
					<label>Название</label>
					<input type='text' onChange={changeNameHandler} value={inputName} />
				</div>
				<div className='new-cost__control'>
					<label>Сумма</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={changeAmountHandler}
						value={inputAmount}
					/>
				</div>
				<div className='new-cost__control'>
					<label>Дата</label>
					<input
						type='date'
						min='2019-01-01'
						step='2023-12-31'
						onChange={changeDateHandler}
						value={inputDate}
					/>
				</div>
				<div className='new-cost__actions'>
					<button type='submit'>Добавить расход</button>
					<button onClick={formRender}>Отмена</button>
				</div>
			</div>
		</form>
	)
}
export default CostForm
