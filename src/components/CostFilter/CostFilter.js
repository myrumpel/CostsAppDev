import { useState } from 'react'
import './CostFilter.css'
function CostFilter(props) {
	const [year, setYear] = useState('2019')
	const yearChangeHandler = event => {
		setYear(event.target.value)
		props.onAddYearFilter(event.target.value)
	}

	return (
		<div className='cost-filter'>
			<label>Фильтр по {props.isSelectedYear} году</label>
			<select onChange={yearChangeHandler} value={props.isSelectedYear}>
				<option value='2019'>2019</option>
				<option value='2020'>2020</option>
				<option value='2021'>2021</option>
				<option value='2022'>2022</option>
				<option value='2023'>2023</option>
			</select>
		</div>
	)
}
export default CostFilter
