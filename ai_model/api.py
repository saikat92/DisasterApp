# from flask import Flask, request, jsonify
# import tensorflow as tf
# import numpy as np
# import os

# app = Flask(__name__)

# # Load the trained model
# model_path = os.path.join(os.path.dirname(__file__), "model/disaster_model.h5")
# model = tf.keras.models.load_model(model_path)

# @app.route("/predict", methods=["POST"])
# def predict():
#     try:
#         data = request.json["features"]  # Get input features
#         prediction = model.predict(np.array([data]))  # Make prediction
#         return jsonify({"disaster_probability": float(prediction[0, 0])})  # Send response
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500  # Handle errors

# if __name__ == "__main__":
#     app.run(port=5001, debug=True)  # Run Flask API

from flask import Flask, request, jsonify
import tensorflow as tf

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Disaster Prediction API"

@app.route('/predict', methods=['POST'])  # Ensure it's POST, not GET
def predict():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data"}), 400
    
    # Example: Load and use your TensorFlow model here
    # prediction = model.predict(data)

    return jsonify({"message": "Prediction successful"})  # Replace with real output

if __name__ == '__main__':
    app.run(port=5001, debug=True)
