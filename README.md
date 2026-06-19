# Stichting Doeget Saome Website

Een statische onepager voor Stichting Doeget Saome, gebouwd met Vite en React.

Benodigd: Node.js `20.19+` of `22.12+`.

## Lokaal draaien

```bash
cd doeget-saome-website
npm install
npm run dev
```

Open daarna de lokale URL die Vite toont, meestal `http://localhost:5173`.

Op Windows PowerShell kan `npm` soms geblokkeerd worden door de lokale script-instellingen. Gebruik dan dezelfde commando's met `npm.cmd`, bijvoorbeeld `npm.cmd install` en `npm.cmd run dev`, of open een gewone Command Prompt.

## Teksten aanpassen

Alle website-teksten staan bovenin `src/App.jsx` in het object `siteContent`. Pas daar titels, kaarten, contactgegevens, links en placeholders aan.

Het logo staat in `public/logo-doeget-saome.png`. Als je het logo vervangt, gebruik dan dezelfde bestandsnaam zodat de website automatisch blijft werken.

## Social media embeds

In `src/App.jsx` staan bij de socialmediakaarten duidelijke comments waar later de embed-codes geplaatst kunnen worden:

- YouTube iframe
- Instagram embed-code
- Facebook embed-code

## Build maken

```bash
npm run build
```

De productieversie komt in de map `dist`.

## Deployen via Vercel

1. Zet het project in een Git-repository.
2. Importeer de repository in Vercel.
3. Kies Vite als framework preset.
4. Gebruik `npm run build` als build command.
5. Gebruik `dist` als output directory.

## Deployen via Netlify

1. Zet het project in een Git-repository.
2. Maak in Netlify een nieuwe site vanuit die repository.
3. Gebruik `npm run build` als build command.
4. Gebruik `dist` als publish directory.

Er is geen backend, database of betaalde afhankelijkheid nodig.
