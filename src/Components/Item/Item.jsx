import './Item.scss'
import question from '../../assets/question.svg'
import arrow from '../../assets/arrow_down.svg'
import imgFull from '../../assets/icon_game_full.png'
import imgPart from '../../assets/icon_game_part.png'
import { Children, useState } from 'react'

function Item({title, SubMenu, children}) {
	const [open, setOpen] = useState(false)
	
	return (
		<div className="item">
			<div className="item__title">{title}</div>
			<div className="item__wrapper">
				<div className="item__box">
					<div className="item__block">
						{ (title == 'beforePromo' || title == 'endPromo') && <img src={imgFull} alt="logo game" /> }
						{ !(title == 'beforePromo' || title == 'endPromo') && <img src={imgPart} alt="logo game" /> }
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