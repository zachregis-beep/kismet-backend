// api/profiles.js
// KISMET backend with 100 simulated users

let profiles = [];

// Generate 100 random users
for (let i = 1; i <= 100; i++) {
  profiles.push({
    name: "User" + i,
    openness: Math.floor(Math.random() * 101),
    conscientiousness: Math.floor(Math.random() * 101),
    extraversion: Math.floor(Math.random() * 101),
    agreeableness: Math.floor(Math.random() * 101),
    stability: Math.floor(Math.random() * 101)
  });
}

export default function handler(req, res) {
  if (req.method === "GET") {
    // Return all simulated users
    res.status(200).json(profiles);
  }
  if (req.method === "POST") {
    // Add a real user if someone fills survey
    const newProfile = req.body;
    profiles.push(newProfile);
    res.status(200).json({ success: true, totalUsers: profiles.length });
  }
}
