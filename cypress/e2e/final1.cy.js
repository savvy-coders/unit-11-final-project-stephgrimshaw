describe('HTML Test 1', () => {
  beforeEach(()=> {
    cy.visit('/');
  })

  it('should have the correct title', () => {
    cy.visit('/index.html');
    cy.title().should('not.be.empty');
  });
  
  it('should link to the CSS file', () => {
    cy.visit('/index.html');
    cy.get('link[rel=stylesheet]').should('have.attr', 'href').and('include', 'styles.css');
  });

  it('should have a header with text', () => {
    cy.visit('/index.html');
    cy.get('header').should('not.be.empty');
  });

  it('should have a button with id "timeCheckBtn"', () => {
    cy.visit('/index.html');
    cy.get('button#timeCheckBtn').should('exist');
  });

  it('should have a div with id "time"', () => {
    cy.visit('/index.html');
    cy.get('div#time').should('exist');
  });

  it('should have a div with id "about-me" and class "content"', () => {
    cy.visit('/index.html');
    cy.get('div#about-me.content').should('exist');
  });

  it('should have specific elements inside "about-me" div', () => {
    cy.visit('/index.html');
    cy.get('div#about-me').within(() => {
      cy.get('h1').should('not.be.empty');
      cy.get('img#my-pic').should('exist');
      cy.get('p').should('not.be.empty');
    });
  });

  it('should have a div with id "now-learning" and class "content"', () => {
    cy.visit('/index.html');
    cy.get('div#now-learning.content').should('exist');
  });

  it('should have specific elements inside "now-learning" div', () => {
    cy.visit('/index.html');
    cy.get('div#now-learning').within(() => {
      cy.get('h1').should('not.be.empty');
      cy.get('ul li').should('have.length.at.least', 1);
    });
  });

  it('should have a footer with navigation link', () => {
    cy.visit('/index.html');
    cy.get('footer').within(() => {
      cy.get('p').should('not.be.empty');
      cy.get('a').should('have.attr', 'href').and('include', 'page2.html');
    });
  });

  it('should have the correct title', () => {
    cy.visit('/page2.html');
    cy.title().should('not.be.empty');
  });

  it('should link to the CSS file', () => {
    cy.visit('/page2.html');
    cy.get('link[rel=stylesheet]').should('have.attr', 'href').and('include', 'styles.css');
  });

  it('should have a div with id "vacation-content"', () => {
    cy.visit('/page2.html');
    cy.get('div#vacation-content').should('exist');
  });
  
  it('should have specific elements inside "vacation-content" div', () => {
    cy.visit('/page2.html');
    cy.get('div#vacation-content').within(() => {
      cy.get('h1').should('not.be.empty');
      cy.get('img').should('have.length.at.least', 1);
      cy.get('p').should('not.be.empty');
    });
  });

  it('should have a footer with navigation link', () => {
    cy.visit('/page2.html');
    cy.get('footer').within(() => {
      cy.get('p').should('not.be.empty');
      cy.get('a').should('have.attr', 'href').and('include', 'index.html');
    });
  });

  it('should have a background color for the body', () => {
    cy.visit('/index.html');
    cy.get('body').should('have.css', 'background-color').and('not.be.empty');
  });

  it('should have a margin of 0 for the body', () => {
    cy.visit('/index.html');
    cy.get('body').should('have.css', 'margin', '0px');
  });

  it('should have a different text color for all divs', () => {
    cy.visit('/index.html');
    cy.get('div').should('have.css', 'color').and('not.be.empty');
  });
  
  it('should have Arial, Helvetica, sans-serif font-family for all <p> and <h1> tags', () => {
    cy.visit('/index.html');
    cy.get('p, h1').should('have.css', 'font-family', 'Arial, Helvetica, sans-serif');
  });

  it('should have center-aligned text in <header> and <footer>', () => {
    cy.visit('/index.html');
    cy.get('header, footer').should('have.css', 'text-align', 'center');
  });

  it('should have a background color for the <footer>', () => {
    cy.visit('/index.html');
    cy.get('footer').should('have.css', 'background-color').and('not.be.empty');
  });

  it('should have a border-radius for all <img> tags', () => {
    cy.visit('/index.html');
    cy.get('img').should('have.css', 'border-radius', '25px');
  });

  it('should have center-aligned contents of the body', () => {
    cy.visit('/index.html');
    cy.get('body').should('have.css', 'text-align', 'center');
  });

  it('should have a specific font-weight for text in the footer', () => {
    cy.visit('/index.html');
    cy.get('footer').should('have.css', 'font-weight').and('not.be.empty');
  });

  it('should have text-decoration for all <h1> tags', () => {
    cy.visit('/index.html');
    cy.get('h1').should('have.css', 'text-decoration').and('not.be.empty');
  });

  it('should have list-style-type of the <ul> set to none', () => {
    cy.visit('/index.html');
    cy.get('ul').should('have.css', 'list-style-type', 'none');
  });

  it('should have readable font-size for <li>', () => {
    cy.visit('/index.html');
    cy.get('li').should('have.css', 'font-size').and('not.be.empty');
  });

  it('should clear the date and time after 5 seconds', () => {
    cy.get('#timeCheckBtn').click();
    cy.wait(5000);

    cy.get('#time').should('have.text', '');
  }); 

  it('should display the current date and time when the button is clicked', () => {
    cy.visit('/index.html'); 
    cy.get('#timeCheckBtn').click();
    cy.get('#time').should('not.be.empty');
  });
  
  it('should trigger the display of date and time on button click', () => {
    cy.visit('/index.html');
    cy.get('#timeCheckBtn').click();
    cy.get('div#time').should('not.be.empty');
  });

  it('should display the current date and time when the button is clicked', () => {
    cy.get('#timeCheckBtn').click();
    cy.wait(5);
    cy.get('#time').should('not.be.empty');
  });

  it('should clear the date and time after 5 seconds', () => {
    cy.get('#timeCheckBtn').then(theBtn => {
      cy.log(theBtn);
    })
    cy.wait(5000);

    cy.get('#time').should('be.empty');
  });
})