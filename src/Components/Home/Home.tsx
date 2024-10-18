import './Home.scss';
import { useEffect, useState } from 'react';
import data from '../../data/openapi.json';

interface City {
  name: string;
  code: number;
}

interface Province {
  name: string;
  code: number;
  cities: City[];
}

const Home: React.FC = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<number | string>('');
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        if (data.provinces) {
          setProvinces(data.provinces);
        } else {
          throw new Error('No provinces found.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const selected = provinces.find(
      (province) => province.code === Number(selectedProvince)
    );
    setCities(selected ? selected.cities : []);
  }, [selectedProvince, provinces]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedCityCode = parseInt(e.currentTarget.city.value);
    const selectedCity = cities.find((city) => city.code === selectedCityCode);
    console.log('Selected Province:', selectedProvince);
    console.log('Selected City:', selectedCity);
  };

  return (
    <main className='layout__main'>
      <header className='layout__header'>
        <div className='layout__menu'>
          <button className='layout__menu-button'>☰</button>
        </div>
        <h1 className='layout__title'>Explore Vietnam</h1>
        <div className='layout__profile'>
          <button className='layout__profile-button'>👤</button>
        </div>
      </header>

      <section className='layout__form'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form className='form' onSubmit={handleSubmit}>
            <div className='form__group'>
              <label htmlFor='country' className='form__label'>
                Country
              </label>
              <select id='country' className='form__select' disabled>
                <option>Vietnam</option>
              </select>
            </div>

            <div className='form__group'>
              <label htmlFor='province' className='form__label'>
                Province
              </label>
              <select
                id='province'
                className='form__select'
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
              >
                <option value=''>Select a province</option>
                {provinces.map(({ code, name }) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div className='form__group'>
              <label htmlFor='city' className='form__label'>
                City
              </label>
              <select
                id='city'
                className='form__select'
                disabled={!selectedProvince}
              >
                <option value=''>Select a city</option>
                {cities.map(({ code, name }) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className='form__button'
              type='submit'
              disabled={!selectedProvince || !cities.length}
            >
              Find ➔
            </button>
          </form>
        )}
        {error && <p className='error'>{error}</p>}
      </section>

      <section className='layout__content'>
        <h2 className='content__heading'>Vietnam Provinces and Cities</h2>
        <h3 className='content__subheading'>
          Explore popular cities by province
        </h3>
        <p className='content__text'>
          Select a province to see its popular cities and explore more about
          Vietnam's geography.
        </p>
        <div className='content__image-placeholder'></div>
      </section>
    </main>
  );
};

export default Home;
