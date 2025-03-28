exports.getDisasterData = (req, res) => {
    res.json({ message: "Disaster data retrieved successfully!" });
};

exports.predictDisaster = (req, res) => {
    const { features } = req.body;
    res.json({ disaster_probability: Math.random() }); // Replace with AI model prediction
};
exports.getDisasterData = (req, res) => {
    res.json({ message: "Disaster data retrieved successfully!" });
};

exports.predictDisaster = (req, res) => {
    const { features } = req.body;
    // Example response, replace with actual ML model call
    res.json({ disaster_probability: Math.random() });
};
