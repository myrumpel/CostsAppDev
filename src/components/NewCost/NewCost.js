import { useState } from 'react'
import CostForm from './CostForm'
import './NewCost.css'
function NewCost(props) {
	const [formRender, setFormRender] = useState(false)
	const changeFormRender = response => {
		setFormRender(response)
	}
	const saveCostDataHandler = inputCostData => {
		const costData = {
			...inputCostData,
			id: Math.random().toString(),
		}

		props.onAddCost(costData)
	}
	return (
		<div className='new-cost'>
			{!formRender ? (
				<button onClick={changeFormRender}>Добавить новый расход</button>
			) : (
				<CostForm
					onSaveCostData={saveCostDataHandler}
					onChangeFormRender={changeFormRender}
					formRenderState={formRender}
				/>
			)}
		</div>
	)
}
export default NewCost
