# Portfolio — E2E Tests (Cypress + JavaScript)

End-to-end tests for the React (CRA) single-page portfolio.

## Coverage
- **navigation.cy.js** — navbar links and react-scroll section navigation.
- **content.cy.js** — hero, skills, projects and external profile links.
- **responsive.cy.js** — layout integrity across mobile/tablet/desktop viewports.

Custom commands live in `support/commands.js` (`navigateTo`, `sectionVisible`).

## Running
```bash
npm install

# interactive runner against the dev server:
npm start          # terminal 1 → http://localhost:3000
npm run cy:open    # terminal 2

# headless, one command (boots the server, runs specs, shuts down):
npm run e2e
```

Target a deployed build instead:
```bash
CYPRESS_BASE_URL=https://khursand.dev npm run cy:run
```
