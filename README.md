# lightning-popcorn-tv
Get your popcorn and movies lightning fast

## Getting Started

**Note:** You need docker to run this app (currently only works locally)

To get the app running run 

```bash
  yarn up
```

This should take ~3 min. Once the containers are complete the TV app should be available at http://localhost:8080/

### While playing movies
There is very little error handling and no loading states. Movies may take up to 60 seconds to play initially. Sometimes backing in and out othe player helps if stuck for too long.
