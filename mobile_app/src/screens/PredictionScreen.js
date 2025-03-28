import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { predictDisaster } from "../services/api";

export default function PredictionScreen() {
    const [features, setFeatures] = useState("");
    const [result, setResult] = useState(null);

    const handlePredict = async () => {
        const formattedFeatures = JSON.parse(features);
        const data = await predictDisaster(formattedFeatures);
        setResult(data.disaster_probability);
    };

    return (
        <View>
            <Text>Enter Features (e.g., [1.2, 3.4, 5.6])</Text>
            <TextInput value={features} onChangeText={setFeatures} />
            <Button title="Predict" onPress={handlePredict} />
            {result !== null && <Text>Prediction: {result.toFixed(2)}</Text>}
        </View>
    );
}
