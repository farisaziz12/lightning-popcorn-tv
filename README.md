# lightning-popcorn-tv
Get your popcorn and movies lightning fast

## Getting Started

**Note:** You need docker to run this app (currently only works locally)

To get the app running run 

```bash
  yarn up
```
or 
```bash
# first terminal
yarn start:server

# second terminal
yarn start:client
```

This should take ~3 min. Once the containers are complete the TV app should be available at http://localhost:8080/

### While playing movies
There is very little error handling and no loading states. Movies may take up to 60 seconds to play initially. Sometimes backing out and into player helps if stuck for too long.


## Running on Amazon Fire TV

Currently, the only way to get this app running on Amazon Fire TV is to:
1. Download the [HTML Web App Tester](https://www.amazon.com/Amazon-Digital-Services-Inc-Tester/dp/B00DZ3I1W8) on the Amazon Fire TV Store
2. Open 2 terminal instances that have the root of this project open.
3. In the first instance run `yarn start:server`
4. In the second instance run `yarn start:client`. 
 
These scripts will bind the server to your IP address and pass the base url environment variable to the client for server requests. When the client runs a `:8080` port will be written in the console that is bound to your IP address. You can use this url to see the client application on an Amazon Fire TV that usese the same network or alterntively use a tool like [ngrok](https://ngrok.com/) to forward that port to a secure URL
