# BITB

Browser In The Browser (BITB) attack is a sophisticated phishing and hard to detect.

# Usage

Each folder has a `script.js` file in line 1-10 have some parameters you can change:

`loadTITLE` - The title display when loading (e.g. Sign in)
`TITLE` - The title that shows up for the page (e.g. Sign in to your account now)
`loadDOMAINNAME` - Domain name when loading (default "")
`DOMAINNAME` - Domain name you're masquerading. (e.g. gmail.com)
`loadDOMAINPATH` - Domain path when loading (default "about:blank")
`DOMAINPATH` - Domain path (e.g. /auth/google/login)
`PHISHINGLINK` - Phishing link which will be embedded into the iFrame (e.g. https://example.com)
`loadLOGO` - Path to the icon of the website when loading (default "../loading.gif")
`LOGO` - Path to the icon of the website you're masquerading (default "../google.svg")
`loadTIME` - Loading time in milisec (it should be set 0.5-2s to make it more realistic)

# Demo

![Demo](/demo.gif)

# To do

I want to do:

- maximize mode that will turn into full screen
- function enable ssl check
- appearance effect more realistic
- detect user color preference
- fix some css, ...

if you can, feel free to contribute, thanks!

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
