import '../css/landing.css';



const Home = () => {

    return (
        <div className="landing__container">
            <div className="landing__content">
                <h3>Choose your language</h3>

                <div className='landing__link__container'>
                    <div className='landing__bo'>
                        <a href="/french"><img span className="landing__french" src="/assets/france.svg" alt="france.svg"/></a>
                    </div>
                    <div>
                        <a href="/#"><img span className="landing__spanish" src="/assets/spain.svg" alt="spain.svg"/></a>
                    </div>
                </div>
                
            </div>
        </div>
    );
  };
  
  export default Home;