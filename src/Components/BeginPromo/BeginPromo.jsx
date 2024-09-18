import './BeginPromo.scss'

function BeginPromo(){
	return (
		<div className="beginPromo">
			<div className="beginPromo__flex">
				<p className="beginPromo__text">Следующее очко:</p>
				<p className="beginPromo__text beginPromo__cost">$5.00</p>
			</div>
			<div className="beginPromo__flex">
				<p className="beginPromo__text">Сброс очков:</p>
				<p className="beginPromo__text">02:37:07</p>
			</div>
		</div>
	)
}

export default BeginPromo