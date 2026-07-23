# CSW430 - Mobile Programming Labs

Repository for the **CSW430 Mobile Programming** course assignments.

The repository contains three lab folders covering Git/GitHub, React Native project setup, API development, interface exercises, product management screens, and Android build output.

## Repository structure

```text
CSW430/
├── Lab1/
├── Lab2/
├── Lab3/
├── .gitignore
└── README.md
```

## Lab overview

### Lab 1 - React Native fundamentals

Topics covered:

- GitHub repository setup and source control workflow
- Expo CLI and React Native CLI environment setup
- Creating and running React Native applications
- Components, props, and state
- Building Android APK and AAB files
- Small exercises using forms and calculations

### Lab 2 - APIs and React Native exercises

Topics covered:

- ASP.NET MVC Web API
- Node.js API
- Login screen interface
- Personal income tax calculator
- Calculator application

The exercises in Lab 2 are organized as separate projects where appropriate.

### Lab 3 - Product management application

Lab 3 is a React Native application containing the following screens:

- **Product List** - displays products using `FlatList`
- **Add Product** - creates a new product through the API
- **Search Products** - searches and displays matching products
- **Product Detail** - retrieves and displays one product
- **Bottom Navigation** - connects the four screens using React Native Paper

Main Lab 3 structure:

```text
Lab3/
├── App.tsx
├── Products/
│   ├── Products.js
│   ├── Product_Add.js
│   ├── Product_Search.js
│   └── Product_Detail.js
├── android/
├── ios/
├── package.json
└── README.md
```

## Technologies

- React Native CLI
- React Native Paper
- React Native Safe Area Context
- JavaScript / TypeScript
- Node.js
- ASP.NET Web API
- Android Studio and Android Emulator
- Git and GitHub

## Run Lab 3

### Requirements

Install the following before running the project:

- Node.js
- JDK
- Android Studio
- Android SDK
- An Android emulator or physical Android device

### Install dependencies

```bash
cd Lab3
npm install
```

### Start Metro

Open the first terminal in the `Lab3` directory:

```bash
npm start
```

Keep this terminal running.

### Run Android

Open a second terminal in the same `Lab3` directory:

```bash
adb reverse tcp:8081 tcp:8081
npm run android
```

If another React Native project is already using Metro port `8081`, stop its Node process before starting Lab 3.

On Windows:

```bash
taskkill /F /IM node.exe
```

Then restart Metro from the `Lab3` folder:

```bash
npm start -- --reset-cache
```

## Git notes

Generated dependencies and build artifacts are intentionally excluded from version control, including:

- `node_modules/`
- Android Gradle cache
- Android `build/` directories
- APK build output
- iOS Pods and build output
- Environment files
- IDE-specific files

Do not commit files inside paths such as:

```text
Lab3/android/app/build/
Lab3/android/build/
Lab3/node_modules/
```

If build artifacts were accidentally staged, remove them from the Git index without deleting local files:

```bash
git rm -r --cached --ignore-unmatch Lab3/android/app/build
git rm -r --cached --ignore-unmatch Lab3/android/build
git rm -r --cached --ignore-unmatch Lab3/android/.gradle
git rm -r --cached --ignore-unmatch Lab3/node_modules
```

Then commit and push again:

```bash
git add .
git commit -m "Clean generated files and update documentation"
git push
```

## Author

**Binhhere**

Course repository: `CSW430`
