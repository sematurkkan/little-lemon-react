function About() {
    return (
      <main>
        <section className="about">
          <div className="about-content">
            <div className="about-text">
              <h2>About Little Lemon</h2>
              <p>
                Little Lemon opened in 1985 by two Italian brothers, Adrian and Mario. Despite the city's diversity, 
                the two brothers were inspired to bring the flavors of their hometown in Italy to the people of Chicago. 
                The two brothers continued to oversee the Little Lemon restaurant, nearly thirty years later.
              </p>
              <p style={{ marginTop: '20px' }}>
                Our commitment to quality ingredients and traditional recipes ensures that every dish we serve 
                is an authentic taste of the Mediterranean. We pride ourselves on our warm hospitality and 
                exceptional dining experience.
              </p>
            </div>
            <div className="about-image">
              <img src="/assets/food3.jpeg" alt="Little Lemon restaurant food" />
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default About;