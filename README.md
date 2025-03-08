# Studio Ghibli Mobile App

Weekend hackathon to experience expo-router features.

## Get started

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Project Structure

Expo Router enables **file-based** routing where routes are determined by directory and file location and names. Stacks, screens, tabs, drawers, etc start in the `app/` directory
and are defined in local `_layout.(tsx|jsx)` files. Tabs are defined in local `(tabs)` directories. Here is an example:

```txt
app/
   _layout.tsx // root stack defined
   index.tsx // root screen
   about.tsx // about screen in root stack
   cars/
      _layout.tsx
      (tabs)/
         make.tsx
         add.tsx
         settings.tsx
```

All other non-screen files are defined _outside_ of the `app/` directory in their appropriate folders.

```txt
features/ -> components, organized by their domain (i.e. book, author etc)
common/   -> reusable components, hooks, utils, etc
assets/   -> fonts, images, etc
```

## Sample Data

This project will utilize the [Studio Ghibli API](https://ghibliapi.vercel.app/) for sample data. No API key is required.

Data includes:

- films
- people
- locations
- species
- vehicles

## Learn more

To learn more, look at the following resources:

- [Expo documentation](https://docs.expo.dev/)
- [React Native documentation](https://reactnative.dev/)
- [React Navigation documentation](https://reactnavigation.org/)
- [Expo Router documentation](https://docs.expo.dev/router/introduction/)
