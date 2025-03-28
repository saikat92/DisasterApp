from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import os

app = Flask(__name__)

# Load the trained model
model_path = os.path.join(os.path.dirname(__file__), "model/disaster_model.h5")
model = tf.keras.models.load_model(model_path)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json["features"]  # Get input features
        prediction = model.predict(np.array([data]))  # Make prediction
        return jsonify({"disaster_probability": float(prediction[0, 0])})  # Send response
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Handle errors

if __name__ == "__main__":
    app.run(port=5001, debug=True)  # Run Flask API
