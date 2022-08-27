import './Home.css';

function Home () {

    return (

      <div className = "App" id="HomePage">
       
        <header className = "App-header">
           
          <p> #RUN FOR WATER <br></br> 2022 ｜ 5K </p>
          <p className = "App-slogan"> <span style = {{color: "white"}}>RUN</span> & <span style = {{color: "white"}}>WALK</span> ｜ CLEAN WATER, ONE STRIDE AT A TIME </p>
          
          </header>

        <p className = "App-info"> August 28, 2022 ｜ Busse Woods Grove 29 ｜ 9:00 a.m. ｜ $30 per entry </p>
        <p className = "App-info"> Goal: $6000 raised </p>


          <div>

            <p>

              On <span className = "App-emph">August 28th</span>, join us in an opportunity to change a community’s life.
              In partnership with <span className = "App-emph">The Water Project</span>, we have organized the <span className = "App-emph">#RUNFORWATER 2022 5K</span>.
              Join us in our run and on our journey to raise money for a water well to help a community in <span className = "App-emph">Kenya, Africa</span>.
              For more information, visit <a className = "App-emph" href = "https://thewaterproject.org/">www.runforwater.org</a>.
            
            </p>
        
          </div>

          <p className = "App-subheader"> THE TEAM </p>

      </div>

    );

}

export default Home;