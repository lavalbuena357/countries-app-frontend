import React, { useEffect } from 'react';
import style from './CountryDetail.module.css';
import { connect } from 'react-redux';
import { countryDetail } from '../../redux/actions';

function CountryDetail({ countryDetail, detail, match }) {
  const { params } = match

  useEffect(() => {
    countryDetail(params.id)
  }, []) // eslint-disable-line

  const area = Intl.NumberFormat().format(detail && detail.area)

  const population = Intl.NumberFormat().format(detail && detail.population)

  return (
    <div className={style.container}>
      <div className={style.info_sup}>
        <div className={style.basic_info}>
          <h1>{`${detail && detail.name} - ${detail && detail.id}`}</h1>
          <h3>{detail && detail.capital}</h3>
          <h4>{`${detail && detail.continent} - ${detail && detail.subregion}`}</h4>
          <img src={detail && detail.flag} alt={`bandera de ${detail && detail.name}`} />
        </div>
        <div className={style.other_info}>
          <h3>Borders:</h3>
          <ul>
            {detail && detail.borders.map((el, i) => 
              <li key={i}>
                <a href={`/detail/${el}`}>{el}</a>
              </li>
            )}
          </ul>
          <p>
            <span>{`Area: ${area} km2`}</span>
            <span>{`Lat: ${detail && detail.latlng[0]}`}</span>
            <span>{`Lng: ${detail && detail.latlng[1]}`}</span>
          </p>
          <p>
            <span>{`Demonym: ${detail && detail.demonym}`}</span>
            <span>{`Population: ${population}`}</span>
          </p>
        </div>
      </div>
      <div className={style.info_inf}>
        <div className={style.languages}>
          <h3>Languages:</h3>
          <ul>
            {detail && detail.languages.map((el, i) => 
              <ul key={i}>
                <li>{`Name: ${el.name}`}</li>
                <li>{`Native Name: ${el.nativeName}`}</li>
                <li>{`ISO: ${el.iso639_1}`}</li>
                <br/>
              </ul>
            )}
          </ul>
        </div>
        <div className={style.languages}>
          <h3>Currencies:</h3>
          <ul>
            {detail && detail.currencies.map((el, i) => 
              <ul key={i}>
                <li>{`Name: ${el.name}`}</li>
                <li>{`Symbol: ${el.symbol}`}</li>
                <li>{`Code: ${el.code}`}</li>
                <br/>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    detail: state.detail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    countryDetail : (payload) => dispatch(countryDetail(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);