  describe('should have the correct title', () => {
    it('has correct title on index', () => {
      cy.visit('/index.html');
      cy.title().should('not.be.empty');
    });
  });

  describe('should link to CSS file', () => {
    it('links to CSS on index', () => {
      cy.visit('/index.html');
      cy.get('link[rel=stylesheet]').should('have.attr', 'href').and('include', 'styles.css');
    });
  });
  
  describe('should have header with text', () => {
    it('has header text', () => {
      cy.visit('/index.html');
      cy.get('header').should('not.be.empty');
    });
  });

  describe('should have button with id', () => {
    it('has button', () => {
      cy.visit('/index.html');
      cy.get('button#timeCheckBtn').should('exist');
    });
  });

  describe('should have div with id time', () => {
    it('has time div', () => {
      cy.visit('/index.html');
      cy.get('div#time').should('exist');
    });
  });

  describe('should have about-me div', () => {
    it('has about-me div', () => {
      cy.visit('/index.html');
      cy.get('div#about-me.content').should('exist');
    });
  });

  describe('should have elements in about-me div', () => {
    it('has inner elements', () => {
      cy.visit('/index.html');
      cy.get('div#about-me').within(() => {
        cy.get('h1').should('not.be.empty');
        cy.get('img#my-pic').should('exist');
        cy.get('p').should('not.be.empty');
      });
    });
  });

  describe('should have now-learning div', () => {
    it('has now-learning div', () => {
      cy.visit('/index.html');
      cy.get('div#now-learning.content').should('exist');
    });
  });

  describe('should have elements in now-learning div', () => {
    it('has inner elements', () => {
      cy.visit('/index.html');
      cy.get('div#now-learning').within(() => {
        cy.get('h1').should('not.be.empty');
        cy.get('ul li').should('have.length.at.least', 1);
      });
    });
  });

  describe('should have footer with link', () => {
    it('has footer link', () => {
      cy.visit('/index.html');
      cy.get('footer').within(() => {
        cy.get('p').should('not.be.empty');
        cy.get('a').should('have.attr', 'href').and('include', 'page2.html');
      });
    });
  });

  describe('should have correct title on page 2', () => {
    it('has title', () => {
      cy.visit('/page2.html');
      cy.title().should('not.be.empty');
    });
  });

  describe('should link to CSS on page 2', () => {
    it('links CSS', () => {
      cy.visit('/page2.html');
      cy.get('link[rel=stylesheet]').should('have.attr', 'href').and('include', 'styles.css');
    });
  });

  describe('should have vacation-content div on page 2', () => {
    it('has div', () => {
      cy.visit('/page2.html');
      cy.get('div#vacation-content').should('exist');
    });
  });

  describe('should have elements in vacation-content div on page 2', () => {
    it('has inner elements', () => {
      cy.visit('/page2.html');
      cy.get('div#vacation-content').within(() => {
        cy.get('h1').should('not.be.empty');
        cy.get('img').should('have.length.at.least', 1);
        cy.get('p').should('not.be.empty'); 
      });
    });
  });

  describe('should have footer with link on page 2', () => {
    it('has footer link', () => {
      cy.visit('/page2.html');
      cy.get('footer').within(() => {
        cy.get('p').should('not.be.empty');
        cy.get('a').should('have.attr', 'href').and('include', 'index.html');
      });
    });
  });

  describe('should have background color for body', () => {
    it('has background color', () => {
      cy.visit('/index.html');
      cy.get('body').should('have.css', 'background-color').and('not.be.empty');
    });
  });

  describe('should have 0 margin for body', () => {
    it('has 0 margin', () => {
      cy.visit('/index.html');
      cy.get('body').should('have.css', 'margin', '0px');
    });
  });

  describe('should have different text color for divs', () => {
    it('has text color', () => {
      cy.visit('/index.html');
      cy.get('div').should('have.css', 'color').and('not.be.empty');
    });
  });

  describe('should have font-family for p and h1', () => {
    it('has font-family', () => {
      cy.visit('/index.html');
      cy.get('p, h1').should('have.css', 'font-family', 'Arial, Helvetica, sans-serif');
    });
  });

  describe('should have centered text for header and footer', () => {
    it('has centered text', () => {
      cy.visit('/index.html');
      cy.get('header, footer').should('have.css', 'text-align', 'center');
    });
  });

  describe('should have background color for footer', () => {
    it('has bg color', () => {
      cy.visit('/index.html');
      cy.get('footer').should('have.css', 'background-color').and('not.be.empty');
    });
  });

  describe('should have border-radius for images', () => {
    it('has border-radius', () => {
      cy.visit('/index.html');
      cy.get('img').should('have.css', 'border-radius', '25px');
    });
  });

  describe('should have centered body content', () => {
    it('has centered content', () => {
      cy.visit('/index.html');
      cy.get('body').should('have.css', 'text-align', 'center');
    });
  });

  describe('should have font-weight for footer', () => {
    it('has font-weight', () => {
      cy.visit('/index.html');
      cy.get('footer').should('have.css', 'font-weight').and('not.be.empty');
    });
  });

  describe('should have text-decoration for h1', () => {
    it('has text-decoration', () => {
      cy.visit('/index.html');
      cy.get('h1').should('have.css', 'text-decoration').and('not.be.empty');
    });
  });

  describe('should have no list style for ul', () => {
    it('has no list style', () => {
      cy.visit('/index.html');
      cy.get('ul').should('have.css', 'list-style-type', 'none');
    });
  });

  describe('should have font-size for li', () => {
    it('has font-size', () => {
      cy.visit('/index.html');
      cy.get('li').should('have.css', 'font-size').and('not.be.empty');
    });
  });

  describe('should clear time after 5 seconds', () => {
    it('clears time', () => {
      cy.get('#timeCheckBtn').click();
      cy.wait(5000);
      cy.get('#time').should('have.text', '');
    });
  });

  describe('should display date/time on click', () => {
    it('displays date/time', () => {
      cy.visit('/index.html');
      cy.get('#timeCheckBtn').click();
      cy.get('#time').should('not.be.empty');
    });
  });

  describe('should trigger display on click', () => {
    it('displays on click', () => {
      cy.visit('/index.html');
      cy.get('#timeCheckBtn').click();
      cy.get('div#time').should('not.be.empty');
    });
  });

  describe('should display date/time on click', () => {
    it('displays date/time', () => {
      cy.get('#timeCheckBtn').click();
      cy.wait(5);
      cy.get('#time').should('not.be.empty');
    });
  });

  describe('should clear date/time after 5 seconds', () => {
    it('clears date/time', () => {
      cy.get('#timeCheckBtn').then(btn => {
        cy.log(btn); 
      })
      cy.wait(5000);
      cy.get('#time').should('be.empty');
    });
  });