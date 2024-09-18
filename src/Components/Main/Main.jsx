import './Main.scss'
import question from '../../assets/question.svg'
import arrow from '../../assets/arrow_down.svg'
import imgFull from '../../assets/icon_game_full.png'
import imgPart from '../../assets/icon_game_part.png'

import { useEffect, useState } from 'react'
import BeforePromo from '../BeforePromo/BeforePromo'
import BeginPromo from '../BeginPromo/BeginPromo'
import PromoList from '../PromoList/PromoList'
import EndingPromo from '../EndingPromo/EndingPromo'
import Table from '../Table/Table'
import EndPromo from '../EndPromo/EndPromo'
import PromoLittleList from '../PromoLittleList/PromoLittleList'

function Main({activeItem, table}) {
	const [open, setOpen] = useState(false)
	useEffect(() => {
		setOpen(false)
	}, [activeItem])
	return (
		<main className="main">
			<div className="main__menu">
				<div className="main__box">
					<div className="main__block">
						{ (activeItem.title == 'beforePromo' || activeItem.title == 'endPromo') && <img src={imgFull} alt="logo game" /> }
						{ !(activeItem.title == 'beforePromo' || activeItem.title == 'endPromo') && <img src={imgPart} alt="logo game" /> }
						<h3 className="main__title">Compenigma August 2020</h3>
					</div>
					<div className="main__block">
						<img src={question} alt="icon question" className="main__question" />
						<p className="main__help">Нужна помощь?</p>
						<img src={arrow} alt="icon arrow" className={`main__arrow ${open ? 'active' : ''}`} onClick={() => setOpen((prev)=>!prev)} />
					</div>
				</div>
				{/* До начала промо */}
				{ open && activeItem.title == 'beforePromo' && <BeforePromo /> }
				{/* Акция началась */}
				{ activeItem.title == 'beginPromo' && <BeginPromo /> }
				{ open && activeItem.title == 'beginPromo' && <PromoList /> }
				{/* Акция завершается */}
				{ activeItem.title == 'endingPromo' && <EndingPromo /> }
				{
					open && activeItem.title == 'endingPromo' &&
					<>
						<Table table={table}/>
						<PromoList />
					</>
				}
				{/* Акция завершена */}
				{ activeItem.title == 'endPromo' && <EndPromo /> }
				{
					open && activeItem.title == 'endPromo' &&
					<>
						<Table table={table}/>
						<PromoLittleList />
					</>
				}
			</div>
		</main>
	)
}

export default Main