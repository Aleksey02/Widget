import './BeforePromo.scss'
import { useEffect, useState } from 'react'

function getTime(){
	const now = new Date();
	const target = new Date(Date.now() + 24 * 60 * 60 * 1000);
	target.setHours(0);
	target.setMinutes(0);
	target.setSeconds(0);
	target.setMilliseconds(0);
	const diff = target - now;
	const hours = Math.floor(diff / 1000 / 60 / 60);
	const minutes = Math.floor((diff / 1000 / 60) % 60);
	const seconds = Math.floor((diff / 1000 ) % 60 );
	
	return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
	
}

function BeforePromo(){
	const [time, setTime] = useState(getTime())
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(getTime());
		}, 1000)
		return () => clearInterval(interval)
	}, [])
	return (
		<div className="beforePromo">
			<p className="beforePromo__text">Начало через:</p>
			<p className="beforePromo__text">{time}</p>
		</div>
	)
}

export default BeforePromo