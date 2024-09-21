import './Aside.scss'
import img from '../../assets/icon_user.svg'

function Aside({data, activeItem, setActiveItem}) {
	
	return (
		<aside className="aside">
			<div className="aside__top"></div>
			<div className="aside__box">
				<img src={img} alt="icon user" className='aside__img' />
				<p className="aside__text">Юзер
				авторизован</p>
			</div>
		</aside>
	)
}

export default Aside