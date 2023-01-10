import React from 'react';
import './MainPage.scss';
import '../../assets/svg/arrow-down.svg';

export const MainPage = () => {
    return (
        <>
            <section className='banner'>
                <div className='banner__container'>
                    <div className='banner__info'>
                        <h1>Фефилова Ольга Алексеевна</h1>
                        учитель английского языка
                    </div>
                    <div className='banner__img'>
                        <img src={ require('../../assets/img/Фефилова.png') } alt="фото Фефиловой" className='banner__img-img' />
                    </div>
                </div>
                <div className='banner__arrow'>
                    <div className='icon'>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#arrow-down"></use>
                        </svg>
                    </div>
                </div>
            </section>

            <section className='about'>
                <h2>Обо Мне</h2>
                <div className='about__gallery'>
                    <div className='about__text'>
                        Я учитель английского языка высшей категории со стажем работы 13 лет. Имею успешный опыт исследовательской работы с учениками и подготовки их к ОГЭ. Но больше всего мне нравится работать с малышами начальной школы.
                    </div>
                    <div className='about__img'>
                        <img src={ require('../../assets/img/Ученица.png') } className="about__img-img" alt="" />
                    </div>
                    <div className='about__img'>
                        <img src={ require('../../assets/img/карандаши.png') } className="about__img-img" alt="" />
                    </div>
                    <div className='about__img'>
                        <img src={ require('../../assets/img/Ученица.png') } className="about__img-img" alt="" />
                    </div>
                    <div className='about__img'>
                        <img src={ require('../../assets/img/карандаши.png') } className="about__img-img" alt="" />
                    </div>
                    <div className='about__img-double'>
                    <img src={ require('../../assets/img/читательница.png') } className="about__img-img" alt="" />
                    </div>
                    
                </div>
            </section>

            <section className='for-download'>
                <h2>Учителям</h2>

                <div className='for-download__tiles'>
                    <div className='for-download__tile'>
                        <div className='for-download__img'>
                            <img src={ require('../../assets/img/Ученица.png') } className="for-download__img-img" alt="" />
                        </div>
                        Инновационный проект «Научное общество обучающихся»
                        <a href='#' className='for-download__button'>Скачать</a>
                    </div>
                    <div className='for-download__tile'>
                        <div className='for-download__img'>
                            <img src={ require('../../assets/img/Ученица.png') } className="for-download__img-img" alt="" />
                        </div>
                        Инновационный проект «Научное общество обучающихся»
                        <a href='#' className='for-download__button'>Скачать</a>
                    </div>
                    <div className='for-download__tile'>
                        <div className='for-download__img'>
                            <img src={ require('../../assets/img/Ученица.png') } className="for-download__img-img" alt="" />
                        </div>
                        Инновационный проект «Научное общество обучающихся»
                        <a href='#' className='for-download__button'>Скачать</a>
                    </div>
                    <div className='for-download__tile'>
                        <div className='for-download__img'>
                            <img src={ require('../../assets/img/Ученица.png') } className="for-download__img-img" alt="" />
                        </div>
                        Инновационный проект «Научное общество обучающихся»
                        <a href='#' className='for-download__button'>Скачать</a>
                    </div>
                </div>
            </section>

            <section className='for-download'>
                <h2>Родителям</h2>
            </section>
        </>
    )
}