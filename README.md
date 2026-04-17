# eRaya

Core development project for learning platform of eRaya based on SvelteKit and Vite.

## Pre-requisites
- Bun 1.3.x and above
- Node 18.x.x and above
- Git (Version control)
- Playwright (E2E testing)
- Jest (Unit Testing)
- Cordova 9.x.x or 13.x.x the better (For shipping app to multiple devices)
- Android Studio
- Java Runtime Environment

## Setup & Installation
1. **Cloning a repository**
```bash
git clone https://github.com/y23d17/eraya.git
```

2. **Change directory to eRaya**
```
cd eraya
```

3. **Install using Bun or NPM**

For Bun:
```
bun install
```
For Node
```
npm install
```
4. **Build using Vite for production**

For Bun:
```
bun run build
```
For Node
```
npm run build
```

5. **Change to build directory to ship everything**
```
cd build
```

6. **Install everyting inside build**

For Bun:
```
bun install
```
Fore Node:
```
npm install
```

7. **Add Cordova platform for Android, iOS, browser and Electron**
```
cordova platform add android ios browser electron
```

8. **Ship everything**
```
cordova build android
```

```
cordova build ios
```

```
cordova build electron
```


## Features
- Interactive Lessons
- Fun Games
- Exciting Libraries

## Credits
- Andrei Isaiah Macabanti (Project Manager)
- Joebelle James Praba (UI/UX designer)
- Ma. Erica Manzan (QA & System Analyst)
- Pia Bianca Tuna (QA & Tester)
- Marc Joseff Umiten (Developer)

## Trademark notice
_**QBOT** (The Quintets, BEAAM/BAYAE, The O-Team, The Core Dump) is the name of capstone group and capstone outfit for Qubonic Arts & Software, AYCQ._

_The golden **E** with red emblem and brown ring is trademark of QBOT-DTE/24 & Qubonic Arts & Software, AYCQ._

_@2024-2026 **eRaya**. Developed by QBOT-DTE/24 under the trademark of Qubonic Arts & Software, AYCQ._
