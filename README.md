# FrontStageProject Music Store App README

Hey there! I'm thrilled to introduce you to FrontStageProyect, my solo venture into the world of E-Commerce apps for educational purposes, specifically emulating a music store using React Native. Let's get you set up!

## Installation

Follow these steps:

1. Clone the repository to your machine:

   ```bash
   git clone https://github.com/your-username/FrontStageProyect.git
   ```

2. Navigate to the project directory:

   ```bash
   cd FrontStageProyect
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

## Expo Go Emulation

I've opted for Expo Go for easy emulation. Make sure you have Expo Go installed on your mobile device. Download the APK [here](https://expo.dev/artifacts/eas/mgdTgZ6hG8eU9nMpj4A9CT.apk).

Now, launch the app with:

```bash
expo start
```

Scan the QR code with Expo Go on your mobile device to explore FrontStageProyect.

## Firebase Integration

I've utilized Firebase for backend services. To integrate your Firebase project:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Grab your Firebase configuration.
3. Replace the Firebase configuration in the `firebase.js` file with your own.

```javascript
// src/firebase.js

export const baseUrl = "YOUR_BASE_UEL"
export const apiKey =  "YOUR_API_KEY"
export const authUrl= "YOUR_AUTH_URL"
export const googleApi = {
    mapStatic: "YOUR_GOOGLE_API"
}

```

## SQLite Integration

I've incorporated SQLite for local data storage. No additional setup needed.

## Disclaimer

Please note that the images used in this app are not owned by the developer and are solely for educational purposes

## Contributing

Excited to contribute to FrontStageProyect? Fantastic! Create a pull request with your enhancements or bug fixes.

Happy coding! 🚀
