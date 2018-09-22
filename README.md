# Mars Mining Drone v 0.1
This was a really fun asignment and I will be continuing to work on this little drone outside of the competition to polish it up and add the features that I didn't have time for. I am very excited to get some feedback on this little drone and to see what everyone else came up with! 


## My Thoughts 
This was my first competition like this, and I didn't know what to expect going in. The documentation was excellent and having the ability to I unfortunately did not get nearly as far as I would have liked. I think spent far too much time trying to figure out the best way to go about making the API calls and how the dynamics of the mining systems should work and the order/constraints that a true mining system would have.

## Choices, Choices 
I wanted to be able to have it working flawlessly and look amazing. I realized with only 20 minutes left that I wouldn't have time to finish it, but I could at least make it look great. So I made the choice to focus on clean comments and separating the code as far as I could while making it easy to read and to improve on later. I really wanted to make sure that anyone could pick up the codebase and jump right in where I left off in order to make this little drone get up and running perfectly.

I wanted to make it so that you could only have one claimed node at a time, and that really got me stuck. It would flow so that you move => search => claim => mine => release => move => etc. but I ran out of time.

## Timing Is Everything
If I had more time, first I would finish the main functionality and make sure that not only can it fully mine, but it can do it efficiently. I also wanted to be able to add a prompt so that the callsign can be set by the user at start up. I feel like there could be other configurable things that could be added at set up, like how fast your drone can run, what it's mining capacities could be (i.g. how much can it hold in one trip), battery life per trip and so much more. 

I would have broken things up into more reuseable chunks, I have a lot of repetitiveness and it not ideal and defintely not DRY code. 

There is very minimal error handling (not even bare minimum that I would like), and absolutely no testing. If I had a little bit more time I would have added all of that in.

## Dependencies
The only dependency that I brought in was axios in order to make asynchronous API calls a breeze. It is set up to run on the environment variables set up in the `start.sh` file. 

## Getting The Drone Up and Running
All you have to do is run `npm start` and it will run the required shell scripts and get the little guy running with the right environment variables if they are not already set up.

## Alls Well that Ends Well
I appreciate the opportunity to build this project and to work on this. It was very fun and immersive. The video introduction really made it all come together and was a great way to spend 4 hours honing my skills and getting to have fun while doing it. Thank you all for everything, and I can't wait for the feedback on this drone! 