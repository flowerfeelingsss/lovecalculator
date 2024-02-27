const randomNumber = Math.floor(Math.random() * 101)

const loveCalculator = () => {
  const calculateLoveScore = () => {
    if (randomNumber < 10) {
      return "Oopsie daisy! Looks like our love-o-meter needs a bit more 90s magic to spark that connection. Don't worry, we'll get those butterflies fluttering next time! Keep the faith, and stay groovy!"
    } else if (randomNumber < 30) {
      return "Whoa, talk about a blast from the past! Our love vibes might need a little TLC to hit the high notes. But hey, don't sweat it! There's still plenty of time for us to dial up the romance and make it totally rad. Keep the dream alive, lovebird!"
    } else if (randomNumber < 50) {
      return "Whoa, looks like our love mixtape needs a remix! Don't stress though, Romeo or Juliet. We might not be hitting the top of the charts just yet, but with a little TLC, we'll be jamming together in no time. Keep the faith, lovebug, and let's crank up the romance!"
    } else if (randomNumber < 70) {
      return "Oh snap! Our love vibes are still in the early stages of dial-up. But fear not, heartbreaker! We're on the brink of something totally tubular. Let's fine-tune our connection and turn this love story into a rollercoaster of feels. Keep the faith, and let the sparks fly, my sweet 90s soulmate!"
    } else if (randomNumber < 90) {
      return "Well, paint me neon and call me dreamy! We've got some room to grow, but don't you worry, my starry-eyed pal. Our love journey is like a classic sitcom with lots of quirky episodes. Let's keep the good vibes rolling, and watch as our love story unfolds into a blockbuster hit. You're the bomb, and our love train is just getting started!"
    } else
      return "Whoa, baby! Cue the confetti and break out the glow sticks because we've hit love jackpot! Our connection is hotter than a fresh cup of Surge in '96. You're the real MVP, and our love story is straight out of a boy band ballad. Get ready to ride the wave of romance, superstar – we're crushing it!"
  }
}

var loveButton = document.querySelector("button")

const displayLoveScore = () => {
  document.querySelector("#score").innerHTML = `${randomNumber}%`
}

loveButton.addEventListener("click", displayLoveScore)

// #love-score is what we want to show
