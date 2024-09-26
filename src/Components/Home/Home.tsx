import './Home.scss';
const Home: React.FC = () => {
  return (
    <>
      <main className='layout__main'>
        <header className='layout__header'>
          <div className='layout__menu'>
            <button className='layout__menu-button'>☰</button>
          </div>
          <h1 className='layout__title'>Title</h1>
          <div className='layout__profile'>
            <button className='layout__profile-button'>👤</button>
          </div>
        </header>
        <section className='layout__form'>
          <form className='form'>
            <div className='form__group'>
              <label htmlFor='value' className='form__label'>
                Value
              </label>
              <textarea id='value' className='form__textarea' />
            </div>

            <div className='form__group'>
              <label htmlFor='country' className='form__label'>
                Country
              </label>
              <select id='country' className='form__select'>
                <option>Value</option>
              </select>
            </div>

            <div className='form__group'>
              <label htmlFor='province' className='form__label'>
                Province
              </label>
              <select id='province' className='form__select'>
                <option>Value</option>
              </select>
            </div>

            <div className='form__group'>
              <label htmlFor='city' className='form__label'>
                City
              </label>
              <select id='city' className='form__select'>
                <option>Value</option>
              </select>
            </div>

            <button className='form__button' type='submit'>
              Next ➔
            </button>
          </form>
        </section>
        <section className='layout__content'>
          <h2 className='content__heading'>Heading</h2>
          <h3 className='content__subheading'>Subheading</h3>
          <p className='content__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia
            voluptas sit accusamus ab quibusdam libero dolorum est ducimus
            voluptates ea sed, exercitationem nesciunt nam quas, repellat magni
            fuga dicta!
          </p>
          <p className='content__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            porro dicta velit earum? Autem eos reprehenderit inventore
            cupiditate dolore odio quisquam! Tempore reiciendis modi eos fuga,
            sunt earum consectetur ipsa.
          </p>
          <div className='content__image-placeholder'></div>
        </section>
      </main>
    </>
  );
};

export default Home;
