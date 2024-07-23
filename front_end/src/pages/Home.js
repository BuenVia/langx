import '../css/landing.css';



const Home = () => {

    return (
        <div className="container p-3">
            {/* <header className="header">
                <h1 className="title">LangX</h1>
                <p className="tagline">"Unlock the World with Words"</p>
            </header> */}

            <div className="landing__content">

                <div className='landing__link__container'>
                    <a href="/french"><img span className="landing__french" src="/assets/france.svg" alt="france.svg"/></a>
                    <a href="/#"><img span className="landing__spanish" src="/assets/spain.svg" alt="spain.svg"/></a>
                </div>
                
            </div>
        </div>
    );
  };
  
  export default Home;