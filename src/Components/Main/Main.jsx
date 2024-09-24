import './Main.scss'
import question from '../../assets/question.svg'
import arrow from '../../assets/arrow_down.svg'
import img from '../../assets/icon_game_base.png'

import { useEffect, useState } from 'react'
import BeforePromo from '../BeforePromo/BeforePromo'
import BeginPromo from '../BeginPromo/BeginPromo'
import PromoList from '../PromoList/PromoList'
import EndingPromo from '../EndingPromo/EndingPromo'
import Table from '../Table/Table'
import EndPromo from '../EndPromo/EndPromo'
import PromoLittleList from '../PromoLittleList/PromoLittleList'

function Main({activeItem, table}) {
	const [open, setOpen] = useState(false);
	const title = activeItem.title;
	const isFullImage = ()=>(title === 'beforePromo' || title === 'endPromo');
	const fillSettings = isFullImage() ? 'rgb(247 65 32) 10%, #8B0000 100%' : 'rgb(205 21 21) 32%';
	const backgroundFill = {background: `linear-gradient(to top, ${fillSettings}, #27292e 0%)`}
	const isBeforePromo = ()=>(title === 'beforePromo');
	const isBeginPromo = ()=>(title === 'beginPromo');
	const isEndingPromo = ()=>(title === 'endingPromo');
	const isEndPromo = ()=>(title === 'endPromo');

	useEffect(() => {
		setOpen(false)
	}, [activeItem])
	return (
		<main className="main">
			<div className="menu">
				<div className="menu__box">
					<div className="menu__box-header">
						<div className="menu__box-img" style={backgroundFill}>
							<img src={img} alt="logo game" /> 
						</div>
						<h3 className="menu__box-title">Compenigma August 2020</h3>
					</div>
					<div className="menu__box-description">
						<img src={question} alt="icon question" className="menu__box-question" />
						<p className="menu__box-help">Нужна помощь?</p>
						<img src={arrow} alt="icon arrow" className={`menu__box-arrow ${open ? 'menu__box-arrow_active' : ''}`} onClick={() => setOpen((prev)=>!prev)} />
					</div>
				</div>

				{/* До начала промо */}
				{ isBeforePromo() && open && <BeforePromo /> }

				{/* Акция началась */}
				{ isBeginPromo() && (
					<>
						<BeginPromo />
						{ open && <PromoList /> }
					</>
				)}

				{/* Акция завершается */}
				{ isEndingPromo() && (
					<>
						<EndingPromo />
						{ open && (
						<>
							<Table table={table} />
							<PromoList />
						</>
						)}
					</>
				)}

				{/* Акция завершена */}
				{ isEndPromo() && (
					<>
						<EndPromo />
						{ open && (
						<>
							<Table table={table} />
							<PromoLittleList />
						</>
						)}
					</>
				)}
				
			</div>
		</main>
	)
}

export default Main