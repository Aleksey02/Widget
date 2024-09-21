import './Item.scss'
import question from '../../assets/question.svg'
import arrow from '../../assets/arrow_down.svg'

import img from '../../assets/icon_game_base.png'
import { useState } from 'react'

function Item({title, SubMenu, children}) {
	const [open, setOpen] = useState(false)
	const imageColor = (title === 'До начала промо' || title === 'Акция завершена') ? 'rgb(247 65 32) 10%, #8B0000 100%' : 'rgb(205 21 21) 32%';
	return (
		<div className="item">
			<div className="item__title">{title}</div>
			<div className="item__wrapper">
				<div className="item__box">
					<div className="item__block">
						<div className="item__img" style={{background: `linear-gradient(to top, ${imageColor}, #27292e 0%)`}}>
							<img src={img} alt="logo game" /> 
						</div>
						<h3 className="item__subtitle">Compenigma August 2020</h3>
					</div>
					<div className="item__block">
						<img src={question} alt="icon question" className="item__question" />
						<p className="item__help">Нужна помощь?</p>
						<img src={arrow} alt="icon arrow" className={`item__arrow ${open ? 'active' : ''}`} onClick={() => setOpen((prev)=>!prev)} />
					</div>
				</div>
				{SubMenu && <SubMenu />}
				{open && children}
			</div>
		</div>
	)
}

export default Item