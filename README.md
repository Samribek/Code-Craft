/*
  samrawit Bekele
  Animation Added: Enhanced realistic falling leaves with varied wind effects and gentle rotation.
*/
@keyframes animate {
  0% {
    opacity: 0;
    top: -10%;
    transform: translateX(0px) rotate(0deg); /* Start slightly off-screen, no initial horizontal shift */
  }
  10% {
    opacity: 1; /* Become fully visible early */
  }
  20% {
    transform: translateX(30px) rotate(90deg); /* Initial push by wind, more rotation */
  }
  40% {
    transform: translateX(-40px) rotate(180deg); /* Change direction, continue rotation */
  }
  60% {
    transform: translateX(20px) rotate(270deg); /* Another directional change, continued rotation */
  }
  80% {
    opacity: 0.8; /* Slight fade before disappearing */
    transform: translateX(-30px) rotate(360deg); /* Final sway, full rotation */
  }
  100% {
    opacity: 0; /* Fully disappear */
    top: 110%; /* Move completely off-screen */
    transform: translateX(0px) rotate(450deg); /* Ensure it ends off-screen with continued rotation */
  }
}

/* You might want to adjust the individual leaf animations slightly for more variety */
.leaves .set div:nth-child(1) {
  left: 20%;
  animation: animate 22s linear infinite; /* Slightly longer duration */
}

.leaves .set div:nth-child(2) {
  left: 50%;
  animation: animate 16s linear infinite; /* Varied duration */
}

.leaves .set div:nth-child(3) {
  left: 70%;
  animation: animate 18s linear infinite; /* Varied duration */
}

.leaves .set div:nth-child(4) {
  left: 5%;
  animation: animate 17s linear infinite; /* Varied duration */
}

.leaves .set div:nth-child(5) {
  left: 85%;
  animation: animate 20s linear infinite; /* Varied duration */
}

.leaves .set div:nth-child(6) {
  left: 90%;
  animation: animate 15s linear infinite; /* Varied duration */
}

.leaves .set div:nth-child(7) {
  left: 15%;
  animation: animate 19s linear infinite; /* Varied duration */
}

.leaves .set div:nth-child(8) {
  left: 60%;
  animation: animate 21s linear infinite; /* Varied duration */
}