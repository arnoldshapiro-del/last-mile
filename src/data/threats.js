// 10 phrasings of "today's enemy is YOU at +X" — variations on the give-back pattern.
export const threats = [
  "You've ended too many green sessions in red because you didn't stop. Today's enemy is YOU at +$200, feeling invincible.",
  "When you hit your target, this app will lock for 60 minutes. Trust the lock.",
  "The brain that got you to +$300 is not the brain that should decide whether to take a 6th trade. That brain is on dopamine.",
  "Five and a half years of evidence: you do not give back peak P&L because of bad reads. You give it back because you keep clicking. Stop clicking.",
  "Pattern recognition is not your problem. Pattern restraint is. Today, restraint wins.",
  "Every overstayed session has felt like 'this one's different.' None of them have been different.",
  "If you walk away at +$300, you bank the win. If you stay for the 6th trade, you become a statistic in your own data.",
  "The casino doesn't close. You close. That's the difference between a pro and everyone else.",
  "Your edge is the first 3 trades. After that, you're trading exhaustion against fresh opponents. They win.",
  "You will never regret stopping at your target. You have, dozens of times, regretted not stopping."
];

export function pickThreat() {
  return threats[Math.floor(Math.random() * threats.length)];
}
