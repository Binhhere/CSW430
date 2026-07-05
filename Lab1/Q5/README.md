# 📤 Q5 — Publishing (Build AAB & APK)

Sign and build the **Q4ReacNative** application into release files: **AAB** (for submission to Google Play) and **APK** (for direct installation on devices).

---

## 🎯 Objectives

- Understand the Android app signing process using keystore
- Build release AAB and APK files from a React Native CLI project
- Learn the differences between debug and release files

---

## 🔑 Step 1 — Create Keystore

Run PowerShell **with Administrator privileges**, from the directory containing `keytool` (usually at `C:\Program Files\Java\jdkx.x.x_x\bin`):

```powershell
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

The generated `my-upload-key.keystore` file should be placed in:
```
Q4ReacNative/android/app/
```

---

## ⚙️ Step 2 — Configure Gradle

Add to the `android/gradle.properties` file:

```properties
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

And configure `signingConfigs` in `android/app/build.gradle`:

```gradle
android {
  ...
  signingConfigs {
    release {
      if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
        storeFile file(MYAPP_UPLOAD_STORE_FILE)
        storePassword MYAPP_UPLOAD_STORE_PASSWORD
        keyAlias MYAPP_UPLOAD_KEY_ALIAS
        keyPassword MYAPP_UPLOAD_KEY_PASSWORD
      }
    }
  }
  buildTypes {
    release {
      ...
      signingConfig signingConfigs.release
    }
  }
}
```

---

## 🏗️ Step 3 — Build Release Files

### Build AAB (for Google Play submission)

```bash
npx react-native build-android --mode=release
```

📁 Output: `android/app/build/outputs/bundle/release/`

### Build APK (for direct installation)

```bash
./gradlew assembleRelease
```

📁 Output: `android/app/build/outputs/apk/release/`

---

## 📁 Results in This Directory

```
Q5/
├── app-release.aab
└── app-release.apk
```

> Copy the 2 files above from the `outputs/` directory of your project into this folder after building is complete.
