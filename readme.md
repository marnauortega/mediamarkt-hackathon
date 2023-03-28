![Crossplatfrom App](/packages/app/assets/images/screenshot2.png)

# Mediamarkt Hackathon - CarrierX App 🚚

Crossplatform App (iOS + Android + Next.js) to track parcel deliveries 📦
as part of NUWE's Mediamarkt Hackathon Let's Go

## [Live site](https://mediamarkt-hackathon.vercel.app/)

What I've used to build this app that works everywhere are some outstanding recent tools like Solito and Expo Router. What are these?

[Solito](https://solito.dev/) allows you to code your app screens using custom components and navigation that will work both on Android, iOS and Next.js. [Expo router](https://expo.github.io/router/docs/) allows to build a folder-based navigation which is a delight.

## ⚡️ Features

- Redesigned screens to make the app more accesible and fun to use. More icons and visual content. Here's the [figma file](<https://www.figma.com/file/sYGGCKogACWSEjsxyVibfQ/CarrierX-(Copy)?node-id=0%3A1&t=jzqBwjVJRb48PArO-1>)

- Monthly view of available parcels with navigation to daily overview and parcel contents.

- New parcels can be added by typing an ID and a carrier manually.

- Complete input validation with regular expressions and data crosschecking, with meaningful error messages.

- Parcels can be handed over to a driver by typing their name and license plate

- Parcels can be scanned with a camera to get their IDs immediately thanks to `expo-barcode-scanner`

- Most importantly, the same code allows to run both a webApp and a native iOS & Android app. This is great for maintainability and faster iterations.

## 🗂 Folder layout

This is a monorepo that holds the Expo app and the Next.js site.
Inside `apps` there's:

- The `expo` app and the `next` with their folder based navigations.
- In `packages` there's all the shared packages across apps. `app` is the most important folder, containing:
  - `features` - all the screen folders
  - `components` - its building blocks -`assets` - images and typography
  - `provider` - all the providers that wrap the app

## 🏁 Start the app

To start the app and run it on a simulator, these are the steps that should be followed:

1. The first time, we have to navigate to `apps/expo` and run `npx expo run:ios` or `npx expo run:android` to start running for native

2. Then we can navigate to the root of the project and simply run `yarn native` to run on android or ios and `yarn web`to run the web app.
