# BITB

Browser In The Browser (BITB) attack is a sophisticated phishing and hard to detect.

Goto:

👉 [MacOS-Chrome-DarkMode](./MacOS-Chrome-DarkMode)

👉 [MacOS-Chrome-LightMode](./MacOS-Chrome-LightMode)

👉 [Windows-Chrome-DarkMode](./Windows-Chrome-DarkMode)

👉 [Windows-Chrome-LightMode](./Windows-Chrome-LightMode)

# Usage

Each folder has a `script.js` file, the beginning of the file has some parameters you can change:

- `loadTITLE` - The title display when loading (e.g. Sign in)
- `TITLE` - The title that shows up for the page (e.g. Sign in to your account now)
- `loadDOMAINNAME` - Domain name when loading (default "")
- `DOMAINNAME` - Domain name you're masquerading. (e.g. "https://accounts.google.com/")
- `DOMAINNAMEVERIFY` - Domain name appears in ssl check (e.g. "accounts.google.com")
- `loadDOMAINPATH` - Domain path when loading (default "about:blank")
- `DOMAINPATH` - Domain path (e.g. "/auth/google/login")
- `PHISHINGLINK` - Phishing link which will be embedded into the iFrame (e.g. "https://example.com")
- `loadLOGO` - Path to the icon of the website when loading (default "../loading.gif")
- `LOGO` - Path to the icon of the website you're masquerading (default "../google.svg")
- `loadTIME` - Loading time in milisec (it should be set 0.5-2s to make it more realistic)

# Demo

![Demo](/demo.gif)

# To Do list

- [x] customize domain and phishing link
- [ ] maximize mode that will turn into full screen
- [ ] function for minimize button
- [x] ssl check
- [ ] ssl certificate check
- [ ] appearance effect more realistic
- [ ] detect user color preference
- [ ] other web platforms
- [ ] more languages
- [ ] error page if cant load
- [ ] responsive
- [ ] fix some css, animation,...

If you can, feel free to contribute, thanks!

Moreover, you can also contribute ideas to To Do list

> Bonus: you can also contribute more to my [fake google login demo](https://github.com/lucthienphong1120/google-login) repo!

# Detecting Color Preference

To get the most out of this you should determine the OS from the user agent and the color preference and display the appropriate template.

To find out if you should use dark or light templates check out: https://stackoverflow.com/questions/50840168/how-to-detect-if-the-os-is-in-dark-mode-in-browsers

# Detecting BITB

## Dragging the Window

One way of detecting BITB is by attempting to drag the window to the edge of the browser. If the window cannot escape the browser then it's not a real window. 

## Browser Extension

@odacavo released a great browser extension that can detect and warn users about embedded iframes. It's available here: https://github.com/odacavo/enhanced-iframe-protection

All credits go to @odacavo.

# Disclaimer

Usage of these templates for attacking targets without prior consent is illegal. It's the end user's responsibility to obey all applicable laws. The developer is not responsible for any misuse of these templates.

