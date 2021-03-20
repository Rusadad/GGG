import React from 'react'
import Logo from '../../../assets/logo.svg'
import Services from '../../../assets/Services.svg'
import Search from '../../../assets/Search.svg'
import Emili from '../../../assets/Emili.svg'
import User from '../../../assets/User.svg'
import style from './header.module.scss'
export default function Header() {
    return (
        <div>
            <div className={style.Header}>


                <div className="logo">
                    <img src={Logo} />
                </div>


                <div className={style.Header}>
                    <img src={Services} />
                    <p className={style.Text}>Сервисы</p>
                </div>


                <div className={style.Header}>
                    <img src={Search} />
                    <p className={style.Text}>Поиск</p>
                </div>


                <div className={style.Header}>
                    <div className={style.TextEmili}>
                        <p className={style.Hello}>Привет. Я Эмили</p>
                    </div>
                    <img src={Emili} />
                </div>


                <div className={style.Header}>
                    <img src={User} className={style.User} />
                </div>


            </div>
        </div>
    )
}
